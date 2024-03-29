function sumar(a,b) {
    return a + b;
}

function restar(a,b) {
    return a - b;
}

describe('Testing a las funciones de suma y resta', ()=> {
    test('Suma de 20 y 30', ()=> {
        expect( sumar(20,30)).toBe(50);
    });

    test('Restar 10 - 5', ()=>{
        expect(restar(10,5)).toBe(5);
    });
    
    test('Que la suma 10 y 10 no sea 10', ()=> {
        expect(sumar(10,10)).not.toBe(10);
    });

    test('Que la resta de 10 - 5 no sea otro valor', ()=> {
        expect(restar(10,5)).not.toBe(2);
    });
});