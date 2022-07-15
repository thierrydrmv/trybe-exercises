const fatorial = (number) => {
    let resultado = number
    for (let i = 1; i < number; i += 1)
    resultado *= i

    return resultado;
}
console.log(fatorial(5));