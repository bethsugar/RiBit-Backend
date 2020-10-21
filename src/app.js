const express = require('express')

const morgan = require('morgan')

const app = express()

//enviroment variables
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'))
app.use(express.json())

//Para que lea los datos del html
app.use(express.urlencoded({ extended: false }));


app.use("/api/productores", require('./routes/productores.routes'))

module.exports = app;