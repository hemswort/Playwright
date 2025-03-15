import {test,expect} from '@playwright/test';

test ('open the application', async({page})=>{
 // Step 1: Open BookMyShow
 await page.goto('https://in.bookmyshow.com/');

 // Step 2: Handle location selection (if prompted)
 try {
     await page.click('button.sc-fihHvN'); // Adjust the selector based on the button for selecting location
 } catch (error) {
     console.log('Location selection not prompted');
 }

 // Step 3: Search for a movie
 await page.click('input[type="search"]'); // Click on the search bar
 await page.fill('input[type="search"]', 'Ironman'); // Replace 'Your Movie Name' with the desired movie
 await page.press('input[type="search"]', 'Enter'); // Press Enter to search

 // Wait for results to load
 await page.waitForTimeout(3000);

// Close the browser
 await browser.close(); 
  
}

);