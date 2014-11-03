'use strict';
describe('LogIn', function () {
    var LoginPage = require('./pages/login.page.js'), loginPage;
    beforeEach(function() {
        loginPage = new LoginPage();
    });

	afterEach(function() {
        loginPage.logout();
        loginPage.cancelLogin();
	});

    it('should log in', function () {
        loginPage.login('andrew.eisenberg@gmail.com', 'nuthing');
        expect(loginPage.isLoggedIn()).toBeTruthy();
    	expect(loginPage.hasError()).toBeFalsy();
    });


    it('should log out', function () {
        loginPage.login('andrew.eisenberg@gmail.com', 'nuthing');
    	loginPage.logout();
    	expect(loginPage.isLoggedIn()).toBeFalsy();
        expect(loginPage.hasError()).toBeFalsy();
    });

    it('should fail to log in with bad password', function () {
        loginPage.login('andrew.eisenberg@gmail.com', 'not a password');
        expect(loginPage.isLoggedIn()).toBeFalsy();
    	expect(loginPage.hasError()).toBeTruthy();
    });
});
