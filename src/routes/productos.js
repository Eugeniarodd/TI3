const path = require ('path');
const fs = require ('fs');
const express = require ('express');
const multer = require ('multer');
const router = express.Router ();
const controller = require ('../controllers/productosController');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve( __dirname, '../../public/images'));
    },
    filename: (req, file, cb) => {
        cb(null, `image-${Date.now()}-${path.extname(file.originalname)}`);
    }
});

const upload = multer ({ storage: storage});


const logs = (req, res, next) => {
    console.log(req);
    fs.appendFileSync (path.resolve(__dirname, '../logs/logs.txt'),`la ruta ingresada es ${req.originalUrl}\n`)
    next();
}


/* Ruta de todos los productos*/
router.get ('/', logs, controller.all);

/*Ruta de detalle de producto*/
router.get ('/:id', controller.one);

/*Ruta de nuevo producto */
router.post ('/crear', upload.single('image'), controller.new);

module.exports = router;