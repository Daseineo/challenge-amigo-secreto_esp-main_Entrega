// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el elemento input donde se escribe el nombre
    const inputAmigo = document.getElementById('amigo');
    // Obtener el valor del input y eliminar espacios en blanco al inicio/final
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Salir de la función si no hay nombre
    }
    
    // Agregar el nombre al array
    listaAmigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual en la página
    actualizarListaAmigos();
    
    // Enfocar nuevamente el campo de entrada para facilitar la adición de más nombres
    inputAmigo.focus();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    // Obtener el elemento UL donde se mostrarán los nombres
    const ulListaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista antes de volver a llenarla
    ulListaAmigos.innerHTML = '';
    
    // Recorrer el array de amigos y crear elementos LI para cada uno
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'list-item';
        
        // Agregar botón para eliminar el amigo si se desea
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = '×';
        btnEliminar.className = 'delete-btn';
        btnEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(btnEliminar);
        ulListaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    // Eliminar el amigo del array en la posición indicada
    listaAmigos.splice(index, 1);
    
    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar que haya amigos en la lista
    if (listaAmigos.length === 0) {
        alert('Por favor, agrega al menos un amigo a la lista.');
        return;
    }
    
    // Obtener el elemento donde se mostrará el resultado
    const resultadoElement = document.getElementById('resultado');
    
    // Limpiar resultados anteriores
    resultadoElement.innerHTML = '';
    
    // Generar un índice aleatorio basado en la cantidad de amigos
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    
    // Obtener el nombre del amigo sorteado
    const amigoSecreto = listaAmigos[indiceAleatorio];
    
    // Crear elemento para mostrar el resultado
    const resultadoLi = document.createElement('li');
    resultadoLi.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    resultadoLi.className = 'result-item';
    
    // Agregar el resultado al DOM
    resultadoElement.appendChild(resultadoLi);
}

// Opcional: Permitir agregar amigos presionando Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarAmigo();
    }
});


/*

/ El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear un array para almacenar los nombres
let amigos = [];

//Capturar el valor del campode entrada
//document.getElementById(amigos);
amigos.push(nombre);
function agregarAmigo() {
       let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[indiceAleatorio];
        alert("Amigo seleccionado: " + amigoSeleccionado);
}

    if (amigos.length === 0) {
        alert("No hay amigos para seleccionar.");
        return;
        
    }
/*
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya no hay más números para sortear. Reinicia el juego.');
    //Si el numero generado esta incluido en la lista
    // console.log(`numero Generado: ${numeroGenerado}`);

    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}*/

/*Actualizar el array de amigos
function agregarAmigo() {
    let nombre = String(document.getElementById('nombre').value); */
/*
//Limpiar el campo de entrada
    document.getElementById("nombre").value = "";

//Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }
//Validar la entrada
    if (nombre != nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

/* Funciones, Escribe una función que seleccione de manera 
aleatoria uno de los nombres almacenados en el array amigos. 
Usa Math.random() y Math.floor() para obtener un índice aleatorio */
/*
//Validar que haya amigos disponibles
    amigos.push(nombre);
    alert("Amigo agregado: " + nombre);
}


//Generar un indice aleatorio
function seleccionarAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para seleccionar.");
        return;
    }

//Obtener el nombre sorteado
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

//Mostrar el resultado
    alert("Amigo seleccionado: " + amigoSeleccionado);
} 

*/



/*
document.addEventListener('DOMContentLoaded', function() {
            const nombreInput = document.getElementById('nombre-amigo');
            const btnAdicionar = document.getElementById('btn-adicionar');
            const btnSortear = document.getElementById('btn-sortear');
            const listaAmigos = document.getElementById('lista-amigos');
            const resultadoDiv = document.getElementById('resultado');
            const mensajeError = document.getElementById('mensaje-error');
            
            let amigos = [];
            
            // Función para adicionar un amigo a la lista
            btnAdicionar.addEventListener('click', function() {
                const nombre = nombreInput.value.trim();
                
                // Validar que el campo no esté vacío
                if (nombre === '') {
                    mensajeError.textContent = 'Por favor ingresa un nombre válido';
                    return;
                }
                
                // Limpiar mensajes de error
                mensajeError.textContent = '';
                
                // Agregar el nombre al array
                amigos.push(nombre);
                
                // Actualizar la lista visual
                actualizarListaAmigos();
                
                // Limpiar el campo de entrada
                nombreInput.value = '';
            });
            
            // Función para actualizar la lista visual de amigos
            function actualizarListaAmigos() {
                listaAmigos.innerHTML = '';
                
                amigos.forEach(function(amigo, index) {
                    const li = document.createElement('li');
                    li.textContent = `${index + 1}. ${amigo}`;
                    listaAmigos.appendChild(li);
                });
            }
            
            // Función para sortear un amigo secreto
            btnSortear.addEventListener('click', function() {
                // Validar que haya amigos en la lista
                if (amigos.length === 0) {
                    mensajeError.textContent = 'Debes agregar al menos un amigo a la lista';
                    return;
                }
                
                // Limpiar mensajes de error
                mensajeError.textContent = '';
                
                // Ocultar resultado anterior (si existe)
                resultadoDiv.style.display = 'none';
                
                // Sortear un amigo aleatorio
                const indiceAleatorio = Math.floor(Math.random() * amigos.length);
                const amigoSecreto = amigos[indiceAleatorio];
                
                // Mostrar el resultado
                resultadoDiv.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
                resultadoDiv.style.display = 'block';
            });
            
            // Permitir agregar amigos presionando Enter
            nombreInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    btnAdicionar.click();
                }
            });
        }); */
