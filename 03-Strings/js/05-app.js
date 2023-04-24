/* 
    ===============================
    == REPLACE, SLICE, SUBSTRING ==
    ===============================
*/

const producto = 'Monitor 20 pulgadas';

// replace para remplazar //
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// slice para recortar //
console.log(producto.slice( 0, 10 ));
console.log(producto.slice( 8 ));
console.log(producto.slice( 2,1 ));

// alternativa a slice //
console.log(producto.substring(8.10))


const nombre = 'Gabriela';
console.log(nombre.substring(0,1))
console.log(nombre.charAt(0))