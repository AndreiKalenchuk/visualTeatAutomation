const {viewports} = require("../../../utils/constans")
const HomePage = require('../../pageObjects/HomePage')

describe('Cress-device elements', () => {
    before('', () => {
        HomePage.open();
    });

    describe('LAPTOP VIEW', () => {
        before('', () => {
            const {width, height} = viewports.laptop
            browser.setWindowSize(width, height);
        });

        it('should show elements field on laptop', () => {
            expect(HomePage.header.searchInp).toBeDisplayed();
            expect(HomePage.mainMenu).toBeDisplayedInViewport();
        });
    });

    describe('TABLET VIEW', () => {
        before('', () => {
            const {width, height} = viewports.tablet
            browser.setWindowSize(width, height);
        });

        it('should show elements field on tablet', () => {
            expect(HomePage.header.searchInp).not.toBeDisplayed();
            expect(HomePage.mainMenu).not.toBeDisplayedInViewport();
        });


        describe('MOBILE VIEW', () => {
            before('', () => {
                const {width, height} = viewports.mobile
                browser.setWindowSize(width, height);
            });

            it('should NOT show Search field on mobile', () => {
                expect(HomePage.header.searchInp).not.toBeDisplayed();
                expect(HomePage.mainMenu).not.toBeDisplayedInViewport();
            });
        });
    });
});