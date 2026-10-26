// 1 - Valida que a API retorna todos os 8 produtos disponíveis.

const { test, expect } = require('@playwright/test');

test('Deve listar os produtos disponíveis', async ({ request }) => {

    const response = await request.get('/api/produtos');

    const body = await response.json();

    expect(response.status()).toBe(200);

    expect(body.length).toBe(8);

    
});

// 2 - Valida a consulta de um produto específico e seus principais dados.


test('Deve consultar um produto específico existente', async ({ request}) => {

    const response = await request.get('/api/produtos/P001');

    const body = await response.json();

    expect(response.status()).toBe(200);

    expect(body.id).toBe('P001');

    expect(body.nome).toBe('Camiseta Essencial');

    expect(body.preco).toBe(59.9);

});

// 3 - Valida o retorno de erro ao consultar um produto inexistente.


test('Deve retornar erro ao consultar produto inexistente', async ({ request}) => {

    const response = await request.get('/api/produtos/P999');

    const body = await response.json();

    expect(response.status()).toBe(404);

    expect(body.erro.codigo).toBe('PRODUTO_NAO_ENCONTRADO');

    
});

// 4 - Valida que os produtos retornados possuem todos os campos obrigatórios.

test('Deve retornar produtos com os campos obrigatórios', async ({ request }) => {

    const response = await request.get('/api/produtos');

    const body = await response.json();

    expect(response.status()).toBe(200);

    for (const produto of body) {

        expect(produto).toHaveProperty('id');
        expect(produto).toHaveProperty('nome');
        expect(produto).toHaveProperty('descricao');
        expect(produto).toHaveProperty('categoria');
        expect(produto).toHaveProperty('preco');
}

});

// 5 - Valida que os produtos retornados possuem os tipos de dados esperados.

test('Deve retornar os produtos com os tipos de dados corretos', async ({ request }) => {

    const response = await request.get('/api/produtos');

    const body = await response.json();

    expect(response.status()).toBe(200);

            for (const produto of body) {

                expect(typeof produto.id).toBe('string');
                expect(typeof produto.nome).toBe('string');
                expect(typeof produto.descricao).toBe('string');
                expect(typeof produto.categoria).toBe('string');
                expect(typeof produto.preco).toBe('number');

            }

});       

// 6 - Valida que todos os produtos retornados possuem preço maior que zero.

test('Deve retornar produtos com preço maior que zero', async ({ request}) => {

    const response = await request.get('/api/produtos');

    const body = await response.json();

    expect(response.status()).toBe(200);

    for (const produto of body) {

        expect(produto.preco).toBeGreaterThan(0);

    }

});


// 7 - Valida que os campos obrigatórios estão preenchidos e não contêm apenas espaços em branco.


test('Deve retornar produtos com campos obrigatórios preenchidos', async ({ request }) => {

    const response = await request.get('/api/produtos');

    const body = await response.json();

    expect(response.status()).toBe(200);

            for (const produto of body) {

                expect(produto.id.trim()).toBeTruthy();
                expect(produto.nome.trim()).toBeTruthy();
                expect(produto.descricao.trim()).toBeTruthy();
                expect(produto.categoria.trim()).toBeTruthy();
                
            }

});            






    



    





