# Premissas e Ambiguidades

## AMB01 - Espaços internos no código do cupom

**Critério relacionado:** CA02

**Ambiguidade identificada:**  
A documentação informa que espaços no início e no fim do código do cupom são ignorados, porém não especifica o comportamento de espaços inseridos no interior do código do cupom.

**Interpretação adotada:**  
Espaços internos serão considerados parte do código informado. Dessa forma, o valor `BEM VINDO 10` será considerado diferente de `BEMVINDO10` e deverá ser tratado como cupom inválido.

## AMB02 - Lacunas na especificação da regra de arredondamento

**Critério relacionado:** CA11

**Lacunas identificadas:**
O CA11 determina que todos os valores devem ser arredondados para duas casas decimais, porém apresenta informações insuficientes para determinar completamente o comportamento esperado do arredondamento.

Não está especificado:

- qual regra de arredondamento deve ser utilizada quando o cálculo resultar em mais de duas casas decimais;
- em qual etapa do cálculo o arredondamento deve ocorrer, como no subtotal, no desconto, no frete, no total ou somente ao final do cálculo.

**Interpretação adotada:**
Para a execução dos testes, será considerado o arredondamento matemático convencional para duas casas decimais.

O momento de aplicação do arredondamento será avaliado durante os testes exploratórios e, quando não for possível determinar o comportamento esperado a partir da documentação, a limitação será registrada.

**Limitação para execução dos testes:**
Os dados disponibilizados não permitem validar efetivamente uma regra de
arredondamento, pois os preços dos produtos e o percentual do cupom válido
não geram resultados com mais de duas casas decimais.

Dessa forma, não é possível, com os dados válidos fornecidos, provocar uma
situação que permita verificar o comportamento do sistema diante de uma
terceira casa decimal.