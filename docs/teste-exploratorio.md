## Sessão TE01 - Exploração do carrinho, cupons e cálculos

**Duração planejada:** 30 minutos

**Objetivo:**  
Explorar diferentes sequências de utilização do carrinho, cupons, quantidades,
frete e cálculos, buscando comportamentos inesperados não identificados durante
a execução dos casos de teste planejados.

**Roteiro de exploração:**

1. Explorar inclusão, remoção e alteração de produtos no carrinho.
2. Explorar alterações de quantidade e comportamento do limite de 5 unidades.
3. Explorar aplicação e remoção de cupons combinadas com alterações no carrinho.
4. Explorar mudanças no subtotal próximas ao limite de R$ 200,00 para frete grátis.
5. Observar atualização de subtotal, desconto, frete, valor restante para frete grátis e total.
6. Executar sequências incomuns de ações para identificar possíveis problemas de estado.

**Observações durante a sessão:**

### EXP01 - Persistência inconsistente do cupom após o carrinho ficar vazio

Durante os testes exploratórios foi analisado o comportamento do cupom aplicado ao deixar o carrinho sem produtos por fluxos diferentes.

**Fluxo 1 - Esvaziar carrinho:**
1. Adicionar um produto ao carrinho.
2. Aplicar o cupom "BEMVINDO10".
3. Selecionar "Esvaziar carrinho".
4. Adicionar um novo produto ao carrinho.

**Resultado observado:**
O novo produto é adicionado sem nenhum cupom aplicado.

**Fluxo 2 - Remover o último produto:**
1. Adicionar um produto ao carrinho.
2. Aplicar o cupom "BEMVINDO10".
3. Remover individualmente o último produto do carrinho.
4. Adicionar um novo produto ao carrinho.

**Resultado observado:**
O cupom "BEMVINDO10" permanece ativo e é aplicado automaticamente ao novo produto.

**Classificação:**
Achado exploratório / comportamento não especificado. Não classificado como bug.

**Conclusão:**
Foram observados comportamentos diferentes para a persistência do cupom dependendo da forma utilizada para deixar o carrinho vazio.

A documentação não especifica se um cupom deve permanecer ativo após a remoção de todos os produtos. Por esse motivo, o comportamento foi registrado como achado exploratório e não classificado como bug.

### EXP02 - Campo Nome completo aceita números e caracteres especiais

Durante os testes exploratórios da finalização da compra, foi verificado o comportamento do campo "Nome completo".

Foi informado no campo um valor contendo números e caracteres especiais:

`123456 123456@@@`

Os demais dados obrigatórios foram preenchidos com valores válidos e o pedido foi confirmado.

**Resultado observado:**
O sistema permitiu a criação do pedido utilizando números e caracteres especiais no campo "Nome completo".

**Análise:**
A documentação determina que o cliente deve informar nome e sobrenome, porém não especifica quais caracteres são permitidos ou proibidos no campo.

Dessa forma, não é possível afirmar, com base na documentação fornecida, que números e caracteres especiais deveriam ser rejeitados.

**Classificação:**
Achado exploratório / lacuna de especificação. Não classificado como bug.

## Resultado da sessão exploratória

Durante a sessão também foram explorados:

- inclusão, remoção e alteração da quantidade de produtos no carrinho;
- comportamento do limite máximo de 5 unidades;
- aplicação e remoção de cupons durante alterações no carrinho;
- atualização de subtotal, desconto, frete e total após alterações nos produtos;
- comportamento do valor restante para obtenção de frete grátis;
- finalização da compra com diferentes dados de entrada.

Além dos bugs já identificados durante a execução dos casos de teste planejados, a sessão exploratória resultou em dois achados adicionais:

- **EXP01:** persistência inconsistente do cupom após o carrinho ficar vazio;
- **EXP02:** campo "Nome completo" aceita números e caracteres especiais.

Os dois comportamentos foram registrados como achados exploratórios e não classificados como bugs devido à ausência de definição suficiente na documentação para determinar o comportamento esperado.