/* 
    =================
    ==== .reduce ====
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

// Con un .forEach //

let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log( total );

// Con un .reduce // 

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log( resultado );
