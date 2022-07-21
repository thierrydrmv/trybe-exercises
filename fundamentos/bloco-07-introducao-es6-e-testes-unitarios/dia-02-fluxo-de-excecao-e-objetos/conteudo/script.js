const objeto = (object, chave, valor) => {
    object[chave] = valor
    return object
}

console.log(objeto({nome:'thierry'}, 'sobrenome', 'varela'));
