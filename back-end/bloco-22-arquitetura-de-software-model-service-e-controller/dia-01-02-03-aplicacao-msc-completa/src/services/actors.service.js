const { actorsModel } = require('../models')
const schema = require('./validations/validateInputValues');

const findAll = async () => {
  const actors = await actorsModel.findAll();
  return { type: null, message: actors };
}

const findById = async (actorId) => {
  const error = schema.validateId(actorId);
  if(error.type) return error;

  const actor = await actorsModel.findById(actorId);
  if(!actor.length) return { type: 'ACTOR_NOT_FOUND', message: 'Actor not found'};

  return { type: null, message: actor };
}

module.exports = { findAll, findById };