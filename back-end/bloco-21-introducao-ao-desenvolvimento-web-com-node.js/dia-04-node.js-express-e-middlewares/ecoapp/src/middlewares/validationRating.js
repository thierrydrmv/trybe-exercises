const validationRating = (req, res, next) => {
  const rating = 'rating';
  const ratingValue = req.body;
  if(ratingValue.description[rating] > 5 || ratingValue.description[rating] < 0 || ratingValue.description[rating] % 1 !== 0) {
    return res.status(400).send({ message: 'O campo rating deve ser um número inteiro entre 1 e 5'})
  }
  return next();
}

module.exports = validationRating;