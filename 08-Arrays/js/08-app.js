/* 
    =================================
    ==== DESTRUCTURING DE ARRAYS ====
    =================================
*/

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// Destructuring con objetos //

const { nombre } = producto;
console.log( nombre );

// Destructuring con arreglos // 

const numeros = [ 10, 20, 30, 40, 50 ];

const [ primero, segundo, tercero ] = numeros;

const [ , , , , quinto ] = numeros;

const [ , , , ...cuarto  ] = numeros;

console.log( tercero );
console.log( quinto );
console.log( cuarto );