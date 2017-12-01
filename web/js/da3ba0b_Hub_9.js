var HomeGame = HomeGame || {};

HomeGame.Hub = function() {};

HomeGame.Hub.prototype = {

    create: function() {
    	HubManager.generateHub(this);
    },

    update: function() {
        HubManager.updateHub(this);
    }
};
