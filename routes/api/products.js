var express = require('express');
var router = express.Router();
const ProductsService = require('../../services/products');

const productService = new ProductsService();

router.get('/', async function(req, res, next){
    const { tags } = req.query;
    console.log('req', req.query)

    try {
        const products = await productService.getProducts({ tags });
    
        // res.status(200).json({
        //     data: products,
        //     message: 'products listed'
        // });
        res.status(200).json( products );
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async function(req, res, next){
    const { id } = req.params;
    console.log('req', req.params)
    try {
        const product = await productService.getProduct({ id });
        
        res.status(200).json( product );
    } catch (error) {
        next(error);
    }
});

router.post('/', async function(req, res, next){
    // npm i -S body-parser  
    const { body: product } = req;
    console.log('req', req.body)
    try {
        const createdProduct = await productService.createProduct({ product });
    
        res.status(201).json({
            data: createdProduct,
            message: 'product created'
        });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async function(req, res, next){
    const { id } = req.params;
    const { body: product } = req;
    console.log('req', req.params, req.body)

    try {
        const updateProduct = await productService.updateProduct({ 
            id,
            product
        });
    
        res.status(200).json({
            data: updateProduct,
            message: 'product updated'
        });
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async function(req, res, next){
    const { id } = req.params;
    console.log('req', req.params, req.body)
    try {
        const delteProduct = await productService.deleteProduct({ id });
    
        res.status(200).json({
            data: delteProduct,
            message: 'product deleted'
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;