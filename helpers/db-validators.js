
const Guatemala = require('../models/guatemala');
const Costarica = require('../models/costarica');


const CodigoExiste = async( codigo = '' ) => {

    // Verificar si el codigo existe
    const existe = await Guatemala.findOne({ codigo });
    if ( existe ) {
        throw new Error(`El codigo: ${ codigo }, ya está registrado`);
    }


}


const CodigoExistCCR = async( codigo = '' ) => {

    // Verificar si el codigo existe
    const existe = await Costarica.findOne({ codigo });
    if ( existe ) {
        throw new Error(`El codigo: ${ codigo }, ya está registrado`);
    }


}

module.exports = {
    CodigoExiste,
    CodigoExistCCR
}

