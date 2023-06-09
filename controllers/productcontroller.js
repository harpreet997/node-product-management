const ProductModal = require('../models/productmodal');
const path = require('path');
const testPath = path.join(__dirname, '..', 'public', 'assets');
const newPath = testPath.replace(/\\/g, "/")
console.log(newPath)

const addProduct = async (req, res) => {
    try {
        // var arrImages = [];
        // for(let i=0; i<req.files.length; i++)
        // {
        //     arrImages[i] = path.join(newPath, req.files[0].filename);
        // }

        const imagePath = path.join(newPath, req.file.filename)
        
        var product = new ProductModal({
            productname: req.body.productname,
            rating: req.body.rating,
            price: req.body.price,
            description: req.body.description,
            images: imagePath
        })

        const productData = await product.save();
        res.status(201).send({success: true, data: productData})
    } catch (error) {
        res.status(400).send({success: false, msg: error.message})
    }
}



module.exports = addProduct;