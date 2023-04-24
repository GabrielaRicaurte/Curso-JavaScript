/* 
    ===============
    ==== .find ====
    ===============
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

let resultado = '';

carrito.forEach( ( producto, index ) => {
    if (producto.nombre === 'Tablet' ) {
        resultado = carrito[index];
    }
})

console.log( resultado );

// Con un .find //

const resultado2 = carrito.find( producto => producto.nombre === 'Tablet'); /* .find solo retorna el primer elemento que cumpla la condicion */
console.log( resultado2 );