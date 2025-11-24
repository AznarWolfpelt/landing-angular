const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MySQL - Usando tu base de datos existente
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'usuariosdb'
});

// Verificar conexión
connection.connect((err) => {
  if (err) {
    console.error('❌ Error conectando a MySQL:', err);
    return;
  }
  console.log('✅ Conectado a MySQL - Base: usuariosdb');
});

// Ruta para obtener productos
app.get('/api/productos', (req, res) => {
  const query = `
    SELECT 
      id,
      titulo as nombre,
      descripcion,
      precio,
      imagen_url as imagen,
      categoria,
      stock
    FROM productos 
    WHERE activo = 1
  `;
  
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error en consulta:', error);
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
});

// Ruta de prueba simple
app.get('/api/test', (req, res) => {
  res.json({ 
    message: '✅ Backend funcionando correctamente',
    database: 'usuariosdb',
    timestamp: new Date().toISOString()
  });
});

// Ruta de verificación de productos
app.get('/api/debug/productos', (req, res) => {
  connection.query('SELECT COUNT(*) as total FROM productos WHERE activo = 1', (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({
      total_productos: results[0].total,
      mensaje: `Hay ${results[0].total} productos activos en la base de datos`
    });
  });
});

// Manejo de errores global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal en el servidor' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend ejecutándose en http://localhost:${PORT}`);
  console.log(`📊 Base de datos: usuariosdb`);
  console.log(`🔍 Prueba las rutas:`);
  console.log(`   http://localhost:${PORT}/api/test`);
  console.log(`   http://localhost:${PORT}/api/productos`);
});