const { test, expect } = require('@playwright/test');

test('CT01 - Aplicar cupom BEMVINDO10 com sucesso', async ({ page }) => {

  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');

  await page
    .getByRole('article', { name: 'Mochila Urbana 20L' })
    .getByRole('button')
    .click();

  await expect(
    page.getByRole('link', { name: 'Carrinho 1 itens no carrinho'})
  ).toBeVisible();

  await page
    .getByRole('link', { name: 'Carrinho 1 itens no carrinho' })
    .click();

  await expect(
    page.getByRole('definition').filter({ hasText: 'R$ 100,00' })
).toBeVisible();

  await page
    .getByRole('textbox')
    .fill('BEMVINDO10');

  await page
  .getByRole('button', { name: 'Aplicar cupom' })
  .click(); 
  
  await expect(
  page.getByText('Desconto (BEMVINDO10)')
).toBeVisible();

  await expect(
    page.getByText('- R$ 10,00')
).toBeVisible();

  await expect(
    page.getByText('R$ 19,90')
).toBeVisible();

  await expect(
    page.getByText('R$ 109,90')
).toBeVisible();
  


});

test('CT16 - Calcular frete para subtotal abaixo do limite de frete grátis', async ({ page }) => {

  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');

  // Adiciona 1 unidade do Boné Aba Curva
  await page
    .getByRole('article', { name: 'Boné Aba Curva' })
    .getByRole('button')
    .click();

  // Acessa o carrinho
  await page
    .getByRole('link', { name: 'Carrinho 1 itens no carrinho' })
    .click();

  // Adiciona mais 3 unidades pelo botão +
  const botaoMais = page.getByRole('button', { name: 'Aumentar quantidade de' });

  await botaoMais.click();
  await botaoMais.click();
  await botaoMais.click();

  // Valida o subtotal: 4 x R$ 49,90 = R$ 199,60
  await expect(
  page.getByRole('definition').filter({ hasText: 'R$ 199,60' })
).toBeVisible();

  // Valida o frete
  await expect(
    page.getByText('R$ 19,90')
  ).toBeVisible();

  // Valida quanto falta para obter frete grátis
  await expect(
    page.getByText('Faltam R$ 0,40 para o frete grátis.')
  ).toBeVisible();

  // Valida o total
  await expect(
    page.getByText('R$ 219,50')
  ).toBeVisible();

});


test('CT18 - Limitar a quantidade máxima de um produto a 5 unidades pela interface', async ({ page }) => {

  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');

  // Adiciona a Camiseta Essencial ao carrinho
  await page
    .getByRole('article', { name: 'Camiseta Essencial' })
    .getByRole('button')
    .click();

  // Acessa o carrinho
  await page
    .getByRole('link', { name: 'Carrinho 1 itens no carrinho' })
    .click();

  // Localiza o botão para aumentar a quantidade
  const botaoMais = page.getByRole('button', { name: 'Aumentar quantidade de' });

  // Aumenta de 1 para 5 unidades
  await botaoMais.click();
  await botaoMais.click();
  await botaoMais.click();
  await botaoMais.click();

  // Valida a mensagem de limite
  await expect(
    page.getByText('Limite de 5 unidades por produto.')
  ).toBeVisible();

  // Valida que o botão "+" ficou desabilitado
  await expect(botaoMais).toBeDisabled();

});