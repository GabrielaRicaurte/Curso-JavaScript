/* 
    ==============================
    ==== CREANDO UN PROTOTYPE ====
    ==============================
*/

function Cliente( nombre, saldo) {
    this.nombre = nombre,
    this.saldo = saldo
}

Cliente.prototype.tipoCliente = function() {
   let tipo;

   if( this.saldo > 10000) {
    tipo = 'Gold'
   } else if( this.saldo > 5000) {
    tipo = 'Platinum'
   } else {
    tipo = 'Normal'
   }
   return tipo;
}

Cliente.prototype.nombreSaldoTipo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

// Instanciarlo
const pedro = new Cliente('Pedro', 6000);
pedro.tipoCliente();
console.log(pedro.tipoCliente());
console.log(pedro.nombreSaldoTipo());
pedro.retiraSaldo(1000);
console.log(pedro.nombreSaldoTipo());


console.log(pedro)

/*********************************************/

function Empresa( nombre, saldo, categoria) {
    this.nombre = nombre,
    this.saldo = saldo,
    this.categoria = categoria
}

const CCG = new Empresa('Codigo con Gaby', 5000, 'Cursos en linea');

console.log(CCG)