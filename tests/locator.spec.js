import {test,expect} from '@playwright/test';

test ('open the application', async({page})=>{
  await page .goto ('https://www.flipkart.com/');

  await page.click('#login');

  //await expect(page).toHaveTitle ('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');

  
  //await expect(page).toHaveURL(/.*flipkart.*/)
 
  
}

);