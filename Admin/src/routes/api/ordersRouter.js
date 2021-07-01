const express = require('express')
const router = express.Router()

//Controller
const dashboardController = require('../../controllers/api/dashboardController');

// [GET] /api/orders/:id
router.get('/:id', dashboardController.detail);


module.exports = router;