const {
    response,
    request
} = require('express');
const bcryptjs = require('bcryptjs');
const Guatemala = require('../models/guatemala');
const Desarrollador = require('../developer.json');



const GuatemalaGet = async (req = request, res = response) => {

    const {
        limite = 5, desde = 0
    } = req.query;
    const query = {};


    const [total, guatemala] = await Promise.all([
        Guatemala.countDocuments(),
        Guatemala.find()
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.json({
        total,
        guatemala,
        Desarrollador
    });
}

const GuatemalaPost = async (req, res = response) => {
    let fecha_servidor = new Date();
    fecha_servidor.toString();
    const {
        codigo,
        nombreproyecto,
        monto
    } = req.body;
    const guatemala = new Guatemala({
        codigo,
        nombreproyecto,
        monto,
        fecha_servidor
    });

    // Guardar en BD
    await guatemala.save();

    res.json({
        guatemala,
        Desarrollador
    });
}

const GuatemalaPut = async (req, res = response) => {
    const {
        id
    } = req.params;
    const {
        _id,
        codigo,
        ...resto
    } = req.body;
    const guatemala = await Guatemala.findByIdAndUpdate(id, resto);

    res.json({
        guatemala,
        Desarrollador
    });
}



const GuatemalaDelete = async (req, res = response) => {
    const {
        id
    } = req.params;
    const guatemala = await Guatemala.findByIdAndUpdate(id, {});
    res.json({
        guatemala,
        Desarrollador
    });
}

module.exports = {
    GuatemalaGet,
    GuatemalaPost,
    GuatemalaPut,
    GuatemalaDelete,
}