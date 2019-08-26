'use strict';
const PixelPointRepository = require('../repositories').PixelPointRepository;

module.exports.ListReportCategories = (req, res) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  PixelPointRepository.ListReportCategories(token)
    .then(value => res.json(value))
    .catch(error => res.status(500).json({ message: error.message }));
};

module.exports.ListAllProducts = (req, res) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  PixelPointRepository.ListAllProducts(token)
    .then(value => res.json(value))
    .catch(error => res.status(500).json({ message: error.message }));
};

module.exports.ListConfigCategories = (req, res) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  PixelPointRepository.ListConfigCategories(token)
    .then(value => res.json(value))
    .catch(error => res.status(500).json({ message: error.message }));
};

module.exports.ListSaleTypes = (req, res) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  PixelPointRepository.ListSaleTypes(token)
    .then(value => res.json(value))
    .catch(error => res.status(500).json({ message: error.message }));
};

module.exports.ListCoupons = (req, res) => {
  const token = req.headers['x-access-token'] || req.headers['authorization'];
  PixelPointRepository.ListCoupons(token)
    .then(value => res.json(value))
    .catch(error => res.status(500).json({ message: error.message }));
};