const express = require('express');
const { createProduct } = require('./product.controller');

const router = express.Router();

// crate new product
router.post('/', createProduct);

module.exports = router;