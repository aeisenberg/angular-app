'use strict';

describe('Home Page', function () {
    it('should be the default page', function () {
        browser.get(browser.baseUrl);
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'projectsinfo');
    });

	it('should be the projects page', function () {
		browser.get(browser.baseUrl + 'projects');
	    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'projects');
	});

	it('should go back to default page', function () {
		browser.get(browser.baseUrl + 'imnothere');
	    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'projectsinfo');
	});
});
