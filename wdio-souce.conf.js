const { config } = require('./wdio.conf.js');

// replace chromedriver with sauce
const services = config.services.filter( (element) => {
    if(element === 'chromedriver') {
        return 'sauce'
    }
    return element;
})

exports.config = {
    ...config,
    //
    // =================
    // Service Providers
    // =================
    // WebdriverIO supports Sauce Labs, Browserstack, Testing Bot and LambdaTest (other cloud providers
    // should work too though). These services define specific user and key (or access key)
    // values you need to put in here in order to connect to these services.
    //
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    //
    // If you run your tests on Sauce Labs you can specify the region you want to run your tests
    // in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
    // These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
    // If you don't provide the region it will default for the `us`
    region: 'us',
    services
}