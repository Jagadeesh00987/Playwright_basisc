const { test, expect } = require("@playwright/test");



test("framepractise", async ({ page }) => {
  await page.goto("https://docs.oracle.com/javase/8/docs/api/");
  const frameHandle = await page.frame({ name: "packageListFrame" }); // or use title
  await frameHandle.click("//a[contains(text(),'java.applet')]");
  await page.pause();


  
});
