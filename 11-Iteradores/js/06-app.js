/* 
    ========================
    ==== .FoEach y .Map ====
    ========================
*/

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente) => {
    console.log(pendiente);
})

pendientes.forEach( (pendiente, index) => console.log( `${index} : ${pendiente}` ))

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 800 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

carrito.forEach( productos => console.log( productos.nombre ))

carrito.map( productos => console.log( productos.nombre ))