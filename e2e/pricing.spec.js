const { test, expect } = require('@playwright/test');

test.describe('Pricing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pricing');
  });

  test('should display all pricing plans', async ({ page }) => {
    // Check page title
    await expect(page.locator('h1')).toContainText('Simple, Transparent Pricing');
    
    // Check all three plans are visible
    await expect(page.locator('text=Starter').first()).toBeVisible();
    await expect(page.locator('text=Professional').first()).toBeVisible();
    await expect(page.locator('text=Enterprise').first()).toBeVisible();
    
    // Check Professional is marked as most popular
    await expect(page.locator('text=Most Popular')).toBeVisible();
  });

  test('should toggle between monthly and annual pricing', async ({ page }) => {
    // Get initial price for Professional plan
    const professionalPrice = page.locator('text=Professional').first().locator('..').locator('text=$599');
    await expect(professionalPrice).toBeVisible();
    
    // Click Annual toggle
    await page.locator('button:has-text("Annual")').click();
    
    // Check price changed (annual should be $479)
    const annualPrice = page.locator('text=Professional').first().locator('..').locator('text=$479');
    await expect(annualPrice).toBeVisible();
    
    // Switch back to monthly
    await page.locator('button:has-text("Monthly")').click();
    
    // Price should be back to $599
    await expect(professionalPrice).toBeVisible();
  });

  test('should display feature comparison table', async ({ page }) => {
    // Scroll to comparison section
    await page.locator('text=Compare Plans').scrollIntoViewIfNeeded();
    
    // Check table headers
    await expect(page.locator('th:has-text("Features")')).toBeVisible();
    await expect(page.locator('th:has-text("Starter")')).toBeVisible();
    await expect(page.locator('th:has-text("Professional")')).toBeVisible();
    await expect(page.locator('th:has-text("Enterprise")')).toBeVisible();
    
    // Check some features
    await expect(page.locator('td:has-text("Smart Attendance & Safety")')).toBeVisible();
    await expect(page.locator('td:has-text("AI-Powered Grading")')).toBeVisible();
  });

  test('should display FAQs', async ({ page }) => {
    // Scroll to FAQ section
    await page.locator('text=Frequently Asked Questions').scrollIntoViewIfNeeded();
    
    // Check FAQs are visible
    await expect(page.locator('text=Can I change plans later?')).toBeVisible();
    await expect(page.locator('text=Is there a setup fee?')).toBeVisible();
    await expect(page.locator('text=What payment methods do you accept?')).toBeVisible();
  });

  test('should navigate to ROI calculator from CTA', async ({ page }) => {
    // Click ROI Calculator button
    await page.locator('text=Try Our ROI Calculator').click();
    
    // Should navigate to ROI calculator
    await expect(page).toHaveURL('/roi-calculator');
  });

  test('should navigate to demo for non-enterprise plans', async ({ page }) => {
    // Click Start Free Trial on Starter plan
    await page.locator('text=Starter').first().locator('..').locator('button:has-text("Start Free Trial")').click();
    
    // Should navigate to demo page
    await expect(page).toHaveURL('/demo');
  });

  test('should navigate to contact for enterprise plan', async ({ page }) => {
    // Click Contact Sales on Enterprise plan
    await page.locator('text=Enterprise').first().locator('..').locator('button:has-text("Contact Sales")').click();
    
    // Should navigate to contact page
    await expect(page).toHaveURL('/contact');
  });
});