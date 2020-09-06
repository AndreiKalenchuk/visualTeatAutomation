const Header = require("../pageObjects/components/Header")

class HomePage {
    // return copy Header
    // able access to all instances class Header
    //                      --> HomePage.header.searchInp

    get header () { return new Header(); }
}
module.exports = new HomePage();