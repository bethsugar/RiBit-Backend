const prodCtrl = {}

const productores = require('../models/productores')
const Productor = require('../models/productores')

//GET in plurar
prodCtrl.getProds = async(req, res) => {
    const Prods = await Productor.find()
    res.json(Prods)
};

//Create
prodCtrl.createProd = async (req, res) => {
    const newProductor = new Productor(req.body)

    await newProductor.save()

    res.send({message: 'Productor guardado'})
};

//GET just one

prodCtrl.getProd = async (req, res) => {
    const productor = await Productor.findById(req.params.id)
    res.send(productor)
};

//Edit

prodCtrl.editProd = async (req, res) => {
    await Productor.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'editado exitosamente'})
};

//Delete

prodCtrl.deleteProd = async (req, res) => {
    await Productor.findByIdAndDelete(req.params.id)
    res.json({status: 'Productor eliminado'})
};

module.exports = prodCtrl;