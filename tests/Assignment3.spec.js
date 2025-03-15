import { test, expect } from '@playwright/test';

test('Text Box automation', async ({ page }) => {
  // Step 1: Open the DemoQA Text Box page
  await page.goto('https://demoqa.com/text-box');

  // Step 2: Locate the "Full Name" input field and enter "John Doe"
  const fullNameInput = page.locator('#userName'); // ID selector for the Full Name input field
  await fullNameInput.fill('John Doe');

  // Step 3: Verify that the value entered is "John Doe"
  await expect(fullNameInput).toHaveValue('John Doe');

  // Step 4: Clear the text box and enter "Jane Doe"
  await fullNameInput.fill(''); // Clear the input field
  await fullNameInput.fill('Jane Doe');

  // Step 5: Submit the form
  const submitButton = page.locator('#submit'); // ID selector for the Submit button
  await submitButton.click();

  // Step 6: Verify the displayed output
  const outputName = page.locator('#name'); // Selector for the output element displaying the entered name
  await expect(outputName).toHaveText('Name:Jane Doe');
});
