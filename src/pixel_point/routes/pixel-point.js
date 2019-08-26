'use strict';
const PixelPointController = require('../controllers').PixelPointController;
const router = require('express').Router();

router.get('/', PixelPointController.ListReportCategories);
router.get('/products', PixelPointController.ListAllProducts);
router.get('/config-categories', PixelPointController.ListConfigCategories);
router.get('/sale-types', PixelPointController.ListSaleTypes);
router.get('/coupons', PixelPointController.ListCoupons);


module.exports = router;
