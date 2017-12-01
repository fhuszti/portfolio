var HomeGame = HomeGame || {};

HomeGame.Contact = function() {};

HomeGame.Contact.prototype = {
	
	create: function() {
		ContactManager.generateContact(this);
	},

	update: function() {
		ContactManager.updateContact(this);
	}
};
