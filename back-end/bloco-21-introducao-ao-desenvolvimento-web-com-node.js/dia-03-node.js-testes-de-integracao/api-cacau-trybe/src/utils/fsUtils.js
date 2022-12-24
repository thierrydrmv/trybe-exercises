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

const readChocolatesById = async (id) => {
  try {
    const chocolates = await readChocolates();
    const chocolate = chocolates.chocolates.find((c) => c.id === Number(id));
  
    return chocolate;
  } catch (error) {
    console.log('Não foi possível ler o chocolate com esse Id')
  }
}

const readChocolatesByBrandId = async (id) => {
  try {
    const chocolates = await readChocolates();
    const chocolate = chocolates.chocolates.filter((c) => c.brandId === Number(id));
  
    return chocolate;
  } catch (error) {
    console.log('Não foi possível ler o chocolate com esse Id')
  }
}

const readChocolatesByName = async (q) => {
  try {
    const chocolates = await readChocolates();
    const chocolate = chocolates.chocolates.filter((c) => (c.name).toLowerCase().includes((q).toLowerCase()));

    return chocolate;
  } catch (error) {
    console.log("Não foi possível ler os chocolates");
  }
}

const addChocolate = async (newChocolate) => {
  try {
    const data = await readChocolates();
    const newChocolateList = [...data.chocolates, {id: data.chocolates.length + 1, ...newChocolate}]
    const stringfy = JSON.stringify({...data, chocolates: newChocolateList}, null, 2);
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
    const stringfy = JSON.stringify({...data, chocolates: changeData}, null, 2);
    await fs.writeFile(path.resolve(__dirname, '../../data/chocolates.json'), stringfy);
    return stringfy;
  } catch (error) {
    console.log('Não foi possível editar o chocolate');
  }
}

const removeChocolate = async (id) => {
  const chocolates = await readChocolates();
  const index = chocolates.chocolates.findIndex((c) => c.id === Number(id));
  chocolates.chocolates.splice(index, 1);
  try {
    await fs.writeFile(path.resolve(__dirname, '../../data/chocolates.json'), JSON.stringify(chocolates, null, 2));
    return chocolates;
  } catch (error) {
    console.log('Não foi possível remover esse chocolate');    
  }
}

module.exports = { readChocolates, addChocolate, editChocolate, readChocolatesById, readChocolatesByBrandId, readChocolatesByName, removeChocolate };