var HomeGame = HomeGame || {};

HomeGame.Academics = function() {};

HomeGame.Academics.prototype = {
    academicsTexts: {},

    create: function() {
        gameVariables.currentState = this;

    	AcademicsManager.generateAcademics();
    },

    update: function() {
        AcademicsManager.updateAcademics();
    }
};
