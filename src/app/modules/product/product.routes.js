const express = require('express');
const { createProduct, updateProduct } = require('./product.controller');
const { checkIsSeller } = require('../../middlewares/checkIsSeller');
const { checkIsSameSeller } = require('../../middlewares/checkIsSameSeller');

const router = express.Router();

// create new product
router.post('/', checkIsSeller, createProduct);

// update existing product
router.put('/:id', checkIsSameSeller, updateProduct );

module.exports = router;