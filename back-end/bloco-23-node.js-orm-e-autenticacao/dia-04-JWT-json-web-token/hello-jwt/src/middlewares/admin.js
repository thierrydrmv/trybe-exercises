const adminData = (req, _res, next) => {
 if(!req.user.admin) {
  const err = new Error("Restricted access");
  err.statusCode = 403;
  return next(err);
 }
 return next();
}

module.exports = adminData;