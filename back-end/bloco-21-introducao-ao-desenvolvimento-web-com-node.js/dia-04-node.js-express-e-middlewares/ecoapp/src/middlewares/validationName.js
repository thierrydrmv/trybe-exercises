
const validationName = (req, res, next) => {
  const name = 'name';

  if (req.body[name]?.length < 4) {
    return res.status(400).send({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  } else if(!(name in req.body)) {
    return res.status(400).send({ message: 'O campo name é obrigatório' });
  }
    return next();
  }

module.exports = validationName;