import nuevaFuncion, { nombreCliente as clienteNombre, ahorro, mostrarFuncion, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

/* los export normales pueden tener alias (Ejmplo: nombreCliente as clienteNombre ) */

console.log( clienteNombre );
console.log( ahorro );

console.log( mostrarFuncion( clienteNombre, ahorro));

tieneSaldo(ahorro);

// Class // 

const cliente = new Cliente(clienteNombre, ahorro);

console.log(cliente);
console.log(cliente.mostrarInformacion());

const empresa = new Empresa('Gabriela', 9000, 'Cursos en Línea');
console.log(empresa)
console.log(empresa.mostrarInformacion())

// Export default // /* NO SE PUEDEN TENER DOS EXPORT DEFAULT!! */
nuevaFuncion();