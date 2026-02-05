console.log("MYSQLHOST:", process.env.MYSQLHOST);
console.log("MYSQLUSER:", process.env.MYSQLUSER);
console.log("MYSQLDATABASE:", process.env.MYSQLDATABASE);
console.log("MYSQLPORT:", process.env.MYSQLPORT);

const express = require('express');
const mysql = require('mysql2');
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
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ Conectar a la base
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la BD:', err);
    return;
  }
  console.log('✅ Conectado a la base de datos MySQL');
});

// GET productos
app.get('/api/productos', (req, res) => {
  db.query(`
    SELECT id, titulo as nombre, precio, imagen_url as imagen, 
           categoria, stock, descripcion, modelo_3d_url
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
  db.query(`
    SELECT id, titulo as nombre, precio, imagen_url as imagen, 
           categoria, stock, descripcion, modelo_3d_url
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
  
  db.query(`
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
  db.query(`
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
    db.query(`
      SELECT id, cantidad FROM carrito_items 
      WHERE session_id = ? AND producto_id = ?
    `, [session_id, producto_id], (error, cartResults) => {
      if (error) {
        return res.status(500).json({ error: 'Error en la base de datos' });
      }
      
      if (cartResults.length > 0) {
        // Actualizar cantidad si ya existe
        const nuevaCantidad = cartResults[0].cantidad + cantidad;
        db.query(`
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
        db.query(`
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
  
  db.query(`
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
  
  db.query(`
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
// EN server.js, MODIFICA COMPLETAMENTE el endpoint /api/ordenes:
app.post('/api/ordenes', (req, res) => {
  console.log('🔍 SERVER - Creando orden...');
  console.log('🔍 SERVER - Session ID recibido:', req.body.session_id);
  console.log('🔍 SERVER - Items recibidos:', req.body.items);
  console.log('🔍 SERVER - Datos del cliente:', {
    nombre: req.body.nombre,
    email: req.body.email
  });

  const { session_id, nombre, email, telefono, direccion, ciudad, notas, items, subtotal, impuestos, total } = req.body;
  
  // Validar que tenemos session_id
  if (!session_id) {
    console.log('❌ ERROR: Session ID requerido');
    return res.status(400).json({ error: 'Session ID requerido' });
  }

  // Validar que tenemos items
  if (!items || items.length === 0) {
    console.log('❌ ERROR: No hay items en el pedido');
    return res.status(400).json({ error: 'No hay items en el pedido' });
  }

  // Generar código único para el pedido
  const codigo = 'PED' + Math.random().toString(36).substr(2, 8).toUpperCase();
  console.log('🔍 SERVER - Código generado:', codigo);
  
  try {
    // Insertar pedido
    db.query(`
      INSERT INTO pedidos (session_id, codigo, nombre, email, telefono, direccion, ciudad, notas, subtotal, impuestos, total) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [session_id, codigo, nombre, email, telefono, direccion, ciudad, notas, subtotal, impuestos, total], 
    (error, results) => {
      if (error) {
        console.error('❌ ERROR creando pedido:', error);
        return res.status(500).json({ error: 'Error creando pedido: ' + error.message });
      }
      
      const pedidoId = results.insertId;
      console.log('✅ Pedido creado con ID:', pedidoId);
      
      // Insertar items del pedido
      const itemsPromises = items.map(item => {
        return new Promise((resolve, reject) => {
          console.log('🔍 Insertando item:', item);
          db.query(`
            INSERT INTO pedido_items (pedido_id, producto_id, titulo, titulo_snapshot, precio_unit, cantidad, subtotal) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
          `, [pedidoId, item.producto_id, item.nombre, item.nombre, item.precio_unit, item.cantidad, item.precio_unit * item.cantidad], 
          (error) => {
            if (error) {
              console.error('❌ ERROR insertando item:', error);
              reject(error);
            } else {
              console.log('✅ Item insertado:', item.producto_id);
              resolve();
            }
          });
        });
      });
      
      Promise.all(itemsPromises)
        .then(() => {
          // ACTUALIZAR STOCK de productos Y REGISTRAR EN INVENTARIO_MOVIMIENTOS
          const stockPromises = items.map(item => {
            return new Promise((resolve, reject) => {
              // 1. Actualizar stock en productos
              db.query(`UPDATE productos SET stock = stock - ? WHERE id = ?`, 
                [item.cantidad, item.producto_id], (error) => {
                if (error) {
                  reject(error);
                } else {
                  // 2. Registrar en inventario_movimientos
                  db.query(`
                    INSERT INTO inventario_movimientos (producto_id, tipo, cantidad, referencia, notas)
                    VALUES (?, 'salida', ?, ?, ?)
                  `, [item.producto_id, -item.cantidad, codigo, `Venta pedido ${codigo}`], (error) => {
                    if (error) {
                      console.error('Error insertando en inventario_movimientos:', error);
                      // No rechazamos la promesa principal para no fallar el pedido
                    }
                    resolve();
                  });
                }
              });
            });
          });
          
          return Promise.all(stockPromises);
        })
        .then(() => {
          console.log('✅ Todos los stocks actualizados');
          // Limpiar carrito después de crear pedido
          db.query('DELETE FROM carrito_items WHERE session_id = ?', [session_id], (error) => {
            if (error) {
              console.error('❌ ERROR limpiando carrito:', error);
              // No fallar la respuesta principal si falla limpiar el carrito
            } else {
              console.log('✅ Carrito limpiado para session:', session_id);
            }
            
            res.json({ 
              success: true, 
              pedidoId: pedidoId,
              codigo: codigo,
              total: total,
              message: 'Pedido creado exitosamente' 
            });
          });
        })
        .catch(error => {
          console.error('❌ ERROR en el proceso del pedido:', error);
          res.status(500).json({ error: 'Error procesando el pedido: ' + error.message });
        });
    });
  } catch (error) {
    console.error('❌ ERROR general:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// AGREGAR ESTE ENDPOINT NUEVO EN server.js
app.delete('/api/carrito/limpiar', (req, res) => {
  const { session_id } = req.body;
  
  if (!session_id) {
    return res.status(400).json({ error: 'Session ID requerido' });
  }
  
  db.query(`DELETE FROM carrito_items WHERE session_id = ?`, [session_id], (error, results) => {
    if (error) {
      console.error('Error limpiando carrito:', error);
      return res.status(500).json({ error: 'Error limpiando carrito' });
    }
    
    res.json({ 
      success: true, 
      message: 'Carrito limpiado exitosamente',
      itemsEliminados: results.affectedRows 
    });
  });
});

// ✅ AGREGAR ESTE ENDPOINT EN server.js - DEBE ESTAR ANTES DE app.listen()
app.delete('/api/carrito/limpiar', (req, res) => {
  const { session_id } = req.body;
  
  console.log('🔍 SERVER - Limpiando carrito para session:', session_id);
  
  if (!session_id) {
    return res.status(400).json({ error: 'Session ID requerido' });
  }
  
  db.query(`DELETE FROM carrito_items WHERE session_id = ?`, [session_id], (error, results) => {
    if (error) {
      console.error('Error limpiando carrito:', error);
      return res.status(500).json({ error: 'Error limpiando carrito' });
    }
    
    console.log('✅ Carrito limpiado. Items eliminados:', results.affectedRows);
    
    res.json({ 
      success: true, 
      message: 'Carrito limpiado exitosamente',
      itemsEliminados: results.affectedRows 
    });
  });
});

app.listen(PORT, () => {
  console.log(`✅ Backend en http://localhost:${PORT}`);
});