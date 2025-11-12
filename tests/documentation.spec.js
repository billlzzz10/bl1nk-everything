const { test, expect } = require('@playwright/test');

test.describe('Documentation Page', () => {
  // Start the server before running the tests
  test.beforeAll(async () => {
    // Note: We are not starting the server here because the test runner
    // will be executed from a separate environment where the server
    // is already running.
  });

  test('should navigate to the API reference section without the header obstructing the view', async ({ page }) => {
    await page.goto('http://localhost:8081');

    // Click the last link in the sidebar
    await page.click('a[href="#api-reference"]');

    // Wait for the navigation to complete
    await page.waitForURL('http://localhost:8081/#api-reference');

    // Check that the Thai text is rendered correctly
    const sidebarTitle = await page.locator('#sidebar h2');
    await expect(sidebarTitle).toHaveText('สารบัญเอกสาร');

    // Get the h3 element of the API reference section
    const apiReferenceHeader = await page.locator('#api-reference h3');

    // Get the bounding box of the header
    const headerBoundingBox = await page.locator('#header').boundingBox();

    // Get the bounding box of the API reference section header
    const apiReferenceHeaderBoundingBox = await apiReferenceHeader.boundingBox();

    // Check that the top of the API reference section is below the bottom of the header
    expect(apiReferenceHeaderBoundingBox.y).toBeGreaterThan(headerBoundingBox.height);

    // Take a screenshot to visually verify the result
    await page.screenshot({ path: 'tests/screenshot.png' });
  });
});
