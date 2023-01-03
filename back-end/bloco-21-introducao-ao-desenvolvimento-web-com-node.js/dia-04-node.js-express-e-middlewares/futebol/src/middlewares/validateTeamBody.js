const validateTeamBody = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((property) => property in req.body)) {
    next();
  } else {
    return res.status(400);
  }
}

module.exports = validateTeamBody;