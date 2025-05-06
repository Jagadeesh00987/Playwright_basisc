const { test, expect } = require("@playwright/test");

const testdata = JSON.parse(JSON.stringify(require("../testdatalogin.json")));

test.skip("Data Driven Test", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.getByPlaceholder("Username").fill(testdata.interest[1]);
  await page.getByPlaceholder("Password").fill(testdata.address.City);
});

test.describe.only("Data Driven Test with multiple times", async () => {
  for (const data of testdata) {
    test.describe(`login to the application ${data.id}`, async () => {
      test("Data Driven Test", async ({ page }) => {
        await page.goto(
          "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        );
        await page.getByPlaceholder("Username").fill(data.username);
        await page.getByPlaceholder("Password").fill(data.password);
      });
    });
  }
});
