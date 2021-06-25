const express = require('express');
const route = require('.');
const router = express.Router();

const listController = require('../controllers/ListController');


router.use('/:slug', listController.show);
router.use('/', listController.index);


module.exports = router;