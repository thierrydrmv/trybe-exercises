const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// window.onload = paginaOn

firstLi.classList.remove('tech');

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
let li = document.querySelectorAll('.container li')
for (let index = 0;index<li.length; index+=1) {
let lis = li[index]
  lis.addEventListener('click', moveTech)
  function moveTech() {
  if (lis.className == 'tech'){
  lis.className = 'tech1'
  }
  else {
  lis.className ='tech'
  }
  }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function caixadeTexto () {
let caixaTexto = document.getElementById('input')
// console.log(caixaTexto)
caixaTexto.addEventListener('input', function() {
  let tech = document.querySelector('.tech')
  let value = input.value
  tech.innerText = value
}
)
}
caixadeTexto()
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página; 
function gitHub () {
const url = 'https://github.com/thierrydrmv'
let linkTop3 = document.getElementById('my-spotrybefy')
linkTop3.addEventListener('dblclick', function() {
 window.open(url, '_blank')
})
}
gitHub() 
// 4.1. Que tal redirecionar para seu portfólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function corDefundo() {
let linkTopThree = document.getElementsByTagName('h3')[0]
linkTopThree.addEventListener('mouseover', function(event) {
  event.target.style.backgroundColor = 'red';
})
}
 window.onload = corDefundo
corDefundo()
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.