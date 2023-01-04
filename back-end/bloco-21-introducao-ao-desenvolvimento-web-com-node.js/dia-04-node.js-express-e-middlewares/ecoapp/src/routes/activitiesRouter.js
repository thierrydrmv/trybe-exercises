const express = require('express');

const router = express.Router();

router.use(express.json());

router.post('/activities', (req, res) => {
  return res.status(201).send({ message: 'Atividade cadastrada com sucesso' })
});

module.exports = router;