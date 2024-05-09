const express = require('express');
const { createProduct } = require('./product.controller');
const { checkIsSeller } = require('../../middlewares/checkIsSeller');

const router = express.Router();

// crate new product
router.post('/', checkIsSeller, createProduct);

module.exports = router;