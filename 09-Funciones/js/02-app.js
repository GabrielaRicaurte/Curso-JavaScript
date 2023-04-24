/* 
    ===============================================================
    ==== LA DIFERENCIA ENTRE FUNCTION EXPRESSION Y DECLARATION ====
    ===============================================================
*/

/* Cuando se declara una función usando function declaracion el hoisting se encarga de hacerlo disponible a lo largo de todo el contexto de ejecución. Por eso podemos ejecutar la funciona antes de declararla. Mientras que si hacemos lo mismo usando la forma function expression nos genera un error por el asunto del hoisting
*/

// Declaracion de funcion (FUNCTION DECLARATION) // 

function sumar() {
    console.log( 2 + 2);
}

sumar();

// Exprecion de funcion (FUNCTION EXPRESSION) // 

const sumar2 = function() {
    console.log( 3 + 3 );
}

sumar2();
