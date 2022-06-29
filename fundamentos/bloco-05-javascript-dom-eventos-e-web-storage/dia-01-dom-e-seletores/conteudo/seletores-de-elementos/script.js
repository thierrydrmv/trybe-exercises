document.getElementById("header-container").style.backgroundColor = 'green'

let yellow = document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow"

let purple = document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "pink"

document.getElementsByTagName("footer")[0].style.backgroundColor = "blue"

let urgente = document.querySelectorAll(".emergency-tasks h3")
for (let i = 0 ;i < urgente.length ; i+=1) {
    urgente[i].style.backgroundColor = "purple";
}
let tranquilo = document.querySelectorAll(".no-emergency-tasks h3")
for (let i = 0 ;i < tranquilo.length ; i+=1) {
    tranquilo[i].style.backgroundColor = "black";
}

