const fs = require('fs').promises;
const path = require('path');
const readFile = require('./readfile');

const handleDelete = async(param) => {
  try {
    const personagens = await readFile();
    let newList = [...personagens]
    for(index = 0; index<=param.length; index++) {
      newList = newList.filter((i) => i.id !== param[index])
    }
    const stringList = JSON.stringify(newList)
    await fs.writeFile(path.resolve(__dirname, '../simpsons.json'), stringList)
  } catch (err) {
    console.log(err.message)
  }
}

const cutFile = async (cut) => {
  try {
    const personagens = await readFile();
    let newList = personagens.filter((char) => parseInt(char.id) < cut + 1)
    console.log(newList);
    const stringList = JSON.stringify(newList)
    await fs.writeFile(path.resolve(__dirname, '../simpsonFamily.json'), stringList)
  } catch (err) {
    console.log(err.message)
  }
}

const addChar = async (char) => {
  try {
    const personagens = await readFile();
    let newList = [...personagens, char]
    const stringList = JSON.stringify(newList)
    await fs.writeFile(path.resolve(__dirname, '../simpsonFamily.json'), stringList)
  } catch (err) {
    console.log(err.message)
  }
}

const editChar = async (name, newname) => {
  try {
    const personagens = await readFile();
    let newList = [...personagens];
    let newName = newList.filter((char) => char.name === name);
    newName[0].name = newname;
    const stringList = JSON.stringify(newList)
    await fs.writeFile(path.resolve(__dirname, '../simpsonFamily.json'), stringList)
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = {handleDelete, cutFile, addChar, editChar};