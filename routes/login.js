const express = require('express');
//Declarar Router para utilizar rutas
const route = express.Router();
const loginController = require('../controller/login.controller')
route.post('/login', loginController.login);
route.post('/logout', loginController.logout);

module.exports= route;