/* 
    ===============================
    ==== INDEXDB EN JAVASCRIPT ====
    ===============================
*/

let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente()
    }, 5000);
})

function crmDB() {
    // Crear base de datos 1.0
    let crmDB = window.indexedDB.open('crm', 1) /* Toma dos argumentos ('nombre', 'version') */

    // Si hay un error
    crmDB.onerror = function() {
        console.log('Error al crear la base de datos');
    }

    // Si se creo bien 
    crmDB.onsuccess = function() {
        console.log('Base de datos creada correctamente');

        DB = crmDB.result;
    }

    // Configuracion de la base de datos 
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        })

        // Definir columnas 
        objectStore.createIndex('nombre','nombre', { unique: false });
        objectStore.createIndex('email','email', { unique: true });
        objectStore.createIndex('telefono','telefono', { unique: false });
    }
}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplet = function() {
        console.log('Transaccion completada');
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 998323938,
        nombre: 'Gabriela',
        email: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente); 
    /* add - Agrega, put - actualiza, delete - elimina */

    console.log(peticion);
}