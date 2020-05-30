import { browser, element, by, By, $, $$, ElementFinder, ExpectedConditions } from 'protractor';

export class AngularHome {

    angularLink:ElementFinder;
    search:ElementFinder;
      
    constructor() {

        this.angularLink  = element(by.linkText("angular.io"));
        this.search = element(by.css("input[type='search']"));
                
    }


}