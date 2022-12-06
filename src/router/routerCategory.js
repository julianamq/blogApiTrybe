const express = require('express');
const newCategoriesValidate = require('../middlewares/validateCategory');
const { newCategories } = require('../controller/categoryController');
const { validateTokenLogin } = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/', newCategoriesValidate.newCategories, validateTokenLogin, newCategories);

module.exports = router;