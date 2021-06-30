const express = require('express');
const route = require('.');
const router = express.Router();

const listController = require('../controllers/ListController');


router.get('/', listController.index_done);


module.exports = router;