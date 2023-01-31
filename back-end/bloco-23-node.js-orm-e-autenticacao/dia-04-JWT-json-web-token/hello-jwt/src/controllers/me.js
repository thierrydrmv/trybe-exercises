const me = (req, res) => {
  const { admin, username } = req.user;
  return res.status(200).json({ username, admin });
}

module.exports = me;