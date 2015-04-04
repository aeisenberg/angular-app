'use strict';
describe('LogIn', function () {

    beforeEach(function() {
        browser.get(browser.baseUrl);
    });


    it('should log in', function () {
    	element(by.css('#login')).click();
    	browser.waitForAngular();

    	element(by.css('#login-email')).sendKeys('andrew.eisenberg@gmail.com');
    	element(by.css('#login-password')).sendKeys('nuthing');

		element(by.css('#do-login')).click();

    	expect(element(by.css('.alertError')).isPresent()).toBeFalsy();
        expect(element(by.cssContainingText('a', 'Admin User')).isPresent()).toBeTruthy();
    });


    it('should log out', function () {
    	element(by.css('#login')).click();
    	browser.waitForAngular();

    	element(by.css('#login-email')).sendKeys('andrew.eisenberg@gmail.com');
    	element(by.css('#login-password')).sendKeys('nuthing');

		element(by.css('#do-login')).click();

    	expect(element(by.css('.alert-error')).isPresent()).toBeFalsy();
        expect(element(by.cssContainingText('a', 'Admin User')).isPresent()).toBeTruthy();

        element(by.css('#logout')).click();
        expect(element(by.css('#logout')).isDisplayed()).toBeFalsy();
        expect(element(by.cssContainingText('a', 'Admin User')).isPresent()).toBeFalsy();
    });

    it('should fail to log in with bad password', function () {
        element(by.css('#login')).click();
        browser.waitForAngular();

        element(by.css('#login-email')).sendKeys('andrew.eisenberg@gmail.com');
        element(by.css('#login-password')).sendKeys('not a password');

        element(by.css('#do-login')).click();

        expect(element(by.css('.alert-error')).isPresent()).toBeTruthy();
    });

    it('should close login dialog', function () {
        element(by.css('#login')).click();
        browser.waitForAngular();

        expect(element(by.cssContainingText('div.modal-header', 'Sign in')).isPresent()).toBeTruthy();
        element(by.css('button.cancel')).click();
        expect(element(by.cssContainingText('div.modal-header', 'Sign in')).isPresent()).toBeFalsy();
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
    });});
