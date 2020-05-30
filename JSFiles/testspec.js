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
const protractor_1 = require("protractor");
const Calculator_1 = require("./pageObjects/Calculator");
const AngularHome_1 = require("./pageObjects/AngularHome");
describe('Protractor test for calcualtor website', () => {
    it('Sum of two numbers', () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new Calculator_1.Calculator();
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield calc.firstEditBox.sendKeys("4");
        yield calc.secondEditBox.sendKeys("3");
        yield calc.submitButton.click();
        yield calc.trepeaterChild.getText().then(function (text) {
            console.log(text);
        });
    }));
    it('Angular Home Page Validation', () => __awaiter(void 0, void 0, void 0, function* () {
        let tangular = new AngularHome_1.AngularHome();
        yield protractor_1.browser.get("https://angularjs.org/");
        yield tangular.angularLink.click();
        //await browser.sleep(3000);
        yield tangular.search.sendKeys("title").then(() => __awaiter(void 0, void 0, void 0, function* () { protractor_1.browser.sleep(3000); }));
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUErRTtBQUMvRSx5REFBdUQ7QUFDdkQsMkRBQXlEO0FBRXpELFFBQVEsQ0FBQyx3Q0FBd0MsRUFBRSxHQUFHLEVBQUU7SUFHaEQsRUFBRSxDQUFDLG9CQUFvQixFQUFFLEdBQVEsRUFBRTtRQUUvQixJQUFJLElBQUksR0FBSSxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUV6QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVoQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFFLFVBQVMsSUFBSTtZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxHQUFRLEVBQUU7UUFFekMsSUFBSSxRQUFRLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFFakMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyw0QkFBNEI7UUFDNUIsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUUsR0FBUSxFQUFFLGtEQUFHLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUV2RixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDLENBQUMifQ==