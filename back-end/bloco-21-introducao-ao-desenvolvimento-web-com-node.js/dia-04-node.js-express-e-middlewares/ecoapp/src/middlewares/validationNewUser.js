const validationNewUser = (req, res, next) => {
  const validateKeysUser = ['Email', 'Senha', 'Primeiro_Nome', 'Telefone'];
  const { Email, Senha, Primeiro_Nome, Telefone } = req.body;

  if (validateKeysUser.every((property) => property in req.body) && Email && Senha && Primeiro_Nome && Telefone) {
    return next();
  }
  return res.status(401).send({ message: 'Campos ausentes!'})
}

module.exports = validationNewUser;