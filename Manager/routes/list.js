const express = require('express');
const route = require('.');
const router = express.Router();

const listController = require('../controllers/ListController');


router.get('/:slug', listController.show);
router.get('/', listController.index);


module.exports = router;