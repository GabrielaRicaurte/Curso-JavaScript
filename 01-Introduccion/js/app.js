/* 
    ========================================
    === LE PREGUNTA AL USUARIO SU NOMBRE ===
    ========================================
*/

const nombre = prompt("cual es tu nombre menol?");

// TOMA EL NOMBRE Y LO MUESTRA EN PANTALLA //
document.querySelector('.contenido').innerHTML = `Hola ${nombre}`

// IMPRIME UN ERROR EN LA CONSOLA //
console.error('Algo salió mal')
 
// IMPRIME UNA ADVERTENCIA //
console.warn('Algo salió mal')
