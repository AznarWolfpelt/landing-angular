const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'usuariosdb'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la BD:', err);
    return;
  }
  console.log('✅ Conectado a la base de datos MySQL');
});

// GET productos
app.get('/api/productos', (req, res) => {
  connection.query(`
    SELECT id, titulo as nombre, precio, imagen_url as imagen, categoria, stock, descripcion
    FROM productos 
    WHERE activo = 1
  `, (error, results) => {
    if (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    res.json(results);
  });
});

// GET producto individual
app.get('/api/productos/:id', (req, res) => {
  const productId = req.params.id;
  connection.query(`
    SELECT id, titulo as nombre, precio, imagen_url as imagen, categoria, stock, descripcion
    FROM productos 
    WHERE id = ? AND activo = 1
  `, [productId], (error, results) => {
    if (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(results[0]);
  });
});

// GET carrito - USA TU TABLA carrito_items
app.get('/api/carrito', (req, res) => {
  const sessionId = req.query.session_id;
  
  connection.query(`
    SELECT 
      ci.id,
      ci.producto_id,
      ci.cantidad,
      ci.precio_unit,
      p.titulo as nombre,
      p.descripcion,
      p.categoria,
      p.imagen_url as imagen,
      p.stock
    FROM carrito_items ci
    INNER JOIN productos p ON ci.producto_id = p.id
    WHERE ci.session_id = ? AND p.activo = 1
  `, [sessionId], (error, results) => {
    if (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    res.json(results);
  });
});

// POST agregar al carrito - USA TU TABLA carrito_items
app.post('/api/carrito/agregar', (req, res) => {
  const { session_id, producto_id, cantidad } = req.body;
  
  // Verificar si el producto existe y está activo
  connection.query(`
    SELECT id, titulo, precio, stock FROM productos 
    WHERE id = ? AND activo = 1
  `, [producto_id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    
    if (results.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    
    const producto = results[0];
    
    // Verificar si ya existe en el carrito
    connection.query(`
      SELECT id, cantidad FROM carrito_items 
      WHERE session_id = ? AND producto_id = ?
    `, [session_id, producto_id], (error, cartResults) => {
      if (error) {
        return res.status(500).json({ error: 'Error en la base de datos' });
      }
      
      if (cartResults.length > 0) {
        // Actualizar cantidad si ya existe
        const nuevaCantidad = cartResults[0].cantidad + cantidad;
        connection.query(`
          UPDATE carrito_items 
          SET cantidad = ?, updated_at = NOW() 
          WHERE id = ?
        `, [nuevaCantidad, cartResults[0].id], (error) => {
          if (error) {
            return res.status(500).json({ error: 'Error actualizando carrito' });
          }
          res.json({ success: true, message: 'Producto actualizado en carrito' });
        });
      } else {
        // Insertar nuevo item
        connection.query(`
          INSERT INTO carrito_items (session_id, producto_id, cantidad, precio_unit) 
          VALUES (?, ?, ?, ?)
        `, [session_id, producto_id, cantidad, producto.precio], (error) => {
          if (error) {
            return res.status(500).json({ error: 'Error agregando al carrito' });
          }
          res.json({ success: true, message: 'Producto agregado al carrito' });
        });
      }
    });
  });
});

// PUT actualizar cantidad
app.put('/api/carrito/actualizar/:id', (req, res) => {
  const { session_id, cantidad } = req.body;
  const itemId = req.params.id;
  
  connection.query(`
    UPDATE carrito_items 
    SET cantidad = ?, updated_at = NOW() 
    WHERE id = ? AND session_id = ?
  `, [cantidad, itemId, session_id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Item no encontrado en el carrito' });
    }
    
    res.json({ success: true, message: 'Cantidad actualizada' });
  });
});

// DELETE eliminar item
app.delete('/api/carrito/eliminar/:id', (req, res) => {
  const { session_id } = req.body;
  const itemId = req.params.id;
  
  connection.query(`
    DELETE FROM carrito_items 
    WHERE id = ? AND session_id = ?
  `, [itemId, session_id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Item no encontrado en el carrito' });
    }
    
    res.json({ success: true, message: 'Producto eliminado del carrito' });
  });
});

// Ruta básica para verificar que el servidor funciona
app.get('/', (req, res) => {
  res.json({ 
    message: '✅ Servidor funcionando', 
    endpoints: [
      'GET /api/productos',
      'GET /api/productos/:id', 
      'GET /api/carrito?session_id=...',
      'POST /api/carrito/agregar',
      'PUT /api/carrito/actualizar/:id',
      'DELETE /api/carrito/eliminar/:id'
    ]
  });
});
app.post('/api/ordenes', (req, res) => {
  const { nombre, email, telefono, direccion, ciudad, notas, items, subtotal, impuestos, total } = req.body;
  
  // Generar código único para el pedido
  const codigo = 'PED' + Math.random().toString(36).substr(2, 8).toUpperCase();
  
  // Insertar pedido
  connection.query(`
    INSERT INTO pedidos (session_id, codigo, nombre, email, telefono, direccion, ciudad, notas, subtotal, impuestos, total) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, ['angular_session', codigo, nombre, email, telefono, direccion, ciudad, notas, subtotal, impuestos, total], 
  (error, results) => {
    if (error) {
      console.error('Error creando pedido:', error);
      return res.status(500).json({ error: 'Error creando pedido' });
    }
    
    const pedidoId = results.insertId;
    
    // Insertar items del pedido
    const itemsPromises = items.map(item => {
      return new Promise((resolve, reject) => {
        connection.query(`
          INSERT INTO pedido_items (pedido_id, producto_id, titulo, titulo_snapshot, precio_unit, cantidad, subtotal) 
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `, [pedidoId, item.producto_id, item.nombre, item.nombre, item.precio_unit, item.cantidad, item.precio_unit * item.cantidad], 
        (error) => {
          if (error) reject(error);
          else resolve();
        });
      });
    });
    
    Promise.all(itemsPromises)
      .then(() => {
        // Limpiar carrito después de crear pedido
        connection.query('DELETE FROM carrito_items WHERE session_id = ?', ['angular_session'], () => {
          res.json({ 
            success: true, 
            pedidoId: pedidoId,
            codigo: codigo,
            total: total,  // ← SOLO AGREGAR ESTA LÍNEA
            message: 'Pedido creado exitosamente' 
          });
        });
      })
      .catch(error => {
        console.error('Error insertando items:', error);
        res.status(500).json({ error: 'Error creando items del pedido' });
      });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend en http://localhost:${PORT}`);
});