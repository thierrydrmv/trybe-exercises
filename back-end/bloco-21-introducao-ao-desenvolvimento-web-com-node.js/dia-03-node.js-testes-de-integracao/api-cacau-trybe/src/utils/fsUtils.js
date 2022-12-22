const fs = require('fs').promises;
const path = require('path');

const readChocolates = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../../data/chocolates.json'));
    const chocolate = JSON.parse(data);
    return chocolate;
  } catch (error) {
    console.log('Não foi possível ler os chocolates');
  }
}

const addChocolate = async (newChocolate) => {
  try {
    const data = await readChocolates();
    const newChocolateList = [...data, {id: data.length + 1, ...newChocolate}]
    const stringfy = JSON.stringify(newChocolateList);
    await fs.writeFile(path.resolve(__dirname, '../../data/chocolates.json'), stringfy);
    return newChocolateList[newChocolateList.length -1];
  } catch (error) {
    console.log('Não foi possível adicionar o chocolate');
  }
}

module.exports = { readChocolates, addChocolate };