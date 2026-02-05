console.log("MYSQLHOST:", process.env.MYSQLHOST);
console.log("MYSQLUSER:", process.env.MYSQLUSER);
console.log("MYSQLDATABASE:", process.env.MYSQLDATABASE);
console.log("MYSQLPORT:", process.env.MYSQLPORT);

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
  waitForConnections: true,
  connectionLimit: 10
});


// ================= PRODUCTOS =================

app.get('/api/productos', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT id, titulo AS nombre, precio,
             imagen_url AS imagen,
             categoria, stock,
             descripcion, modelo_3d_url
      FROM productos
      WHERE activo = 1
    `);

    res.json(rows);

  } catch (e) {
    console.error(e);
    res.status(500).json({ error:'Error en la base de datos'});
  }
});


app.get('/api/productos/:id', async (req,res)=>{
  try{
    const [rows] = await db.query(`
      SELECT id, titulo AS nombre, precio,
             imagen_url AS imagen,
             categoria, stock,
             descripcion, modelo_3d_url
      FROM productos
      WHERE id=? AND activo=1
    `,[req.params.id]);

    if(!rows.length)
      return res.status(404).json({error:'Producto no encontrado'});

    res.json(rows[0]);

  }catch(e){
    console.error(e);
    res.status(500).json({error:'Error en la base de datos'});
  }
});


// ================= CARRITO =================

app.get('/api/carrito', async (req,res)=>{
  try{
    const [rows] = await db.query(`
      SELECT ci.id,
             ci.producto_id,
             ci.cantidad,
             ci.precio_unit,
             p.titulo AS nombre,
             p.descripcion,
             p.categoria,
             p.imagen_url AS imagen,
             p.stock
      FROM carrito_items ci
      JOIN productos p ON p.id = ci.producto_id
      WHERE ci.session_id=? AND p.activo=1
    `,[req.query.session_id]);

    res.json(rows);

  }catch(e){
    console.error(e);
    res.status(500).json({error:'Error BD'});
  }
});


app.post('/api/carrito/agregar', async (req,res)=>{
  try{
    const {session_id,producto_id,cantidad} = req.body;

    const [prod] = await db.query(
      `SELECT precio FROM productos WHERE id=? AND activo=1`,
      [producto_id]
    );

    if(!prod.length)
      return res.status(404).json({error:'Producto no encontrado'});

    const [cart] = await db.query(
      `SELECT id,cantidad FROM carrito_items WHERE session_id=? AND producto_id=?`,
      [session_id,producto_id]
    );

    if(cart.length){
      await db.query(
        `UPDATE carrito_items
         SET cantidad=?, updated_at=NOW()
         WHERE id=?`,
        [cart[0].cantidad+cantidad, cart[0].id]
      );
    }else{
      await db.query(
        `INSERT INTO carrito_items
        (session_id,producto_id,cantidad,precio_unit)
        VALUES (?,?,?,?)`,
        [session_id,producto_id,cantidad,prod[0].precio]
      );
    }

    res.json({success:true});

  }catch(e){
    console.error(e);
    res.status(500).json({error:'Error carrito'});
  }
});


app.put('/api/carrito/actualizar/:id', async (req,res)=>{
  try{
    const {session_id,cantidad}=req.body;

    const [r]=await db.query(`
      UPDATE carrito_items
      SET cantidad=?, updated_at=NOW()
      WHERE id=? AND session_id=?
    `,[cantidad,req.params.id,session_id]);

    if(!r.affectedRows)
      return res.status(404).json({error:'No encontrado'});

    res.json({success:true});

  }catch(e){
    console.error(e);
    res.status(500).json({error:'Error BD'});
  }
});


app.delete('/api/carrito/eliminar/:id', async (req,res)=>{
  try{
    const {session_id}=req.body;

    const [r]=await db.query(
      `DELETE FROM carrito_items WHERE id=? AND session_id=?`,
      [req.params.id,session_id]
    );

    if(!r.affectedRows)
      return res.status(404).json({error:'No encontrado'});

    res.json({success:true});

  }catch(e){
    console.error(e);
    res.status(500).json({error:'Error BD'});
  }
});


app.delete('/api/carrito/limpiar', async (req,res)=>{
  try{
    const {session_id}=req.body;

    const [r]=await db.query(
      `DELETE FROM carrito_items WHERE session_id=?`,
      [session_id]
    );

    res.json({success:true, itemsEliminados:r.affectedRows});

  }catch(e){
    console.error(e);
    res.status(500).json({error:'Error BD'});
  }
});


// ================= PEDIDOS =================

app.post('/api/ordenes', async (req,res)=>{
  const conn = await db.getConnection();

  try{
    const {
      session_id,nombre,email,telefono,direccion,
      ciudad,notas,items,subtotal,impuestos,total
    } = req.body;

    await conn.beginTransaction();

    const codigo='PED'+Math.random().toString(36).slice(2,8).toUpperCase();

    const [pedido]=await conn.query(`
      INSERT INTO pedidos
      (session_id,codigo,nombre,email,telefono,direccion,
       ciudad,notas,subtotal,impuestos,total)
      VALUES (?,?,?,?,?,?,?,?,?,?,?)
    `,[session_id,codigo,nombre,email,telefono,
       direccion,ciudad,notas,subtotal,impuestos,total]);

    for(const item of items){

      await conn.query(`
        INSERT INTO pedido_items
        (pedido_id,producto_id,titulo,titulo_snapshot,
         precio_unit,cantidad,subtotal)
        VALUES (?,?,?,?,?,?,?)
      `,[pedido.insertId,item.producto_id,item.nombre,
        item.nombre,item.precio_unit,item.cantidad,
        item.precio_unit*item.cantidad]);

      await conn.query(
        `UPDATE productos SET stock=stock-? WHERE id=?`,
        [item.cantidad,item.producto_id]
      );

      await conn.query(`
        INSERT INTO inventario_movimientos
        (producto_id,tipo,cantidad,referencia,notas)
        VALUES (?,'salida',?,?,?)
      `,[item.producto_id,-item.cantidad,codigo,
        `Venta ${codigo}`]);
    }

    await conn.query(
      `DELETE FROM carrito_items WHERE session_id=?`,
      [session_id]
    );

    await conn.commit();

    res.json({success:true,codigo});

  }catch(e){
    await conn.rollback();
    console.error(e);
    res.status(500).json({error:'Error creando pedido'});
  }finally{
    conn.release();
  }
});


// ================= ROOT =================

app.get('/', (req,res)=>{
  res.json({message:'Servidor funcionando'});
});


app.listen(PORT,()=>{
  console.log(`✅ Backend en http://localhost:${PORT}`);
});