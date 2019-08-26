'use strict';
const PixelPointAPI = require('../API').PixelPointAPI;

module.exports.ListReportCategories = async function(token) {
  validateToken(token);
  return await PixelPointAPI.get(token, 256);
};

module.exports.ListAllProducts = async function(token) {
  validateToken(token);
  return await PixelPointAPI.get(token, 1024);
};

module.exports.ListConfigCategories = async function(token) {
  validateToken(token);
  return await PixelPointAPI.get(token, 512);
};

module.exports.ListSaleTypes = async function(token) {
  validateToken(token);
  return await PixelPointAPI.get(token, 2048);
};

module.exports.ListCoupons = async function(token) {
  validateToken(token);
  return await PixelPointAPI.get(token, 4096);
};

function validateToken(token) {
  if (!token) {
    throw Error('Token was not received');
  }
}
