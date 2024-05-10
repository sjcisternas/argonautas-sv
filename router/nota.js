const express = require('express');
const api = express.Router();
const NotaController = require('../controllers/nota');
const multiparty = require('connect-multiparty');

//direccion de guardado de img
const md_upload = multiparty({uploadDir: './uploads/notas'});


//config de las rutas
api.post('/nota',[md_upload],NotaController.createNota);
api.get('/notas', NotaController.getNotas);
api.get('/nota/:id', NotaController.getNotaIndividual);
api.post('/nota/:id',[md_upload], NotaController.updateNota);
api.delete('/nota/:id', NotaController.deleteNota);

module.exports = api;