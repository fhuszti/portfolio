var HomeGame = HomeGame || {};

HomeGame.Experience = function() {};

HomeGame.Experience.prototype = {
	widthStart: 0,

	heightStart: 0,

	create: function() {
		ExperienceManager.generateExperience(this);
	},

	update: function() {
		ExperienceManager.updateExperience(this);
	}
};
