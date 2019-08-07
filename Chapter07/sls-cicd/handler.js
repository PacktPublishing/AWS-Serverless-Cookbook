'use strict';
const moment = require('moment');

module.exports.logger = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Serverless CI/CD Demo',
      version: "v1.0",
      timestamp: moment().unix()
    })
  };
};
