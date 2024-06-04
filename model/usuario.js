const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Usuario es requerido'],
        match: [/^[a-zA-Z ]+$/,'Solo se aceptan letras'],
        max: [40, 'Nombre es mayor al valor máximo permitido']
    },
    apellidoPaterno: {
        type: String,
        required: [true, 'Apellido Paterno es requerido'],
        match: [/^[a-zA-Z ]+$/,'Solo se aceptan letras'],
        max: [40, 'Apellido Paterno es mayor al valor máximo permitido']
    },
    apellidoMaterno: {
        type: String,
        match: [/^[a-zA-Z ]+$/,'Solo se aceptan letras'],
        max: [40, 'Apellido Materno es mayor al valor máximo permitido']
    },
    numeroTelefono: {
        type: Number,
        required: [true, 'Telefono es requerido'],
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: props => `${props.value} no es un numero de telefono valido!`
        },
    },
    correo: {
        type: String,
        match: [/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'El campo correo no tiene un formato valido'],
        max: [40, 'Correo es mayor al valor máximo permitido']
    },
    nombreUsuario: {
        type: String,
        required: [true, 'Nombre Usuario es requerido'],
        match: [/^[a-zA-Z ]+$/,'Solo se aceptan letras'],
        max: [30, 'Nombre Usuario es mayor al valor máximo permitido']
    },
    contrasena: {
        type: String,
        required: [true, 'Contraseña es requerido'],
        max: [20, 'Contraseña es mayor al valor máximo permitido']
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model('Usuario', UsuarioSchema)