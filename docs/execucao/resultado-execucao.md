# Resultado da Execução dos Testes

Este documento apresenta os resultados obtidos durante a execução manual dos cenários de teste definidos para a funcionalidade de cupom de desconto e frete grátis da Verzel Store.

## Legenda

- ✅ PASS - Comportamento de acordo com o resultado esperado.
- ❌ FAIL - Comportamento diferente do resultado esperado.
- ⚠️ NÃO TESTÁVEL - Não foi possível validar completamente com os dados ou condições disponibilizadas.

## CT01 - Aplicar cupom BEMVINDO10 com sucesso na compra de um produto

**Critério relacionado:** CA01

**Status:** ✅ PASS

**Resultado esperado:**  
Aplicar 10% de desconto sobre o subtotal de R$ 100,00, resultando em R$ 10,00 de desconto, R$ 19,90 de frete e total de R$ 109,90.

**Resultado obtido:**  
O cupom BEMVINDO10 foi aplicado com sucesso. O sistema apresentou subtotal de R$ 100,00, desconto de R$ 10,00, frete de R$ 19,90 e total de R$ 109,90, conforme esperado.

**Evidência:**  
[CT01-cupom-bemvindo10-aplicado.png](../evidencias/CT01-cupom-bemvindo10-aplicado.png)

## CT02 - Aplicar cupom BEMVINDO10 com sucesso na compra de múltiplos produtos

**Critério relacionado:** CA01

**Status:** ✅ PASS

**Resultado esperado:**  
Aplicar 10% de desconto sobre o subtotal de R$ 159,90, resultando em R$ 15,99 de desconto, R$ 19,90 de frete e total de R$ 163,81.

**Resultado obtido:**  
O cupom BEMVINDO10 foi aplicado com sucesso. O sistema apresentou subtotal de R$ 159,90, desconto de R$ 15,99, frete de R$ 19,90 e total de R$ 163,81, conforme esperado.

**Evidência:**  
[CT02-cupom-bemvindo10-multiplos-produtos.png](../evidencias/CT02-cupom-bemvindo10-multiplos-produtos.png)

## CT03 - Aplicar cupom BEMVINDO10 informado em letras minúsculas

**Critério relacionado:** CA02

**Status:** ✅ PASS

**Resultado esperado:**  
O cupom informado como "bemvindo10" deve ser reconhecido e aplicado com sucesso, resultando em desconto de R$ 10,00 e total de R$ 109,90, incluindo o frete.

**Resultado obtido:**  
O cupom informado em letras minúsculas foi aceito e aplicado com sucesso. Após a aplicação, o sistema normalizou o código para "BEMVINDO10" e apresentou desconto de R$ 10,00 e total de R$ 109,90, conforme esperado.

**Evidências:**  
- [CT03-cupom-minusculo-informado.png](../evidencias/CT03-cupom-minusculo-informado.png)
- [CT03-cupom-minusculo-aplicado.png](../evidencias/CT03-cupom-minusculo-aplicado.png)

## CT03 - Aplicar cupom BEMVINDO10 informado em letras minúsculas

**Critério relacionado:** CA02

**Status:** ✅ PASS

**Resultado esperado:**  
O cupom informado como "bemvindo10" deve ser reconhecido e aplicado com sucesso, resultando em desconto de R$ 10,00 e total de R$ 109,90, incluindo o frete.

**Resultado obtido:**  
O cupom informado em letras minúsculas foi aceito e aplicado com sucesso. Após a aplicação, o sistema normalizou o código para "BEMVINDO10" e apresentou desconto de R$ 10,00 e total de R$ 109,90, conforme esperado.

**Evidências:**  
- [Cupom informado em letras minúsculas](../evidencias/CT03-cupom-minusculo-informado.png)
- [Cupom aplicado com sucesso](../evidencias/CT03-cupom-minusculo-aplicado.png)
- [Vídeo da execução do cenário](../evidencias/CT03-cupom-minusculo-execucao.mp4)

## CT04 - Aplicar cupom BEMVINDO10 informado em letras maiúsculas e minúsculas

**Critério relacionado:** CA02

**Status:** ✅ PASS

**Resultado esperado:**  
O cupom informado como "BemVindo10" deve ser reconhecido e aplicado com sucesso, resultando em desconto de R$ 10,00 e total de R$ 109,90, incluindo o frete.

**Resultado obtido:**  
O cupom informado com letras maiúsculas e minúsculas foi aceito e aplicado com sucesso. Após a aplicação, o sistema normalizou o código para "BEMVINDO10" e apresentou desconto de R$ 10,00, frete de R$ 19,90 e total de R$ 109,90, conforme esperado.

**Evidências:**  
- [Cupom informado com letras maiúsculas e minúsculas](../evidencias/CT04-cupom-maiusculas-minusculas-informado.png)
- [Cupom aplicado com sucesso](../evidencias/CT04-cupom-maiusculas-minusculas-aplicado.png)

## CT05 - Aplicar cupom BEMVINDO10 com espaços no início

**Critério relacionado:** CA02

**Status:** ✅ PASS

**Resultado esperado:**  
O cupom "BEMVINDO10", informado com espaços no início, deve ser reconhecido e aplicado com sucesso, ignorando os espaços iniciais.

**Resultado obtido:**  
O cupom informado com espaços no início foi aceito e aplicado com sucesso. O sistema ignorou os espaços, aplicou desconto de R$ 10,00 e apresentou o total de R$ 109,90, incluindo o frete.

**Evidências:**  
- [Cupom informado com espaços no início](../evidencias/CT05-cupom-espacos-inicio-informado.png)
- [Cupom aplicado com sucesso](../evidencias/CT05-cupom-espacos-inicio-aplicado.png)


## CT06 - Aplicar cupom BEMVINDO10 com espaços no final

**Critério relacionado:** CA02

**Status:** ✅ PASS

**Resultado esperado:**  
O cupom "BEMVINDO10", informado com espaços no final, deve ser reconhecido e aplicado com sucesso, ignorando os espaços finais.

**Resultado obtido:**  
O cupom informado com espaços no final foi aceito e aplicado com sucesso. O sistema ignorou os espaços finais, aplicou desconto de R$ 10,00 e apresentou o total de R$ 109,90, incluindo o frete.

**Evidências:**  
- [Cupom informado com espaços no final](../evidencias/CT06-cupom-espacos-final-informado.png)
- [Cupom aplicado com sucesso](../evidencias/CT06-cupom-espacos-final-aplicado.png)


## CT07 - Aplicar cupom BEMVINDO10 com espaços no início e no final

**Critério relacionado:** CA02

**Status:** ✅ PASS

**Resultado esperado:**  
O cupom "BEMVINDO10", informado com espaços no início e no final, deve ser reconhecido e aplicado com sucesso. Os espaços devem ser ignorados, resultando em desconto de R$ 10,00 e total de R$ 109,90, incluindo o frete.

**Resultado obtido:**  
O cupom informado com espaços no início e no final foi aceito e aplicado com sucesso. O sistema ignorou os espaços, normalizou o código para "BEMVINDO10" e apresentou desconto de R$ 10,00, frete de R$ 19,90 e total de R$ 109,90, conforme esperado.

**Evidências:**
- [Cupom informado com espaços no início e no final](../evidencias/CT07-cupom-espacos-inicio-final-informado.png)
- [Cupom aplicado com sucesso](../evidencias/CT07-cupom-espacos-inicio-final-aplicado.png)


## CT08 - Aplicar cupom BEMVINDO10 informado com espaços internos

**Critérios relacionados:** CA02, CA03 e AMB01

**Status:** ✅ PASS

**Resultado esperado:**  
O cupom "BEM VINDO 10", informado com espaços internos, não deve ser reconhecido como "BEMVINDO10". O sistema deve exibir a mensagem "Cupom inválido.", não aplicar desconto e manter o total do pedido em R$ 119,90, incluindo o frete.

**Resultado obtido:**  
O sistema não reconheceu o código "BEM VINDO 10" como um cupom válido e exibiu a mensagem "Cupom inválido.". Nenhum desconto foi aplicado, o frete permaneceu em R$ 19,90 e o total do pedido permaneceu em R$ 119,90, conforme esperado.

**Evidência:**
- [Cupom com espaços internos tratado como inválido](../evidencias/CT08-cupom-espacos-internos-invalido.png)


## CT09 - Aplicar cupom inexistente

**Critério relacionado:** CA03

**Status:** ✅ PASS

**Resultado esperado:**  
Ao aplicar o cupom inexistente "DESCONTO10", o sistema deve exibir a mensagem "Cupom inválido.", não aplicar desconto e manter o total do pedido em R$ 119,90, incluindo o frete.

**Resultado obtido:**  
O sistema identificou o cupom "DESCONTO10" como inválido e exibiu a mensagem "Cupom inválido.". Nenhum desconto foi aplicado, o frete permaneceu em R$ 19,90 e o total do pedido permaneceu em R$ 119,90, conforme esperado.

**Evidência:**
- [Cupom inexistente tratado como inválido](../evidencias/CT09-cupom-inexistente-invalido.png)


## CT10 - Aplicar cupom expirado

**Critério relacionado:** CA04

**Status:** ✅ PASS

**Resultado esperado:**
Ao aplicar o cupom expirado "VERAO2026", o sistema deve exibir a mensagem "Cupom expirado.", não aplicar desconto e manter o total do pedido em R$ 119,90, incluindo o frete.

**Resultado obtido:**
O sistema identificou o cupom "VERAO2026" como expirado e exibiu a mensagem "Cupom expirado.". Nenhum desconto foi aplicado, o frete permaneceu em R$ 19,90 e o total do pedido permaneceu em R$ 119,90, conforme esperado.

**Evidência:**
- [Cupom expirado não aplicado](../evidencias/CT10-cupom-expirado.png)

## CT11 - Remover cupom aplicado

**Critério relacionado:** CA05

**Status:** ✅ PASS

**Resultado esperado:**
Ao remover o cupom "BEMVINDO10", o cupom não deve mais ser exibido como aplicado, nenhum desconto deve permanecer no pedido, o total deve retornar para R$ 119,90 e o campo de cupom deve ficar disponível e vazio.

**Resultado obtido:**
O cupom "BEMVINDO10" foi removido com sucesso. O desconto retornou para R$ 0,00, o total do pedido foi atualizado para R$ 119,90 e o campo de cupom ficou novamente disponível e vazio, conforme esperado.

**Evidência:**
- [Execução da remoção do cupom aplicado](../evidencias/CT11-remover-cupom-aplicado-execucao.mp4)


## CT12 - Não permitir informar outro cupom com um cupom aplicado

**Critério relacionado:** CA05

**Status:** ✅ PASS

**Resultado esperado:**
Ao aplicar o cupom "BEMVINDO10", deve ser aplicado desconto de R$ 10,00 e o total do pedido deve ser R$ 109,90. Enquanto o cupom estiver aplicado, o campo para informar outro cupom deve ficar indisponível, sendo exibida apenas a opção para remover o cupom aplicado.

**Resultado obtido:**
O cupom "BEMVINDO10" foi aplicado com sucesso, apresentando desconto de R$ 10,00 e total de R$ 109,90. O campo para informar outro cupom ficou indisponível e foi exibida apenas a opção "Remover cupom", conforme esperado.

**Evidência:**
- [Execução do bloqueio de segundo cupom](../evidencias/CT12-bloqueio-segundo-cupom-execucao.mp4)


## CT13 - Trocar cupom aplicado por um cupom expirado

**Critério relacionado:** CA05

**Status:** ✅ PASS

**Resultado esperado:**
Após remover o cupom "BEMVINDO10", o cliente deve conseguir informar e aplicar outro cupom. Ao aplicar o cupom expirado "VERAO2026", o sistema deve exibir a mensagem "Cupom expirado.", não aplicar desconto, apresentar total de R$ 119,90 e manter o campo de cupom disponível para informar um novo código.

**Resultado obtido:**
O cupom "BEMVINDO10" foi removido com sucesso e o campo de cupom ficou novamente disponível. O cupom "VERAO2026" foi informado e, ao tentar aplicá-lo, o sistema exibiu a mensagem "Cupom expirado.". Nenhum desconto foi aplicado, o total do pedido foi atualizado para R$ 119,90 e o campo permaneceu disponível para informar um novo código, conforme esperado.

**Evidência:**
- [Execução da troca do cupom aplicado por um cupom expirado](../evidencias/CT13-troca-cupom-expirado-execucao.mp4)


## CT14 - Aplicar frete grátis para subtotal de R$ 200,00

**Critério relacionado:** CA06

**Status:** ❌ FAIL

**Resultado esperado:**
Ao atingir o subtotal de R$ 200,00, o pedido deve receber frete grátis, apresentando frete de R$ 0,00 e total de R$ 200,00.

**Resultado obtido:**
Com 2 unidades da "Mochila Urbana 20L", o subtotal foi de R$ 200,00. Entretanto, o sistema cobrou frete de R$ 19,90 e apresentou total de R$ 219,90. Além disso, foi exibida a mensagem "Faltam R$ 0,00 para o frete grátis.", embora o valor mínimo para obtenção do benefício já tenha sido atingido.

**Bug relacionado:** BUG01 - Frete cobrado para subtotal de R$ 200,00

**Evidência:**
- [Frete cobrado indevidamente para subtotal de R$ 200,00](../evidencias/CT14-frete-cobrado-subtotal-200.png)


## CT15 - Manter frete grátis quando o subtotal fica abaixo de R$ 200,00 após o desconto

**Critérios relacionados:** CA06 e CA08

**Status:** ✅ PASS

**Resultado esperado:**
Com subtotal de R$ 209,60, ao aplicar o cupom "BEMVINDO10", deve ser aplicado desconto de R$ 20,96. Mesmo com o valor após o desconto ficando em R$ 188,64, o frete deve permanecer grátis, pois a regra de frete considera o subtotal antes da aplicação do desconto.

**Resultado obtido:**
O sistema apresentou subtotal de R$ 209,60 e aplicou desconto de R$ 20,96. O valor resultante foi de R$ 188,64 e o frete permaneceu grátis, demonstrando que a regra de frete foi aplicada sobre o subtotal anterior ao desconto, conforme esperado.

**Evidência:**
- [Frete grátis mantido após aplicação do desconto](../evidencias/CT15-frete-gratis-apos-desconto.png)


## CT16 - Calcular frete para subtotal abaixo do limite de frete grátis

**Critério relacionado:** CA07

**Status:** ✅ PASS

**Resultado esperado:**
Com subtotal de R$ 199,60, o sistema deve cobrar frete de R$ 19,90, informar que faltam R$ 0,40 para obter frete grátis e apresentar o total do pedido de R$ 219,50.

**Resultado obtido:**
O sistema apresentou subtotal de R$ 199,60, cobrou frete de R$ 19,90, informou que faltam R$ 0,40 para o frete grátis e apresentou o total de R$ 219,50, conforme esperado.

**Evidência:**
- [Frete calculado para subtotal abaixo de R$ 200,00](../evidencias/CT16-frete-subtotal-abaixo-200.png)


## CT17 - Aplicar desconto somente sobre o subtotal dos produtos

**Critério relacionado:** CA09

**Status:** ✅ PASS

**Resultado esperado:**
Ao aplicar o cupom "BEMVINDO10" sobre o subtotal de R$ 49,90, o sistema deve aplicar desconto de R$ 4,99 somente sobre o valor dos produtos. O frete deve permanecer em R$ 19,90 e o total do pedido deve ser R$ 64,81.

**Resultado obtido:**
O sistema aplicou desconto de R$ 4,99 sobre o subtotal de R$ 49,90. O frete permaneceu em R$ 19,90 e o total do pedido foi atualizado para R$ 64,81, conforme esperado.

**Evidência:**
- [Desconto aplicado somente sobre o subtotal dos produtos](../evidencias/CT17-desconto-somente-subtotal.png)


## CT18 - Limitar a quantidade máxima de um produto a 5 unidades pela interface

**Critério relacionado:** CA10

**Status:** ✅ PASS

**Resultado esperado:**  
Ao atingir 5 unidades da "Camiseta Essencial", o sistema deve exibir a mensagem "Limite de 5 unidades por produto.", desabilitar o botão "+" para adicionar novas unidades e impedir a inclusão de uma 6ª unidade.

**Resultado obtido:**  
Ao atingir 5 unidades da "Camiseta Essencial", o sistema exibiu a mensagem "Limite de 5 unidades por produto.", desabilitou o botão "+" e manteve a quantidade máxima do produto em 5 unidades, impedindo a inclusão de uma 6ª unidade, conforme esperado.

**Evidência:**  
- [Limite máximo de 5 unidades e botão "+" desabilitado](../evidencias/CT18-limite-5-unidades-interface.png)


## CT19 - Rejeitar quantidade maior que 5 unidades de um produto pela API

**Critério relacionado:** CA10

**Status:** ❌ FAIL

**Bug relacionado:** BUG02

**Resultado esperado:**  
Ao enviar uma requisição para o endpoint `/api/carrinho/calcular` com o produto "P001" e quantidade igual a 6, a API deve rejeitar a requisição, retornar o status HTTP 422 e o código de erro "QUANTIDADE_MAXIMA_EXCEDIDA".

**Resultado obtido:**  
A API aceitou a quantidade de 6 unidades do produto "P001", retornou o status HTTP 200 e realizou normalmente o cálculo do carrinho, considerando as 6 unidades do produto.

**Evidência:**  
- [API aceita quantidade de 6 unidades no cálculo do carrinho](../evidencias/CT19-api-carrinho-aceita-quantidade-6.png)


## CT20 - Rejeitar criação de pedido com quantidade maior que 5 unidades pela API

**Critério relacionado:** CA10

**Status:** ❌ FAIL

**Bug relacionado:** BUG02

**Resultado esperado:**  
Ao enviar uma requisição para o endpoint `/api/pedidos` com dados válidos do cliente, produto "P001" e quantidade igual a 6, a API deve rejeitar a criação do pedido, retornar o status HTTP 422 e o código de erro "QUANTIDADE_MAXIMA_EXCEDIDA".

**Resultado obtido:**  
A API aceitou a quantidade de 6 unidades do produto "P001", retornou o status HTTP 201 Created e criou o pedido considerando as 6 unidades do produto.

**Evidência:**  
- [API cria pedido com quantidade de 6 unidades](../evidencias/CT20-api-pedido-criado-quantidade-6.png)


## CA11 - Arredondamento dos valores para duas casas decimais

**Status:** ⚠️ NÃO TESTÁVEL COM OS DADOS FORNECIDOS

**Resultado da análise:**  
O critério determina que todos os valores sejam arredondados para duas casas decimais. Entretanto, os preços dos produtos disponíveis e o percentual do cupom válido fornecido não geram resultados com mais de duas casas decimais.

Dessa forma, não foi possível provocar uma situação em que o sistema precisasse realizar efetivamente um arredondamento a partir de uma terceira casa decimal.

A limitação e a interpretação adotada para o critério estão documentadas em `premissas-e-ambiguidades.md`, na seção **AMB02 - Lacunas na especificação da regra de arredondamento**.