'use strict';
var UsersPage = function() {};

UsersPage.prototype = {
	navigateToManageUsersMenu : function() {
		element(by.css('#adminmenu')).click();
		element(by.css('#manage-users-menu')).click();
	},

	allUsers : function() {
		return element.all(by.repeater('user in users'));
	},

	extractUserFields : function(user) {
		return user.all(by.css('td'));
	}
};

module.exports = UsersPage;