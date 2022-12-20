const fs = require('fs').promises;
const path = require('path');

const readMoviesData = () => {
  try {
    const data = fs.readFile(path.resolve(__dirname, '../movies.json'))
    const movies = JSON.parse(data)
    console.log(movies);
  } catch (error) {
    console.log('Erro na leitura do arquivo');
  }
}

readMoviesData();