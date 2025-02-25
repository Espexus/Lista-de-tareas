var boton = document.getElementById('btn');
boton.addEventListener('click', Agregar)
function Agregar() {
    let tareaInput = document.getElementById('tareaNueva');
    let tarea = tareaInput.value;
    let referencia = document.getElementById('listita');

    let nuevoElemento = document.createElement('li');
    nuevoElemento.innerHTML = `<input type="checkbox" id="hecho" name="hacer" class="check">`
    + tarea + `<img src="equis.png" id="hecho" class="equis">`;

    referencia.appendChild(nuevoElemento);

    tareaInput.value = "";
}



document.getElementById("listita").addEventListener("click", function(event) {
    if (event.target.classList.contains("check")) {
        hacer(event);
    } else if (event.target.classList.contains("equis")){
        borrar(event)

    }
});

function hacer(event) {
    let check = event.target;
    let padre = check.parentElement;
    
    if (check.checked) {
        padre.classList.add("hecha");
    } else {
        padre.classList.remove("hecha");
    }
}


function borrar (event) {
    let referente = event.target;
    let padre = referente.parentElement;

    padre.remove();
    
}
