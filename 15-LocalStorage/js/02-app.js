/* 
    =========================================
    ==== OBTENER DATOS DEL LOCAL STORAGE ====
    =========================================
*/

const nombre = localStorage.getItem('nombre');
console.log(nombre)

const productoJson = localStorage.getItem('Productos');
console.log( JSON.parse( productoJson ) ); /* Convertir string en objeto */

const mesesJson = localStorage.getItem('Meses');
console.log( JSON.parse(mesesJson) ); /* Convertir string en arreglo */