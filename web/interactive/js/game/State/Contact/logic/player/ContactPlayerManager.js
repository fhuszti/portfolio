var ContactPlayerManager = {

	//create player
    createPlayer: function() {
    	var widthPop = null, heightPop = null;

    	if (gameVariables.previousState === 'experience') {
    		widthPop = gameVariables.leavingExperienceX;
    		heightPop = 0;
    	}
		else {
			widthPop = 90;
    		heightPop = gameVariables.currentState.game.height * 0.5;
		}

		gameVariables.currentState.player = gameVariables.currentState.game.add.sprite(widthPop, heightPop, 'textureAtlas', 'ninja1');
    	
		if (gameVariables.previousState === 'experience')
    		gameVariables.currentState.player.scale.x = gameVariables.leavingExperienceScaleX;
    },





    

    //manually tells the client that the down key isn't pressed anymore
    disableCursorDown: function(cursors) {
        cursors.down.isDown = false;
    },

    //additional setup for the player for this stage
    playerSetup: function() {
    	if (gameVariables.currentState.player.x >= 305) {
			gameVariables.currentState.cursors.down.isDown = true;

			setTimeout(this.disableCursorDown.bind(null, gameVariables.currentState.cursors), 1000);
		}
    }
};
