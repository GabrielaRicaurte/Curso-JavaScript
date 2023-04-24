/* 
    =================================================
    ==== ARROW FUNCTIONS EN UN .forEch Y UN .map ====
    =================================================
*/

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 800 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio ${producto.precio}`);

carrito.forEach( ( producto ) => console.log( `${producto.nombre} - Precio ${producto.precio}` ));

console.log(nuevoArreglo);