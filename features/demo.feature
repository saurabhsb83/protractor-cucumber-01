Feature: i am going to validate calculator functionality

@CalculatorTesting
Scenario Outline: Calculator add functionality testing

Given i will navigate to "http://juliemr.github.io/protractor-demo/" site
When i will add two numbers "<key1>" and "<key2>"
Then output displayed should be "<key3>"

Examples:
| key1 | key2 | key3 | 
| 5  | 3  | 7  | 
| 4  | 5  | 9  | 
| 5  | 6  | 11  | 


@AngularWebsiteTesting
Scenario Outline: AngularJS Website functionality

Given i will navigate to "https://angularjs.org/" site
When i will click on the link to angulario site
Then i am able to enter "<key>" in search box and see "Angular"

Examples:
| key |
| hello  |
| hey  |
| hi  |

