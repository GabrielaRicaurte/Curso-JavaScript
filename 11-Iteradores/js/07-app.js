/* 
    ===================
    ==== FOR ....OF ===
    ===================
*/

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 800 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

for( let pendiente of pendientes ) {
    console.log( pendiente );
}

for( let productos of carrito ) {
    console.log( productos.nombre );
}