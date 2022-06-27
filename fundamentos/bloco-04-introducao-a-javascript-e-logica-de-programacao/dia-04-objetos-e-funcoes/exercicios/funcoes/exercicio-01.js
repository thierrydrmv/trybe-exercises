function palidromo(palavra) {
    let reversal = palavra.split('').reverse().join('')
    return reversal === palavra
}

console.log(palidromo("arara")
)