/* 
    ==========================
    ==== QUE ES TRY CATCH ====
    ==========================
*/

/*
    La declaración try...catch señala un bloque de instrucciones a intentar (try), y especifica una respuesta si se produce una excepción (catch).
*/

console.log( 1 + 1 );
try {
    hola()
} catch (error) {
    console.log(error)
}

console.log( 2 + 2);