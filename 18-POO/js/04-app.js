/* 
    ============================================
    ==== PROPIEDADES PRIVADAS EN JAVASCRIPT ====
    ============================================
*/

/*
PROPIEDADES PUBLICAS:
> Por defecto, las propiedades en las clases son públicas. Observa que siempre vamos a poder acceder a las propiedades desde el constructor u otros métodos (dentro de la clase), ya sean propiedades públicas o privadas.

PROPIEDADES PRIVADAS: 
> A partir de la versión ECMAScript (ES2020), se introduce la posibilidad de crear propiedades de clase privadas. Por defecto, todas las propiedades y métodos son públicos por defecto, sin embargo, si añadimos el carácter # justo antes del nombre de la propiedad, se tratará de una propiedad privada.
*/

class Cliente { 

    #nombre; /* "#" convierte la Propiedad privada */

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        // ${this.#nombre} me permite acceder a la propiedad privada //
        return `Cliente: ${this.#nombre}, Saldo: ${this.saldo}`
    }

    static Bienvenida() {
        return `Bienvenido al cajero`
    }
}

const gaby = new Cliente('Gaby', 4000);
console.log(gaby);
/* console.log(gaby.#nombre); Retorna un error ya que la propiedad esta privada y solo se puede accerder mendiate una clase */

console.log(gaby.mostrarInformacion());

class ClienteDos {

    #nombre 

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const gabyDos = new ClienteDos();
gabyDos.setNombre('Gaby');
console.log(gabyDos.getNombre());