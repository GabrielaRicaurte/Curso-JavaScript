/* 
    ============================================
    ==== MODIFICAR TEXTOS O IMAGENES CON JS ====
    ============================================
*/

const encabezado = document.querySelector('.contenido-hero h1');
const encabezado2 = document.querySelector('.contenido-hero h1').textContent; /* Trae directamente el string */
console.log( encabezado );
console.log( encabezado2 );

console.log( encabezado.innerText ); /* Si en el CSS - visibility: hidden; no lo va a mostrar */
console.log( encabezado.textContent ) /* Si lo va a mostrar */
console.log( encabezado.innerHTML ); /* Se trae el HTML */

document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading' /* Edita el contenido */ 

// Editar mediante una variable //
const nuevoHeading = 'Hola Mundo';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading; 

// Modificar imagenes //

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';