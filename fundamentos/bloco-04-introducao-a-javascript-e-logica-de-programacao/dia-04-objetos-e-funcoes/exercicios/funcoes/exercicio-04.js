function maiorArray (array) {
    let letras = "";
    for (let i=0; i<array.length;i+=1) {
        if (array[i].length > letras.length)
        letras = array[i]
    }
    console.log(letras);
    return letras
}

maiorArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])