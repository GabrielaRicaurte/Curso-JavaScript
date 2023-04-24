/* 
    =============================================
    ==== LAS VENTAJAS DE LOS ARROW FUNCTIONS ====
    =============================================
*/

const aprendiendo = ( tecnologia ) => {
    console.log( `Funcion de flecha 1 ${ tecnologia }` );
}

const aprendiendo2 = ( tecnologia, tecnologia2 ) => `Funcion de flecha 2 ${ tecnologia } y ${tecnologia2}`; 
/* EL parentecis es pbligatorio cuando son dos parametros */
const aprendiendo3 = tecnologia => `Funcion de flecha 2 ${ tecnologia }`;


aprendiendo( 'JavaScript' );
console.log( aprendiendo2( 'React', 'Node.js' ) );
console.log( aprendiendo3( 'PHP' ) );