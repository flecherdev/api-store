var express = require('express');
var router = express.Router();
var productMocks = require('../../utils/mocks/products')

router.get('/', function(req, res){
    const { query } = req;

    res.status(200).json({
        data: productMocks,
        message: 'products listed'
    });
});

router.get('/:id', function(req, res){
    const { id } = req.params;

    res.status(200).json({
        data: productMocks[0],
        message: 'product retrieved'
    });
});

router.post('/', function(req, res){
    
    res.status(201).json({
        data: productMocks[0],
        message: 'product created'
    });
});

router.put('/:id', function(req, res){
    
    res.status(200).json({
        data: productMocks,
        message: 'product updated'
    });
});

router.delete('/', function(req, res){
    
    res.status(200).json({
        data: productMocks[0],
        message: 'product deleted'
    });
});

module.exports = router;