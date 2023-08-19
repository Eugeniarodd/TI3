const path = require ('path');
const express = require('express');
const app = express();
const productos = require ('./routes/productos');
const users = require ('./routes/users');
const connectToDb = require ('./database/models/connect');


// base de datos
connectToDb();

app.use (express.static(path.resolve (__dirname, '../public')));
app.use(express.urlencoded ({ extended : false }));
app.use (express.json())

app.use('/products', productos);
app.use('/users', users);

app.use(function (req, res, next) {
    return res.status (404).json ({
        status: 404,
        error: 'Pagina no encontrada',
        message: 'error en el recurso solicitado'
    })
});

app.listen(3000, () => console.log ('Server corriendo en el puerto http://localhost:3000/'));