require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const apiVersion = process.env.API_VERSION;

const app = express();

//Configuración header HTTP - CORS
app.use(cors());

//Importar rutas
const authRoutes = require('./router/auth');
const notaRoutes = require('./router/nota')

//Configuración body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configuración static folder
app.use(express.static('uploads'));

//Configuración rutas
app.use(`/api/${apiVersion}`, authRoutes);
app.use('/api/v1', notaRoutes);

module.exports = app;