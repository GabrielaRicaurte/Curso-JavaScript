/* 
    =======================
    ==== REPEAT, SPLIT ====
    =======================
*/

const producto = 'Monitor 20 pulgadas';

// repeat te va a permitir repetir una cadena de texto... //

const texto = ' en promocion '.repeat(3);

console.log(texto);

console.log(`${producto} ${texto} !!!`);

// split dividir un string //

const actividad = 'Estoy aprendiendo JavaScript moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, Caminar, Escuchar musica, Escribir, Aprender a programar';
console.log(hobbies.split(","));

const twitt = 'Aprendiendo JavaScript #AprendiendoJS';
console.log(twitt.split("#"));

