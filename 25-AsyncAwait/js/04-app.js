/* 
    =======================================
    ==== COMO MANEJAR DIFERENTES AWAIT ====
    =======================================
*/

function descargraNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargarndo Clientes....');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    })
}

function descargraNuevosPedidos() {
    return new Promise( resolve => {
        console.log('Descargarndo pedidos....');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    })
}

const app = async () => {
    try {
        const respuesta = await Promise.all([descargraNuevosClientes(), descargraNuevosPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}

app();