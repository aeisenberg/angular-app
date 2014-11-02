'use strict';
describe('LogIn', function () {

    beforeEach(function() {
        browser.get(browser.baseUrl);
    });

	afterEach(function() {
		// logout if already logged in
		element(by.css('#logout')).isDisplayed().then(function(result) {
			if (result) {
				element(by.css('#logout')).click();
			}
		});

		// cancel login form if in the middle of logging in
		element(by.css('button.cancel')).isPresent().then(function(result) {
			if (result) {
				element(by.css('button.cancel')).click();
			}
		});
	});

    it('should log in', function () {
    	element(by.css('#login')).click();
    	browser.waitForAngular();

    	element(by.model('user.email')).sendKeys('andrew.eisenberg@gmail.com');
    	element(by.model('user.password')).sendKeys('nuthing');

		element(by.css('#do-login')).click();

    	expect(element(by.css('.alertError')).isPresent()).toBeFalsy();
    });


    it('should log out', function () {
    	element(by.css('#login')).click();
    	browser.waitForAngular();

    	element(by.model('user.email')).sendKeys('andrew.eisenberg@gmail.com');
    	element(by.model('user.password')).sendKeys('nuthing');

		element(by.css('#do-login')).click();

    	expect(element(by.css('.alert-error')).isPresent()).toBeFalsy();

    	element(by.css('#logout')).click();
    	expect(element(by.css('#logout')).isDisplayed()).toBeFalsy();
    });

    it('should fail to log in with bad password', function () {
    	element(by.css('#login')).click();
    	browser.waitForAngular();

    	element(by.model('user.email')).sendKeys('andrew.eisenberg@gmail.com');
    	element(by.model('user.password')).sendKeys('not a password');

    	element(by.css('#do-login')).click();

    	expect(element(by.css('.alert-error')).isPresent()).toBeTruthy();
    });
});
