/* 
    =========================
    ==== SPREAD OPERATOR ====
    =========================
*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abrir', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 800 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

// Spread Operator con arreglo de indice //

const meses2 = [...meses, 'Julio'];
console.log( meses2 );

// Spread Operator con arreglo con objeto //

const producto = {nombre: 'Disco duro', precio: 300}
const carrito2 = [...carrito, producto];
console.log( carrito2 );