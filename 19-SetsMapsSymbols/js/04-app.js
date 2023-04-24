/* 
    ==============================
    ==== QUE SON LOS WEAKMAPS ====
    ==============================
*/

/* No se pueden iterar y no se usar el .size y solo aceptan objetos */

const producto = {
    idProducto: 10
}

const weakMap = new WeakMap();

weakMap.set(producto,'Monitor')

console.log(weakMap.has(producto))
console.log(weakMap.delete(producto))
console.log(weakMap.get(producto))
console.log(weakMap)