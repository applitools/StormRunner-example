var webdriver = require('selenium-webdriver'),
proxy = require('selenium-webdriver/proxy');
By = webdriver.By,
until = webdriver.until;

var Eyes = require('eyes.selenium').Eyes;
var eyes = new Eyes();
eyes.setApiKey(process.env.APPLITOOLS_API_KEY);

var assert = require('selenium-webdriver/testing/assert');
var driver;

describe('DEMO Applitools StormRunner', function () {
      this.timeout(60000);
      before(function(done){                
      var capabilities = {
      platform: "Windows 8.1",
      browserName: "chrome",
      //version: "58",//Instead of specific version number you can specify latest version:
      version: "latest",
      testName: "DEMO Applitools StormRunner",
      resolution: "1280X1024",
      //NOTE: Web AUT which is tested in this test changes it's UI elements dependents on resolution, in case if you will use higher resolution test will fail//Supported resolutions are: 800x600; 1024X768; 1280X1024
      SRF_CLIENT_ID: process.env.SRF_CLIENT_ID,
      SRF_CLIENT_SECRET: process.env.SRF_CLIENT_SECRET
     };
     driver = new webdriver
     .Builder()
     .withCapabilities(capabilities)
     .usingServer("https://ftaas.saas.hpe.com/wd/hub/")
     //.setProxy(proxy.manual({""}))
     .build();
    driver.get('http://applitools.com/').then(function() {
    console.log("Navigate to Applitools");
    done();
    });
  });
  	
   it('Take a screenshot', function (done) {
      eyes.open(driver, 'DEMO Applitools StormRunner', 'DEMO Applitools StormRunner',{width: 800, height: 600} );
      // driver.get('https://www.google.com/'); 
      eyes.checkWindow("Applitools");
      eyes.close(false);
      driver.quit().then(done);
      
  });

    
});