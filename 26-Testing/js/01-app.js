/* 
    ===============================
    ==== TESTING EN JAVASCRIPT ====
    ===============================
*/
/* 
    Ventajas de hacer Testing.

    * Mejorará la calidad de tu Software evitando bugs.
    * Probar todos los diferentes escenarios puede ser complicado o tardado, pero hay herramientas que autorizan las pruebas de nuestros proyectos.
    * Liberar nuevas versiones sin la preocupaciones de que algo salga mal.
    

    Algunas consideraciones con el Testing.

    * ¿Cuantas veces has agreagdo nuevas funciones a un proyecto existente pero desconoces si funciona bien con lo existente?
    * Tener pruebas hará que una persona que no ha mantenido un proyecto conozca que es lo que hace cada parte.
    * No harás pruebas den todo, más bien de como se integran diferentes partes de la aplicación. 
    
    Diferentes tipos de Testing.

    *End to End - Más interactivo, simula algunos click, llena formularios y asegurarse de que se muestre en pantalla lo que se desea.
    *Integración - Revisar que múltiples partes de nuestro proyecto funcionen bien.
    *Unit - Revisar que cada parte por si sola funcione bien.
    *Static - Revisar por errores en el código mientras vas escribiendo.

    Herramienta para Testing.

    *Cada tecnología tiene sus herramientas para Testing, pero una muy popular es Jest, hay versiones para VueJS, Angular, TypeScript, Node, React, etc. Es necesario tener instalado NOdejs.
    *Otra opción es Cypress que es una herramienta para hacer testing End to End.

*/


/* 
    CREANDO UN MINI FRAMEWORK PARA TESTING
*/

//Probar 2 valores

function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

let resultado = suma(2, 2);
let esperado = 3;   

if( resultado !== esperado) {
    console.error(`El ${resultado} no es el esperado`);
} else {
    console.log('El resultado es correcto');
}

resultado = restar(10, 5);
esperado = 5;

if( resultado !== esperado) {
    console.error(`El ${resultado} no es el esperado`);
} else {
    console.log('El resultado es correcto');
}

