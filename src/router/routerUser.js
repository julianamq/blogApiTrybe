const express = require('express');
const { validateUser } = require('../middlewares/validationUser');
const { createUser } = require('../controller/controllerUser');

const router = express.Router();

router.post('/', validateUser, createUser);

module.exports = router;