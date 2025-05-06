const{test,expect}=require('@playwright/test')

const testdata=JSON.parse(JSON.stringify(require("../testdata.json")))

test("Data Driven Test",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("Username").fill(testdata.interest[1])
await page.getByPlaceholder("Password").fill(testdata.address.City)


})

// test.describe("Data Driven Test with multiple times",async({page})=>{

//     test("Data Driven Test",async({page})=>{

//         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//         await page.getByPlaceholder("Username").fill(testdata.username)
//         await page.getByPlaceholder("Password").fill(testdata.password)
        
        
//         })
    
    
//     })