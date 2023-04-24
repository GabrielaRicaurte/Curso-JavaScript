/* 
    =========================================
    ==== BREAK Y CONTINUE EN UN FOR LOOP ====
    =========================================
*/

for( let i = 0; i <= 10; i++ ) {
    if( i === 5 ) {
        console.log( 'Este es el 5' );
        break;
    }
    console.log( `Numero ${ i }` );
}

for( let i = 0; i <= 10; i++ ) {
    if( i === 5 ) {
        console.log( 'CINCO' );
        continue;
    }
    console.log( `Numero ${ i }` );
}

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 800 },
    { nombre: 'Television', precio: 100, descuento: true },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400, descuento: true },
    { nombre: 'Celular', precio: 700 }
]

for( let i = 0; i < carrito.length; i++ ) {
    if( carrito[i].descuento ) {
        console.log( `El articulo ${ carrito[i].nombre } tiene descuento ` );
        continue;
    }
    console.log( carrito[i].nombre );
}