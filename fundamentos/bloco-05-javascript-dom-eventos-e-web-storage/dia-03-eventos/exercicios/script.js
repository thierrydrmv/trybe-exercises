function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  // 1. Criar o calendário com seus dias
function createDays() {
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let holiday = [24,25,31]
  let friday = [4,11,18,25]
  const days = document.getElementById('days')
  for (let index=0;index<decemberDaysList.length;index+=1) {
    const day = decemberDaysList[index]
    const dayLi = document.createElement('li')
    dayLi.className ='day';
    dayLi.innerText = day;
    days.appendChild(dayLi)
    for (let i=0;i<decemberDaysList.length;i+=1) {
    if(decemberDaysList[index]==holiday[i])
      dayLi.classList.add('holiday')
    if(decemberDaysList[index]==friday[i])
      dayLi.classList.add('friday')
    }
  }
}
let feriasOn = false;
// 2. criar botão feriado
function criarBotaoFeriados() {
  let buttonContainer = document.querySelector('.buttons-container')
  const criarBotao =document.createElement('button')
  criarBotao.setAttribute('id','btn-holiday')
  criarBotao.innerText = 'Feriados'
  buttonContainer.appendChild(criarBotao)
  criarBotao.addEventListener('click', function(){
    // 3. Mudar a cor do feriado quando clicar no botão
    let feriado = document.querySelectorAll('.holiday')
    for(let ferias of feriado){
      if(feriasOn){
        ferias.style.backgroundColor = ''
      } else {
        ferias.style.backgroundColor = 'yellow'
      }
    }
    feriasOn = !feriasOn
 
  })
}
let ligado = false;

// 4. criar o botão sexta feira
function buttonFriday() {
  let buttonContainer = document.querySelector('.buttons-container')
  const criarBotao = document.createElement('button')
  criarBotao.setAttribute('id', 'btn-friday')
  criarBotao.innerText = 'Sexta-feira'
  buttonContainer.appendChild(criarBotao)
  criarBotao.addEventListener('click', function() {
    // 5. Função que altera a sombra da classe friday quando clicado
  let fridayz = document.querySelectorAll('.friday')
  for(day of fridayz) {
    if(ligado){
    day.style.textShadow = ''
    } else {
    day.style.textShadow = '10px 10px 1px #3D8116'
    }
  }
  ligado = !ligado
})
}
  // 6 criar zoom.
function zoom() {
  let dayz = document.getElementsByClassName('day')
  for(let i=0;i<dayz.length;i+=1) {
  let dayzi = dayz[i]
    dayzi.addEventListener('click', function(){
      console.log(oi)
    dayzi.style.fontSize = '3rem';
    })
  }
}

zoom()
buttonFriday()
criarBotaoFeriados()
createDays()
createDaysOfTheWeek();
  
  // Escreva seu código abaixo.