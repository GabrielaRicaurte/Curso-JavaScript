/* 
    ===========================================================
    ==== QUE ES PROTOTYPES Y CREAR UN TIPO DE OBJETO NUEVO ====
    ===========================================================
*/

function Cliente( nombre, saldo) {
    this.nombre = nombre,
    this.saldo = saldo
}

const Gaby = new Cliente('Gabriela', 4000);

console.log(Gaby);
