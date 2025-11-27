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

// SOLO ESTA RUTA para empezar
app.get('/api/productos', (req, res) => {
  connection.query(`
    SELECT id, titulo as nombre, precio, imagen_url as imagen, categoria, stock 
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

app.listen(PORT, () => {
  console.log(`✅ Backend en http://localhost:${PORT}`);
});