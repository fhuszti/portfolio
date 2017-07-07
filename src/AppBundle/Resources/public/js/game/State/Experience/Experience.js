var HomeGame = HomeGame || {};

HomeGame.Experience = function() {};

HomeGame.Experience.prototype = {
	widthStart: 0,

	heightStart: 0,

	create: function() {
		gameVariables.currentState = this;

    	ExperienceManager.generateExperience();
	},

	update: function() {
		ExperienceManager.updateExperience();
	}
};
