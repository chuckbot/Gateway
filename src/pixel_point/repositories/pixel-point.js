'use strict';
const axios = require('axios');
const xmlParser = require('xml2json');
const baseURL = 'http://www.pixelpointhq.com/api/v1/eoi';
const config = { headers: { 'Content-Type': 'application/xml' } };

module.exports.ListReportCategories = async function() {
  const params = `<?xml version="1.0"?>
  <Request>
  <EOITransfer>
    <EOIAuthenticationToken>TX712z41-3CB274D9A556DF</EOIAuthenticationToken>
  </EOITransfer>
  <RequestType>256</RequestType>
  <Transaction>
    
  </Transaction>
  
  </Request>`;

  try {
    return JSON.parse(
      xmlParser.toJson((await axios.post(baseURL, params, config)).data)
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports.ListAllProducts = async function() {
  const params = `<?xml version="1.0"?>
  <Request>
  <RequestType>1024</RequestType>
  <EOITransfer>
    <EOIAuthenticationToken>TX712z41-3CB274D9A556DF</EOIAuthenticationToken>
  </EOITransfer>
  </Request>`;

  try {
    return JSON.parse(
      xmlParser.toJson((await axios.post(baseURL, params, config)).data)
    );
  } catch (e) {
    console.log(e);
  }
};