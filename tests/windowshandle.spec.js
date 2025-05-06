const{test,expect}=require('@playwright/test')


test("windowshandle",async({browser})=>{

const context=await browser.newContext()
const page= await context.newPage()

await page.goto("https://www.tutorialspoint.com/selenium/practice/text-box.php")

const [newPage] =await Promise.all(

[
context.waitForEvent('page'),
page.getByRole('button', { name: 'Alerts, Frames & Windows' }).click(),
page.getByRole('link', { name: 'Browser Windows' }).click(),
//const page1Promise = page.waitForEvent('popup');
page.getByRole('button', { name: 'New Tab' }).click()


]

)
await newPage.waitForTimeout(3000)
const URL=await newPage.url()
console.log("url is: "+ URL);
expect(URL).toContain("https://www.tutorialspoint.com/selenium/practice/new-tab-sample.php")
await newPage.waitForTimeout(4000)

await newPage.close()

await page.waitForTimeout(3000)
const parentPage=await page.url()
console.log("parentUrl is: "+ parentPage);
expect(parentPage).toContain("https://www.tutorialspoint.com/selenium/practice/browser-windows.php")



})