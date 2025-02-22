import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://fakestore.testelka.pl/');
  await page.getByRole('link', { name: 'Przejdź do kategorii produktu Windsurfing' }).click();
  await page.getByRole('link', { name: 'Egipt – El Gouna 3 400,00 zł' }).click();
  await page.getByRole('button', { name: 'Dodaj do koszyka' }).click();
  await page.getByRole('link', { name: '400,00 zł 1 Produkt ' }).click();
  await page.getByRole('link', { name: 'Przejdź do płatności ' }).click();
  await page.getByRole('textbox', { name: 'Imię *' }).click();
  await page.getByRole('textbox', { name: 'Imię *' }).fill('Anna');
  await page.getByRole('textbox', { name: 'Nazwisko *' }).click();
  await page.getByRole('textbox', { name: 'Nazwisko *' }).fill('Nowak');
  await page.getByRole('textbox', { name: 'Nazwa firmy (opcjonalne)' }).click();
  await page.locator('div').filter({ hasText: 'Zamówienie Jeżeli masz już' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Ulica *' }).click();
  await page.getByRole('textbox', { name: 'Ulica *' }).fill('Legnicka 52');
  await page.getByRole('textbox', { name: 'Kod pocztowy *' }).click();
  await page.getByRole('textbox', { name: 'Kod pocztowy *' }).fill('54-204');
  await page.getByRole('textbox', { name: 'Miasto *' }).click();
  await page.getByRole('textbox', { name: 'Miasto *' }).fill('Wrocław');
  await page.getByRole('textbox', { name: 'Telefon *' }).click();
  await page.getByRole('textbox', { name: 'Telefon *' }).fill('123123123');
  await page.getByRole('textbox', { name: 'Adres email *' }).click();
  await page.getByRole('textbox', { name: 'Adres email *' }).fill('test1@gmail.com');
  await page.locator('iframe[name="__privateStripeFrame7834"]').contentFrame().getByRole('textbox', { name: 'Numer karty płatniczej' }).click();
  await page.locator('iframe[name="__privateStripeFrame7834"]').contentFrame().getByRole('textbox', { name: 'Numer karty płatniczej' }).fill('4242 4242 4242 4242');
  await page.locator('iframe[name="__privateStripeFrame7834"]').contentFrame().getByRole('textbox', { name: 'Numer karty płatniczej' }).press('ArrowLeft');
  await page.locator('iframe[name="__privateStripeFrame7835"]').contentFrame().getByRole('textbox', { name: 'Data ważności karty płatniczej' }).click();
  await page.locator('iframe[name="__privateStripeFrame7835"]').contentFrame().getByRole('textbox', { name: 'Data ważności karty płatniczej' }).fill('12 / 30');
  await page.locator('iframe[name="__privateStripeFrame7836"]').contentFrame().getByRole('textbox', { name: 'Kod CVC/CVV karty płatniczej' }).click();
  await page.locator('iframe[name="__privateStripeFrame7836"]').contentFrame().getByRole('textbox', { name: 'Kod CVC/CVV karty płatniczej' }).fill('123');
  await page.getByRole('checkbox', { name: 'Przeczytałem/am i akceptuję' }).check();
  await page.getByRole('button', { name: 'Kupuję i płacę' }).click();
  await page.goto('https://fakestore.testelka.pl/zamowienie/zamowienie-otrzymane/6465/?key=wc_order_VaLakmtbD5tws');
});