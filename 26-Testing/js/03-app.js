/* 
    ===================================
    ==== PROBANDO CODIGO ASINCRONO ====
    ===================================
*/

function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

 async function sumaAsync(a, b) {
    return Promise.resolve(suma( a , b ));
 }

let resultado = suma(2, 2);
let esperado = 3;   

expected(esperado).toBe(resultado);

resultado = restar(10, 5);
esperado = 5;

expected(esperado).toBe(resultado);

test('Suma 10 + 20 y el resultado debe ser 30', async () => {
    const resultado = await sumaAsync(10,20);
    const esperado = 30;
    expected(esperado).toBe(resultado);
})

async function test(mensaje, callback) {
    try {
        await callback();
        console.log(`El test: ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.error('Error');
        console.error( error );
    }
}

function expected ( esperado ) {
    return {
        toBe(resultado) {
            if( resultado !== esperado) {
                console.error(`El ${resultado} no es el esperado`);
            } else {
                console.log('El resultado es correcto');
            }
        }
    }
}