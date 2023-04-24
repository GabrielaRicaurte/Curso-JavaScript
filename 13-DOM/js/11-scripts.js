/* 
    ============================================
    ==== EJEMPLO MAS AVANZADO DE JAVASCRIPT ====
    ============================================
*/

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if( footer.classList.contains('activo') ) { /* .contains funciona para saber si hay clases */

        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
        
    } else {
    
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    
    }
}