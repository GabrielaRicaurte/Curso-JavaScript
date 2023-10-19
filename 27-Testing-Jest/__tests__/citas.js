import Citas from '../js/classes/Citas';


describe('Probar la clase de citas', ()=> {
    
    const citas = new Citas();

    const id = Date.now();

    test('Agregar nueva cita', ()=>{
        const citaObj = {
            id,
            mascota: 'Franchisco',
            propietario: 'Gaby',
            telefono: '04164027739',
            fecha: '10/12',
            hora:'02:26',
            sintomas: 'solo duerme'
        }

        citas.agregarCita(citaObj);

        // Prueba

        expect(citas).toMatchSnapshot();
        
    });

    test('actualizar cita', () => { 
        const citaActualizada = {
            id,
            mascota: 'Nuevo Nombre',
            propietario: 'Gaby',
            telefono: '04164027739',
            fecha: '10/12',
            hora:'02:26',
            sintomas: 'solo duerme'
        }

        citas.editarCita(citaActualizada);
        
        expect(citas).toMatchSnapshot();
    });

    test('Eliminar Cita', ()=> {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    })
});