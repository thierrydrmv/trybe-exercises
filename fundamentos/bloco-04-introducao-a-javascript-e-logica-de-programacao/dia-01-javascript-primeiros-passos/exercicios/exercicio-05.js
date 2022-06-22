const a = 10;
const b = 45;
const c = 60;

let triangulo = a + b + c

if (triangulo == 180) {
    console.log("true")
}
else if (a < 0 || b < 0 || c < 0) {
    console.log("Ângulos inválidos")
}

else {
    console.log("False")
}
