var HomeGame = HomeGame || {};

HomeGame.Hub = function() {};

HomeGame.Hub.prototype = {

    create: function() {
    	HubManager.generateHub(this);
    },

    update: function() {
        //collisions
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
        this.game.physics.arcade.collide(this.player, this.branch8);

        //Player movements management
        generalFunctions.playerMov(this);

        if (this.player.x < 20 && this.player.y < 150) {
      	    this.game.state.start('Languages');
    	}
        if (this.player.x < 20 && this.player.y > this.game.height - 150) {
      	    this.game.state.start('Formation');
    	}
        if (this.player.x > this.game.width - 20 && this.player.y < 150) {
      	    this.game.state.start('Experience');
    	}
        if (this.player.x > this.game.width - 20 && this.player.y > this.game.height - 250) {
      	    this.game.state.start('Contact');
    	}
    }
};
