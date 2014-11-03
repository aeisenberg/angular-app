'use strict';
describe('LogIn', function () {
    var LoginPage = require('./pages/login.page.js'), loginPage,
    	UsersPage = require('./pages/users.page.js'), usersPage;

	beforeEach(function() {
		browser.get(browser.baseUrl);

		loginPage = new LoginPage();
		usersPage = new UsersPage();

		loginPage.isLoggedIn().then(function(result) {
			if (!result) {
				loginPage.login('andrew.eisenberg@gmail.com', 'nuthing');
			}
		});
	});

	it('Should navigate to users page', function() {
		usersPage.navigateToManageUsersMenu();
		expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'admin/users');
	});

	it('Should have the admin user as the first user', function() {
		usersPage.navigateToManageUsersMenu();

		usersPage.allUsers().then(function(users) {
			expect(users.length > 0).toBeTruthy();
			usersPage.extractUserFields(users[0]).then(function(fields) {
				expect(fields[1].getText()).toBe('andrew.eisenberg@gmail.com');
				expect(fields[2].getText()).toBe('User');
				expect(fields[3].getText()).toBe('Admin');
			});
		});
	});

	// TODO: other tests for create, delete, modify user
});