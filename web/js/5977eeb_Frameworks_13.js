var HomeGame = HomeGame || {};

HomeGame.Frameworks = function() {};

HomeGame.Frameworks.prototype = {
    create: function() {
        gameVariables.currentState = this;

    	FrameworksManager.generateFrameworks();
    },

    update: function() {
        FrameworksManager.updateFrameworks();
    }
};
