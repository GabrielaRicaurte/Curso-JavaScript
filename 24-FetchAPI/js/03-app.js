/* 
    ==============================================================
    ==== CONSULTA E IMPRIME LOS RESULTADOS DE UN FETCH ARRAY  ====
    ==============================================================
*/
// document.addEventListener('DOMContentLoaded', obtenerDatos);

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';
    fetch(url)
        .then(respuesta => respuesta.json() )
        .then( resutlado => mostrarHTML(resutlado))
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = '';
    
    empleados.forEach(empleado => {
        const {id, empresa, nombre, trabajo} = empleado;

        html += `
            <p>Empleado: ${nombre}</p>
            <p>Id: ${id}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
            <hr>
        `
    })

    contenido.innerHTML = html;
}