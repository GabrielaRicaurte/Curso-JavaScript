/* 
    =======================================
    ==== SYMBOLS Y SUS CARACTERISTICAS ====
    =======================================
*/
/* Los Symbols no son iguales nunca */
const sym = Symbol();
const sym2 = Symbol();

if( sym === sym2 ) {
    console.log('Son iguales');
} else {
    console.log('Son diferente');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar Nombre y Apellido como llaves al objeto //

persona[nombre] = 'Gabriela';
persona[apellido] = 'Ruiz';

console.log(persona[nombre]);

/* Las propiedades que utilizan un Symbols no son iterables */

// Definir la descripcion de un Symbols // 
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Gabriela';

console.log(cliente);