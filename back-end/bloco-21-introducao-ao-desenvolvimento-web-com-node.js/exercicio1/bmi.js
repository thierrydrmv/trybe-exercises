
const readline = require('readline-sync');

const imcWithHeightInMeters = (weight, height) => {
  return weight / (height * 2)
};

const main = () => {
  const peso = readline.question('Qual seu peso? ');
  const altura = readline.question('Qual sua altura (cm)? ');
  const resultado = imcWithHeightInMeters(peso, altura/100)

  console.log(`Seu imc é ${resultado.toFixed(2)}!`);

  switch(true) {
    case(resultado < 18.5):
    return console.log('Abaixo do peso (magreza)');
    case(resultado > 18.5 && resultado < 25):
    return console.log('Peso normal');
    case(resultado > 25 && resultado < 30):
    return console.log('Acima do peso (sobrepeso)');
    case(resultado > 30 && resultado < 35):
    return console.log('Obesidade grau I');
    case(resultado > 35 && resultado < 40):
    return console.log('Obesidade grau II');
    default:
      return console.log('Obesidade graus III e IV');
  }

}

main();