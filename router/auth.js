const express= require('express');
const api = express.Router();
const AuthController = require('../controllers/auth');

//configuración de las rutas
api.post('/auth/subscription', AuthController.subscription);

//exportar rutas
module.exports = api;