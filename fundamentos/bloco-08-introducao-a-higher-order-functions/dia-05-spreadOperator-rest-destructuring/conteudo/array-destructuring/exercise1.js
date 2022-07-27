const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [primeiraSaudacao] = saudacoes; 
console.log(primeiraSaudacao)
saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring