const restrictAccess = (req, res) => {
  return res.status(200).json({ secretInfo: "Peter Parker é o Homem-Arannha" });
}

module.exports = restrictAccess;