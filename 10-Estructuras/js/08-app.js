/* 
    =======================================================
    ==== DETENER LA EJECUCION DE UN IF CON UNA FUNCION ====
    =======================================================
*/

const puntaje = 350;

function revisarPuntaje() {
    if( puntaje > 400 ) {
        console.log( 'Exelente' );
        return;
    }

    if( puntaje > 300 ) {
        console.log( 'Buen puntaje... Felicidades' );
        return;
    }
}

revisarPuntaje();