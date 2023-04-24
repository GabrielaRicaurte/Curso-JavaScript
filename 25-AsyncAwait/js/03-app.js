/* 
    ======================================================
    ==== ASYNC AWAIT EN FUNCION EXPRESS Y DECLARATION ====
    ======================================================
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

// async function ejecutar() {}  /* DECLARATION */

// Async Await
const ejecutar = async () => { /* EXPRESS */
    try {
        const respuesta = await descargarCliente(); /* Await detiene la ejeccion hasta que se resuelva el promise */
        console.log( 2 + 2 );
        console.log( respuesta );
    } catch (error) {
        console.log(error)
    }
}
ejecutar();