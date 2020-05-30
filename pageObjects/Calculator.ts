import { browser, element, by, By, $, $$, ElementFinder, ExpectedConditions } from 'protractor';

export class Calculator {

    firstEditBox:ElementFinder;
    secondEditBox:ElementFinder;
    submitButton:ElementFinder;
    trepeaterChild:ElementFinder;
    

    constructor() {

        this.firstEditBox  = element(by.xpath("//body//input[1]"));
        this.secondEditBox = element(by.xpath("//body//input[2]"));
        this.submitButton  = element(by.xpath("//button[@id='gobutton']"));
        this.trepeaterChild     = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
        
    }


}