'use strict';
const PixelPointController = require('../controllers').PixelPointController;
const router = require('express').Router();

router.get('/', PixelPointController.ListReportCategories);
router.get('/products', PixelPointController.ListAllProducts);

module.exports = router;
