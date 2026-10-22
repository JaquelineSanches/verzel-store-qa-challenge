const { test, expect } = require('@playwright/test');

test('CT19 - Deve rejeitar quantidade superior a 5 unidades no cálculo do carrinho', async ({ request }) => {

    const payload = {
        itens: [
            {
                produtoId: 'P001',
                quantidade: 6
            }
        ]
    };

    const response = await request.post('/api/carrinho/calcular', {
    data: payload

    });

    const body = await response.json();
    expect(response.status()).toBe(422);
    expect(body.erro.codigo).toBe('QUANTIDADE_MAXIMA_EXCEDIDA');
    

});

test('Deve aceitar a quantidade máxima permitida de 5 unidades', async({ request }) => {

    const payload = {
        itens: [
            {
                produtoId: 'P001',
                quantidade: 5

            }
        ]
    };

    const response = await request.post('/api/carrinho/calcular', {
    data: payload    

    });

    const body = await response.json();

console.log('Status:', response.status());
console.log('Body:', JSON.stringify(body, null, 2));

    expect(response.status()).toBe(200);
    expect(body.itens[0].quantidade).toBe(5);
    expect(body.subtotal).toBe(299.5);
    expect(body.frete).toBe(0);
    expect(body.freteGratis).toBe(true);
    expect(body.total).toBe(299.5);
    

});