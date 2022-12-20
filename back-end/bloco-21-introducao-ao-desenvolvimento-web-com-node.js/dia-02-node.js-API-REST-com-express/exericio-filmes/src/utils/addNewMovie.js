const fs = require('fs').promises;
const path = require('path');
const readMovies = require('./readMovies');

const newMovie = async (obj) => {
  try {
    const movies = await readMovies();
    const newMovieList = [...movies, {id: movies.length + 1, ...obj}];
    const stringList = JSON.stringify(newMovieList);
    await fs.writeFile(path.resolve(__dirname, '../../movies.json'), stringList);
  } catch (error) {
    console.log('Falha ao adicionar um novo filme');
  }
}

module.exports = newMovie;