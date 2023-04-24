/* 
    ================================
    ==== NOTIFICACIONES CON API ====
    ================================
*/

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission() /* Pregunta si quiere resivir notificacion */
        .then( resutlado => {
            console.log('El resultado es: ', resutlado);
        })
})

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la nueva notificacion', {
            icon: 'img/ccj.png', /* Te permite agregar un icono personalizado a la notificacion */
            body: 'Codigo con Gaby, aprende con proyectos reales'
        });

        notificacion.onclick = function() {
            window.open('https://www.codigoconjuan.com') /* Te direcciona al url colocado */
        }
    }
})
