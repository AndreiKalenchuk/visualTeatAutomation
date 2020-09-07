const Header = require("../pageObjects/components/Header")

class HomePage {
    // return copy Header
    // able access to all instances class Header
    //                      --> HomePage.header.searchInp

    get header () { return new Header(); }
    get mainMenu () { return $('#DIV__mainmenu__15'); }

    open(){
        browser.url(`/gridHackathonV${global.appVersion}.html`)
    }

}
module.exports = new HomePage();