const validationPrice = (req, res, next) => {
  const price = 'price';
  const priceKey = req.body[price];

  if(priceKey <= 0 || typeof(priceKey) !== 'number'){
    return res.status(400).send({ message : 'O campo price deve ser um número maior ou igual a zero'});
  } else if(!(price in req.body)) {
    return res.status(400).send({ message: 'O campo price é obrigatório'});
  }
  return next();
}

module.exports = validationPrice;