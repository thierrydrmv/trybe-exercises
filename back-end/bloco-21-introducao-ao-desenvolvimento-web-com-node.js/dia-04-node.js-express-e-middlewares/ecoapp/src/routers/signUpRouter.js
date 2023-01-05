const express = require('express');
const { validationNewUser } = require('../middlewares');
const generateToken = require('../utils/generateToken');
const router = express.Router();

router.use(express.json());

router.post('/signup', validationNewUser, (_req, res) => {
  const token = generateToken();
  return res.status(200).send({ token })
})

module.exports = router;