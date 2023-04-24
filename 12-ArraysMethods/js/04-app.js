/* 
    =================
    ==== .filter ====
    =================
*/

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

let resultado;

resultado = carrito.filter( producto => producto.precio > 400 );
resultado = carrito.filter( producto => producto.precio < 600 );
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos' );
resultado = carrito.filter( producto => producto.nombre === 'Audifonos' );

console.log( resultado )