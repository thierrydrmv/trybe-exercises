const fs = require('fs').promises;
const path = require('path');

const readMoviesData = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../movies.json'))
    const movies = JSON.parse(data)
    return movies;
  } catch (error) {
    console.log('Erro na leitura do arquivo');
  }
}

module.exports = readMoviesData;