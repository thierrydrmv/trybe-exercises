const authenticationUser = (req, res, next) => {
  const { autorization } = req.headers;
  if (!autorization || autorization.length !== 16) {
    return res.status(401).send({ message: "Token Inválido!" })
  }
  return next();
}

module.exports = authenticationUser;