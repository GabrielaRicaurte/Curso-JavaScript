const cliente = {
    nombre: 'Gaby',
    balance: 500
};

describe('Testing al Cliente', ()=> {
    test('El cliente es premium?', ()=> {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('Es Gaby?', ()=> {
        expect(cliente.nombre).toBe('Gaby');
    });

    test('No es otro cliente', ()=> {
        expect(cliente.nombre).not.toBe('Pedro');
    });

    test('No tiene 500', ()=>{
        expect(cliente.balance).not.toBe(400);
    });
});