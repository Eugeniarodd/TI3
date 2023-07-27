const express = require ('express');
const router = express.Router ();
const controller = require ('../controllers/productosController');

/* Ruta de todos los productos*/
router.get ('/', controller.all);

/*Ruta de detalle de producto*/
router.get ('/:id', controller.one);

module.exports = router;