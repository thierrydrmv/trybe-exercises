const teams = require('../file/data');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  if(team) {
    next();
  } else {
    return res.status(404).send({message: 'Id not found'});
  }
}

module.exports = existingId;