/* 
    =======================================
    ==== EVENTO SUBMIT A UN FORMULARIO ====
    =======================================
*/

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {

    e.preventDefault(); /* .preventDefault previene la accion que realizaría ese elemento por default */
    
    console.log('Buscando...');

}