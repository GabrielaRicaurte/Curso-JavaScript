/* 
    ============================================
    ==== WEAK SET Y LA DIFERENCIA DE UN SET ====
    ============================================
*/

/* Los weakSet solo se le permite pasar objetos */
/* Los weakSet NO son iterables */
/* Los Sets permite pasar cualquier valor ( array, obj, numbers, booleans... ) */
/* Los Sets SI son iterables*/

const weakSet = new WeakSet()

const cliente = {
    nombre: 'Gaby',
    saldo: 500
}

const clienteDos = {
    nombre: 'Ruiz',
    saldo: 300
}

weakSet.add(cliente);
weakSet.add(clienteDos);

console.log(weakSet.has(cliente));

console.log(weakSet.delete(cliente));

// console.log(weakSet.size); /* este metodo no existe en WeakSet */

console.log(weakSet)