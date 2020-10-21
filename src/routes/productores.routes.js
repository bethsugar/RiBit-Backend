const { Router } = require('express')
const router = Router()
const prodCtrl = require('../controllers/productores.controllers.js')

//CRUD API

router.get('/', prodCtrl.getProds);

router.post('/', prodCtrl.createProd);

router.get('/:id', prodCtrl.getProd);

router.put('/:id', prodCtrl.editProd);

router.delete('/:id', prodCtrl.deleteProd);




module.exports = router;