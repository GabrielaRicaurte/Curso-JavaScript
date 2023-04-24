/* 
    ==================================
    ==== EVENTOS SOBRE LOS INPUTS ====
    ==================================
*/

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => { /* keydown se ejecuta cuando presionas una tecla */
    console.log('Escribiendo....')
})

busqueda.addEventListener('keydown', () => { /* keyup se ejecuta cuando presionas una tecla y la sueltas */
    console.log('Escribiendo.... dejaste de presionar la tecla');
})

busqueda.addEventListener('blur', () => { /* Muy recomendado para las validaciones */
    console.log('Entraste y saliste del input');
})

busqueda.addEventListener('copy', () => { /* copy se ejecuta cuando copian el texto (ctrl + c) */
    console.log('Haz usado ctrl + c para copiar');
})

busqueda.addEventListener('paste', () => { /* paste se ejecuta cuando pegas un texto (ctrl + v) */
    console.log('Pegaste un texto');
})

busqueda.addEventListener('cut', () => { /* cut se ejecuta cuando cortas un texto (ctrl + x) */
    console.log('Cortaste un texto');
})

busqueda.addEventListener('input', () => { /* Hace todas las anteriores menos el blur */
    console.log('Se esta ejecutando el input');
})

/*************************************************************+*/


// Para saber lo que el usuario esta escribiendo //

busqueda.addEventListener('input', (e) => { 
        console.log(e.target.value); /* Muestra en consola lo que el usuario escriba en el input */
})

busqueda.addEventListener('input', (e) => { 
        if(e.target.value === '') {
            console.log('Falló la validacion');
        }
})