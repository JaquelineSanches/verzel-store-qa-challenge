const { test, expect } = require('@playwright/test');

test('Deve listar os produtos disponíveis', async ({ request }) => {

    const response = await request.get('/api/produtos');

    const body = await response.json();

    expect(response.status()).toBe(200);

    expect(body.length).toBe(8);

    
});


test('Consultar um produto específico existente', async ({ request}) => {

    const response = await request.get('/api/produtos/P001');

    const body = await response.json();

    expect(response.status()).toBe(200);

    expect(body.id).toBe('P001');

    expect(body.nome).toBe('Camiseta Essencial');

    expect(body.preco).toBe(59.9);

});


test('Consultar produto não existente', async ({ request}) => {

    const response = await request.get('/api/produtos/P999');

    const body = await response.json();

    expect(response.status()).toBe(404);

    expect(body.produto_nao_encontrado);

    
});



