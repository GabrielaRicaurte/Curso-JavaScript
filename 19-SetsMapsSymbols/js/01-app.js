/* 
    ====================================
    ==== SETS Y SUS CARACTERISTICAS ====
    ====================================
*/

/* Los sets te permiten crear una lista de valores sin duplicados */

const carrito = new Set();

carrito.add('Disco #1') /* Agrega valores */
carrito.add('Disco #1') /* Los valores duplicados no se agregan */
carrito.add('disco #1') /* Si comienza en minuscula y otra en mayuscula aunque esten escrito igual se concideran valores diferentes */
carrito.add('Disco #2') 
carrito.add('Disco #3') 

// carrito.clear() /* Elimina todos los valores */

console.log( carrito.delete('Disco #3') ); /* Elimina el valor. Si se usa con un console.log retorna True, si intentas eliminar un valor que no existe retorna False */

console.log( carrito.has('Disco #1') ) /* Nos indica si un valor existe, retorna True y False */

console.log( carrito.size ) /* Los Sets no usan lenght para saber cuantos elementos valores hay, los Sets usan size */

console.log( carrito );

/* Los Sets son iterables por lo tanto se puede usar con un ForEach */

carrito.forEach( producto => {
    console.log(producto);
})

// Del siguiente arreglo elimina los duplicados //

const numeros = [10,20,30,40,50,10,20];

const numerosNoDuplicados = new Set(numeros); /* El Set eliminará los numeros duplicados */

console.log( numerosNoDuplicados ) 