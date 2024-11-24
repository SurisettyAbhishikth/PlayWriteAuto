import {test, expect} from '@playwright/test';

test.only('has title', async ({page})=>
{
    // const context=await browser.newContext();
    // const page=await context.newPage();
    
   await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await  page.locator("#username").fill("learning");
  await  page.locator("#password").fill("learning");
  await  page.locator("#signInBtn").click();
  console.log (await  page.locator("[style*='block']").textContent());
  await expect (page.locator("[style*='block']")).toContainText('Incorrect');


  await  page.locator("#username").fill("");

  await  page.locator("#username").fill("rahulshettyacademy");
  await  page.locator("#password").fill("");

  await  page.locator("#password").fill("learning");
  await  page.locator("#signInBtn").click();
  console.log(await page.locator(".card-body a").nth(0).textContent())

  console.log(await page.locator(".card-body a").allTextContents())





});

test('has title1', async ({page})=>
    {
       
        
       await page.goto("https://google.com");
       console.log(await page.title());
       await expect (page).toHaveTitle("Google")
    
    });
