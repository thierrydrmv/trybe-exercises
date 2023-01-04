const validationName = require('./validationName');
const validationPrice = require('./validationPrice');
const validationDescription = require('./validationDescription');
const validationCreateAt = require('./validationCreatedAt');
const validationRating = require('./validationRating');
const validationDifficulty = require('./validationDifficulty');
const validationNewUser = require('./validationNewUser');
const authenticationUser = require('./authenticationUser');

module.exports = { 
  validationName, 
  validationPrice, 
  validationDescription, 
  validationCreateAt, 
  validationRating, 
  validationDifficulty,
  validationNewUser,
  authenticationUser
};
