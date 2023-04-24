/* 
    =================================
    ==== MAYOR O IGUAL Y ELSE IF ====
    =================================
*/

const dinero = 300;
const totalAPagar = 400;
const tarjeta = true;

if( dinero >= totalAPagar ) { 
    console.log( 'Si podemos pagar' );
} 
else if (tarjeta) {
    console.log( 'Si puedo pagar con la tarjeta' );
}
else {
    console.log( 'Fondos insufucientes' );
}