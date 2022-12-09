const express = require('express');
const { createPost } = require('../controller/blogPostController');
const { validateTokenLogin } = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/', validateTokenLogin, createPost);

module.exports = router;