const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Guatemala  = require('../models/guatemala');
const Dev = require('../developer.json');

 

const GuatemalaGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { };


    const [total, guatemala ] = await Promise.all([
        Guatemala.countDocuments(),
        Guatemala.find()
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        guatemala,
        Dev
    });
}

const GuatemalaPost = async(req, res = response) => {
       var datetime = new Date()
       //fecha_servidor = datetime;
    const { codigo, nombreproyecto, monto, fecha_servidor } = req.body;
    const guatemala = new Guatemala({ codigo, nombreproyecto, monto, fecha_servidor });

    // Guardar en BD
    await guatemala.save();

    res.json({
        guatemala,
        Dev
    });
}

const GuatemalaPut = async(req, res = response) => {
    const { id } = req.params;
    const { _id, codigo, ...resto } = req.body;
    const guatemala = await Guatemala.findByIdAndUpdate( id, resto );

    res.json({guatemala, Dev});
}



const GuatemalaDelete = async(req, res = response) => {
    const { id } = req.params;
    const guatemala = await Guatemala.findByIdAndUpdate( id, {});
    res.json({guatemala, Dev});
}

module.exports = {
    GuatemalaGet,
    GuatemalaPost,
    GuatemalaPut,
    GuatemalaDelete,
}