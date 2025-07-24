import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should navigate between sections', async ({ page }) => {
		// Click on About link
		await page.getByRole('button', { name: 'About' }).click();
		await expect(page).toHaveURL(/#about/);
		
		// Check if About section is visible
		const aboutSection = page.locator('#about');
		await expect(aboutSection).toBeVisible();
	});

	test('mobile menu should work correctly', async ({ page }) => {
		// Set mobile viewport
		await page.setViewportSize({ width: 375, height: 667 });
		
		// Mobile menu should be hidden initially
		const mobileMenu = page.locator('#mobile-menu');
		await expect(mobileMenu).not.toBeVisible();
		
		// Click menu button
		await page.getByLabel('Toggle navigation menu').click();
		
		// Mobile menu should be visible
		await expect(mobileMenu).toBeVisible();
		
		// Click on a menu item
		await page.getByRole('button', { name: 'Projects' }).click();
		
		// Menu should close
		await expect(mobileMenu).not.toBeVisible();
		
		// Should navigate to projects section
		await expect(page).toHaveURL(/#projects/);
	});

	test('escape key should close mobile menu', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });
		
		// Open menu
		await page.getByLabel('Toggle navigation menu').click();
		const mobileMenu = page.locator('#mobile-menu');
		await expect(mobileMenu).toBeVisible();
		
		// Press Escape
		await page.keyboard.press('Escape');
		
		// Menu should close
		await expect(mobileMenu).not.toBeVisible();
	});

	test('navigation should change appearance on scroll', async ({ page }) => {
		const nav = page.locator('nav').first();
		
		// Initially transparent
		await expect(nav).toHaveClass(/bg-transparent/);
		
		// Scroll down
		await page.evaluate(() => window.scrollTo(0, 100));
		
		// Should have background
		await expect(nav).toHaveClass(/bg-slate-50/);
	});

	test('skip navigation link should work', async ({ page }) => {
		// Tab to skip link
		await page.keyboard.press('Tab');
		
		// Should focus skip link
		const skipLink = page.getByText('Skip to main content');
		await expect(skipLink).toBeFocused();
		
		// Click skip link
		await skipLink.click();
		
		// Should focus main content
		const mainContent = page.locator('#main-content');
		await expect(mainContent).toBeInViewport();
	});
});