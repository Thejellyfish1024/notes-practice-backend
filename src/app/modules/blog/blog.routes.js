const express = require('express');
const { createBlog } = require('./blog.controller');

const router = express?.Router();

// get all blogs
router.get('/', )

router.post('/', createBlog);

module.exports = router;