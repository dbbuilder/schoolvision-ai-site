const { test, expect } = require('@playwright/test');

test.describe('ROI Calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/roi-calculator');
  });

  test('should display calculator with default values', async ({ page }) => {
    // Check page title
    await expect(page.locator('h1')).toContainText('Calculate Your ROI');
    
    // Check calculator is visible
    await expect(page.locator('text=ROI Calculator')).toBeVisible();
    
    // Check default values are set
    const studentInput = page.locator('input[type="number"]').first();
    await expect(studentInput).toHaveValue('1000');
    
    // Check results are displayed
    await expect(page.locator('text=Total Annual Savings')).toBeVisible();
    await expect(page.locator('text=Hours Saved Per Week')).toBeVisible();
    await expect(page.locator('text=Months to ROI')).toBeVisible();
  });

  test('should recalculate when changing inputs', async ({ page }) => {
    // Get initial total savings value
    const savingsElement = page.locator('div:has-text("Total Annual Savings") >> div.text-3xl');
    const initialSavings = await savingsElement.textContent();
    
    // Change student count
    await page.fill('input[type="number"]', '2000');
    
    // Wait for recalculation
    await page.waitForTimeout(500);
    
    // Check savings changed
    const newSavings = await savingsElement.textContent();
    expect(newSavings).not.toBe(initialSavings);
  });

  test('should update based on selected features', async ({ page }) => {
    // Uncheck all features first
    await page.uncheck('input[value="attendance"]');
    await page.uncheck('input[value="grading"]');
    
    // Get savings with minimal features
    const savingsElement = page.locator('div:has-text("Total Annual Savings") >> div.text-3xl');
    const minimalSavings = await savingsElement.textContent();
    
    // Check all features
    await page.check('input[value="attendance"]');
    await page.check('input[value="pos"]');
    await page.check('input[value="grading"]');
    await page.check('input[value="analytics"]');
    
    // Wait for recalculation
    await page.waitForTimeout(500);
    
    // Savings should be higher with all features
    const maxSavings = await savingsElement.textContent();
    
    // Extract numbers and compare
    const minValue = parseInt(minimalSavings.replace(/[^0-9]/g, ''));
    const maxValue = parseInt(maxSavings.replace(/[^0-9]/g, ''));
    expect(maxValue).toBeGreaterThan(minValue);
  });

  test('should show breakdown of savings', async ({ page }) => {
    // Check all features to see full breakdown
    await page.check('input[value="attendance"]');
    await page.check('input[value="pos"]');
    await page.check('input[value="grading"]');
    await page.check('input[value="analytics"]');
    
    // Check breakdown is visible
    await expect(page.locator('text=Savings Breakdown:')).toBeVisible();
    await expect(page.locator('text=Attendance Management')).toBeVisible();
    await expect(page.locator('text=Cafeteria Operations')).toBeVisible();
    await expect(page.locator('text=Grading & Assessment')).toBeVisible();
    await expect(page.locator('text=Resource Optimization')).toBeVisible();
  });

  test('should navigate to demo page from CTA', async ({ page }) => {
    // Click the demo CTA button
    await page.locator('text=Get Your Personalized Demo').click();
    
    // Should navigate to demo page
    await expect(page).toHaveURL('/demo');
  });
});