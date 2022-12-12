const express = require('express');
const { getAllPosts, getPostById } = require('../controller/blogPostController');
const { validateTokenLogin } = require('../middlewares/validateLogin');

const router = express.Router();

router.get('/', validateTokenLogin, getAllPosts);
router.get('/:id', validateTokenLogin, getPostById);
module.exports = router;