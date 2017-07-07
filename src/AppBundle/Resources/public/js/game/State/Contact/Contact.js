var HomeGame = HomeGame || {};

HomeGame.Contact = function() {};

HomeGame.Contact.prototype = {
	
	create: function() {
		gameVariables.currentState = this;

    	ContactManager.generateContact();
	},

	update: function() {
		ContactManager.updateContact();
	}
};
