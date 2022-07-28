
const sum = (...numeros) => {
    return numeros.reduce((total, atual) => total + atual, 0);
    
}
console.log(sum(1,3,12,14));
