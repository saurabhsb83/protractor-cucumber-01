"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const Calculator_1 = require("../pageObjects/Calculator");
const AngularHome_1 = require("../pageObjects/AngularHome");
const chai_1 = require("chai");
const protractor_1 = require("protractor");
let calc = new Calculator_1.Calculator();
let anglr = new AngularHome_1.AngularHome();
cucumber_1.Given('i will navigate to {string} site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get(string);
}));
cucumber_1.When('i will add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstEditBox.sendKeys(string);
    yield calc.secondEditBox.sendKeys(string2);
}));
cucumber_1.Then('output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.submitButton.click();
    yield calc.trepeaterChild.getText().then(function (text) {
        chai_1.expect(text).to.equal(string);
    });
}));
//Given('i will navigate to angular site', async () => {
//	await browser.get();
//});
cucumber_1.When('i will click on the link to angulario site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield anglr.angularLink.click();
}));
cucumber_1.Then('i am able to enter {string} in search box and see {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield anglr.search.sendKeys(string).then(() => __awaiter(void 0, void 0, void 0, function* () { protractor_1.browser.sleep(3000); }));
    yield protractor_1.browser.getTitle().then((text) => __awaiter(void 0, void 0, void 0, function* () {
        chai_1.expect(text).to.equal(string2);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMERBQXVEO0FBQ3ZELDREQUF5RDtBQUN6RCwrQkFBOEI7QUFHOUIsMkNBQXFDO0FBRXBDLElBQUksSUFBSSxHQUFJLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzdCLElBQUksS0FBSyxHQUFJLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBRS9CLGdCQUFLLENBQUMsa0NBQWtDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUMxRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsOENBQThDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFFOUUsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMscUNBQXFDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUU1RCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBRSxVQUFTLElBQUk7UUFDcEQsYUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBSUgsd0RBQXdEO0FBQ3hELHVCQUF1QjtBQUN2QixLQUFLO0FBRUwsZUFBSSxDQUFDLDRDQUE0QyxFQUFFLEdBQVMsRUFBRTtJQUU3RCxNQUFNLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyw0REFBNEQsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUU1RixNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBRSxHQUFRLEVBQUUsa0RBQUcsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQy9FLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBTSxJQUFJLEVBQUUsRUFBRTtRQUU1QyxhQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVoQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9