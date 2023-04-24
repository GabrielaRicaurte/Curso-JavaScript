/* 
    ========================
    ==== EL OBJETO MATH ====
    ========================
*/

let resultado;

// PI //
resultado = Math.PI;

// redondear //
resultado = Math.round( 2.8 );

// redondear hacia arriba
resultado = Math.ceil( 2.5 );

// redondear hacia abajo
resultado = Math.floor( 2.5 );

// Raiz cuadrada //
resultado = Math.sqrt( 144);

// Absoluto //
resultado = Math.abs( -500 );

// Potencia // 
resultado = Math.pow( 8, 3 );

// Minimo //
resultado = Math.min( 3, 5, 14, 1, -3 );

// Maximo // 
resultado = Math.max( 3, 5, 14, 1, -3 );

// Aleatorio // 
resultado = Math.random(); /* NO RECOMENDADO */

// Aleatorio dentro de un rango...
resultado = Math.floor( Math.random() * 30 );


console.log(resultado);