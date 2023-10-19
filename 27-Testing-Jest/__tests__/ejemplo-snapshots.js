const cliente = {
    
    nombre: 'Gaby Ruiz',
    balance: 500,
    tipo: 'Premium'

};

describe('Testing al Cliente', ()=> {
    test('Es Gaby', ()=> {
        expect(cliente).toMatchSnapshot();
    })
}); 


/* 
    Para actulizar los datos guardados en el snapshot se escribe en la terminal npm t -- -u
*/