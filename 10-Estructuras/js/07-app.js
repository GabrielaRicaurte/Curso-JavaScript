/* 
    =================================================================
    ==== EL OPERADOR || PARA QUE SE CUMPLA ALMENOS UNA CONDICION ====
    =================================================================
*/

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if( efectivo > totalPagar || credito > totalPagar || disponible > totalPagar) {
    console.log( 'Si podemos pagar' );
} else {
    console.log( 'No podemos pagar' );
}