'use strict';

const apiKey = require('../models/api-key.js');
const requestHelper = require('../helpers/request-helper.js');

module.exports.activate = (event, context, callback) => {
  const {apiKey = '', email = ''} = requestHelper.getJsonData(event.body);
  apiKey.activate(apiKey, email, callback);
};

module.exports.create = (event, context, callback) => {
  const {email = ''} = requestHelper.getJsonData(event.body);
  apiKey.create(email, callback);
};
