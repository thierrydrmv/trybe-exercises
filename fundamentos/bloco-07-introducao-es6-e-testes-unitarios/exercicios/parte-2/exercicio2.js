const maiorPalavra = (frase) => {
    let array = frase.split(' ');
    let array2 = [];
    for (let i = 0; i < array.length; i += 1) {
    array2.push(array[i].length)
    }
    const max = Math.max(...array2)
    const word = array[array2[max]]
    return word
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));