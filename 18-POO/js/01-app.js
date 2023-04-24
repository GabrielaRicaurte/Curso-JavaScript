/* 
    =============================================
    ==== DEFINIENDO E INSTANCIANDO UNA CLASE ====
    =============================================
*/

/* 

            Existen varias diferencias entre las Class expression y las CLass declaration:

> Las Class expression pueden omitir el nombre de la clase ("identificador de enlace"), lo que no es posible con las CLass declaration.
> Las Class expression le permiten redefinir (redeclarar) clases sin lanzar un SyntaxError. Este no es el caso con las CLass declaration.
> El constructormétodo es opcional. Las clases generadas con Class expression siempre responderán typeofcon el valor "function".

> ES RECOMENDADO QUE LAS CLASS INICIEN CON MAYUSCULAS
*/


// CLass declaration // 
class Cliente { 
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

/* Instanciar clases */
const gaby = new Cliente('Gabriela', 4000);
console.log(gaby)

// Class expression //
const ClienteDos = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const gabyDos = new ClienteDos('Ruiz', 9000);
console.log(gabyDos)