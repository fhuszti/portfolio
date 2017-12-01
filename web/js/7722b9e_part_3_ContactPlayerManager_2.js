var ContactPlayerManager = {

	//create player
    createPlayer: function(state) {
    	var widthPop = null, heightPop = null;

    	if (generalFunctions.previousState === 'experience') {
    		widthPop = generalFunctions.leavingExperienceX;
    		heightPop = 0;
    	}
		else {
			widthPop = 90;
    		heightPop = state.game.height * 0.5;
		}

		state.player = state.game.add.sprite(widthPop, heightPop, 'textureAtlas', 'ninja1');
    	
		if (generalFunctions.previousState === 'experience')
    		state.player.scale.x = generalFunctions.leavingExperienceScaleX;
    },

    //additional setup for the player for this stage
    playerSetup: function(state) {
    	if (state.player.x >= 305) {
			state.cursors.down.isDown = true;

			setTimeout(state.disableCursorDown.bind(null, state.cursors), 1000);
		}
    },





    

    //Manage all movements inside the no gravity zone
    zeroGravityMov: function(state) {
        if (state.cursors.right.isDown || state.game.input.pointer1.isDown && Math.floor(state.game.input.x / (state.game.width *0.5)) === generalFunctions.RIGHT) {
            //  Move to the right
            state.player.body.velocity.x = 125;
            state.player.animations.play('run');
        } else if (state.cursors.left.isDown || state.game.input.pointer1.isDown && Math.floor(state.game.input.x / (state.game.width *0.5)) === generalFunctions.LEFT) {
            //  Move to the left
            state.player.body.velocity.x = -125;
            state.player.animations.play('run');
        } else {
            //  Stand still
            state.player.animations.stop();
            state.player.frameName = 'ninja1';
        }

        //Up&Down management
        if (state.cursors.up.isDown || state.game.input.pointer1.isDown && Math.floor(state.game.input.y / (state.game.height *0.5)) === generalFunctions.UP) {
            //  Move to the top
            state.player.body.velocity.y = -125;
            state.player.animations.play('run');
        } else if (state.cursors.down.isDown || state.game.input.pointer1.isDown && Math.floor(state.game.input.x / (state.game.width *0.5)) === generalFunctions.DOWN) {
            //  Move to the bottom
            state.player.body.velocity.y = 125;
            state.player.animations.play('run');
        }
    }
};
