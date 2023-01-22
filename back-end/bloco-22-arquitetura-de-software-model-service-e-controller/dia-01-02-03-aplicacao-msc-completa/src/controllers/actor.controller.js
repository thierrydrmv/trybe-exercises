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

module.exports = { allActors, findById };