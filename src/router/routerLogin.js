const express = require('express');
const validateTokenLogin = require('../controller/controllerLogin');

const router = express.Router();

router.post('/', validateTokenLogin);

module.exports = router;