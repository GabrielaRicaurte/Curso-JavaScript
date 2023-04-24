/* 
    ======================================================
    ==== CONGELAR UN OBJETO PARA NO PODERLO MODIFICAR ====
    ======================================================
*/
"use strict";

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// No permite modificar, agragar o eliminar....
Object.freeze( producto );

// producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);

console.log(Object.isFrozen(producto));