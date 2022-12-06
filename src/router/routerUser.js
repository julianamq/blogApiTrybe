const express = require('express');
const { validationLogin } = require('../middlewares/validationLogin');

const validateUser = require('../middlewares/validationUser');
const { createUser } = require('../service/validateUserService');

const router = express.Router();

router.post('/', validateUser, validationLogin, createUser);

module.exports = router;