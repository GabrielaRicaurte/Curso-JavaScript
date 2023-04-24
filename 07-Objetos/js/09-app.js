/* 
    ==========================
    ==== SELLAR UN OBJETO ====
    ==========================
*/

"use strict";

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// No permite agregar ni eliminar pero si permite modificar...
Object.seal( producto );

producto.disponible = false;

console.log(producto);