const { test, expect } = require('@playwright/test');

// 1 - Valida que a API rejeita pedidos com quantidade superior ao limite máximo de 5 unidades por produto.

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

// 2 - Valida que a API aceita pedidos com o limite máximo de 5 unidades por produto.

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


// 3 - Valida a criação de um pedido válido e a geração do número do pedido.

test('Deve criar pedido válido e retornar o número do pedido', async ({ request }) => {

    const payload = {

        cliente: {
            
                nome:'Maria Sila',
                email:'maria@exemplo.com',
                cep:'01310-100'
            },
        

        itens: [
            {
                produtoId: 'P005',
                quantidade: 1
                
            }
        ]
       

    };

    const response = await request.post('/api/pedidos', {
    data: payload

});

const body = await response.json();

expect(response.status()).toBe(201);
expect(body.numero).toMatch(/^VZ-\d{6}$/);

});

// 4 - Valida que a API rejeita pedido com quantidade igual a zero.


test('Deve rejeitar pedido com quantidade igual a zero', async ({ request }) => {

    const payload = {

        cliente: {
            
                nome:'Maria Sila',
                email:'maria@exemplo.com',
                cep:'01310-100'
            },
        

        itens: [
            {
                produtoId: 'P005',
                quantidade: 0
                
            }
        ]
       

    };

    const response = await request.post('/api/pedidos', {
    data: payload

});

const body = await response.json();

expect(response.status()).toBe(422);
expect(body.erro.codigo).toBe('QUANTIDADE_INVALIDA');
expect(body.erro.mensagem).toBe('A quantidade deve ser um número inteiro maior ou igual a 1.');

});



// 5 - Valida que a API rejeita a criação de pedido com a lista de itens vazia.


test('Deve rejeitar pedido com lista de itens vazia', async ({ request }) => {

    const payload = {

        cliente: {
            
                nome:'Maria Sila',
                email:'maria@exemplo.com',
                cep:'01310-100'
            },

            itens: []
          
                          
         
    };

    const response = await request.post('/api/pedidos', {
    data: payload

});

const body = await response.json();

expect(response.status()).toBe(422);
expect(body.erro.codigo).toBe('ITENS_OBRIGATORIOS');
expect(body.erro.mensagem).toBe('Informe ao menos um item.');

});


// 6 - Valida que a API rejeita a criação de pedido com produto inexistente.

test('Deve rejeitar pedido com produto inexistente', async ({ request }) => {

    const payload = {

        cliente: {
            
                nome:'Maria Sila',
                email:'maria@exemplo.com',
                cep:'01310-100'
            },

            itens: [
                {
                produtoId: 'P010',
                quantidade: 1
                }


            ]
          
                        
         
    };

    const response = await request.post('/api/pedidos', {
    data: payload

});

const body = await response.json();

expect(response.status()).toBe(422);
expect(body.erro.codigo).toBe("PRODUTO_NAO_ENCONTRADO"),
expect(body.erro.mensagem).toBe("Produto P010 não encontrado.")

});


// 7 - Valida que a API rejeita a aplicação de cupom inválido.

test('Deve rejeitar aplicação de cupom inválido', async ({ request }) => {

const payload = {

        cliente: {
            
                nome:'Maria Sila',
                email:'maria@exemplo.com',
                cep:'01310-100'
            },
        

        itens: [
            {
                produtoId: 'P005',
                quantidade: 1
                
            }
        ],
    
        cupom: 'SEJABEMVINDO'

    };

    const response = await request.post('/api/pedidos', {
    data: payload

});

const body = await response.json();

expect(response.status()).toBe(422);
expect(body.erro.codigo).toBe("CUPOM_INVALIDO");
expect(body.erro.campo).toBe("cupom")
});


// 8 - Valida que a API rejeita a aplicação de cupom expirado.

test('Deve rejeitar aplicação de cupom expirado', async ({ request }) => {

const payload = {

        cliente: {
            
                nome:'Maria Sila',
                email:'maria@exemplo.com',
                cep:'01310-100'
            },
        

        itens: [
            {
                produtoId: 'P005',
                quantidade: 1
                
            }
        ],
    
        cupom: 'VERAO2026'

    };

    const response = await request.post('/api/pedidos', {
    data: payload

});

const body = await response.json();

expect(response.status()).toBe(422);
expect(body.erro.codigo).toBe("CUPOM_EXPIRADO");
expect(body.erro.campo).toBe("cupom")
});


// 9- Valida que a API rejeita a duplicação de produtos no pedido.

test('Deve rejeitar a duplicidade de produtos', async ({ request }) => {

const payload = {

        cliente: {
            
                nome:'Maria Sila',
                email:'maria@exemplo.com',
                cep:'01310-100'
            },
        

        itens: [
            {
                produtoId: 'P005',
                quantidade: 1,

            },
            
            {

                produtoId: 'P005',
                quantidade: 1

                
            }
        ]
    
        
    };

    const response = await request.post('/api/pedidos', {
    data: payload

});

const body = await response.json();

expect(response.status()).toBe(422);
expect(body.erro.codigo).toBe("ITEM_DUPLICADO");
expect(body.erro.campo).toBe("itens[1].produtoId")

});