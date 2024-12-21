import { test, expect } from '@playwright/test';

// Test 1: Login Test
test('login', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://www.saucedemo.com/');

    // Perform login actions
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Verify successful login by checking if the products page is visible
    await expect(page.locator('.title')).toHaveText('Products');

    // Pause for debugging (remove in final run)
    await page.pause();
});

// Test 2: Home Page Test
test('home page', async ({ page }) => {
    // Navigate directly to the products page after login
    await page.goto('https://www.saucedemo.com/');

    // Perform login actions
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Verify homepage elements (e.g., product listing visibility)
    await expect(page.locator('.inventory_list')).toBeVisible();

    // Verify a specific product is displayed
    await expect(page.locator('.inventory_item_name').first()).toHaveText('Sauce Labs Backpack');

    // Pause for debugging (remove in final run)
    await page.pause();
});
