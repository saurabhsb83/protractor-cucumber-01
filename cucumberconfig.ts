import {Config} from 'protractor';

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
        // require step definitions
        require: [
          './stepDefinitions/*.js' 
        ]
      }
  
    
  };