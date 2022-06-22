let salarioBruto = 3000;
let inss;
let ir;
let parcelaIr;

let salario;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08
    salario = salarioBruto - inss
}
else if (salarioBruto > 1556.94 && salarioBruto < 2594.92) {
    inss = salarioBruto * 0.09
    salario = salarioBruto - inss
}
else if (salarioBruto > 2594.93 && salarioBruto < 5189.82) {
    inss = salarioBruto * 0.11
    salario = salarioBruto - inss
}
else if (salarioBruto > 5189.82) {
    inss = 570.88
    salario = salarioBruto - inss
}

if (salario < 1903.99) {
    salarioLiquido = salario
}
else if (salario > 1903.98 && salario <= 2826.65) {
    parcelaIr = 142.80
    ir = salario * 0.075
    salarioLiquido = salario - (ir - parcelaIr)
}
else if (salario > 2826.65 && salario <= 3751.05) {
    parcelaIr = 354.80
    ir = salario * 0.15
    salarioLiquido = salario - (ir - parcelaIr)
}
else if (salario > 3751.05 && salario <= 4664.68) {
    parcelaIr = 636.13
    ir = salario * 0.225
    salarioLiquido = salario - (ir - parcelaIr)
}
else {
    parcelaIr = 869.36
    ir = salario * 0.275
    salarioLiquido = salario - (ir - parcelaIr)
}

console.log("O salario líquido a ser recebido é R$" + salarioLiquido)