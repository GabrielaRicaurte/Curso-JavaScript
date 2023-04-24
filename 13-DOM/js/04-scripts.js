/* 
    ========================
    ==== .querySelector ====
    ========================
*/

const card = document.querySelector('.card');

console.log( card );

// Podemos tener selectores especificos como en CSS //

const info = document.querySelector('.premium .info');
console.log( info );

// Seleccionar el segundo card de hospedaje //

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2');
console.log( segundoCard );

// Seleccionar ID con .querySelection //

const id = document.querySelector('#formulario');
console.log( id );

// Seleccionar elemento HTML //

const nav = document.querySelector('nav')
console.log( nav );