/* 
    ===================================================
    ==== SWITCH PARA EVALUAR MILTIPLES CONDICIONES ====
    ===================================================
*/


const metodoPago = 'cheque';

switch(metodoPago) {
    case 'efectivo':
        console.log( `Pagaste con ${metodoPago}` );
        break;
    case 'cheque':
        pagar();
        break;
    default: /* Obligatorio */
        console.log( 'Aun no ha seleccionado un metodo de pago o metodo de pago no soportado' );
        break;
}

function pagar() {
    console.log( 'Pagando.....' );
}