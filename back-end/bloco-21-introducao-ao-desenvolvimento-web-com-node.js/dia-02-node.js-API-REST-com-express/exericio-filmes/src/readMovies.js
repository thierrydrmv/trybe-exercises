const fs = require('fs').promises;
const path = require('path');

const readMoviesData = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../movies.json'))
    const movies = JSON.parse(data)
    console.log(movies);
  } catch (error) {
    console.log('Erro na leitura do arquivo');
  }
}

readMoviesData();