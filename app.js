// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Sección de Varibales
let amigos = [];

//Sección de Funciones
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo !== '') {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        console.log(amigos);
        actualizarLista();
    } else {
        alert('Por favor, inserte un nombre.');
    }
}

//Actualización del listado de amigos
function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // Limpia la lista
    lista.innerHTML = '';

    // Itera sobre el arreglo 'amigos'
    for (let i = 0; i < amigos.length; i++) {
        // Crea un nuevo elemento de lista <li>
        let li = document.createElement('li');

        // Entrega el nombre del amigo al texto del elemento de lista
        li.innerHTML = amigos[i];

        // Incorpora el nuevo elemento a la lista en el DOM
        lista.appendChild(li);
    }
}

    function sortearAmigo() {
        if (amigos.length !== 0) {
            // Generar un índice aleatorio
            let indiceAleatorio = Math.floor(Math.random() * amigos.length);

            // Obtener el nombre elegido
            let amigoSeleccionado = amigos[indiceAleatorio];

            // Mostrar el resultado en la página
            document.getElementById('resultado').innerHTML = amigoSeleccionado;
        } else {
            alert('No hay amigos disponibles para seleccionar, por favor inserte un nombre.');
        }
    }
