/* 
    =================
    ==== .concat ====
    =================
*/

const meses = ['Enero', 'Febrero', 'Marzo', 'Abrir', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat //

const resultado = meses.concat( meses2, meses3 );
console.log( resultado );

// Spread Operator // 

const resultado2 = [...meses, ...meses2, ...meses3];
console.log( resultado2 );