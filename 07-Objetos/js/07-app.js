/* 
    =====================================
    ==== EL PROBLEMA CON LOS OBJETOS ====
    =====================================
*/

// Aunque este declarado con CONST igual puede ser modificado

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

producto.disponible = false;

console.log(producto)
