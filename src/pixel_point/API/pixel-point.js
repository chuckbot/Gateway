'use strict';
const axios = require('axios');
const xmlParser = require('xml2json');
const baseURL = 'http://www.pixelpointhq.com/api/v1/eoi';
const config = { headers: { 'Content-Type': 'application/xml' } };

module.exports.get = async function(token, requestType) {
  const params = `<?xml version="1.0"?>
    <Request>
        <EOITransfer>
            <EOIAuthenticationToken>${token}</EOIAuthenticationToken>
        </EOITransfer>
        <RequestType>${requestType}</RequestType>
    </Request>`;

  return JSON.parse(
    xmlParser.toJson((await axios.post(baseURL, params, config)).data)
  );
};
