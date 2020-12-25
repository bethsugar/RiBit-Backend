const mongoose = require('mongoose');

//cambiar variables de entorno de acuerdo a las establecidas por usted
mongoose
    .connect('mongodb://localhost/mean-productores', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log("DB is connected"))
    .catch((err) => console.error(err));
