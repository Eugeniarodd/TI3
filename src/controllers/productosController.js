const fs = require ('fs');
const path = require ('path');

const rutaAlJson= path.resolve (__dirname, '../data/products.json');

const dataJSON = fs.readFileSync(rutaAlJson,{encoding: 'utf-8'})

const products = JSON.parse (dataJSON);


const controller = {
   all: (req, res) => {
    res.json(products);
   },
   one: function (req, res) {
    let id = +req.params.id;
    let product = products.filter(product => product.id == id)
    res.json(product);
}
}

module.exports = controller;