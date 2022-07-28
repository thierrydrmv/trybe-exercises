const listaSuper = (...args) => {
    return args.reduce((acc, curr)=> acc.concat(`${curr}, `),'')
}

console.log(listaSuper("Feijão", "Batata", "Frango", "Macarrão"));