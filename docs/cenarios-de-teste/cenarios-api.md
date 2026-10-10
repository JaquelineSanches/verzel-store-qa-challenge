# Cenários de Teste da API

Este documento apresenta os cenários de teste elaborados a partir da documentação da API da Verzel Store, contemplando fluxos de sucesso, validações e contratos de erro dos endpoints disponibilizados.

---

## API01 - Listar todos os produtos

**Endpoint:** `GET /api/produtos`

**Objetivo:**  
Validar que a API retorna corretamente a lista de produtos disponíveis.

**Resultado esperado:**
- Retornar status HTTP `200`;
- Retornar uma lista de produtos;
- Os produtos devem apresentar os campos `id`, `nome`, `descricao`, `categoria` e `preco`.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `200` ao realizar uma requisição `GET` para o endpoint `/api/produtos`. Foi retornada a lista de produtos disponíveis, contendo os campos `id`, `nome`, `descricao`, `categoria` e `preco`, conforme esperado.

**Evidência:**
- [Lista de produtos retornada pela API](../evidencias/API01-listar-produtos.png)

---

## API02 - Consultar produto existente pelo ID

**Endpoint:** `GET /api/produtos/P001`

**Objetivo:**  
Validar que a API retorna corretamente os dados de um produto existente ao realizar a consulta pelo seu ID.

**Dados utilizados:**  
Produto: `P001`

**Resultado esperado:**
- Retornar status HTTP `200`;
- Retornar o produto de ID `P001`;
- O produto deve apresentar os campos `id`, `nome`, `descricao`, `categoria` e `preco`;
- Os dados retornados devem corresponder ao produto "Camiseta Essencial".

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `200` ao realizar uma requisição `GET` para o endpoint `/api/produtos/P001`. Foi retornado o produto de ID `P001`, correspondente à "Camiseta Essencial", contendo os campos `id`, `nome`, `descricao`, `categoria` e `preco`, conforme esperado.

**Evidência:**
- [Produto existente consultado pelo ID](../evidencias/API02-consultar-produto-existente.png)


---

## API03 - Consultar produto inexistente

**Endpoint:** `GET /api/produtos/P999`

**Objetivo:**  
Validar o comportamento da API ao consultar um produto com ID inexistente.

**Dados utilizados:**  
Produto: `P999`

**Resultado esperado:**
- Retornar status HTTP `404`;
- Retornar o objeto `erro`;
- O código de erro deve ser `PRODUTO_NAO_ENCONTRADO`;
- A mensagem deve informar que o produto não foi encontrado.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `404` e o objeto `erro`, com o código `PRODUTO_NAO_ENCONTRADO` e a mensagem "Produto P999 não encontrado.", conforme esperado.

**Evidência:**
- [Consulta de produto inexistente](../evidencias/API03-consultar-produto-inexistente.png)


---

## API04 - Calcular carrinho com produtos e cupom válidos

**Endpoint:** `POST /api/carrinho/calcular`

**Objetivo:**  
Validar o cálculo do carrinho com produtos válidos e aplicação do cupom `BEMVINDO10`.

**Dados utilizados:**
- Produto `P002` - quantidade: 1;
- Produto `P004` - quantidade: 2;
- Cupom: `BEMVINDO10`.

**Resultado esperado:**
- Retornar status HTTP `200`;
- Retornar subtotal de R$ 239,70;
- Aplicar desconto de R$ 23,97;
- Retornar frete de R$ 0,00;
- Retornar `freteGratis` igual a `true`;
- Retornar `valorFaltanteFreteGratis` igual a R$ 0,00;
- Retornar total de R$ 215,73;
- Retornar o cupom `BEMVINDO10` com `aplicado` igual a `true`.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `200` e realizou corretamente o cálculo do carrinho. O subtotal retornado foi de R$ 239,70, com desconto de R$ 23,97, frete de R$ 0,00 e total de R$ 215,73. O campo `freteGratis` retornou `true`, `valorFaltanteFreteGratis` retornou R$ 0,00 e o cupom `BEMVINDO10` foi retornado com `aplicado` igual a `true`, conforme esperado.

**Evidência:**
- [Cálculo do carrinho com produtos e cupom válidos](../evidencias/API04-calcular-carrinho-cupom-valido.png)


---

## API05 - Calcular carrinho com cupom inexistente

**Endpoint:** `POST /api/carrinho/calcular`

**Objetivo:**  
Validar o comportamento da API ao calcular o carrinho utilizando um cupom inexistente.

**Dados utilizados:**
- Produto `P005` - quantidade: 1;
- Cupom: `DESCONTO10`.

**Resultado esperado:**
- Retornar status HTTP `200`;
- Retornar subtotal de R$ 100,00;
- Não aplicar desconto;
- Retornar desconto de R$ 0,00;
- Retornar frete de R$ 19,90;
- Retornar total de R$ 119,90;
- Retornar o cupom com `aplicado` igual a `false`;
- Informar em `cupom.mensagem` que o cupom é inválido.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `200` e calculou o carrinho sem aplicar desconto. O subtotal retornado foi de R$ 100,00, o desconto de R$ 0,00, o frete de R$ 19,90 e o total de R$ 119,90. O cupom `DESCONTO10` foi retornado com `aplicado` igual a `false` e a mensagem "Cupom inválido.", conforme esperado.

**Evidência:**
- [Cálculo do carrinho com cupom inexistente](../evidencias/API05-calcular-carrinho-cupom-inexistente.png)


---

## API06 - Calcular carrinho com cupom expirado

**Endpoint:** `POST /api/carrinho/calcular`

**Objetivo:**  
Validar o comportamento da API ao calcular o carrinho utilizando um cupom expirado.

**Dados utilizados:**
- Produto `P005` - quantidade: 1;
- Cupom: `VERAO2026`.

**Resultado esperado:**
- Retornar status HTTP `200`;
- Retornar subtotal de R$ 100,00;
- Não aplicar desconto;
- Retornar desconto de R$ 0,00;
- Retornar frete de R$ 19,90;
- Retornar total de R$ 119,90;
- Retornar o cupom com `aplicado` igual a `false`;
- Informar em `cupom.mensagem` que o cupom está expirado.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `200` e realizou o cálculo do carrinho sem aplicar desconto. O subtotal retornado foi de R$ 100,00, o desconto de R$ 0,00, o frete de R$ 19,90 e o total de R$ 119,90. O cupom `VERAO2026` foi retornado com `aplicado` igual a `false` e a mensagem "Cupom expirado.", conforme esperado.

**Evidência:**
- [Cálculo do carrinho com cupom expirado](../evidencias/API06-calcular-carrinho-cupom-expirado.png)


---

## API07 - Rejeitar cálculo do carrinho com lista de itens vazia

**Endpoint:** `POST /api/carrinho/calcular`

**Objetivo:**  
Validar que a API rejeita o cálculo do carrinho quando a lista de itens está vazia.

**Dados utilizados:**
- Lista `itens` vazia.

**Resultado esperado:**
- Retornar status HTTP `422`;
- Retornar o objeto `erro`;
- O código de erro deve ser `ITENS_OBRIGATORIOS`;
- A mensagem deve informar que a lista de itens é obrigatória.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `422` ao receber uma requisição com a lista `itens` vazia. O objeto `erro` foi retornado com o código `ITENS_OBRIGATORIOS`, a mensagem "Informe ao menos um item." e o campo `itens`, conforme esperado.

**Evidência:**
- [Rejeição do cálculo com lista de itens vazia](../evidencias/API07-lista-itens-vazia.png)


---

## API08 - Rejeitar item sem o campo quantidade.

**Endpoint:** `POST /api/carrinho/calcular`

**Objetivo:**
Validar que a API rejeita um item que não contém o campo obrigatório `quantidade`.

**Dados utilizados:**
- Item contendo apenas `produtoId`: `P001`;
- Campo `quantidade` ausente.

**Resultado esperado:**
- Retornar status HTTP `422`;
- Retornar o objeto `erro`;
- O código de erro deve ser `QUANTIDADE_INVALIDA`;
- A mensagem deve informar que a quantidade deve ser um número inteiro maior ou igual a 1.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `422` ao receber um item sem o campo `quantidade`. O objeto `erro` foi retornado com o código `QUANTIDADE_INVALIDA`, a mensagem "A quantidade deve ser um número inteiro maior ou igual a 1." e o campo `itens[0].quantidade`, conforme esperado.

**Evidência:**
- [Item sem quantidade rejeitado pela API](../evidencias/API08-item-sem-quantidade.png)


---

## API09 - Rejeitar produto inexistente no carrinho

**Endpoint:** `POST /api/carrinho/calcular`

**Objetivo:**  
Validar que a API rejeita o cálculo do carrinho quando um item referencia um produto inexistente.

**Dados utilizados:**
- Produto: `P999`;
- Quantidade: 1.

**Resultado esperado:**
- Retornar status HTTP `422`;
- Retornar o objeto `erro`;
- O código de erro deve ser `PRODUTO_NAO_ENCONTRADO`;
- A mensagem deve informar que o produto não foi encontrado.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `422` ao receber o produto inexistente `P999`. O objeto `erro` foi retornado com o código `PRODUTO_NAO_ENCONTRADO`, a mensagem "Produto P999 não encontrado." e o campo `itens[0].produtoId`, conforme esperado.

**Evidência:**
- [Produto inexistente rejeitado no cálculo do carrinho](../evidencias/API09-produto-inexistente-carrinho.png)


---

## API10 - Rejeitar produto duplicado na lista de itens

**Endpoint:** `POST /api/carrinho/calcular`

**Objetivo:**  
Validar que a API rejeita o cálculo do carrinho quando o mesmo produto aparece mais de uma vez na lista de itens.

**Dados utilizados:**
- Produto `P001` - quantidade: 1;
- Produto `P001` - quantidade: 2.

**Resultado esperado:**
- Retornar status HTTP `422`;
- Retornar o objeto `erro`;
- O código de erro deve ser `ITEM_DUPLICADO`;
- A mensagem deve informar que existem produtos duplicados na lista de itens.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `422` ao receber o produto `P001` duplicado na lista de itens. O objeto `erro` foi retornado com o código `ITEM_DUPLICADO`, a mensagem "O produto P001 aparece mais de uma vez." e o campo `itens[1].produtoId`, conforme esperado.

**Evidência:**
- [Produto duplicado rejeitado pela API](../evidencias/API10-produto-duplicado.png)


---

## API11 - Rejeitar quantidade inválida de produto

**Endpoint:** `POST /api/carrinho/calcular`

**Objetivo:**  
Validar que a API rejeita o cálculo do carrinho quando a quantidade de um produto é menor que 1.

**Dados utilizados:**
- Produto `P001`;
- Quantidade: 0.

**Resultado esperado:**
- Retornar status HTTP `422`;
- Retornar o objeto `erro`;
- O código de erro deve ser `QUANTIDADE_INVALIDA`;
- A mensagem deve informar que a quantidade deve ser um número inteiro maior ou igual a 1.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `422` ao receber o produto `P001` com quantidade igual a `0`. O objeto `erro` foi retornado com o código `QUANTIDADE_INVALIDA`, a mensagem "A quantidade deve ser um número inteiro maior ou igual a 1." e o campo `itens[0].quantidade`, conforme esperado.

**Evidência:**
- [Quantidade zero rejeitada pela API](../evidencias/API11-quantidade-zero-invalida.png)


---

## API12 - Criar pedido com dados válidos

**Endpoint:** `POST /api/pedidos`

**Objetivo:**  
Validar que a API cria corretamente um pedido quando os dados do cliente, os itens e o cupom são válidos.

**Dados utilizados:**
- Nome: `Maria Silva`;
- E-mail: `maria@exemplo.com`;
- CEP: `01310-100`;
- Produto `P005` - quantidade: 1;
- Cupom: `BEMVINDO10`.

**Resultado esperado:**
- Retornar status HTTP `201`;
- Retornar o número do pedido no formato `VZ-000000`;
- Retornar subtotal de R$ 100,00;
- Aplicar desconto de R$ 10,00;
- Retornar frete de R$ 19,90;
- Retornar total de R$ 109,90;
- Retornar o cupom `BEMVINDO10` com `aplicado` igual a `true`;
- Retornar o CEP normalizado como `01310100`.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `201` e criou o pedido com sucesso. O número do pedido foi retornado no formato `VZ-000000`, o CEP foi normalizado para `01310100`, o subtotal foi de R$ 100,00, o desconto de R$ 10,00, o frete de R$ 19,90 e o total de R$ 109,90. O cupom `BEMVINDO10` foi retornado com `aplicado` igual a `true`, conforme esperado.

**Evidência:**
- [Pedido criado com dados válidos](../evidencias/API12-criar-pedido-dados-validos.png)


---

## API13 - Rejeitar pedido com dados inválidos do cliente

**Endpoint:** `POST /api/pedidos`

**Objetivo:**  
Validar que a API rejeita a criação do pedido quando os dados do cliente são inválidos.

**Dados utilizados:**
- Nome: `Maria`;
- E-mail: `maria@exemplo.com`;
- CEP: `01310-100`;
- Produto `P005` - quantidade: 1.

**Resultado esperado:**
- Retornar status HTTP `422`;
- Retornar o objeto `erro`;
- O código de erro deve ser `DADOS_INVALIDOS`;
- Os detalhes do erro devem indicar que o campo `nome` é inválido.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `422` ao receber um pedido com o nome do cliente contendo apenas "Maria". O objeto `erro` foi retornado com o código `DADOS_INVALIDOS` e indicou o campo `cliente.nome` com a mensagem "Informe nome e sobrenome.", conforme esperado.

**Evidência:**
- [Pedido rejeitado por nome inválido do cliente](../evidencias/API13-pedido-nome-invalido.png)


---

## API14 - Rejeitar pedido com cupom inexistente

**Endpoint:** `POST /api/pedidos`

**Objetivo:**  
Validar que a API rejeita a criação do pedido quando é informado um cupom inexistente.

**Dados utilizados:**
- Nome: `Maria Silva`;
- E-mail: `maria@exemplo.com`;
- CEP: `01310-100`;
- Produto `P005` - quantidade: 1;
- Cupom: `DESCONTO10`.

**Resultado esperado:**
- Retornar status HTTP `422`;
- Retornar o objeto `erro`;
- O código de erro deve ser `CUPOM_INVALIDO`;
- A mensagem deve informar que o cupom é inválido.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `422` ao receber uma solicitação de criação de pedido com o cupom inexistente `DESCONTO10`. O objeto `erro` foi retornado com o código `CUPOM_INVALIDO`, a mensagem "Cupom inválido." e o campo `cupom`, conforme esperado.

**Evidência:**
- [Pedido rejeitado por cupom inexistente](../evidencias/API14-pedido-cupom-invalido.png)


---

## API15 - Rejeitar pedido com cupom expirado

**Endpoint:** `POST /api/pedidos`

**Objetivo:**  
Validar que a API rejeita a criação do pedido quando é informado um cupom expirado.

**Dados utilizados:**
- Nome: `Maria Silva`;
- E-mail: `maria@exemplo.com`;
- CEP: `01310-100`;
- Produto `P005` - quantidade: 1;
- Cupom: `VERAO2026`.

**Resultado esperado:**
- Retornar status HTTP `422`;
- Retornar o objeto `erro`;
- O código de erro deve ser `CUPOM_EXPIRADO`;
- A mensagem deve informar que o cupom está expirado.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `422` ao receber uma solicitação de criação de pedido com o cupom expirado `VERAO2026`. O objeto `erro` foi retornado com o código `CUPOM_EXPIRADO`, a mensagem "Cupom expirado." e o campo `cupom`, conforme esperado.

**Evidência:**
- [Pedido rejeitado por cupom expirado](../evidencias/API15-pedido-cupom-expirado.png)


---

## API16 - Rejeitar requisição com JSON inválido

**Endpoint:** `POST /api/carrinho/calcular`

**Objetivo:**  
Validar que a API rejeita uma requisição cujo corpo não contém um JSON válido.

**Dados utilizados:**
- Corpo da requisição com JSON malformado.

**Resultado esperado:**
- Retornar status HTTP `400`;
- Retornar o objeto `erro`;
- O código de erro deve ser `JSON_INVALIDO`;
- A mensagem deve informar que o JSON enviado é inválido.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `400` ao receber uma requisição com JSON malformado. O objeto `erro` foi retornado com o código `JSON_INVALIDO` e a mensagem "O corpo da requisição deve ser um objeto JSON válido.", conforme esperado.

**Evidência:**
- [Requisição com JSON inválido rejeitada pela API](../evidencias/API16-json-invalido.png)


---

## API17 - Rejeitar requisição para rota inexistente

**Endpoint:** `GET /api/produtos-inexistente`

**Objetivo:**
Validar o comportamento da API ao realizar uma requisição para uma rota que não existe.

**Dados utilizados:**
- Rota inexistente: `/api/produtos-inexistente`.

**Resultado esperado:**
- Retornar status HTTP `404`;
- Retornar o objeto `erro`;
- O código de erro deve ser `ROTA_NAO_ENCONTRADA`;
- A mensagem deve informar que a rota não foi encontrada.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `404` ao receber uma requisição GET para a rota inexistente `/api/produtos-inexistente`. O objeto `erro` foi retornado com o código `ROTA_NAO_ENCONTRADA` e a mensagem "Rota não encontrada.", conforme esperado.

**Evidência:**
- [Rota inexistente rejeitada pela API](../evidencias/API17-rota-nao-encontrada.png)


---

## API18 - Rejeitar método HTTP não permitido

**Endpoint:** `POST /api/produtos`

**Objetivo:**
Validar que a API rejeita a utilização de um método HTTP não permitido para o endpoint de produtos.

**Dados utilizados:**
- Método HTTP: `POST`;
- Endpoint: `/api/produtos`.

**Resultado esperado:**
- Retornar status HTTP `405`;
- Retornar o objeto `erro`;
- O código de erro deve ser `METODO_NAO_PERMITIDO`;
- A mensagem deve informar que o método HTTP não é permitido.

**Status:** ✅ PASS

**Resultado obtido:**
A API retornou status HTTP `405` ao receber uma requisição `POST` para o endpoint `/api/produtos`. O objeto `erro` foi retornado com o código `METODO_NAO_PERMITIDO` e a mensagem "O método POST não é permitido nesta rota.", conforme esperado.

**Evidência:**
- [Método HTTP não permitido rejeitado pela API](../evidencias/API18-metodo-nao-permitido.png)


---

## API19 - Aplicar frete grátis para subtotal de R$ 200,00

**Endpoint:** `POST /api/carrinho/calcular`

**Objetivo:**
Validar que a API aplica frete grátis quando o subtotal do carrinho é exatamente R$ 200,00, conforme a regra de frete grátis para subtotal maior ou igual a R$ 200,00.

**Dados utilizados:**
- Produto `P005` - quantidade: 2;
- Preço unitário: R$ 100,00;
- Sem cupom de desconto.

**Resultado esperado:**
- Retornar status HTTP `200`;
- Retornar subtotal de R$ 200,00;
- Retornar desconto de R$ 0,00;
- Retornar frete de R$ 0,00;
- Retornar `freteGratis` igual a `true`;
- Retornar `valorFaltanteFreteGratis` igual a R$ 0,00;
- Retornar total de R$ 200,00.

**Status:** ❌ FAIL

**Resultado obtido:**
A API retornou status HTTP `200` e subtotal de R$ 200,00, porém retornou frete de R$ 19,90, `freteGratis` igual a `false` e total de R$ 219,90. Apesar disso, o campo `valorFaltanteFreteGratis` foi retornado como R$ 0,00.

**Bug relacionado:** BUG01

**Evidência:**
- [Frete cobrado indevidamente para subtotal de R$ 200,00](../evidencias/API19-frete-cobrado-subtotal-200.png)