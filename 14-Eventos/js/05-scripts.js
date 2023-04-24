/* 
    =========================================
    ==== EVENTOS CON EL SCROLL DEL MOUSE ====
    =========================================
*/

window.addEventListener('scroll', () => {

    console.log('scrolling');

})

window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if( ubicacion.top < 100 ) {
    
        console.log('El elemento esta visible');

    } else{
        
        console.log('Scrolling');
    
    }

})
