
const readline = require('readline-sync');

const imcWithHeightInMeters = (weight, height) => {
  return weight / (height * 2)
};

const main = () => {
  const peso = readline.question('Qual seu peso? ');
  const altura = readline.question('Qual sua altura? ');
  const resultado = imcWithHeightInMeters(peso, altura)

  console.log(`Seu imc é ${resultado.toFixed(2)}!`);
}

main();