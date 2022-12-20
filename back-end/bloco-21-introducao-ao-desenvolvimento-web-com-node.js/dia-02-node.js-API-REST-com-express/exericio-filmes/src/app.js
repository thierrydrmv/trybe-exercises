const express = require('express');
const movies = require('./utils/readMovies');

const app = express();

app.use(express.json());

app.get('/movies', async (req, res) => {
  return res.status(200).send(await movies());
})

app.get('/movies/:id', async(req, res) => {
  const { id } = req.params;
  const allMovies = await movies();
  const movie = allMovies.filter((m) => m.id === Number(id));
  return res.status(200).send(movie);
})

module.exports = app