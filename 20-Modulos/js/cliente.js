export const nombreCliente = 'Gabriela';
export const ahorro = 900;

export function mostrarFuncion( nombre, ahorro) {
    return `Cliente ${nombre} - Ahorro ${ahorro}`;
}

export function tieneSaldo(saldo) {
    if( saldo > 0 ) {
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

// Exportar e importar una clase //

export class Cliente {
    constructor(nombre, ahorro)  {
        this.nombre = nombre;
        this.ahorro = ahorro
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre} - Ahorro ${this.ahorro}`;
    }
}

// Export Default // 

// export default function nuevaFuncion() {
//     console.log('Este es export default');
// }
function nuevaFuncion() {
    console.log('Este es export default');
}

export default nuevaFuncion();