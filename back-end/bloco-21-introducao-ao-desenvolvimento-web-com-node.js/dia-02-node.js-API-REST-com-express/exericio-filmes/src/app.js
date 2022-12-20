const express = require('express');
const readMovies = require('./utils/readMovies');
const addMovies = require('./utils/addNewMovie');

const app = express();

app.use(express.json());

app.get('/movies', async (req, res) => {
  return res.status(200).send(await readMovies());
});

app.get('/movies/:id', async(req, res) => {
  const { id } = req.params;
  const allMovies = await readMovies();
  const movie = allMovies.filter((m) => m.id === Number(id));
  return res.status(200).send(movie);
});

app.post('/movies', async(req, res) => {
  const bodyData = req.body;
  addMovies(bodyData);
  return res.status(201).send(bodyData);
});

module.exports = app