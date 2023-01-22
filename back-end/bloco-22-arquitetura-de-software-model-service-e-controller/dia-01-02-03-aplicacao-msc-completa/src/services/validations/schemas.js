const Joi = require('joi');

const stringSchema = Joi.string().min(3).required();

const idSchema = Joi.number().integer().min(1).required();

const newActorSchema = Joi.object({
  first_name: stringSchema,
  last_name: stringSchema,
});

const editActorSchema = Joi.object({
  id: idSchema,
  first_name: stringSchema,
  last_name: stringSchema,
})

module.exports = { idSchema, newActorSchema, editActorSchema };