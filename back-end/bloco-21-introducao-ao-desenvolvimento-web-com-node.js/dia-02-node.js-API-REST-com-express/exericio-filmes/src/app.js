const express = require('express');
const movies = require('./utils/readMovies');

const app = express();

app.use(express.json());

app.get('/movies', async (req, res) => {
  return res.status(200).send(await movies());
})

module.exports = app