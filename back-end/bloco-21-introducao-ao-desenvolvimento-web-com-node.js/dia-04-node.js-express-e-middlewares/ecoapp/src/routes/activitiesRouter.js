const express = require('express');
const { validationName, validationPrice, validationDescription, validationCreateAt, validationRating, validationDifficulty, authenticationUser } = require('../middlewares/');

const router = express.Router();

router.use(express.json());

router.post('/activities', authenticationUser, validationName, validationPrice, validationDescription, 
validationCreateAt, validationRating, validationDifficulty, (_req, res) => {
  return res.status(201).send({ message: 'Atividade cadastrada com sucesso' })
});

module.exports = router;