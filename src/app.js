const path = require ('path');
const express = require('express');
const mongoose = require ('mongoose');
const app = express();
const productos = require ('./routes/productos');
const users = require ('./routes/users');
const e = require('express');


/* Base de datos */

mongoose.connect('mongodb://127.0.0.1:27017/Valnika')
.then(() => console.log('Conectado a la db'))
.catch(e => console.log(e));



app.use (express.static(path.resolve (__dirname, '../public')));
app.use(express.urlencoded ({ extended : false }));
app.use (express.json())

app.use('/api/products', productos);
app.use('/api/users', users);

app.use(function (req, res, next) {
    return res.status (404).json ({
        status: 404,
        error: 'Pagina no encontrada',
        message: 'error en el recurso solicitado'
    })
});



app.listen(3000, () => console.log ('Server corriendo en el puerto http://localhost:3000/api/'));