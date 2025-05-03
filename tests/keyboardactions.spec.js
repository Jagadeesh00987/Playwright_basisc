const { expect, test } = require("playwright/test");

test("KeyboardACtions", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page
    .locator("textarea[title='Search']")
    .fill("playwright and javaScript");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(5000);
});

test("MultipleKeyACtions", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page
    .locator("textarea[title='Search']")
    .fill("playwright and javaScript");
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");
  await page.keyboard.press("Backspace");
  await page.keyboard.press(`Control+V`);
  await page.waitForTimeout(5000);
});

test("Using Up and Down", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page
    .locator("textarea[title='Search']").focus()
  await page.keyboard.type("JavaScript Playwright!")
  await page.keyboard.press("ArrowLeft")
  await page.keyboard.down("Shift")
  for(let i=0;i<'Playwright'.length;i++){
await page.keyboard.press("ArrowLeft")
  }
  await page.keyboard.up("Shift")
  await page.keyboard.press("Backspace")
  await page.keyboard.insertText("Play")
  
  await page.waitForTimeout(5000);
});



test.only("AutoDropdown", async ({ page }) => {
  await page.goto("https://www.google.com/");
  
  const searchBox = page.locator("textarea[title='Search']");
  await searchBox.focus();
  await page.keyboard.type("Playwright");

  // Wait for dropdown to populate
  await page.waitForSelector("ul[role='listbox'] li");

  const suggestions = await page.locator("ul[role='listbox'] li").all();

  for (const suggestionElement of suggestions) {
    const suggestionText = await suggestionElement.textContent();
    console.log("Suggestion"+suggestionText);
    
    if (
      suggestionText &&
      (suggestionText.toLowerCase().includes("cypress") || 
       suggestionText.toLowerCase().includes("selenium"))
    ) {
      await suggestionElement.click();
      break;
    }
  }
await page.waitForTimeout(5000)
 
});

