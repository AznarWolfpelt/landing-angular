const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config(); // Añadir esta línea

const app = express();
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'tienda_angular'
});