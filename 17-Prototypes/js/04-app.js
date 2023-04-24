/* 
    ==============================
    ==== HEREDAR UN PROTOTYPE ====
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

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo) /* Llama una funcion y hereda los valores */
    this.telefono = telefono
}

/* Hereda las funciones del prototype de Cliente, tiene que estar antes de crear una nueva instancia!! */
Persona.prototype = Object.create( Cliente.prototype );

Persona.prototype.constructor = Cliente;

// INSTANCIARLO // 
const gaby = new Persona('Gabriela', 300, 9082737);

console.log(gaby)
console.log(gaby.nombreSaldoTipo())

Persona.prototype.mostrarTelefono = function() {
    return `El numero de esta persona es ${this.telefono}`
}

console.log(gaby.mostrarTelefono());