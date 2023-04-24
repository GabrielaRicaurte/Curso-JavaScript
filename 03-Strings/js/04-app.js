/* 
    ============================================
    == CORTAR ESPACIOS EN BLANCO DE UN STRING ==
    ============================================
*/

const producto = '                Monitor de 20 Pulgadas        ';


// eliminar del incio //
console.log(producto.trimStart())

// eliminar del final //
console.log(producto.trimEnd())

// eliminar ambos lados //
console.log(producto.trimStart().trimEnd())

console.log(producto.trim())
