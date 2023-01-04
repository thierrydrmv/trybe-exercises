const authenticationUser = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 16) {
    return res.status(401).send({ message: "Token Inválido!" })
  }
  return next();
}

module.exports = authenticationUser;