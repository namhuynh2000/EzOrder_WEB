const express = require('express');
const route = require('.');
const router = express.Router();

const siteController = require('../controllers/SiteController');


router.get('/', siteController.index);

module.exports = router;