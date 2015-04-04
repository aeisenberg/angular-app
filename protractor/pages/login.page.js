'use strict';
var LoginPage = function() {};

LoginPage.prototype = {
	login : function(username, password) {
		this.openDialog();
    	this.enterLoginDetails(username, password);
		element(by.css('#do-login')).click();
	},

	logout : function() {
        element(by.css('#logout')).click();
	},

	openDialog : function() {
    	element(by.css('#login')).click();
    	browser.waitForAngular();
	},

	enterLoginDetails : function(username, password) {
    	element(by.css('#login-email')).sendKeys(username);
    	element(by.css('#login-password')).sendKeys(password);
	},

	cancelLogin : function() {
        element(by.css('button.cancel')).click();
	},

	clearLogin : function() {
        element(by.css('button.clear')).click();
	},

	getCurrentUsername : function() {
        return element(by.css('#login-email')).getText();
	},

	getCurrentPassword : function() {
        return element(by.css('#login-password')).getText();
	},

	hasError : function() {
		return element(by.css('.alert-error')).isPresent();
	},

	isLoggedIn : function() {
		return element(by.cssContainingText('a', 'Admin User')).isPresent();
	},

	isDialogOpen : function() {
		return element(by.cssContainingText('div.modal-header', 'Sign in')).isPresent();
	}
};
module.exports = LoginPage;