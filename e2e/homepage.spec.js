const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the hero section with correct content', async ({ page }) => {
    // Check hero title
    await expect(page.locator('h1')).toContainText('Intelligent Campus Management');
    
    // Check hero subtitle
    await expect(page.locator('text=Transform your educational institution')).toBeVisible();
    
    // Check CTA buttons
    await expect(page.locator('text=Request Demo').first()).toBeVisible();
    await expect(page.locator('text=Watch Video')).toBeVisible();
  });

  test('should display features section', async ({ page }) => {
    // Check features title
    await expect(page.locator('text=AI-Enhanced Solutions')).toBeVisible();
    
    // Check all 4 features are displayed
    await expect(page.locator('text=Intelligent Point of Sale')).toBeVisible();
    await expect(page.locator('text=Smart Attendance')).toBeVisible();
    await expect(page.locator('text=AI-Powered Grading')).toBeVisible();
    await expect(page.locator('text=Intelligent Reporting')).toBeVisible();
  });

  test('should display markets section', async ({ page }) => {
    // Check markets title
    await expect(page.locator('text=Serving Every Educational Level')).toBeVisible();
    
    // Check all 3 market segments
    await expect(page.locator('text=K-12 Schools')).toBeVisible();
    await expect(page.locator('text=Higher Education')).toBeVisible();
    await expect(page.locator('text=Vocational Schools')).toBeVisible();
  });

  test('should display testimonials section', async ({ page }) => {
    // Check testimonials title
    await expect(page.locator('text=Trusted by Education Leaders')).toBeVisible();
    
    // Check at least one testimonial is visible
    await expect(page.locator('text=Dr. Sarah Johnson')).toBeVisible();
    
    // Check statistics
    await expect(page.locator('text=500+')).toBeVisible();
    await expect(page.locator('text=2.5M')).toBeVisible();
    await expect(page.locator('text=98%')).toBeVisible();
  });

  test('should navigate to demo page when clicking Request Demo', async ({ page }) => {
    // Click the first Request Demo button
    await page.locator('text=Request Demo').first().click();
    
    // Check URL
    await expect(page).toHaveURL('/demo');
    
    // Check demo page loaded
    await expect(page.locator('text=See SchoolVision AI in Action')).toBeVisible();
  });
});