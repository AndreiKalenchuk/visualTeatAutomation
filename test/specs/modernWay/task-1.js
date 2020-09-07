const {viewports} = require("../../../utils/constans");
const HomePage = require('../../pageObjects/HomePage');

const {
    By,
    Eyes,
    Target,
    VisualGridRunner,
    BrowserType,
    Configuration,
    DeviceName,
    ScreenOrientation
} = require('@applitools/eyes-webdriverio');

// Initialize the eyes SDK with 3 concurrent runners
const eyes = new Eyes(new VisualGridRunner(3));

eyes.setBatch({
    id: '1',
    name: 'UFG Hackathon'
})

const configuration = new Configuration();
configuration.setAppName('Demo app');
configuration.setTestName('Task-1');

//Add Chrome browser with two different viewports
configuration.addBrowser(1200, 700, 'chrome');
configuration.addBrowser(1200, 700, 'firefox');
configuration.addBrowser(1200, 700, 'edgechromium');
// tablet
configuration.addBrowser(768, 700, 'chrome');
configuration.addBrowser(768, 700, 'firefox');
configuration.addBrowser(768, 700, 'edgechromium');
//mobile
configuration.addDeviceEmulation('iPhone X', 'portrait');

// Set your private API key here or in the "APPLITOOLS_API_KEY" environment variable
configuration.setApiKey('0Om6Wi10353niB38AovgUucUtAYkhqXdWAPQkn7jEWTEc110');
eyes.setConfiguration(configuration);

// driver = await eyes.open(driver);

describe('Cress-device elements', () => {
    before( () => {
        HomePage.open();
        browser.call(() => {
            return eyes.open(browser, 'Demo app', 'Task-1', {
                width: 800,
                height: 600
            });
    });
});
    after(() => {
        browser.call(() => {
            return eyes.closeAsync();
        });
     /*   browser.call(() => {
            return eyes.abortIfNotClosed();
        });*/
    })

    it('should look perfect', () => {
// run my eyes check
        browser.call(() => {
        return eyes.check('CresTarget.widows-device Elements Test', Target.window())
        });
    });
});
