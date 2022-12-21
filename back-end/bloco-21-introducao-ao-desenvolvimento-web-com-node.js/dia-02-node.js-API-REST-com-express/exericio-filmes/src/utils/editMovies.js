const fs = require('fs').promises;
const path = require('path');
const readMovies = require('./readMovies');

const editMovies = async (id, obj) => {
    const movies = await readMovies();
    const moviesList = [...movies];
    const index = moviesList.findIndex((movie) => movie.id === Number(id))
    moviesList[index] = {...movies[index], ...obj}
    console.log(obj);
    const stringList = JSON.stringify(moviesList);
  try {
    await fs.writeFile(path.resolve(__dirname, '../../movies.json'), stringList)
    return moviesList;
  } catch (error) {
    console.log('Não foi possível editar o filme')
  }
}

module.exports = editMovies;