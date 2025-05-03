const { expect, test } = require("@playwright/test");

test("dropdown practise", async ({ page }) => {
  await page.goto(
    "https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php",
    { timeout: 5000 }
  );

  await page.locator("//a[normalize-space()='Practice Form']").click();
  await page.locator("#state").selectOption({ label: "Uttar Pradesh" });
  await page.waitForTimeout(5000);

  await page.locator("#state").selectOption({ value: "Rajasthan" });
  await page.waitForTimeout(1000);

  await page.locator("#state").selectOption({ index: 2 });
  await page.waitForTimeout(1000);

  const value = await page.locator("#state").textContent();
  console.log("the list of states is "+ value) ;

  await expect(value.includes("Rajasthan")).toBeTruthy();

  let states = await page.$$("#state");

  let dsstate = false;
  for (let i = 0; i < states.length; i++) {
    let state = states[i];
    let val = await state.textContent();
    if (val.includes("Rajasthan")) {
      dsstate = true;
      break;
    }
  }

  await expect(dsstate).toBeTruthy()

});
