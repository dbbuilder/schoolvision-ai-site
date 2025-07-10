const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the hero section with correct content', async ({ page }) => {
    // Check hero title
    await expect(page.locator('h1')).toContainText('Complete Campus Intelligence Through Seamless Integration');
    
    // Check hero subtitle
    await expect(page.locator('text=Your SIS captures grades')).toBeVisible();
    
    // Check CTA buttons
    await expect(page.locator('text=Request Demo').first()).toBeVisible();
    await expect(page.locator('text=Watch Video')).toBeVisible();
  });

  test('should display features section', async ({ page }) => {
    // Check features title
    await expect(page.locator('text=AI-Enhanced Solutions')).toBeVisible();
    
    // Check all 4 features are displayed
    await expect(page.locator('h3:text("SIS Integration Intelligence")')).toBeVisible();
    await expect(page.locator('h3:text("Predictive Analytics")')).toBeVisible();
    await expect(page.locator('h3:text("Complete Compliance")')).toBeVisible();
    await expect(page.locator('h3:text("Real-Time Dashboards")')).toBeVisible();
  });

  test('should display markets section', async ({ page }) => {
    // Check markets title
    await expect(page.locator('text=Serving Every Educational Level')).toBeVisible();
    
    // Check all 3 market segments
    await expect(page.locator('h3:text("K-12 Schools")')).toBeVisible();
    await expect(page.locator('h3:text("Higher Education")')).toBeVisible();
    await expect(page.locator('h3:text("Vocational Schools")')).toBeVisible();
  });

  test('should display testimonials section', async ({ page }) => {
    // Check testimonials title
    await expect(page.locator('text=Trusted by Education Leaders')).toBeVisible();
    
    // Check at least one testimonial is visible
    await expect(page.locator('text=Dr. Sarah Johnson')).toBeVisible();
    
    // Check statistics
    await expect(page.locator('.text-4xl:text("523")')).toBeVisible();
    await expect(page.locator('.text-4xl:text("1.2M+")')).toBeVisible();
    await expect(page.locator('.text-4xl:text("97%")')).toBeVisible();
  });

  test('should navigate to demo page when clicking Request Demo', async ({ page }) => {
    // Click the first Request Demo button
    await page.locator('text=Request Demo').first().click();
    
    // Check URL
    await expect(page).toHaveURL('/demo');
    
    // Check demo page loaded
    await expect(page.locator('text=See SchoolVision.AI in Action')).toBeVisible();
  });
});