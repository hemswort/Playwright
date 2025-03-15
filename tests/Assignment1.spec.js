import { test, expect } from '@playwright/test';

test('Flipkart automation', async ({ page }) => {
  // Step 1: Open Flipkart
  await page.goto('https://www.flipkart.com/');

  // Step 2: Close the login popup if it appears
 /* try {
    const closeButton = page.locator('button._2KpZ6l._2doB4z'); // Selector for the close button on the login popup
    if (await closeButton.isVisible()) {
      await closeButton.click();
    }
  } catch (error) {
    console.log('No login popup found.');
  } */

  // Step 3: Log in (replace with your credentials)
  //await page.click('a[href="/account/login?ret=/"]');
  //await page.fill('input[type="text"]', 'narendravikrampal@gmail.com'); // Replace with your email or phone number
 // await page.fill('input[type="password"]', 'Vikram@321'); // Replace with your password
  //await page.click('button[type="submit"]'); // Click the Login button

  // Step 4: Search for "iPhone"
  await page.fill('input[type="text"]', 'iPhone'); // Fill search bar
  await page.press('input[type="text"]', 'Enter'); // Press Enter to search

  // Step 5: Validate the search results
  await expect(page).toHaveURL(/search/); // Ensure the URL indicates a search was performed
  console.log('Search results for "iPhone" loaded successfully!');
});
