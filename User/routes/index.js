const express = require('express');
const router = express.Router();
const menuController = require('../controller/menuController');

/* GET home page. */
router.get('/', menuController.menuPage);

router.get('/add-to-cart/:id', menuController.addToCart)
module.exports = router;
