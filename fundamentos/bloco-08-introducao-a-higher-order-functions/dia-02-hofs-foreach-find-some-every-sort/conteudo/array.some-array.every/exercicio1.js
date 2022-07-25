const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => names.some((nome, index) => arr[index] === name)
  
console.log(hasName(names, 'Ana'))