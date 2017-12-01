var HomeGame = HomeGame || {};

HomeGame.Academics = function() {};

HomeGame.Academics.prototype = {
    academicsTexts: {},

    create: function() {
        AcademicsManager.generateAcademics(this);
    },

    update: function() {
        //collisions
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
        this.game.physics.arcade.collide(this.player, this.branch8);

        //Player movements management
        generalFunctions.playerMov(this);

        //We check to add/remove the text or not
        for (var text in this.academicsTexts) {
        	AcademicsPlayerManager.checkHeight(this, this.academicsTexts[text]);
        }

        //Changing map by walking to a specific spot on the current map
        if (this.player.x > this.game.width - 20 && this.player.y < 100) {
      	    this.game.state.start('Hub');
    	}
    }
};
