/* 
    ===============================
    ==== QUE ES EVENT BUBBLING ====
    ===============================
*/

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('CLick en el card');
})

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('CLick en el info');
})

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('CLick en el titulo');
})