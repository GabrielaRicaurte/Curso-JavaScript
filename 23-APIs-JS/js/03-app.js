/* 
    ==================================================
    ==== DETECTAR SI HAY CONEXION A INTERNET O NO ====
    ==================================================
*/

// navigator.onLine 

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if(navigator.onLine) {
        console.log('Si hay internet');
    } else {
        console.log('No estas conectado');
    }
}

actualizarEstado();