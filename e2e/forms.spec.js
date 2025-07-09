const { test, expect } = require('@playwright/test');

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact form with all fields', async ({ page }) => {
    // Check form fields are visible
    await expect(page.locator('label:has-text("First Name")')).toBeVisible();
    await expect(page.locator('label:has-text("Last Name")')).toBeVisible();
    await expect(page.locator('label:has-text("Email")')).toBeVisible();
    await expect(page.locator('label:has-text("Phone Number")')).toBeVisible();
    await expect(page.locator('label:has-text("School/Organization")')).toBeVisible();
    await expect(page.locator('label:has-text("Your Role")')).toBeVisible();
    await expect(page.locator('label:has-text("Organization Type")')).toBeVisible();
    await expect(page.locator('label:has-text("Message")')).toBeVisible();
  });

  test('should show validation errors for empty required fields', async ({ page }) => {
    // Click submit without filling form
    await page.locator('button:has-text("Send Message")').click();
    
    // Form should not be submitted (button should still be visible)
    await expect(page.locator('button:has-text("Send Message")')).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    // Fill invalid email
    await page.fill('input[type="email"]', 'invalid-email');
    await page.locator('input[type="email"]').blur();
    
    // Should show email validation error
    await expect(page.locator('text=Please enter a valid email')).toBeVisible();
  });

  test('should successfully submit form with valid data', async ({ page }) => {
    // Fill all required fields
    await page.fill('input[id="firstName"]', 'John');
    await page.fill('input[id="lastName"]', 'Doe');
    await page.fill('input[type="email"]', 'john.doe@school.edu');
    await page.fill('input[type="tel"]', '555-123-4567');
    await page.fill('input[id="organization"]', 'Test School');
    await page.selectOption('select[id="role"]', 'principal');
    await page.selectOption('select[id="organizationType"]', 'k12-public');
    await page.fill('textarea[id="message"]', 'This is a test message for the contact form.');
    
    // Submit form
    await page.locator('button:has-text("Send Message")').click();
    
    // Should show success message
    await expect(page.locator('text=Thank you for your message!')).toBeVisible({ timeout: 10000 });
  });
});

test.describe('Demo Request Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/demo');
  });

  test('should display all sections of demo form', async ({ page }) => {
    // Check section headings
    await expect(page.locator('text=Your Information')).toBeVisible();
    await expect(page.locator('text=Organization Details')).toBeVisible();
    await expect(page.locator('text=Demo Preferences')).toBeVisible();
  });

  test('should require at least one solution selection', async ({ page }) => {
    // Fill basic info
    await page.fill('input[id="firstName"]', 'Jane');
    await page.fill('input[id="lastName"]', 'Smith');
    await page.fill('input[type="email"]', 'jane.smith@university.edu');
    await page.fill('input[type="tel"]', '555-987-6543');
    await page.fill('input[id="organization"]', 'Test University');
    await page.selectOption('select[id="role"]', 'dean');
    await page.selectOption('select[id="organizationType"]', 'higher-ed-public');
    await page.selectOption('select[id="studentCount"]', '5000-10000');
    await page.selectOption('select[id="timeline"]', '1-3months');
    
    // Don't select any solutions and try to submit
    await page.locator('button:has-text("Request Demo")').click();
    
    // Should show error about selecting solutions
    await expect(page.locator('text=Please select at least one solution')).toBeVisible();
  });

  test('should successfully submit demo request', async ({ page }) => {
    // Fill all required fields
    await page.fill('input[id="firstName"]', 'Jane');
    await page.fill('input[id="lastName"]', 'Smith');
    await page.fill('input[type="email"]', 'jane.smith@university.edu');
    await page.fill('input[type="tel"]', '555-987-6543');
    await page.fill('input[id="organization"]', 'Test University');
    await page.selectOption('select[id="role"]', 'dean');
    await page.selectOption('select[id="organizationType"]', 'higher-ed-public');
    await page.selectOption('select[id="studentCount"]', '5000-10000');
    
    // Select solutions
    await page.check('input[value="attendance"]');
    await page.check('input[value="grading"]');
    
    await page.selectOption('select[id="timeline"]', '1-3months');
    
    // Submit form
    await page.locator('button:has-text("Request Demo")').click();
    
    // Should show success message
    await expect(page.locator('text=Thank you! We\'ve received your demo request')).toBeVisible({ timeout: 10000 });
  });
});