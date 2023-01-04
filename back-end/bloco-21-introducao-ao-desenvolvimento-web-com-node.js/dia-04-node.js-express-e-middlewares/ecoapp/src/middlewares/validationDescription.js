const validationDescription = (req, res, next) => {
  const description = 'description';
  const validateDescriptionKeys = ['rating', 'difficulty', 'createdAt']

  if (validateDescriptionKeys.every((property) => property in req.body[description])) {
    return next();
  } else if(!(description in req.body)) {
    return res.status(400).send({ message: 'O campo description é obrigatório' })
  }
  return res.status(400).send({ message: 'Os campos createdAt, rating e difficulty são obrigatórios'})
}

module.exports = validationDescription;