const cartController = require('../controller/cartController');
const express = require('express');
const router = express.Router();

router.post('/', cartController.addToCart);
module.exports = router;
