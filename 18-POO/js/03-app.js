/* 
    ===========================
    ==== HEREDAR UNA CLASE ====
    ===========================
*/

class Cliente { 
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, Saldo: ${this.saldo}`
    }

    static Bienvenida() {
        return `Bienvenido al cajero`
    }
}

// Herencia
class Empresa extends Cliente {
    constructor(nombre,saldo,telefono,categoria) {
        super(nombre,saldo) /* Busca los atributos en el constructor padre */
        this.telefono=telefono;
        this.categoria = categoria ;
    }

    static Bienvenida() { /* Reescribir un metodo solo basta llamarlo igual */
        return `Bienvenido al cajero de empresas`
    }
}

const gaby = new Cliente('Gabriela', 4000);
const empresa = new Empresa('Codigo con Gaby', 9000, 998323938, 'Aprendizaje en linea');

console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log( Cliente.Bienvenida() )
console.log( Empresa.Bienvenida() )