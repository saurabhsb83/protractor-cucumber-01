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
const protractor_1 = require("protractor");
const cucumber_2 = require("cucumber");
cucumber_1.Before({ tags: "@CalculatorTesting" }, function () {
    console.log("printing a message before the: @CalculatorTesting");
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: "@CalculatorTesting" }, function () {
    console.log("printing a message After the: @CalculatorTesting");
});
cucumber_1.Before({ tags: "@AngularWebsiteTesting" }, function () {
    console.log("printing a message before the: @AngularWebsiteTesting");
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_2.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBeUM7QUFDekMsMkNBQStFO0FBQy9FLHVDQUFnQztBQUU5QixpQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDLEVBQUU7SUFFbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO0lBQ2pFLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFHSCxnQkFBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDLEVBQUU7SUFFbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO0FBRWxFLENBQUMsQ0FBQyxDQUFDO0FBR0gsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBQyxFQUFFO0lBRXZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUN2RSxDQUFDLENBQUMsQ0FBQztBQUlILGdCQUFLLENBQUMsVUFBZ0IsUUFBUTs7UUFDNUIsSUFBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxpQkFBTSxDQUFDLE1BQU0sRUFDM0M7WUFDRSxNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUMsV0FBVyxDQUFDLENBQUM7U0FDckM7SUFFSCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=