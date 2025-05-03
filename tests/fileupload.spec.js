const{test,expect}=require('@playwright/test')
const pathModule=require('path')

test("fileupload",async({page})=>{

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php")
    await page.locator("//button[normalize-space()='Elements']").click()
    await page.locator("//a[normalize-space()='Upload and Download']").click()
    const path=pathModule.resolve("./uploads/sampleFile.jpeg")
    await page.locator("#uploadFile").setInputFiles(path)
    await page.waitForTimeout(5000)
    await page.locator("#uploadFile").setInputFiles([])
    await page.waitForTimeout(5000)
    //await page.locator("")

})