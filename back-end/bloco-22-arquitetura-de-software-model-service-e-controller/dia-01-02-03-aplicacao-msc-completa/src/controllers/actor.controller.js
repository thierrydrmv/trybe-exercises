const { actorsService } = require('../services')
const mapError = require('../utils/errorMap');

const allActors = async (_req, res) => {
  const { message } = await actorsService.findAll();

  return res.status(200).send(message)
}

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await actorsService.findById(id);
  if (type) return res.status(mapError(type)).json({ message })

  return res.status(200).json(message)
}

const createActor = async (req, res) => {
  const { body } = req;
  const { type, message } = await actorsService.createActor(body);
  if (type) return res.status(mapError(type)).json({ message });

  return res.status(201).json(message);
}

const editActor = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { type, message } = await actorsService.editActor({ id, body });
  if (type) return res.status(mapError(type)).json({ message });

  return res.status(200).json(message);
}

const deleteActor = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await actorsService.deleteActor(id);
  if (type) return res.status(mapError(type)).json({ message });

  return res.status(204).end();
}

module.exports = { allActors, findById, createActor, editActor, deleteActor };