const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to all main pages', async ({ page }) => {
    // Test Solutions page
    await page.locator('nav >> text=Solutions').click();
    await expect(page).toHaveURL('/solutions');
    await expect(page.locator('h1')).toContainText('AI-Powered Solutions');

    // Test Pricing page
    await page.locator('nav >> text=Pricing').click();
    await expect(page).toHaveURL('/pricing');
    await expect(page.locator('h1')).toContainText('Simple, Transparent Pricing');

    // Test ROI Calculator page
    await page.locator('nav >> text=ROI Calculator').click();
    await expect(page).toHaveURL('/roi-calculator');
    await expect(page.locator('h1')).toContainText('Calculate Your ROI');

    // Test About page
    await page.locator('nav >> text=About').click();
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About Us');

    // Test Home link
    await page.locator('nav >> text=Home').click();
    await expect(page).toHaveURL('/');
  });

  test('should navigate to market pages from dropdown', async ({ page }) => {
    // Open markets dropdown
    await page.locator('nav >> text=Markets').click();
    
    // Click K-12 Schools
    await page.locator('text=K-12 Schools').click();
    await expect(page).toHaveURL('/markets/k12');
    await expect(page.locator('h1')).toContainText('K-12 Solutions');
  });

  test('should navigate to Contact and Demo pages from CTA buttons', async ({ page }) => {
    // Click Contact Sales
    await page.locator('nav >> text=Contact Sales').click();
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1')).toContainText('Get in Touch');

    // Go back home
    await page.goto('/');

    // Click Request Demo in nav
    await page.locator('nav >> text=Request Demo').click();
    await expect(page).toHaveURL('/demo');
    await expect(page.locator('h1')).toContainText('See SchoolVision AI in Action');
  });

  test('mobile navigation should work', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Open mobile menu
    await page.locator('button[aria-label="Open main menu"]').click();
    
    // Check mobile menu is visible
    await expect(page.locator('.sm\\:hidden >> text=Solutions')).toBeVisible();
    
    // Navigate to Solutions
    await page.locator('.sm\\:hidden >> text=Solutions').click();
    await expect(page).toHaveURL('/solutions');
  });
});