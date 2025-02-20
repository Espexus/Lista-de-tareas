

function Borrar (boton) {
    let li = boton.parentElement;
    li.remove()
}

function Hecho (boton) {
    let li = boton.parentElement;
    li.setAttribute("class", "hecho")
}

function Nohecho (boton) {
    let li = boton.parentElement;
    li.removeAttribute("class")
}

function Agregar() {
    let referencia = document.getElementById('listita');
    let tarea = prompt("¿Cuál es tu nuevo objetivo?");

    let nuevoElemento = document.createElement('li');
    nuevoElemento.innerHTML = tarea + `
    <button class="Borrar" onclick="Borrar(this)">Borrar</button>
    <button onclick="Hecho(this)">Hecho</button>
    <button onclick="Nohecho(this)">No hecho</button>`;

    referencia.appendChild(nuevoElemento)
}