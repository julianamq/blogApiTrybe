const express = require('express');
const { validateUser } = require('../middlewares/validationUser');
const { createUser, getUserById } = require('../controller/controllerUser');
const { getUser } = require('../controller/controllerUser');
const { validateTokenLogin } = require('../middlewares/validateLogin');
// const { validationLogin } = require('../middlewares/validationLogin');

const router = express.Router();

router.post('/', validateUser, createUser);
router.get('/', validateTokenLogin, getUser);
router.get('/:id', validateTokenLogin, getUserById);

module.exports = router;