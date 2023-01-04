const validationName = require('./validationName');
const validationPrice = require('./validationPrice');
const validationDescription = require('./validationDescription');
const validationCreateAt = require('./validationCreatedAt');
const validationRating = require('./validationRating');
const validationDifficulty = require('./validationDifficulty');
const validationNewUser = require('./validationNewUser');
const auth = require('./auth');

module.exports = { 
  validationName, 
  validationPrice, 
  validationDescription, 
  validationCreateAt, 
  validationRating, 
  validationDifficulty,
  validationNewUser,
  auth
};
