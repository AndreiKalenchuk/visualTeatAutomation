const {viewports} = require("../../../utils/constans")
const HomePage = require('../../pageObjects/HomePage')

describe('Cress-device elements', () => {
    before('', () => {
        browser.url('./gridHackathonV1.html')
    })

    describe('LAPTOP VIEW', () => {
        before('', () => {
            browser.setWindowSize(viewports.laptop.width, viewports.laptop.height)
        });

        it('should show Search field on laptops and tablets but hide it an mobile', () => {
            expect(HomePage.header.searchBtnSubmit).toBeDisabled();
            browser.pause(4000)
        });
    });

    describe('TABLET VIEW', () => {
    });

    describe('MOBILE VIEW', () => {
    });

})