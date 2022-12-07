const express = require('express');
const newCategoriesValidate = require('../middlewares/validateCategory');
const { newCategories, getCategory } = require('../controller/categoryController');
const { validateTokenLogin } = require('../middlewares/validateLogin');

const router = express.Router();

router.post('/', newCategoriesValidate.newCategories, validateTokenLogin, newCategories);
router.get('/', validateTokenLogin, getCategory);
module.exports = router;