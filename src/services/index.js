const addresses = require('./addresses/addresses.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(addresses);
};
