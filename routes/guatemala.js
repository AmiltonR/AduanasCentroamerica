const {
    Router
} = require('express');
const {
    check
} = require('express-validator');


const {
    validarCampos
} = require('../middlewares/validar-campos');

const {
    GuatemalaGet,
    GuatemalaPut,
    GuatemalaPost,
    GuatemalaDelete
} = require('../controllers/guatemala');
const {
    CodigoExiste
} = require('../helpers/db-validators');

const router = Router();


router.get('/', GuatemalaGet);

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], GuatemalaPut);

router.post('/', [
    check('codigo', 'El codigo es obligatorio').not().isEmpty(),
    check('nombreproyecto', 'El nombre del proyecto es requerido').not().isEmpty(),
    check('monto', 'Monto es Requerido').not().isEmpty(),
    check('codigo').custom(CodigoExiste),
    validarCampos
], GuatemalaPost);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], GuatemalaDelete);

module.exports = router;