import { test, expect } from '@playwright/test';

test.describe('Vocational Landing Pages', () => {
  const vocationalPrograms = [
    { path: '/cdl', name: 'CDL/Trucking', headline: 'Transform Your CDL/Trucking Program' },
    { path: '/cosmetology', name: 'Cosmetology', headline: 'Transform Your Cosmetology Program' },
    { path: '/nursing', name: 'Nursing', headline: 'Transform Your Nursing Program' },
    { path: '/dental', name: 'Dental Assisting/Hygiene', headline: 'Transform Your Dental Assisting/Hygiene Program' }
  ];

  vocationalPrograms.forEach(program => {
    test(`should display ${program.name} landing page correctly`, async ({ page }) => {
      await page.goto(program.path);
      
      // Check hero section
      await expect(page.locator('h1')).toContainText(program.headline);
      
      // Check CTA buttons
      await expect(page.locator('text=See How SchoolVision.AI Works')).toBeVisible();
      await expect(page.locator(`text=Why SchoolVision for ${program.name}`)).toBeVisible();
      
      // Check key benefits section
      await expect(page.locator('text=Built Specifically for')).toBeVisible();
      
      // Check pain points section
      await expect(page.locator('text=We Understand Your Challenges')).toBeVisible();
      
      // Check ROI section
      await expect(page.locator('text=See Your Potential ROI')).toBeVisible();
      
      // Check bottom CTA
      await expect(page.locator('text=Ready to Transform Your')).toBeVisible();
    });
    
    test(`should navigate from ${program.name} landing to demo page`, async ({ page }) => {
      await page.goto(program.path);
      
      // Click the main CTA
      await page.locator('text=See How SchoolVision.AI Works').first().click();
      
      // Should navigate to demo page
      await expect(page).toHaveURL('/demo');
      await expect(page.locator('h1')).toContainText('See SchoolVision.AI in Action');
    });
    
    test(`should navigate to Why SchoolVision page for ${program.name}`, async ({ page }) => {
      await page.goto(program.path);
      
      // Click the Why SchoolVision button
      await page.locator(`text=Why SchoolVision for ${program.name}`).click();
      
      // Should navigate to the correct Why page
      await expect(page).toHaveURL(`/why-schoolvision/${program.path.slice(1)}`);
      await expect(page.locator('h1')).toContainText(`Why SchoolVision`);
    });
  });
  
  test('should track analytics events on CDL landing page', async ({ page }) => {
    // Set up to capture gtag calls
    const gtagCalls = [];
    await page.exposeFunction('captureGtag', (command, ...args) => {
      gtagCalls.push({ command, args });
    });
    
    await page.addInitScript(() => {
      window.gtag = function(command, ...args) {
        window.captureGtag(command, ...args);
      };
    });
    
    await page.goto('/cdl');
    
    // Click the main CTA
    await page.locator('text=See How SchoolVision.AI Works').first().click();
    
    // Wait a bit for events to fire
    await page.waitForTimeout(500);
    
    // Check that landing page view was tracked
    const pageViewEvent = gtagCalls.find(call => 
      call.command === 'event' && call.args[0] === 'page_view'
    );
    expect(pageViewEvent).toBeTruthy();
    
    // Check that CTA click was tracked
    const ctaEvent = gtagCalls.find(call => 
      call.command === 'event' && call.args[0] === 'landing_page_cta'
    );
    expect(ctaEvent).toBeTruthy();
  });
});

test.describe('Why SchoolVision Pages', () => {
  const whyPages = [
    { path: '/why-schoolvision/cdl', program: 'CDL/Trucking Programs' },
    { path: '/why-schoolvision/cosmetology', program: 'Cosmetology Schools' },
    { path: '/why-schoolvision/nursing', program: 'Nursing Programs' },
    { path: '/why-schoolvision/dental', program: 'Dental Programs' }
  ];
  
  whyPages.forEach(page => {
    test(`should display Why SchoolVision for ${page.program}`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);
      
      // Check page title
      await expect(browserPage.locator('h1')).toContainText(`Why SchoolVision`);
      
      // Check for industry understanding section
      await expect(browserPage.locator('text=Built by Industry Experts').or(
        browserPage.locator('text=Created by')
      ).or(
        browserPage.locator('text=Designed by')
      )).toBeVisible();
      
      // Check for unique features
      await expect(browserPage.locator('text=Features').first()).toBeVisible();
      
      // Check for implementation section
      await expect(browserPage.locator('text=Implementation')).toBeVisible();
      
      // Check for ROI CTA
      await expect(browserPage.locator('text=Calculate Your')).toBeVisible();
    });
  });
});