const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    sellerEmail: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
    quantity: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    sold: {
        type: Number,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    color: {
        type: Array,
    },
    size: {
        type: Array,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['men', 'women', 'unisex']
    },
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;