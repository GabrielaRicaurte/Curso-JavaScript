/* 
    =====================================
    ==== GENERAR HTML CON JACASCRIPT ====
    =====================================
*/

const enlace = document.createElement('a');

enlace.innerText = 'Nuevo Enlace'; /* Agregando el Texto */

enlace.href = '/nuevo-enlace'; /* Agregando href */

enlace.classList.add('nueva-clase'); /* Agregando clases */

enlace.onclick = miFuncion; /* Agregando una funcion */

function miFuncion() {
    alert( 'Diste click' );
}

// Seleccionar la navegacion //

const navegacion = document.querySelector('.navegacion');

navegacion.appendChild(enlace); /* .appendChild agrega nuevo hijo */

navegacion.insertBefore(enlace, navegacion.children[1]); /* .insertBefore requiere dos argumentos ('El nuevo elemento', 'En donde quieres agregarlo') */

// Crear Card //

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Crear div con la clase de info //

const info = document.createElement('div');
info.classList.add('info'); 
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen // 

const imagen = document.createElement('img')
imagen.src ='img/hacer2.jpg';

// Crear el Card // 

const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen //

card.appendChild(imagen);

// Asignar info // 

card.appendChild(info);

// Insertar en el HTML //

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]); /* Agregando al inicio */