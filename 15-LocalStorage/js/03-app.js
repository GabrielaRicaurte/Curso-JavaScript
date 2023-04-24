/* 
    =======================================================
    ==== ELIMINAR Y ACTUALIZAR DATOS DEL LOCAL STORAGE ====
    =======================================================
*/

localStorage.removeItem('Meses Dos'); /* Elimina un elemento del local storage */

// ACTUALIZAR UN REGISTRO //

const mesesArray = JSON.parse(localStorage.getItem('Meses'));
mesesArray.push('Abril','Mayo','Junio');
localStorage.setItem('Meses', JSON.stringify(mesesArray));


localStorage.clear() /* Limpia todo el local storage */

