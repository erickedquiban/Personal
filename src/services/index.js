const users = require('./users/users.service.js');
const vehicle = require('./vehicle/vehicle.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(vehicle);
};
