var HomeGame = HomeGame || {};

HomeGame.Others = function() {};

HomeGame.Others.prototype = {
    create: function() {
        gameVariables.currentState = this;

    	OthersManager.generateOthers();
    },

    update: function() {
        OthersManager.updateOthers();
    }
};
