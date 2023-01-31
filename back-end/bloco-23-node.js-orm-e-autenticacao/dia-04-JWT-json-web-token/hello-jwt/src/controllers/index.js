const ping = require('./ping');
const login = require('./login');
const me = require('./me');
const restrictAccess = require('./restrict')

module.exports = {
  ping,
  login,
  me,
  restrictAccess,
};
