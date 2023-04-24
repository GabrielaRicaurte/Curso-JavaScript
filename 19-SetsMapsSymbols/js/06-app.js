/* 
    ==================================
    ==== ITERADORES EN JAVASCRIPT ====
    ==================================
*/

function crearIteradores(carrito) {
    let i = 0;

    return {
        siguiente: () => {

            const fin = ( i >= carrito.lenght );
            const valor = !fin ? carrito[i++] : undefined ;

            return {
                fin,
                valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// Utilizar iterador //
const recorrerCarrito = crearIteradores(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());