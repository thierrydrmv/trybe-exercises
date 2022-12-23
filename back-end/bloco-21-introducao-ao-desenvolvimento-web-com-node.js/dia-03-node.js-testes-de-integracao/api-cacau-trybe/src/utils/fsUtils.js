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
    const newChocolateList = [...data.chocolates, {id: data.chocolates.length + 1, ...newChocolate}]
    const stringfy = JSON.stringify({...data, chocolates: newChocolateList});
    await fs.writeFile(path.resolve(__dirname, '../../data/chocolates.json'), stringfy);
    return newChocolateList[newChocolateList.length -1];
  } catch (error) {
    console.log('Não foi possível adicionar o chocolate');
  }
}

const editChocolate = async (id, obj) => {
  try {
    const data = await readChocolates();
    const changeData = data.chocolates.map((chocolate) => chocolate.id === Number(id) ? {...chocolate, ...obj} : chocolate);
    const stringfy = JSON.stringify({...data, chocolates: changeData});
    await fs.writeFile(path.resolve(__dirname, '../../data/chocolates.json'), stringfy);
    return stringfy;
  } catch (error) {
    console.log('Não foi possível editar o chocolate');
  }
}

module.exports = { readChocolates, addChocolate, editChocolate };