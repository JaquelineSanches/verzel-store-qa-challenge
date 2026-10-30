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

[docs/cenarios-de-teste/cenarios-cupom-frete.feature](docs/cenarios-de-teste/cenarios-cupom-frete.feature)

Foram elaborados e executados **20 cenários de teste**.

## 📊 Resultado da execução

Resultado da execução dos cenários de teste:

- **20 cenários executados**
- **17 cenários aprovados (PASS)**
- **3 cenários reprovados (FAIL)**
- **2 bugs identificados**
- **1 critério não testável com os dados fornecidos (CA11)**

Os resultados detalhados estão disponíveis em:

[docs/execucao/resultado-execucao.md](docs/execucao/resultado-execucao.md)

## 🐞 Bugs encontrados

Durante a execução foram identificados dois bugs:

### BUG01 - Frete cobrado para subtotal de R$ 200,00

O sistema cobra frete para um subtotal exatamente igual a R$ 200,00, apesar do critério de aceite determinar frete grátis para valores maiores ou iguais a R$ 200,00.

### BUG02 - API permite quantidade maior que 5 unidades

A API permite quantidade superior ao limite máximo de 5 unidades por produto tanto no cálculo do carrinho quanto na criação do pedido.

Os detalhes dos bugs estão disponíveis em:

[docs/bugs/](docs/bugs/)

## 📸 Evidências

As evidências das execuções foram registradas por meio de screenshots e gravações de tela.

Estão disponíveis em:

[docs/evidencias/](docs/evidencias/)

## ⚠️ Premissas e ambiguidades

Durante a análise da documentação foram identificados pontos que exigiram interpretação, incluindo o comportamento de espaços internos no código do cupom e limitações para validar efetivamente a regra de arredondamento.

As decisões adotadas estão documentadas em:

[docs/premissas-e-ambiguidades.md](docs/premissas-e-ambiguidades.md)

## 🤖 Automação de testes

A automação foi desenvolvida utilizando **Playwright com JavaScript**, contemplando testes de **interface (UI)** e **API**.

### Testes de interface (UI)

Foram automatizados três cenários da funcionalidade de cupom e frete:

- **CT01** - Aplicar cupom BEMVINDO10 com sucesso
- **CT16** - Calcular frete para subtotal abaixo do limite de frete grátis
- **CT18** - Limitar a quantidade máxima de um produto a 5 unidades pela interface

Os testes estão disponíveis em:

[tests/ui/cupom-frete.spec.js](tests/ui/cupom-frete.spec.js)

A automação de interface está configurada para execução nos navegadores:

- Chromium
- Firefox
- WebKit

Dessa forma, os 3 cenários automatizados resultam em **9 execuções cross-browser**.

### Testes de API

Também foi desenvolvida uma suíte de testes automatizados para validação da API da aplicação.

A suíte possui **23 testes de API**, distribuídos entre:

- **Produtos** - consulta, estrutura, campos obrigatórios e validação dos dados retornados;
- **Carrinho** - cálculos de subtotal, desconto, frete, cupom, limites e regras de negócio;
- **Pedidos** - criação de pedidos e validações de quantidade, itens, produtos e cupons.

Os testes estão organizados em:

[tests/api/produtos.spec.js](tests/api/produtos.spec.js)  
[tests/api/carrinho.spec.js](tests/api/carrinho.spec.js)  
[tests/api/pedidos.spec.js](tests/api/pedidos.spec.js)

Na execução atual da suíte:

- **23 testes executados**
- **20 testes aprovados (PASS)**
- **3 testes reprovados (FAIL)**
- **2 bugs conhecidos relacionados às falhas**

As falhas são mantidas intencionalmente na suíte para evidenciar comportamentos divergentes dos requisitos:

- **BUG01** - cobrança de frete para subtotal exatamente igual a R$ 200,00;
- **BUG02** - API aceita quantidade superior a 5 unidades por produto no cálculo do carrinho e na criação do pedido.

O BUG02 é validado em dois endpoints diferentes e, por isso, corresponde a duas das três falhas da suíte.

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

#### Testes de interface (UI)

Para executar os testes de interface nos navegadores configurados:

```bash
npx playwright test tests/ui
```

Para executar os testes de interface visualizando os navegadores:

```bash
npx playwright test tests/ui --headed
```

Os testes de UI estão configurados para execução em Chromium, Firefox e WebKit.

#### Testes de API

Para executar toda a suíte de testes de API:

```bash
npx playwright test --project=api
```

Para executar somente os testes de um arquivo específico:

```bash
npx playwright test tests/api/produtos.spec.js --project=api
npx playwright test tests/api/carrinho.spec.js --project=api
npx playwright test tests/api/pedidos.spec.js --project=api
```

Para executar somente um teste pelo nome:

```bash
npx playwright test --project=api -g "nome do teste"
```

> **Observação:** atualmente, a suíte de API possui 3 testes reprovados relacionados aos bugs conhecidos **BUG01** e **BUG02**. Essas falhas são mantidas intencionalmente para evidenciar comportamentos da aplicação que divergem dos requisitos especificados.

## 🛠️ Tecnologias e ferramentas utilizadas e práticas utilizadas

- Playwright
- JavaScript
- Node.js
- Postman
- Gherkin / BDD
- Git
- GitHub
- Visual Studio Code
- Testes de API REST


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
│
├── tests/
│   ├── api/
│   │   ├── produtos.spec.js
│   │   ├── carrinho.spec.js
│   │   └── pedidos.spec.js
│   │
│   └── ui/
│       └── cupom-frete.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## 👩‍💻 Autora

**Jaqueline Patricia Sanches**

Projeto iniciado como parte do processo seletivo para QA da Verzel e posteriormente expandido como projeto de estudo e portfólio, com evolução da cobertura de testes automatizados de interface e API.
