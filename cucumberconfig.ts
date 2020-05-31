import {Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";

// An example configuration file
export let config: Config = {

    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    directConnect: true,
    framework: 'custom',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/demo.feature'],

    cucumberOpts: {
        
        tags: "@CalculatorTesting",
        format: 'json:./cucumberreport.json',
        require: [
          './stepDefinitions/*.js' 
        ]
      },
      onComplete: () => {
          var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "Development",
                "Browser": "Chrome  83.0.4103.61",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);

        }
  
    
  };