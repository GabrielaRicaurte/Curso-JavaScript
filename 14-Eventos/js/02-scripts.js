/* 
    ==============================
    ==== EVENTOS CON EL MOUSE ====
    ==============================
*/

const nav = document.querySelector('.navegacion');

// Registrar un evento //

nav.addEventListener('click', () => {
   
    console.log('Click en nav');

})

/*****************************************************/

nav.addEventListener('mouseenter', () => {
   
    console.log('Colocaste el cursor en nav');

    nav.style.backgroundColor = 'white';
})

/*****************************************************/

nav.addEventListener('mouseout', () => {
    
    console.log('El cursor salio de la nav');
    
    nav.style.backgroundColor = 'transparent';

})

/*****************************************************/

nav.addEventListener('mousedown', () => { /* mousedown Similar al click */

    console.log('Precionaste la nav');

})

/*****************************************************/

nav.addEventListener('mouseup', () => {
    
    console.log('Precionaste y soltaste la nav');

})

/*****************************************************/

nav.addEventListener('dblclick', () => {
    
    console.log('Diste doble click en la nav');

})