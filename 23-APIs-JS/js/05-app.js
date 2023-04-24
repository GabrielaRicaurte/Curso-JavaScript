/* 
    =========================================================
    ==== DETECTAR CUANDO ESTAMOS VIENDO LA PAGINA ACTUAL ====
    =========================================================
*/

document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible') {
        console.log('Ejecutar funcion de reproducir el video...');
    } else {
        console.log('Pausar el video...');
    }
});