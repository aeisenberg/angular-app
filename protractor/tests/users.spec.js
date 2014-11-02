'use strict';
describe('LogIn', function () {

	beforeEach(function() {
		browser.get(browser.baseUrl);
		// ensure logged in
		element(by.css('#logout')).isDisplayed().then(function(result) {
			if (!result) {
		    	element(by.css('#login')).click();
		    	browser.waitForAngular();

		    	element(by.model('user.email')).sendKeys('andrew.eisenberg@gmail.com');
		    	element(by.model('user.password')).sendKeys('nuthing');

				element(by.css('#do-login')).click();
			}
		});
	});

	it('Should navigate to users page', function() {
		element(by.css('#adminmenu')).click();
		element(by.css('#manage-users-menu')).click();
		expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'admin/users');
	});

	it('Should have the admin user as the first user', function() {
		element(by.css('#adminmenu')).click();
		element(by.css('#manage-users-menu')).click();
		element.all(by.repeater('user in users')).then(function(users) {
			expect(users.length > 0).toBeTruthy();
			users[0].all(by.css('td')).then(function(fields) {
				expect(fields[1].getText()).toBe('andrew.eisenberg@gmail.com');
				expect(fields[2].getText()).toBe('User');
				expect(fields[3].getText()).toBe('Admin');
			});
		});
	});

	// other tests for create, delete, modify user
});