'use strict';
describe('LogIn', function () {

    var LoginPage = require('../pages/login.page.js'), loginPage;

    beforeEach(function() {
        browser.get(browser.baseUrl);
        loginPage = new LoginPage();
    });

    it('should log in', function () {
        loginPage.login('andrew.eisenberg@gmail.com', 'nuthing');

        expect(loginPage.hasError()).toBeFalsy();
        expect(loginPage.isLoggedIn()).toBeTruthy();
    });


    it('should log out', function () {
        loginPage.login('andrew.eisenberg@gmail.com', 'nuthing');
        loginPage.logout();

        expect(loginPage.hasError()).toBeFalsy();
        expect(loginPage.isLoggedIn()).toBeFalsy();
    });

    it('should fail to log in with bad password', function () {
        loginPage.login('andrew.eisenberg@gmail.com', 'not a password');

        expect(loginPage.hasError()).toBeTruthy();
        expect(loginPage.isLoggedIn()).toBeFalsy();
    });

    it('should close login dialog', function () {
        loginPage.openDialog();
        expect(loginPage.isDialogOpen()).toBeTruthy();

        loginPage.cancelLogin();
        expect(loginPage.isDialogOpen()).toBeFalsy();
    });


    it('should clear login dialog', function () {
        loginPage.openDialog();
        loginPage.enterLoginDetails('andrew.eisenberg@gmail.com', 'nuthing');
        loginPage.clearLogin();

        expect(loginPage.isDialogOpen()).toBeTruthy();
        expect(loginPage.getCurrentUsername()).toBe('');
        expect(loginPage.getCurrentPassword()).toBe('');
    });


    afterEach(function() {
        // logout if already logged in
        loginPage.isLoggedIn().then(function(result) {
            if (result) {
                loginPage.logout();
            }
        });

        // cancel login form if in the middle of logging in
        loginPage.isDialogOpen().then(function(result) {
            if (result) {
               loginPage.cancelLogin();
            }
        });
    });});
