const Product = require ('../database/models/Product');


const controller = {
   all: async (req, res) => {
    const products = await Product.find ({});
    res.status(200).json(products);
   },
   update: async (req, res) => {
   const product = await Product.findByIdAndUpdate(req.params.id, req.body);
   return res.status(200).json(product);
   },
   one: async (req, res) => {
    const product = await Product.findById ({_id: req.params.id})
    res.json(product);
},  
    search: async (req, res) => {
    const product = await Product.find ({name: req.query.name})
    res.json(product);
},

    create: async (req, res) => {
        try{
        let product = {
            name : req.body.name,
            price : req.body.price,
            description : req.body.description,
            image : req.file.filename,
         }
         const productDatabase = await Product.create(product);
         res.status(201).json(productDatabase);

        } catch(error) {
            if (error.errors.name){
                return res.status(400).json({message: 'Falta el campo name'});
            }
            res.status(500).json({message: 'internal server error'});
        }
     
}
}

module.exports = controller;