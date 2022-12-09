const express = require('express');
const { getAllPosts } = require('../controller/postController');
const { validateTokenLogin } = require('../middlewares/validateLogin');

const router = express.Router();

router.get('/post', validateTokenLogin, getAllPosts);

module.exports = router;