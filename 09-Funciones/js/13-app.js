/* 
    =====================================================
    ==== ARROW FUNCTIONS EN EL REPRODUCTOR DE MISICA ====
    =====================================================
*/


const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciondo cancion con el ID ${ id }`), 
    pausar: () => console.log('Pausando....'),
    borrar: id => console.log(`Borrando cancion con el ID ${ id }`),
    crearPlayList: nombre => console.log(`Creando la playlisto de ${ nombre }`),
    reproducirPLayList: nombre => console.log(`Reproduciendo la PlayList de ${ nombre }`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log( `Añadiendo ${ cancion }` );
    }, 
    get obtenerCancion() {
        console.log( `${this.cancion}` )
    }

}

reproductor.nuevaCancion = 'Into it';
reproductor.obtenerCancion;

reproductor.reproducir( 30 );
reproductor.pausar();
reproductor.borrar( 30 );
reproductor.crearPlayList('Pop');
reproductor.reproducirPLayList('Pop');