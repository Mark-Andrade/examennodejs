const express = require('express');
//Declarar Router para utilizar rutas
const route = express.Router();
const usuarioCotroller = require('../controller/usuario.controller')
route.post('/', usuarioCotroller.crearUsuario);
route.get('/', usuarioCotroller.obtenerUsuarios);

module.exports= route;