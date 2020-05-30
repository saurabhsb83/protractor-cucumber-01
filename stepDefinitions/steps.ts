import { Given, When, Then } from 'cucumber';
import { Calculator } from '../pageObjects/Calculator';
import { AngularHome } from '../pageObjects/AngularHome';
import { expect } from 'chai';


import { browser } from 'protractor';

	let calc  = new Calculator();
	let anglr  = new AngularHome();

	Given('i will navigate to {string} site', async (string) => {
		await browser.get(string);
	});

	When('i will add two numbers {string} and {string}', async (string, string2) => {
		
		await calc.firstEditBox.sendKeys(string);
		await calc.secondEditBox.sendKeys(string2);
	});	

	
	Then('output displayed should be {string}', async (string) => {
	
		await calc.submitButton.click();
		await calc.trepeaterChild.getText().then( function(text) {
					expect(text).to.equal(string);
			});
	});



	//Given('i will navigate to angular site', async () => {
	//	await browser.get();
	//});

	When('i will click on the link to angulario site', async () => {
		
		await anglr.angularLink.click();
	});	

	
	Then('i am able to enter {string} in search box and see {string}', async (string, string2) => {
	
		await anglr.search.sendKeys(string).then( async() => { browser.sleep(3000)  });
		await browser.getTitle().then( async(text) => {

			expect(text).to.equal(string2);

		});
	});