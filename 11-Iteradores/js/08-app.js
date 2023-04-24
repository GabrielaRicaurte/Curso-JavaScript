/* 
    ===================
    ==== FOR ....IN ===
    ===================
*/

const autoMovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for ( let propiedad in autoMovil ){
    console.log( `${autoMovil[propiedad]}` )
}

for ( let [llave, valor] of Object.entries(autoMovil) ) {
    console.log( `${llave} : ${valor}` );
}