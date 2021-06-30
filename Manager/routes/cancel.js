const express = require('express');
const route = require('.');
const router = express.Router();

const siteController = require('../controllers/SiteController');


router.post('/:_id', siteController.cancel);



module.exports = router;