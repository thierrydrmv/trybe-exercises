const validateActorName = (req, res, next) => {
  const { first_name, last_name } = req.body;
  if (!first_name) return res.status(400).json({ message: '"first_name" is required' });
  
  if (!last_name) return res.status(400).json({ message: '"last_name" is required' }); 

  return next();
}

module.exports = validateActorName;