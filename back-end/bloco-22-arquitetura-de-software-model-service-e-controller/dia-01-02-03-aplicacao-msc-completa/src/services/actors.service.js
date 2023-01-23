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
  if(!actor) return { type: 'ACTOR_NOT_FOUND', message: 'Actor not found' };

  return { type: null, message: actor };
}

const createActor = async (body) => {
  const error = schema.validateNewActor(body);
  if (error.type) return error;

  const addActor = await actorsModel.createActor(body);
  const actor = await actorsModel.findById(addActor);

  return { type: null, message: actor}
}

const editActor = async ({ id, body }) => {
  const error = schema.validateEditActor({ id, body });
  if (error.type) return error;

  const actor = await actorsModel.findById(id);
  if(!actor) return { type: 'ACTOR_NOT_FOUND', message: 'Actor not found' };

  const result = await actorsModel.editActor({ id, ...body });
  return { type: null, message: result }
}

const deleteActor = async (actorId) => {
  const error = schema.validateId(actorId);
  if (error.type) return error;

  const actor = await actorsModel.findById(actorId);
  if (!actor) return { type: 'ACTOR_NOT_FOUND', message: 'Actor not found' };

  await actorsModel.deleteActor(actorId);
  return { type: null, message: ''}
};

module.exports = { findAll, findById, createActor, editActor, deleteActor };