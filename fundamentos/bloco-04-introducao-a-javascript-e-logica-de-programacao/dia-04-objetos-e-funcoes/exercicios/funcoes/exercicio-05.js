function arrayInteiros(array) {
    // gerando um array com a quantidade de vezes que cada número aparece e registrando no seu indice
    let contador = 0
    let value = 0
    let valor = [];
    for(let i = 0; i<array.length; i += 1) {
        for(let y = 0; y<array.length; y += 1) {
        if (array[i] === array[y]) {
            contador += 1
        }
    }
    valor.push(contador)
    contador = 0
}
// registrando o maior número do array 
// console.log(valor)
    let numero = Math.max(...valor)
    // registrando na variavel posição o numero que aparece mais vezes no array
    // console.log(valor.indexOf(numero))
    let posicao = valor.indexOf(numero)
    console.log(array[posicao])

    return array[posicao]
}

arrayInteiros([2, 3, 2, 5, 8, 2, 3])