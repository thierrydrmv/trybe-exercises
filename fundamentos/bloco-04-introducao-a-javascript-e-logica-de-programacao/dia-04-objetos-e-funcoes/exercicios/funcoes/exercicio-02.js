function ordenar(array) {
    let numero = 0;
    for (index=0; index<array.length; index +=1) {
        if (array[index] > numero) {
            numero = array[index]
        }
    }
    let local = 0;
    for (index2=0; index2<array.length; index2 +=1) {
        if(numero === array[index2]) {
            local = index2
        }
    }
    console.log(local)
    return local
}

ordenar([2, 3, 6, 7, 10, 1])
