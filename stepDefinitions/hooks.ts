import { Before, After } from 'cucumber';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import {Status} from "cucumber";

  Before({tags: "@CalculatorTesting"}, function () {
     
    console.log("printing a message before the: @CalculatorTesting");
    browser.manage().window().maximize();
  });


  After({tags: "@CalculatorTesting"}, function () {
     
    console.log("printing a message After the: @CalculatorTesting");
    
  });

  
  Before({tags: "@AngularWebsiteTesting"}, function () {
    
    console.log("printing a message before the: @AngularWebsiteTesting");
  });
  


  After(async function( scenario ) {
    if(scenario.result.status === Status.FAILED ) 
    {
      const screenshot = await browser.takeScreenshot();
      this.attach(screenshot,"image/png");
    }
  
  });