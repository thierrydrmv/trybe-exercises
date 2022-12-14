const fs = require('fs').promises;
const path = require('path')

const readSimpsons = async () => {
  try {
    const personagens = await fs.readFile(path.resolve(__dirname, '../simpsons.json'));
    const response = JSON.parse(personagens);
    return response
  } catch (err) {
    return err.message
  }
  }

module.exports = readSimpsons;