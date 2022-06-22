const triangulo = 3
const quadrado = 4
const hexagono = 6

if (triangulo > quadrado && triangulo > hexagono) {
    console.log(triangulo)
}
else if (quadrado > hexagono && quadrado > triangulo) {
    console.log(quadrado)
}
else {
    console.log(hexagono)
}