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

  
  await page
    .getByRole('article', { name: 'Boné Aba Curva' })
    .getByRole('button')
    .click();

  await page
    .getByRole('article', { name: 'Garrafa Térmica 750ml'})  
    .getByRole('button')
    .click();

  
  await page
    .getByRole('link', { name: 'Carrinho 2 itens no carrinho' })
    .click();

  
  const botaoMais = page.getByRole('button', { name: 'Aumentar quantidade de Garrafa Térmica 750ml' });

  await botaoMais.click();
  await botaoMais.click();

   
const subtotal = page.locator('[data-valor="subtotal"]');
await expect(subtotal).toHaveText('R$ 199,90');

  
const frete = page.locator('[data-valor="frete"]');
await expect(frete).toHaveText('R$ 19,90');

      
const avisoFrete =  page.locator('.aviso-frete');
await expect(avisoFrete).toHaveText(
'Faltam R$ 0,10 para o frete grátis.'
);
  
const total = page.locator('[data-valor="total"]');
await expect(total).toHaveText('R$ 219,80');

});


test('CT18 - Limitar a quantidade máxima de um produto a 5 unidades pela interface', async ({ page }) => {

  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');

  
  await page
    .getByRole('article', { name: 'Camiseta Essencial' })
    .getByRole('button')
    .click();

  
  await page
    .getByRole('link', { name: 'Carrinho 1 itens no carrinho' })
    .click();

  
  const botaoMais = page.getByRole('button', { name: 'Aumentar quantidade de' });

  
  await botaoMais.click();
  await botaoMais.click();
  await botaoMais.click();
  await botaoMais.click();

  
  await expect(
    page.getByText('Limite de 5 unidades por produto.')
  ).toBeVisible();

 
  await expect(botaoMais).toBeDisabled();

});