import { test, expect } from '@playwright/test';

test('buyDrill', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-categories"]').click();
  await page.locator('[data-test="nav-power-tools"]').click();
  await page.locator('[data-test="category-01JMFBJG5X7W8S90K8SMZBA1ZW"]').check();
  await page.locator('[data-test="product-01JMFBJG9N1WDM7PT8E194BSPZ"]').click();
  await page.locator('[data-test="increase-quantity"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-cart"]').click();
  await page.locator('[data-test="proceed-1"]').click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('customer2@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="password"]').click({
    modifiers: ['ControlOrMeta']
  });
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="proceed-2"]').click();
  await page.locator('[data-test="state"]').click();
  await page.locator('[data-test="state"]').fill('Berlin');
  await page.locator('[data-test="postal_code"]').click();
  await page.locator('[data-test="postal_code"]').fill('7894');
  await page.locator('[data-test="proceed-3"]').click();
  await page.locator('[data-test="payment-method"]').selectOption('gift-card');
  await page.locator('[data-test="gift_card_number"]').click();
  await page.locator('[data-test="gift_card_number"]').fill('1234555');
  await page.locator('[data-test="validation_code"]').click();
  await page.locator('[data-test="validation_code"]').fill('1234');
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.getByText('Thanks for your order! Your')).toBeVisible();
});