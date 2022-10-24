
const { Schema, model } = require('mongoose');

const GuatemalaSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El codigo es obligatorio']
        
    },
    nombreproyecto: {
        type: String,
        required: [true, 'El Nombre del Proyecto es obligatorio']
      
    },
    monto: {
        type: String,
        required: [true, 'El Monto es obligatorio'],
    },
    fecha_servidor: {
        type: String,
        required: [true, 'El fecha es obligatorio'],
    }

});



GuatemalaSchema.methods.toJSON = function() {
    const { __v, ...Aduana  } = this.toObject();
    return Aduana;
}

module.exports = model( 'Guatemala', GuatemalaSchema);
