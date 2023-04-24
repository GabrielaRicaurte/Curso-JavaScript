/* 
    ===========================
    ==== OPERADOR TERNARIO ====
    ===========================
*/

const autenticado = true;
const puedePagar = false;

console.log( autenticado ? 'Si puede pagar' : 'No puede pagar' );
console.log( autenticado && puedePagar ? 'Si puede pagar' : 'No puede pagar' );
console.log( autenticado || puedePagar ? 'Si puede pagar' : 'No puede pagar' );

console.log( autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si esta autenticado, no puede pagar' : 'No esta autenticado' );