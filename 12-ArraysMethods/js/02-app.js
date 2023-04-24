/* 
    ===========================================================
    ==== .findIndex PARA ENCONTRAR LA POSICION DE UN ARRAY ====
    ===========================================================
*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 800 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

meses.forEach( ( mes, i ) => {
    if( mes === 'Abril') {
        console.log( `El mes ${mes} encontrado en el indice ${i}` )
    }
} )

// Encontrar el indice de Abril //
const indice = meses.findIndex( ( mes ) => mes === 'Abril')
console.log( indice );

// Encontrar indice en el arreglo de objeto //
const indice2 = carrito.findIndex( producto => producto.nombre === 'Celular' )
console.log( indice2 );