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
    },







    //Manage all movements inside the no gravity zone
    zeroGravityMov: function() {
        if (gameVariables.currentState.cursors.right.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.x / (gameVariables.currentState.game.width *0.5)) === gameMethods.RIGHT) {
            //  Move to the right
            gameVariables.currentState.player.body.velocity.x = 125;
            gameVariables.currentState.player.animations.play('run');
        } else if (gameVariables.currentState.cursors.left.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.x / (gameVariables.currentState.game.width *0.5)) === gameMethods.LEFT) {
            //  Move to the left
            gameVariables.currentState.player.body.velocity.x = -125;
            gameVariables.currentState.player.animations.play('run');
        } else {
            //  Stand still
            gameVariables.currentState.player.animations.stop();
            gameVariables.currentState.player.frameName = 'ninja1';
        }

        //Up&Down management
        if (gameVariables.currentState.cursors.up.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.y / (gameVariables.currentState.game.height *0.5)) === gameMethods.UP) {
            //  Move to the top
            gameVariables.currentState.player.body.velocity.y = -125;
            gameVariables.currentState.player.animations.play('run');
        } else if (gameVariables.currentState.cursors.down.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.x / (gameVariables.currentState.game.width *0.5)) === gameMethods.DOWN) {
            //  Move to the bottom
            gameVariables.currentState.player.body.velocity.y = 125;
            gameVariables.currentState.player.animations.play('run');
        }
    }
};
