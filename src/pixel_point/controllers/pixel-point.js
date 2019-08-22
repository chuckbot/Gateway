'use strict';
const PixelPointRepository = require('../repositories').PixelPointRepository;

module.exports.ListReportCategories = (req, res) => {
  PixelPointRepository.ListReportCategories()
    .then(value => res.json(value))
    .catch(error => res.status(500).json({ message: error.message }));
};

module.exports.ListAllProducts = (req, res) => {
  PixelPointRepository.ListAllProducts()
    .then(value => res.json(value))
    .catch(error => res.status(500).json({ message: error.message }));
};
