# language: pt

Funcionalidade: Cupom de desconto e frete grátis

  Como cliente da Verzel Store
  Quero aplicar um cupom de desconto e ganhar frete grátis em compras maiores
  Para pagar menos nas minhas compras

  @CA01
Cenário: CT01 - Aplicar cupom BEMVINDO10 com sucesso na compra de um produto
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é R$ 100,00
  Quando aplicar o cupom "BEMVINDO10"
  Então deve ser aplicado um desconto 10% correspondente a R$ 10,00
  E o frete deve ser R$ 19,90
  E o valor total do pedido deve ser R$ 109,90

  @CA01
Cenário: CT02 - Aplicar cupom BEMVINDO10 com sucesso na compra de múltiplos produtos
  Dado que o cliente possui 1 unidade da "Camiseta Essencial" no carrinho
  E o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é R$ 159,90
  Quando aplicar o cupom "BEMVINDO10"
  Então deve ser aplicado um desconto de 10% correspondente a R$ 15,99
  E o frete deve ser R$ 19,90
  E o valor total do pedido deve ser R$ 163,81

  @CA02
Cenário: CT03 - Aplicar cupom BEMVINDO10 informado em letras minúsculas
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é de R$ 100,00
  Quando aplicar o cupom de desconto "bemvindo10"
  Então o cupom deve ser aplicado com sucesso
  E deve ser aplicado um desconto de 10% correspondente a R$ 10,00
  E o total do pedido deve ser R$ 109,90, incluindo o frete.

  @CA02
Cenário: CT04 - Aplicar cupom BEMVINDO10 informado em letras maiúsculas e minúsculas
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é de R$ 100,00
  Quando aplicar o cupom de desconto "BemVindo10"
  Então o cupom deve ser aplicado com sucesso 
  E deve ser aplicado um desconto de 10% correspondente a R$ 10,00
  E o total do pedido deve ser R$ 109,90, incluindo o frete.
   
   @CA02
Cenário: CT05 - Aplicar cupom BEMVINDO10 com espaços no inicio
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é de R$ 100,00
  Quando aplicar o cupom de desconto "BEMVINDO10" com espaços no inicio
  Então o cupom deve ser aplicado com sucesso
  E deve ser aplicado um desconto de 10% correspondente a R$ 10,00
  E o total do pedido deve ser R$ 109,90, incluindo o frete

  @CA02
Cenário: CT06 - Aplicar cupom BEMVINDO10 com espaços no final
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é de R$ 100,00
  Quando aplicar o cupom de desconto "BEMVINDO10" com espaços no final
  Então o cupom deve ser aplicado com sucesso
  E deve ser aplicado um desconto de 10% correspondente a R$ 10,00
  E o total do pedido deve ser R$ 109,90, incluindo o frete

  @CA02
Cenário: CT07 - Aplicar cupom BEMVINDO10 com espaços no início e no final
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é de R$ 100,00
  Quando aplicar o cupom de desconto " BEMVINDO10 "
  Então o cupom deve ser aplicado com sucesso
  E deve ser aplicado um desconto de 10% correspondente a R$ 10,00
  E o total do pedido deve ser R$ 109,90, incluindo o frete

  @CA02 @CA03 @AMB01
Cenário: CT08 - Aplicar cupom BEMVINDO10 informado com espaços internos
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é de R$ 100,00
  Quando aplicar o cupom de desconto "BEM VINDO 10"
  Então o cupom não deve ser aplicado
  E deve ser exibida a mensagem "Cupom inválido."
  E o desconto deve ser de R$ 0,00
  E o total do pedido deve ser R$ 119,90, incluindo o frete

 @CA03
Cenário: CT09 - Aplicar cupom inexistente
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é de R$ 100,00
  Quando aplicar o cupom de desconto "DESCONTO10"
  Então o cupom não deve ser aplicado
  E deve ser exibida a mensagem "Cupom inválido."
  E o desconto deve ser de R$ 0,00
  E o total do pedido deve ser R$ 119,90, incluindo o frete

  @CA04
Cenário: CT10 - Aplicar cupom expirado "VERAO2026"
  Dado que o cliente possui 1 unidade da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é de R$ 100,00
  Quando aplicar o cupom de desconto "VERAO2026"
  Então o cupom não deve ser aplicado
  E deve ser exibida a mensagem "Cupom expirado."
  E o desconto deve ser de R$ 0,00
  E o total do pedido deve ser R$ 119,90, incluindo o frete

  @CA05
Cenário: CT11 - Remover cupom aplicado
    Dado que o carrinho apresenta no resumo do pedido subtotal de R$ 100,00, desconto de R$ 10,00, frete de R$ 19,90 e total de R$ 109,90
    E o cupom "BEMVINDO10" está aplicado
    E o campo de cupom está bloqueado
    Quando o cliente remove o cupom aplicado
    Então o cupom "BEMVINDO10" não é mais exibido no resumo do pedido
    E nenhum desconto é aplicado ao pedido
    E o total do pedido é R$ 119,90
    E o campo de cupom fica desbloqueado e vazio

 @CA05
Cenário: CT12 - Não permitir informar outro cupom com um cupom aplicado
  Dado que o carrinho possui subtotal de R$ 100,00 e frete de R$ 19,90
  Quando o cliente aplicar o cupom "BEMVINDO10"
  Então o cupom deve ser aplicado com desconto de R$ 10,00
  E o total do pedido deve ser R$ 109,90
  E o campo para informar outro cupom deve ficar indisponível
  E deve ser exibida apenas a opção para remover o cupom aplicado


  Cenário: CT13 - Trocar cupom aplicado por um cupom expirado
    Dado que o carrinho apresenta no resumo do pedido subtotal de R$ 100,00, desconto de R$ 10,00, frete de R$ 19,90 e total de R$ 109,90
    E o cupom "BEMVINDO10" está aplicado  
    Quando o cliente remove o cupom aplicado
    E aplica o cupom "VERAO2026"
    Então o sistema exibe a mensagem "Cupom Expirado"
    E nenhum desconto é aplicado ao pedido
    E o total do pedido é de R$ 119,90
    E o campo de cupom continua disponível para um novo código


  @CA06
Cenário: CT14 - Aplicar frete grátis para subtotal de R$ 200,00
  Dado que o cliente possui 2 unidades da "Mochila Urbana 20L" no carrinho
  E o subtotal do carrinho é de R$ 200,00
  Quando visualizar o resumo do pedido
  Então o frete deve ser grátis
  E o valor do frete deve ser R$ 0,00
  E o total do pedido deve ser R$ 200,00

  @CA06 @CA08
Cenário: CT15 - Manter frete grátis quando o subtotal fica abaixo de R$ 200,00 após o desconto
  Dado que o cliente possui 3 unidades do "Boné Aba Curva" no carrinho
  E o cliente possui 1 unidade da "Camiseta Essencial" no carrinho
  E o subtotal do carrinho é de R$ 209,60
  Quando aplicar o cupom de desconto "BEMVINDO10"
  Então deve ser aplicado um desconto de 10%, correspondente a R$ 20,96
  E o frete deve ser grátis
  E o valor do frete deve ser R$ 0,00
  E o total do pedido deve ser R$ 188,64

@CA07
Cenário: CT16 - Calcular frete para subtotal abaixo do limite de frete grátis
  Dado que o cliente possui 4 unidades do "Boné Aba Curva" no carrinho
  E o subtotal do carrinho é de R$ 199,60
  Quando visualizar o resumo do pedido
  Então deve ser cobrado o frete de R$ 19,90
  E deve ser informado que faltam R$ 0,40 para obter frete grátis
  E o total do pedido deve ser R$ 219,50

@CA09
Cenário: CT17 - Aplicar desconto somente sobre o subtotal dos produtos
  Dado que o cliente possui 1 unidade do "Boné Aba Curva" no carrinho
  E o subtotal do carrinho é de R$ 49,90
  E o frete é de R$ 19,90
  Quando aplicar o cupom de desconto "BEMVINDO10"
  Então deve ser aplicado um desconto de R$ 4,99 somente sobre o subtotal
  E o valor do frete deve permanecer R$ 19,90
  E o total do pedido deve ser R$ 64,81

@CA10
Cenário: CT18 - Limitar a quantidade máxima de um produto a 5 unidades pela interface
  Dado que o cliente possui 4 unidades da "Camiseta Essencial" no carrinho
  Quando adicionar mais 1 unidade do produto
  Então a quantidade do produto deve ser de 5 unidades
  E deve ser exibida a mensagem "Limite de 5 unidades por produto."
  E o botão "+" para adicionar unidades deve ficar desabilitado
  E não deve ser possível adicionar uma 6ª unidade

 @CA10
Cenário: CT19 - Rejeitar quantidade maior que 5 unidades de um produto pela API
  Dado que uma requisição válida é enviada para o endpoint "/api/carrinho/calcular"
  E o produto "P001" possui quantidade igual a 6
  Quando solicitar o cálculo do carrinho
  Então a API deve retornar o status HTTP 422
  E o código de erro deve ser "QUANTIDADE_MAXIMA_EXCEDIDA"

  @CA10
Cenário: CT20 - Rejeitar criação de pedido com quantidade maior que 5 unidades de um produto pela API
  Dado que uma requisição válida é enviada para o endpoint "/api/pedidos"
  E os dados do cliente são válidos
  E o produto "P001" possui quantidade igual a 6
  Quando solicitar a criação do pedido
  Então a API deve retornar o status HTTP 422
  E o código de erro deve ser "QUANTIDADE_MAXIMA_EXCEDIDA"