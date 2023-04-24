/* 
    ===============
    ==== .some ====
    ===============
*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abrir', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 800 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
]

// Comprobar si un valor existe en un arreglo // 

meses.forEach( (meses) => {
    if( meses === 'Enero' ){
        console.log( 'Enero si existe' );
    }
} )

const resultado = meses.includes( 'Enero' ); /* .includes solo funciona con arreglos con indice */
console.log( resultado );

// En un arreglo de objetos se usa el .some //

const existe = carrito.some( (producto) => {
    return producto.nombre === 'Celular';
} )

const NoExiste = carrito.some( producto => producto.nombre === 'Monitor Curvo');

console.log( existe );
console.log( NoExiste );

// En un arreglo tradiconal con .some // 

const existe2 = meses.some( ( mes ) => mes === 'Febrero' );
console.log( existe2 );