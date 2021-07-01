const express = require('express');
const route = require('.');
const router = express.Router();

const siteController = require('../controllers/SiteController');

// router.post('/cancel/:_id', siteController.cancel);
router.post('/:_id', siteController.continue);
router.get('/menu', siteController.soon);
router.get('/staff', siteController.soon);
router.get('/:_id', siteController.show);
router.get('/', siteController.index);


module.exports = router;