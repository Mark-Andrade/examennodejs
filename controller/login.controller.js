const jwt = require("jsonwebtoken");
const Usuario = require("../model/usuario");
require('dotenv').config({ path: 'variables.env' });

exports.login = async (req, res) => {
    try {
        const nombreUsuario = req.body.nombreUsuario || req.body.numeroTelefono;
        const contrasena = req.body.contrasena;
        if (!nombreUsuario || !contrasena) {
            console.log(req.body.numeroTelefono);
            let mensaje = (req.body.nombreUsuario == "") ? 'Nombre usuario' : 'Numero telefono';
            return res.status(400).json({ msg: mensaje + " y Contraseña son requeridos" });
        }
        let usuario = await Usuario.findOne(req.body);
        if (usuario) {
            const token = jwt.sign({ nombreUsuario }, process.env.SECRETKEY, { expiresIn: "1h" });
            return res.status(200).json({ datosUsuario: usuario, token: token });
        } else {
            return res.status(401).json({ msg: "No existe el usuario" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}
exports.logout = async (req, res) => {
    try {
        return res.status(200).json({ msg: 'Inicio de sesión terminado' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}