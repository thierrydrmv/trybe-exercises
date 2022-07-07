const enviar = document.querySelector('button')
let imagem = document.getElementById('imagensFree')
    enviar.addEventListener('click', function(){
let nome = document.getElementById('input-text')
let email = document.getElementById('input-email')
let texteArea = document.getElementById('text-winner')
if (nome.value.length<10 || nome.value.length>40 || email.value.length<10 || email.value.length>50 || texteArea.value.area>500){
    window.alert("Dados inválidos")
} else
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' )})
imagem.addEventListener('click', function(event) {
    window.alert("Você só consegue participar da viagem se permitir o uso de suas imagens.")
    event.preventDefault();})
