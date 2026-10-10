# Verzel Store - QA Challenge

Projeto desenvolvido para o desafio técnico de QA da Verzel, com foco na validação da funcionalidade de **cupom de desconto e frete grátis** da Verzel Store.

O projeto contempla planejamento e execução de testes, documentação de evidências, registro de bugs, análise de ambiguidades e automação de testes com Playwright.

## 📋 Escopo dos testes

Os testes foram elaborados com base na documentação e nos critérios de aceite fornecidos para a funcionalidade.

Foram validados cenários relacionados a:

- aplicação de cupom válido;
- tratamento de letras maiúsculas e minúsculas no cupom;
- tratamento de espaços no código do cupom;
- cupom inválido;
- cupom expirado;
- remoção e troca de cupom;
- cálculo de desconto;
- regra de frete grátis;
- cálculo do valor restante para frete grátis;
- limite máximo de unidades por produto;
- validações pela interface e pela API;
- análise da regra de arredondamento, considerando as limitações dos dados fornecidos.

## 🧪 Cenários de teste

Os cenários foram escritos utilizando **Gherkin/BDD** e estão disponíveis em:

`docs/cenarios-de-teste/cenarios-cupom-frete.feature`

Foram elaborados e executados **20 cenários de teste**.

## 📊 Resultado da execução

Resultado dos testes manuais e exploratórios:

- **20 cenários executados**
- **17 cenários aprovados (PASS)**
- **3 cenários reprovados (FAIL)**
- **2 bugs identificados**
- **1 critério não testável com os dados fornecidos (CA11)**

Os resultados detalhados estão disponíveis em:

`docs/execucao/resultado-execucao.md`

## 🐞 Bugs encontrados

Durante a execução foram identificados dois bugs:

### BUG01 - Frete cobrado para subtotal de R$ 200,00

O sistema cobra frete para um subtotal exatamente igual a R$ 200,00, apesar do critério de aceite determinar frete grátis para valores maiores ou iguais a R$ 200,00.

### BUG02 - API permite quantidade maior que 5 unidades

A API permite quantidade superior ao limite máximo de 5 unidades por produto tanto no cálculo do carrinho quanto na criação do pedido.

Os detalhes dos bugs estão disponíveis em:

`docs/bugs/`

## 📸 Evidências

As evidências das execuções foram registradas por meio de screenshots e gravações de tela.

Estão disponíveis em:

`docs/evidencias/`

## ⚠️ Premissas e ambiguidades

Durante a análise da documentação foram identificados pontos que exigiram interpretação, incluindo o comportamento de espaços internos no código do cupom e limitações para validar efetivamente a regra de arredondamento.

As decisões adotadas estão documentadas em:

`docs/premissas-e-ambiguidades.md`

## 🤖 Automação de testes

Foram automatizados três cenários utilizando **Playwright com JavaScript**:

- **CT01** - Aplicar cupom BEMVINDO10 com sucesso
- **CT16** - Calcular frete para subtotal abaixo do limite de frete grátis
- **CT18** - Limitar a quantidade máxima de um produto a 5 unidades pela interface

Os testes estão disponíveis em:

`tests/cupom-frete.spec.js`

A automação está configurada para execução nos navegadores:

- Chromium
- Firefox
- WebKit

Dessa forma, os 3 cenários automatizados resultam em **9 execuções cross-browser**.

## 🚀 Como executar os testes automatizados

### Pré-requisitos

É necessário possuir:

- Node.js
- npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/JaquelineSanches/verzel-store-qa-challenge.git
```

Entre na pasta do projeto:

```bash
cd verzel-store-qa-challenge
```

Instale as dependências:

```bash
npm install
```

Instale os navegadores utilizados pelo Playwright:

```bash
npx playwright install
```

### Executar os testes

Para executar todos os testes:

```bash
npm test
```

Para executar visualizando os navegadores:

```bash
npm run test:headed
```

## 🛠️ Tecnologias e ferramentas utilizadas

- Playwright
- JavaScript
- Node.js
- Postman
- Gherkin / BDD
- Git
- GitHub
- Visual Studio Code

## 📁 Estrutura do projeto

```text
verzel-store-qa-challenge/
├── docs/
│   ├── bugs/
│   ├── cenarios-de-teste/
│   ├── evidencias/
│   ├── execucao/
│   ├── premissas-e-ambiguidades.md
│   └── teste-exploratorio.md
├── tests/
│   └── cupom-frete.spec.js
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## 👩‍💻 Autora

**Jaqueline Patricia Sanches**

Projeto desenvolvido como parte do processo seletivo para QA da Verzel.
