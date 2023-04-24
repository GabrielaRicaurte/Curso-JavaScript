/* 
    ==========================================================================
    ==== EL OPERADOR && PARA REVISAR QUE SE CUMPLAN DOS O MAS CONDICIONES ====
    ==========================================================================
*/

const usuario = false;
const puedePagar = false; 

if( usuario && puedePagar) {
    console.log( 'Si esta registrado y puede pagar' );
} 
else if( !usuario && !puedePagar){
    console.log( 'No puedes pagar' );
}
else if ( !usuario ) {
    console.log( 'No puedes pagar, no eres un usuario' );
} 
else if ( !puedePagar ) {
    console.log( 'No puede pagar fondos insuficientes' );
}