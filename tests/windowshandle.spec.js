const{test,expect}=require('@playwright/test')
test("windowshandle",async({browser})=>{

const context=await browser.newContext()
const page= await context.newPage()

await page.goto("https://www.tutorialspoint.com/selenium/practice/text-box.php")
const newPage =await Promise.all(

[
context.waitForEvent('page'),
await page.locator(".accordion-button collapsed"),
await page.locator("//a[contains(@href,'browser')]").click(),
await page.locator("button[title='New Tab']").click()


]

)
await page.waitForTimeout(3000)


})