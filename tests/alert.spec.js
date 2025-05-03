const{test,expect}=require('@playwright/test')

test('Alert',async({page})=>{

await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
page.on('dialog',async(dia)=>{
    expect(dia.type()).toContain("alert")
    await dia.accept()

})  
await page.locator("//button[normalize-space(text())='Click for JS Alert']").click()

})

test('confirm',async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
   
    
    page.on('dialog',async(dia)=>{

        expect(dia.type()).toContain("confirm")
        expect(dia.message()).toContain("I am a JS Confirm")
        //await dia.accept()
        await dia.dismiss()
    
    })  
    
    await page.locator("//button[normalize-space(text())='Click for JS Confirm']").click()
    const text=await page.locator('#result').textContent()
    console.log(text)
    await page.waitForTimeout(5000)
    })

    test('prompt',async({page})=>{

        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
        await page.locator("//button[normalize-space(text())='Click for JS Prompt']").click()
        page.on('dialog',async(dia)=>{
        
            expect(dia.type()).toContain("prompt")
    
            expect(dia.message()).toContain("I am a JS prompt")
            await dia.accept('text: iam a prompt')
            //await dia.dismiss()
        
        })  
        
        await page.locator("//button[normalize-space(text())='Click for JS Prompt']").click()
        const text=await page.locator('#result').textContent()
        console.log(text)
        await page.waitForTimeout(5000)
        })