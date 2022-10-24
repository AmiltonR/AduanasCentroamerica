const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Costarica  = require('../models/costarica');
const Dev = require('../developer.json');

 

const CostaricaGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { };


    const [total, costarica ] = await Promise.all([
        Costarica.countDocuments(),
        Costarica.find()
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        costarica,
        Dev
    });
}

const CostaricaPost = async(req, res = response) => {
       var datetime = new Date()
       //fecha_servidor = datetime;
    const { codigo, nombreproyecto, paisqueejecuta, fechacierre } = req.body;
    const costarica = new Costarica({ codigo, nombreproyecto, paisqueejecuta, fechacierre });

    // Guardar en BD
    await costarica.save();

    res.json({
        costarica,
        Dev
    });
}

const CostaricaPut = async(req, res = response) => {
    const { id } = req.params;
    const { _id,codigo,...resto } = req.body;
    const costarica = await Costarica.findByIdAndUpdate( id, resto );

    res.json({costarica , Dev});
}


const CostaricaDelete = async(req, res = response) => {
    const { id } = req.params;
    const costarica = await Costarica.findByIdAndUpdate( id, {});
    res.json({costarica, Dev});
}

module.exports = {
    CostaricaGet,
    CostaricaPost,
    CostaricaPut,
    CostaricaDelete,
}