const { test, expect } = require('@playwright/test');


// 1 - Valida que a API rejeita quantidade superior ao limite máximo de 5 unidades por produto.

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

// 2 - Valida que a API aceita o limite máximo de 5 unidades por produto.

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


    expect(response.status()).toBe(200);
    expect(body.itens[0].quantidade).toBe(5);
    expect(body.subtotal).toBe(299.5);
    expect(body.frete).toBe(0);
    expect(body.freteGratis).toBe(true);
    expect(body.total).toBe(299.5);
    
});

//  3 - Valida o cálculo do carrinho com um produto, sem aplicação de cupom.

test('Deve calcular corretamente o carrinho com 1 produto sem cupom', async({ request }) => {

    const payload = {
        itens: [
            {
                produtoId: 'P001',
                quantidade: 1,
            }
        ]
    }; 
            
    const response = await request.post('/api/carrinho/calcular', {
        data: payload
    });

     const body = await response.json();
    expect(response.status()).toBe(200);
    expect(body.subtotal).toBe(59.9);
    expect(body.desconto).toBe(0);
    expect(body.frete).toBe(19.90);
    expect(body.total).toBe(79.8);
    expect(body.freteGratis).toBe(false);
    expect(body.valorFaltanteFreteGratis).toBe(140.10);

});  


//  4 - Valida subtotal, desconto, frete grátis e total do carrinho com aplicação de cupom válido.

test('Deve calcular corretamente o carrinho com aplicação de cupom válido', async({ request }) => {

    const payload = {
        itens: [
            {
                produtoId: 'P002',
                quantidade: 1
            },
                
            {
                produtoId: 'P004',
                quantidade: 2
            }
            
        ],   
                            
        cupom: 'BEMVINDO10'
                   
    }; 
           
    const response = await request.post('/api/carrinho/calcular', {
        data: payload
    });

    const body = await response.json();

    expect(response.status()).toBe(200);

    expect(body).toMatchObject({
        subtotal: 239.7,
        desconto: 23.97,
        frete: 0,
        total: 215.73,
        freteGratis: true,
        valorFaltanteFreteGratis: 0,
    cupom: {
        codigo: 'BEMVINDO10',
        aplicado: true,
        mensagem: 'Cupom aplicado: 10% de desconto nos produtos.'
    }

});  

});


// 5 - Valida que o frete grátis é calculado com base no subtotal antes da aplicação do desconto.

test('Deve manter o frete grátis quando o subtotal antes do desconto for maior que R$200', async({ request }) => {

    const payload = {
        itens: [
            {
                produtoId: 'P001',
                quantidade: 1
            },
                
            {
                produtoId: 'P004',
                quantidade: 3
            }
            
        ],   
                            
        cupom: 'BEMVINDO10'
                   
    }; 

    const response = await request.post('/api/carrinho/calcular', {
        data: payload
    });

    const body = await response.json();

    expect(response.status()).toBe(200);

    expect(body).toMatchObject({
        subtotal: 209.6,
        desconto: 20.96,
        frete: 0,
        total: 188.64,
        freteGratis: true,
        valorFaltanteFreteGratis: 0,
    cupom: {
        codigo: 'BEMVINDO10',
        aplicado: true,
        mensagem: 'Cupom aplicado: 10% de desconto nos produtos.'
    }

});  

});


// 6 - Valida que o frete deve ser grátis em compras com subtotal >= R$ 200.

test('Deve aplicar frete grátis para subtotal igual ou superior a R$ 200', async ({ request }) => {

    const payload = {
        itens: [
            {
                produtoId: 'P005',
                quantidade: 2
            }
                        
                       
        ],   
                            
                           
    }; 

    const response = await request.post('/api/carrinho/calcular', {
        data: payload
    });

    const body = await response.json();

    expect(response.status()).toBe(200);

    expect(body).toMatchObject({
        subtotal: 200,
        frete: 0,
        total: 200,
        freteGratis: true,
        valorFaltanteFreteGratis: 0
    
    });

});  

// 7 - Valida a cobrança de frete para subtotal imediatamente abaixo de R$ 200.

test('Deve aplicar a cobrança do frete para subtotal imediatamente abaixo de R$ 200', async ({ request }) => {

    const payload = {
        itens: [
             {
                produtoId: 'P004',
                quantidade: 1
            },

            {
                produtoId: 'P005',
                quantidade: 1
            },

            {
                produtoId: 'P008',
                quantidade: 1
            }
                
                       
        ],   
                            
                           
    }; 

    const response = await request.post('/api/carrinho/calcular', {
        data: payload
    });

    const body = await response.json();

    expect(response.status()).toBe(200);

    expect(body).toMatchObject({
        subtotal: 199.9,
        desconto:0,
        frete: 19.9,
        total: 219.8,
        freteGratis: false,
        valorFaltanteFreteGratis: 0.1
    
    });

});  







            
        
    
