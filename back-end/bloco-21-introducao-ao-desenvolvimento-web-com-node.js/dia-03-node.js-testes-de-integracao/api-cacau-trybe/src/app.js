const express = require('express');
const {readChocolates, addChocolate} = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/chocolates', async (_req, res) => {
  const chocolate = await readChocolates();
  return res.status(200).send(chocolate);
});

app.get('/chocolates/:id', async (req, res) => {
  const chocolates = await readChocolates();
  const { id } = req.params;

  const chocolate = chocolates.find((c) => c.id === Number(id));

  if (!chocolate) return res.status(404).send({message: 'Id not found'});

  return res.status(200).send(chocolate);
});

app.get('/chocolates/brand/:id', async (req, res) => {
  const chocolates = await readChocolates();
  const { id } = req.params;

  const chocolate = chocolates.find((c) => c.brandId === Number(id));

  if (!chocolate) return res.status(404).send({message: 'brandId not found!'});

  return res.status(200).send(chocolate);
});

app.post('/chocolates', async (req, res) => {
  const chocolates = await addChocolate(req.body);

  return res.status(201).send(chocolates);
})

module.exports = app;