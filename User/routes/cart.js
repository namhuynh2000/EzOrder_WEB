const cartController = require('../controller/cartController');
const express = require('express');
const router = express.Router();

router.post('/', cartController.addToCart);

router.post('/update-cart', cartController.updateToCart);

router.post('/order', cartController.order);

router.get('/', cartController.getCart);
module.exports = router;
