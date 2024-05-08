const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    // author: {
    //     type: String,
    //     required: true,
    // },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // date: {
    //     type: Date,
    //     default: Date.now
    // },
    status: {
        type: String,
        enum: ['active', 'inactive']
    }
})

const blog = mongoose.model('blog', blogSchema);

module.exports = blog;

