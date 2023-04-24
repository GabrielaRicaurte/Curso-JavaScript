/* 
    =============================
    ==== EVALUAR UN BOOLEANS ====
    =============================
*/

const autenticado = true;

if (autenticado === true ){
    console.log('Si puedes pasar');
} else {
    console.log('No no podes pasar');
}

// Recomendado //
const autenticado2 = false;

if (autenticado2){
    console.log('Si puedes pasar');
} else {
    console.log('No no podes pasar');
}

// Operador ternario //

console.log(autenticado ? 'Si esta autenticado' : 'No no está autenticado');