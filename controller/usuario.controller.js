const jwt = require("jsonwebtoken");
const Usuario = require("../model/usuario");
require('dotenv').config({ path: 'variables.env' });

exports.crearUsuario = async (req, res) => {
    try {
        let usuario;
        usuario = new Usuario(req.body);
        await usuario.save();
        res.status(200).json({msg:'Datos guardados correctamente'});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Ocurrio un error'})
    }
}
exports.obtenerUsuarios = async (req, res) => {
    try {
        const token = req.header("x-token") || "";
        if (!token) {
            return res.status(401).json({ msg: "el token no fue proporcionado" });
        }
        try {
            const payload = jwt.verify(token, process.env.SECRETKEY);
            console.log( payload);
            const usuarios = await Usuario.find();
            res.status(200).json({Usuarios:usuarios, token:token});
        } catch (error) {
            return res.status(403).json({ msg: "Token no válido o a expirado" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Ocurrio un error'})
    }
}