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
    let product = products.find(product => product.id == id)
    res.json(product);
},
    new: (req, res) => {
        let product = {};
        if (!req.body.name){
            return res.json ({mgs: 'el campo name es requerido'});
        }
        product.id = products.length + 1;
        product.name = req.body.name;
        product.price = req.body.price;
        product.description = req.body.description;
        product.image = req.file.filename;

        products.push(product);

let productsJson = JSON.stringify(products, null, 4)
fs.writeFileSync(rutaAlJson, productsJson, {endcoding: 'utf-8'})

res.status(201).json(product);

console.log (productsJson)
    res.json(products);
}
}

module.exports = controller;