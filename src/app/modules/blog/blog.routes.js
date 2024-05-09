const express = require('express');
const { createBlog, getAllBlogs } = require('./blog.controller');

const router = express?.Router();

// get all blogs
router.get('/', getAllBlogs)
// create new blog
router.post('/', createBlog);

module.exports = router;