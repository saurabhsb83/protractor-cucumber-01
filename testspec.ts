import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { Calculator } from './pageObjects/Calculator' ;
import { AngularHome } from './pageObjects/AngularHome' ;

describe('Protractor test for calcualtor website', () => {


        it('Sum of two numbers', async() => {

            let calc  = new Calculator();
            
                await browser.get("http://juliemr.github.io/protractor-demo/");
                await calc.firstEditBox.sendKeys("4");
                await calc.secondEditBox.sendKeys("3");
                await calc.submitButton.click();

                await calc.trepeaterChild.getText().then( function(text) {
                    console.log(text);
                });
        });


        it('Angular Home Page Validation', async() => {

            let tangular = new AngularHome();

            await browser.get("https://angularjs.org/");
            await tangular.angularLink.click();
            //await browser.sleep(3000);
            await tangular.search.sendKeys("title").then( async() => { browser.sleep(3000)  });

        });
});











