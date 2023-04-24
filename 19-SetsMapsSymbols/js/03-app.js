/* 
    ==========================
    ==== QUE SON LOS MAPS ====
    ==========================
*/

/*
    Los maps son listas ordenadas por llaves y valor (Son como un objeto pero con una sola propiedad), la llave y el valor pueden ser 
    cualquier tipo de dato.
*/

const cliente = new Map();

cliente.set( 'Nombre', 'Gabriela' ); /* set() Agrega al Map, (nombre -> llave || Gabriela -> valor) */
cliente.set( 'Tipo', 'Premium' );
cliente.set( 'Saldo', 4000 );

console.log( cliente.size );

console.log( cliente.has('Nombre') );

console.log( cliente.get('Nombre') ); /* Nos retorna unicamente lo que este en Nombre */

cliente.delete('Saldo')

// cliente.clear()

console.log( cliente );

const paciente = new Map( [ ['Nombre', 'Paciente'] , ['Cuarto', 'No definido'] ] );

paciente.set('Dr', 'Dr. Definido');

paciente.set('Nombre', 'Antonio'); /* Podemos reescribir el valor colocando la misma llave */

console.log(paciente)

// Los Map tambien son iterables //

paciente.forEach( ( datos, index ) => {
    console.log(datos);
    console.log(index);
})