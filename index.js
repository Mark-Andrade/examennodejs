
const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//crear servidor
const app = express();
//conectar bd
conectarDB();
app.use(cors())
//Se agrega para manejar datos json
app.use(express.json());
//Creación de rutas
app.use('/api/usuarios',require('./routes/usuario'));
app.use('/api',require('./routes/login'));


app.listen(4000, ()=>{
    console.log('El servidor esta corriendo correctamente');
})