const { Schema, model } = require('mongoose')

const prodSchema = new Schema({
    code: {type: Number, required: true},
    name: {type: String, required: true},
    contact: {type: Number, required: true},
    doc: {type: Number, required: true},
    direction: {type: String, required: true},
    price: {type: Number, required: true},

}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Productores', prodSchema)