const enviar = document.querySelector('button')
let imagem = document.getElementById('imagensFree')
let nome = document.getElementById('nome1')
let email = document.getElementById('exampleInputEmail1')
let texteArea = document.getElementById('floatingTextarea2')
let date = document.getElementById('myInputId')
enviar.addEventListener('click', function(event){
    if(imagem.checked) {
        console.log('ue')

        if (nome.value.length<10 || nome.value.length>40 || email.value.length<10 || email.value.length>50 || texteArea.value.area>500){
            window.alert("Dados inválidos")
        } else
            window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    } else {
    window.alert('Você só consegue participar da viagem se permitir o uso de suas imagens')
    event.preventDefault()
    }
    })