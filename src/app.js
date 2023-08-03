const express = require('express')
const app = express();
const productos = require ('./routes/productos');
const users = require ('./routes/users');

app.use(express.urlencoded ({ extended : false }));
app.use (express.json())

app.use('/api/products', productos);
app.use('/api/users', users);



app.listen(3000, () => console.log ('Server corriendo en el puerto http://localhost:3000/api/'));