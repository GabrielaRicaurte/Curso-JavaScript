/* 
    ============================================
    ==== AGREGAR ELEMENTOS AL LOCAL STORAGE ====
    ============================================
*/

localStorage.setItem('nombre','Gabriela');

const producto = {
    nombre: 'Monitor',
    precio: 300
}

const productoString = JSON.stringify( producto ) /* Convierte el objeto en un string */
localStorage.setItem('Productos', productoString)

const meses = ['Enero','Febrero','Marzo'];
const mesesString = JSON.stringify( meses ) /* Convierte el arreglo en un string */
localStorage.setItem('Meses', mesesString);

const mesesDos = ['Abril','Mayo','Junio'];
localStorage.setItem('Meses Dos', JSON.stringify( mesesDos ) ) /* Convierte el arreglo en un string directamente en el localStorage */