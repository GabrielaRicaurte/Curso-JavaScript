/* 
    ================
    ==== .every ====
    ================
*/

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

const resultado = carrito.every( producto => producto.precio < 1000 );
console.log( resultado );

