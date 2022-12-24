const express = require('express');
const { readChocolates, addChocolate, editChocolate, readChocolatesById, readChocolatesByBrandId, readChocolatesByName, removeChocolate } = require('./utils/fsUtils');

const app = express();

app.use(express.json());


app.get('/chocolates/search', async (req, res) => {
  const { q } = req.query;
  const chocolate = await readChocolatesByName(q)
  if (!chocolate.length) return res.status(404).json([])
  
  return res.status(200).json(chocolate);
});

app.get('/chocolates', async (_req, res) => {
  const chocolate = await readChocolates();
  return res.status(200).json(chocolate);
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await readChocolates();
  
  return res.status(200).json({ "totalChocolates": chocolates.chocolates.length });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;

  const chocolate = await readChocolatesById(id);

  if (!chocolate) return res.status(404).json({message: 'Id not found'});

  return res.status(200).json(chocolate);
});

app.get('/chocolates/brand/:id', async (req, res) => {
  const { id } = req.params;

  const chocolate = await readChocolatesByBrandId(id);

  if (!chocolate.length) return res.status(404).json({message: 'brandId not found!'});

  return res.status(200).json(chocolate);
});

app.post('/chocolates', async (req, res) => {
  const chocolates = await addChocolate(req.body);

  return res.status(201).json(chocolates);
});

app.put('/chocolates/:id', async (req, res) => {
  const chocolates = await readChocolates();
  const { id } = req.params;
  await editChocolate(id, req.body);
  const chocolate = chocolates.chocolates.find((c) => c.id === Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate Id not found' });

  return res.status(200).json({id: Number(id), ...req.body})
});

app.delete('/chocolates/:id', async (req, res) => {
  const chocolates = await readChocolates();
  const { id } = req.params;
  await removeChocolate(id);
  const chocolate = chocolates.chocolates.find((c) => c.id === Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Id not found' });
  return res.status(204).end();
})

module.exports = app;