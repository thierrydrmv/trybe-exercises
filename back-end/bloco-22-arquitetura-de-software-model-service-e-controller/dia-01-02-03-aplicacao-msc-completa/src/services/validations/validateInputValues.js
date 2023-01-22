const { idSchema, newActorSchema, editActorSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

const validateNewActor = (body) => {
  const { error } = newActorSchema.validate(body);
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
}

const validateEditActor = ({ id, body }) => {
  const actor = { id, ...body };
  const { error } = editActorSchema.validate(actor);
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
}

module.exports = { validateId, validateNewActor, validateEditActor };