/* 
    ======================================
    ==== AÑADIR FUNCIONES A UN OBJETO ====
    ======================================
*/

const reproductor = {
    reproducir: function( id ) {
        console.log( `Reproduciondo cancion con el ID ${ id }` )
    },
    pausar: function() {
        console.log( 'Pausando....' )
    },
    crearPlayList: function( nombre ) {
        console.log( `Creando la playlisto de ${ nombre }` );
    },
    reproducirPLayList: function( nombre ) {
        console.log( `Reproduciendo la PlayList de ${ nombre } ` )
    }
}

reproductor.reproducir( 30 );
reproductor.pausar();

reproductor.borrar = function( id ) {
    console.log( `Borrando cancion con el ID ${id}` )
}

reproductor.borrar(30);
reproductor.crearPlayList('Pop');
reproductor.reproducirPLayList('Pop');

