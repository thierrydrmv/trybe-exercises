// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'laranja', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['chocolate', 'mexirica', 'granola'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional]

console.log(fruitSalad(specialFruit, additionalItens));