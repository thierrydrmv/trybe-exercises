const hof = (numero, teste) => {
    let sorteio = Math.floor(Math.random() * 5) + 1;
    if (teste(numero, sorteio)) {
        return 'Parabéns você ganhou'
    }
    return 'Tente novamente'
}

const equal = (number, sort) => {  
    if (sort === number){ 
        return true
    }
    return false
}

console.log(hof(3,equal));