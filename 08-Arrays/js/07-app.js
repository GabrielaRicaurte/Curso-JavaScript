/* 
    =======================================
    ==== ELIMINAR ELEMENTOS CON SPLICE ====
    =======================================
*/

const carrito = [];

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado', 
    precio: 50
}

const producto4 = {
    nombre: 'Teclado 2', 
    precio: 100
}

carrito.push(producto);   
carrito.push(producto2);
carrito.push(producto4);

carrito.unshift(producto3)

// Eliminar el ultimo elemento del arreglo...
// carrito.pop();
// console.table(carrito);

// ELiminar del inicio del arreglo...
// carrito.shift();
// console.table(carrito);

console.table(carrito);

carrito.splice( 1,1 );
console.table(carrito);
