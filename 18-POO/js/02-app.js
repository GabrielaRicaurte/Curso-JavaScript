/* 
    ===================================================
    ==== METODOS Y METEDOS ESTATICOS EN LAS CLASES ====
    ===================================================
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
    /* Static no requiere una instancia para mandarse a llamar, se llaman directamente desde las clases */
}

const gaby = new Cliente('Gabriela', 4000);
console.log(gaby.mostrarInformacion())
console.log(gaby)

console.log( Cliente.Bienvenida());