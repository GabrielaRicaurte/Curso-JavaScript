/* 
    ==================================================================
    ==== .map PARA ITERAR UN ARRAY Y SUS DIFERENCIAS CON .forEach ====
    ==================================================================
*/

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 800 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

const producto = carrito.forEach( function( producto ) {
    return `${ producto.nombre } - Precio ${ producto.precio }`;
} )

// .map Crea un nuevo arreglo y .forEach no //
const producto2 = carrito.map( function( producto ) {
    return `${ producto.nombre } - Precio ${ producto.precio }`;
} )

console.log(producto);
console.log(producto2);