const validationDifficulty = (req, res, next) => {
  const difficulty = 'difficulty'
  const difficultyValue = req.body.description
  switch(difficultyValue[difficulty]) {
    case 'Fácil':
      return next();
    case 'Médio':
      return next();
    case 'Difícil':
      return next();
    default:
      return res.status(400).send({ message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'"})
  }
}

module.exports = validationDifficulty;