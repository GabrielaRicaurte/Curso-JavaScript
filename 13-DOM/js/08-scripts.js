/* 
    ============================
    ==== TRAVERSING THE DOM ====
    ============================
*/

/*
    > .parentElement Recorre los elementos padre 
    > .children Recorre los elementos hijos
*/

const navegacion = document.querySelector('.navegacion');

console.log( navegacion );
console.log( navegacion.firstElementChild ); /* Selecciona el primer elemento */
console.log( navegacion.lastElementChild ); /* Selecciona el ultimo elemento */
console.log( navegacion.childNodes ); /* Los espacion en blanco son conciderados elementos */
console.log( navegacion.children ); /* La propiedad children devuelve un objeto HTMLCollection. */

console.log( navegacion.children[1] );
console.log( navegacion.children[1].nodeName );
console.log( navegacion.children[1].nodeType );

const card = document.querySelector('.card');

console.log( card.children );

// Editar texto desde traversing the dom //

card.children[1].children[1].textContent = 'New title from traversing the dom';

console.log( card.children[1].children[1].textContent );

// Cambiar la imgen desde Traversing the dom //

card.children[0].src = 'img/hacer3.jpg';
console.log( card.children[0] );

// Traversing de hijo al padre //

console.log( card.parentNode ); /* Toma en cuenta los espacios en blanco (No es recomendado) */
console.log( card.parentElement ); /* Verifica por elementos validos del HTML (Es recomendado) */
console.log( card.parentElement.parentElement );

// Seleccionar el siguiente elemento (El elemento hermano) //

console.log( card.nextElementSibling );
console.log( card.nextElementSibling.nextElementSibling );

// Seleccionar el elemento anterior //

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log( ultimoCard );
console.log( ultimoCard.previousElementSibling );