
function initialize () {
    const botao = document.getElementById('contador');
    const numero = document.getElementById('valor')
    let clickCount = 1
    botao.addEventListener('click', () => {
        numero.innerText = clickCount
        clickCount +=1
    })

}

initialize();