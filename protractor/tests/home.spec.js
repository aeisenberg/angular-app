'use strict';

describe('Home Page', function () {
    it('should be the default page', function () {
        browser.get(browser.baseUrl);
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'projectsinfo');
    });

    it('should be the projects page', function () {
    	// add a test for navigating to /projects
    });
    
    it('should go back to default page', function () {
    	// add a test for navigating to a page that doesn't exist
    });
});
