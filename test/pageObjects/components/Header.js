class Header {

    get searchInp() { return $('.custom-search-input'); }
    get searchBtnSubmit() { return this.searchInp.$('button[type="submit"]'); }

}
module.exports = Header;