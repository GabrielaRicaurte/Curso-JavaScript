/* 
    ===================================
    ==== GENERADORES EN JAVASCRIPT ====
    ===================================
*/

/* Un generador es una funcion que retorna un iterador */

function *crearGenerador() { /* Se le coloca un aterisco antes del nombre */
    yield 1;                 /* Yield son los valores a los cuales el generador va a iterar */
    yield 'Gaby';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador) 
/* Por cada next() recorre los yield */
console.log(iterador.next().value) /* 1 */
console.log(iterador.next().done) /* false */
console.log(iterador.next().value) /* 6 */
console.log(iterador.next().value) /* true */


// Generador para carrito de compras //

function *generadorCarrito() {
    for(let i = 0; i < carrito.length; i++ ) {
        yield carrito[i]
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

const iteradorDos = generadorCarrito(carrito)

console.log(iteradorDos.next())
console.log(iteradorDos.next())
console.log(iteradorDos.next())
console.log(iteradorDos.next())