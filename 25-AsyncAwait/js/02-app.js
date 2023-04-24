/* 
    ================================
    ==== ASYNC AWAIT Y QUE HACE ====
    ================================
*/

function descargarCliente() {
    return new Promise( (resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('El listado de Clientes se descargó correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    })
}

// Async Await
async function ejecutar() {
    try {
        const respuesta = await descargarCliente(); /* Await detiene la ejeccion hasta que se resuelva el promise */
        console.log( 2 + 2 );
        console.log( respuesta );
    } catch (error) {
        console.log(error)
    }
}
ejecutar();