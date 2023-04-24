/* 
    =========================================
    ==== COMO SE COMUNICAN LAS FUNCIONES ====
    =========================================
*/

iniciarApp();

function iniciarApp() {
    console.log( 'Iniciar app' );
    segundaFuncion();
}

function segundaFuncion() {
    console.log( 'Desde la segunda funcion' );

    usuarioAutenticado( 'Gaby' );
}

function usuarioAutenticado(usuario) {
    console.log( 'Autenticando usuario... espere....' );
    console.log( `Usuario autenticado exitosamente: ${usuario}` );
}