'use strict';

describe('HomePage', function () {
    it('Should be the default page', function () {
        browser.get(browser.baseUrl);
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'projectsinfo');
    });
});
