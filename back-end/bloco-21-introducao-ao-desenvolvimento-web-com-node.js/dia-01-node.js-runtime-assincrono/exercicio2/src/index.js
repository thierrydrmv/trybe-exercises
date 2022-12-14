const read = require('./readfile');
const {handleDelete, cutFile, addChar, editChar} = require('./editFile');

const idName = async() => {
  const data = await read();
  data.forEach((item) => console.log(`${item.id} - ${item.name}`))
}

const id = async (id) => {
  const data = await read();
  const promise = new Promise((resolve, reject) => {
    if (data.every((item) => item.id !== id)) reject(new Error("id não encontrado"))
    const resultado = data.filter((item) => item.id === id)
    resolve(resultado)
  })

  return promise
}

const main = async () => {
  const data = await read();
  // console.log(await id('1'));
  // console.log(await idName());
  // await handleDelete(['10', '6']);
  // await cutFile(4);
  // await addChar({"id":(parseInt(data[data.length-1].id) + 1).toString(),"name":"Nelson Muntz"})
  await editChar('Nelson Muntz', 'Maggie Simpson');
}

main();