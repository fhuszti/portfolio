var HomeGame = HomeGame || {};

HomeGame.Languages = function() {};

HomeGame.Languages.prototype = {
    create: function() {
        gameVariables.currentState = this;

    	LanguagesManager.generateLanguages();
    },

    update: function() {
        LanguagesManager.updateLanguages();
    }
};
