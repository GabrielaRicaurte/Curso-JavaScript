/* 
    =================================
    ==== COMO UTILIZAR FETCH API ====
    =================================
*/

const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    
    /* 
        status 200 : Encontro el archivo
        status 404: No encontro el archivo
     */

    const url = 'data/datos.txt';
    fetch(url)
        .then( respuesta => {
            console.log(respuesta)
            console.log(respuesta.status)
            console.log(respuesta.statusText)
            console.log(respuesta.url)
            console.log(respuesta.type)

            // return respuesta.json()
            return respuesta.text()
        })
        .then( datos => {
            console.log(datos);
        })
        .catch( error => {
            console.log(error)
        })
}