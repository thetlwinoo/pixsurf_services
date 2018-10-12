// Initializes the `addresses` service on path `/addresses`
const createService = require('feathers-mongodb');
const hooks = require('./addresses.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/addresses', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('addresses');

  mongoClient.then(db => {
    service.Model = db.collection('addresses');
  });

  service.hooks(hooks);
};
