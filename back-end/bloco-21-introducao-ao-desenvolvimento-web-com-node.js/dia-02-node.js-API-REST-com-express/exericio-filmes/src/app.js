const express = require('express');
const { readMovies, addMovies, editMovies, deleteMovie } = require('./utils');

const app = express();

app.use(express.json());

app.get('/movies/search', async (req, res) => {
  const { q } = req.query;
  const allMovies = await readMovies();
  const movie = allMovies.filter((m) => (m.movie).toLowerCase().includes(q))
  return res.status(200).send(movie)
})

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

app.put('/movies/:id', async(req, res) => {
  const { id } = req.params;
  const bodyData = req.body;
  const allMovies = await readMovies();
  if (!allMovies.find((m) => m.id === Number(id))) return res.status(404).send({message: 'Movie Not Found'})
  await editMovies(id, bodyData)
  return res.status(200).send(allMovies)
})

app.delete('/movies/:id', async(req, res) => {
  const { id } = req.params;
  deleteMovie(id)
  return res.status(200).end();
})

module.exports = app