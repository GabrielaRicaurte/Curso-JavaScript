/* 
    =============================================
    ==== EL PROBLEMA DE NO USAR EL PROTOTYPE ====
    =============================================
*/

function Cliente( nombre, saldo) {
    this.nombre = nombre,
    this.saldo = saldo
}

const Gaby = new Cliente('Gabriela', 4000);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El/La cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `La empresa ${nombre} tiene un saldo de ${saldo} y pertenece a la categoría ${categoria}`;
}

console.log(formatearCliente(Gaby));

function Empresa( nombre, saldo, categoria) {
    this.nombre = nombre,
    this.saldo = saldo,
    this.categoria = categoria
}

const CCG = new Empresa('Codigo con Gaby', 5000, 'Cursos en linea');

console.log( formatearEmpresa(CCG) );