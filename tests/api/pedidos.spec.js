const { test, expect } = require('@playwright/test');

test('CT20 - Deve rejeitar pedido com quantidade superior a 5 unidades', async ({ request }) => {

const payload = {

        cliente: {
            
                nome:'Maria Sila',
                email:'maria@exemplo.com',
                cep:'01310-100'
            },
        

        itens: [
            {
                produtoId: 'P005',
                quantidade: 6
                
            }
        ],
    
        cupom: 'BEMVINDO10'

    };

    const response = await request.post('/api/pedidos', {
    data: payload

});

const body = await response.json();

expect(response.status()).toBe(422);
expect(body.erro.codigo).toBe('QUANTIDADE_MAXIMA_EXCEDIDA');

});

test('Deve aceitar pedido com a quantidade máxima permitida de 5 unidades', async ({ request }) => {

    const payload = {

        cliente: {
            
                nome:'Maria Sila',
                email:'maria@exemplo.com',
                cep:'01310-100'
            },
        

        itens: [
            {
                produtoId: 'P005',
                quantidade: 5
                
            }
        ],
    
        cupom: 'BEMVINDO10'

    };

    const response = await request.post('/api/pedidos', {
    data: payload

});

const body = await response.json();

expect(response.status()).toBe(201);
expect(body.numero).toMatch(/^VZ-\d{6}$/);

});