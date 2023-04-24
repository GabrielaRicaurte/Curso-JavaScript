/* 
    ============================================
    ==== CREANDO UN PROMISE, .THEN Y .CATCH ====
    ============================================
*/

const aplicarDescuento = new Promise( (resolve, reject) => {
    const descuento = false;

    if(descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
})

aplicarDescuento.then( resultado => {
    console.log(resultado);
}).catch( error => {
    console.log(error);
})

// Hay 3 valores disponibles // 
// fullfilled - El primise se cumplio 
// rejected - El promise no se cumplió 
// pending - No se ha cumplido y tampoco se ha rechazado 