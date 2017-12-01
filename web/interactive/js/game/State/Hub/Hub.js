var HomeGame = HomeGame || {};

HomeGame.Hub = function() {};

HomeGame.Hub.prototype = {

    create: function() {
    	gameVariables.currentState = this;

    	HubManager.generateHub();
    },

    update: function() {
        HubManager.updateHub();
    }
};
