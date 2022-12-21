const fs = require('fs').promises;
const path = require('path');
const readMovies = require('./readMovies');

const deleteMovie = async (id) => {
  const movies = await readMovies();
  const newList = [...movies];
  const movieIndex = movies.findIndex((m) => m.id === Number(id));
  newList.splice(movieIndex, 1);
  const stringList = JSON.stringify(newList);
  try {
    await fs.writeFile(path.resolve(__dirname, '../../movies.json'), stringList)
    return newList;
  } catch (error) {
    console.log('Não foi possível excluir esse filme')
  }
}

module.exports = deleteMovie;