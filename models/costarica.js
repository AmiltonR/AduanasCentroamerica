
const { Schema, model } = require('mongoose');

const Costarica = Schema({
    codigo: {
        type: String,
        required: [true, 'El codigo es obligatorio']
        
    },
    nombreproyecto: {
        type: String,
        required: [true, 'El Nombre del Proyecto es obligatorio']
      
    },
    paisqueejecuta: {
        type: String,
        required: [true, 'El Pais que ejecuta es obligatorio'],
    },
    fechacierre: {
        type: String,
        required: [true, 'El fecha es obligatorio'],
    }
});



Costarica.methods.toJSON = function() {
    const { __v, ...Aduana  } = this.toObject();
    return Aduana;
}

module.exports = model( 'CostaRica', Costarica);
