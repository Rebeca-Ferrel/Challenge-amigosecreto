// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amiguis = []

function agregarAmigo () {
    let input = document.getElementById("amigo")
    let nombre = input.value.trim()

    if (nombre === "") {
        alert("Por favor, inserte un nombre") 
        return
    }

    amiguis.push(nombre)
    input.value = ""

    mostrarLista()
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = ""

    for (let i = 0; i < amiguis.length; i++){
        let li = document.createElement("li")
        li.textContent = amiguis[i]

        let botonEliminar = document.createElement("button")
        botonEliminar.textContent = "✘", botonEliminar.style.border = "1px solid gray", botonEliminar.style.backgroundColor = "transparent", botonEliminar.style.cursor = "pointer", botonEliminar.style.padding = "2px 5px", botonEliminar.style.fontSize = "10px",botonEliminar.style.marginLeft = "5px", botonEliminar.style.transition = "background-color 0.2s ease", botonEliminar.onmouseover = function() {botonEliminar.style.backgroundColor = "rgba(0, 0, 0, 0.2)"}, botonEliminar.onmouseout = function() {botonEliminar.style.backgroundColor = "transparent"}

        botonEliminar.onclick = function() {
            quitarAmigo(amiguis[i])
        }

        li.appendChild(botonEliminar)
        lista.appendChild(li)
    }
}

function quitarAmigo(nombre) {
    amiguis = amiguis.filter(amigo => amigo !== nombre)
    mostrarLista()
}

function sortearAmigo() {
    if (amiguis.length === 0) {
        alert("No hay nombres en la lista para sortear, ingrese al menos dos nombres");
        return;
    }

    if (amiguis.length === 1) {
        alert("Debe haber al menos dos nombres en la lista para sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amiguis.length);
    let ganador = amiguis[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: <span class="ganador">${ganador}</span>`;

    let spanGanador = document.querySelector(".ganador");

    let intervalo = setInterval(() => {
        spanGanador.style.opacity = spanGanador.style.opacity === "1" ? "0" : "1";
    }, 300);

    setTimeout(() => {
        clearInterval(intervalo);
        spanGanador.style.opacity = "1"; 
    }, 3000);

    document.getElementById("listaAmigos").innerHTML = "";
    amiguis = [];
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo()
    }
})
