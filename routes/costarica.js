
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { CostaricaGet,
        CostaricaPut,
        CostaricaPost,
        CostaricaDelete
         } = require('../controllers/costarica');
const {CodigoExistCCR } = require('../helpers/db-validators');

const router = Router();


router.get('/', CostaricaGet );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
],CostaricaPut );

router.post('/',[
    check('codigo', 'El codigo es obligatorio').not().isEmpty(),
    check('nombreproyecto', 'El nombre del proyecto es requerido').not().isEmpty(),
    check('paisqueejecuta', 'Pais que ejecuta es Requerido').not().isEmpty(),
    check('codigo').custom( CodigoExistCCR ), 
    validarCampos
], CostaricaPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
],CostaricaDelete );

module.exports = router;