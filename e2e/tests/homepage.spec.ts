import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should display hero section with correct content', async ({ page }) => {
    await page.goto('/');

    // Check for main heading
    const heading = page.getByRole('heading', { name: /Your Smile, Our Passion/i });
    await expect(heading).toBeVisible();

    // Check for CTA buttons
    const bookButton = page.getByRole('link', { name: /Book Your Appointment/i });
    await expect(bookButton).toBeVisible();

    const servicesButton = page.getByRole('link', { name: /Explore Services/i });
    await expect(servicesButton).toBeVisible();
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');

    // Check for navigation menu
    const nav = page.getByRole('navigation', { name: /Main navigation/i });
    await expect(nav).toBeVisible();

    // Check for logo link
    const logo = page.getByRole('link', { name: /Aesthetic Dental Clinic - Home/i });
    await expect(logo).toBeVisible();
  });

  test('should navigate to booking page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /Book Your Appointment/i }).first().click();
    await expect(page).toHaveURL('/booking');
  });

  test('should be mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check mobile menu button is visible
    const menuButton = page.getByRole('button', { name: /Open menu/i });
    await expect(menuButton).toBeVisible();

    // Open mobile menu
    await menuButton.click();

    // Check navigation links are visible
    const homeLink = page.getByRole('link', { name: /^Home$/i });
    await expect(homeLink).toBeVisible();
  });
});
