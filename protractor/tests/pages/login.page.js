'use strict';
var LoginPage = function() {};

LoginPage.prototype = {
	isLoggedIn : function() {
		return element(by.css('#logout')).isDisplayed();
	},

	logout : function() {
		this.isLoggedIn().then(function(result) {
			if (result) {
				element(by.css('#logout')).click();
			}
		});
	},

	cancelLogin : function() {
		element(by.css('button.cancel')).isPresent().then(function(result) {
			if (result) {
				element(by.css('button.cancel')).click();
			}
		});
	},

	login : function(username, password) {
    	element(by.css('#login')).click();
    	browser.waitForAngular();

    	element(by.model('user.email')).sendKeys(username);
    	element(by.model('user.password')).sendKeys(password);

		element(by.css('#do-login')).click();
	},

	hasError : function() {
		return element(by.css('.alert-error')).isPresent();
	}
};
module.exports = LoginPage;