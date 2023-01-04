const validateCreatedAt = (req, res, next) => {
  const createdAt = 'createdAt'
  const date = req.body.description[createdAt];
  const dateFormat = date.split('/');
  if (Number(dateFormat[0]) > 31 || Number(dateFormat[1]) > 12 || Number(dateFormat[2]) < 2022 || Number(dateFormat[2]) > 9999) {
    return res.status(400).send({ message: "O campo createdAt deve ter o formato \'dd/mm/aaaa\'"})
  }
  return next();
}

module.exports = validateCreatedAt; 