# BUG02 - API permite quantidade maior que 5 unidades por produto

**Critério relacionado:** CA10

## Pré-condição
Utilizar um produto válido existente no catálogo e, para a criação do pedido, informar dados válidos do cliente.

## Passos para reproduzir

1. Enviar uma requisição POST para `/api/carrinho/calcular`.
2. Informar um produto válido, por exemplo `"produtoId": "P001"`.
3. Informar `"quantidade": 6`.
4. Enviar a requisição.
5. Repetir o teste no endpoint POST `/api/pedidos`, informando os dados válidos do cliente e `"quantidade": 6`.

## Resultado esperado

A API deve rejeitar requisições com quantidade superior a 5 unidades do mesmo produto, retornando HTTP 422 com o código `QUANTIDADE_MAXIMA_EXCEDIDA`.

## Resultado obtido

O endpoint `/api/carrinho/calcular` aceitou a quantidade de 6 unidades e retornou HTTP 200, realizando normalmente o cálculo do carrinho.

O endpoint `/api/pedidos` também aceitou a quantidade de 6 unidades e retornou HTTP 201, criando o pedido normalmente.

## Evidências

- `../evidencias/BUG02-api-aceita-quantidade-maior-que-5.png`
- `../evidencias/BUG02-api-pedido-criado-quantidade-maior-que-5.png`

## Severidade

Alta