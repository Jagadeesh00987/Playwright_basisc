const { test, expect } = require("@playwright/test");

test.use({ viewport: { width: 1920, height: 920 } });

test.beforeEach("Beforeall", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

test("login test", async ({ page }) => {
  console.log(await page.viewportSize().width);
  console.log(await page.viewportSize().height);

  const url = await page.url();
  await expect(url).toBe(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  const title = await page.title();
  console.log("The Title is" + " " + title);

  await page.getByPlaceholder("Username").type("Admin", { delay: 100 });
  await page.getByPlaceholder("Password").type("admin123", { delay: 100 });
  await page.locator("//button[normalize-space()='Login']").click();

  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
});

test("login with invalid credentials", async ({ page }) => {

  await page.getByPlaceholder("Username").type("Admin", { delay: 100 });
  await page.getByPlaceholder("Password").type("admi123", { delay: 100 });
  await page.locator("//button[normalize-space()='Login']").click();
  const error=await page.getByText("Invalid credentials").textContent()
  console.log("the error message is:"+error)
  await expect(error.includes("Invalid")).toBeTruthy()
  await expect(error==="Invalid credentials").toBeTruthy()

});

test.afterEach(async({ page }) => {
    console.log("✅ Test passed");
 
});
