const password = "123456";

// describe permite agrupar diferentes pruebas en un mismo archivo.

describe('Valida que el password no esté vacio y tenga una extension de 6 caracteres', () => {
    test('Que el Password tenga 6 caracteres', () =>{
        expect( password ).toHaveLength(6);
    })
    //toBe se encarga de verificar que el valor de expect sea igual al que se coloque en toBe.

    test('Password no vacio',  () =>{
        expect(password).not.toHaveLength(0)
    })
});
