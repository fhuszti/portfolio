var AcademicsPlayerManager = {

	//create player
    createPlayer: function() {
    	gameVariables.currentState.player = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 30, gameVariables.currentState.game.height - 150, 'textureAtlas', 'ninja1');
        gameVariables.currentState.player.scale.x = -1;
    },







    //Check if the given text should be displayed or hidden
    checkHeight: function(text) {
    	//If player is on bottom platform
    	if(gameVariables.currentState.player.y > 367) {
    	    //If it's the bottom right corner text and it's not already active, we write it
    	    if (!text.alive && text.x >= 340 && text.y > 364) {
    	    	text.alive = true;
    	    	gameVariables.currentState.game.add.tween(text).to( { alpha: 1 }, 1500, "Linear", true);
    	    }
    	    //If there's an active text anywhere else, we kill it
    	    if (text.alive && (text.x < 340 || text.y <= 364)) {
    	    	text.alive = false;
    	    	gameVariables.currentState.game.add.tween(text).to( { alpha: 0.1 }, 1000, "Linear", true);
    	    }
    	}
    	//If player is on first platform
    	if (gameVariables.currentState.player.y <= 367 && gameVariables.currentState.player.y > 271) {
    	    //If it's the bottom left corner text and it's not already active, we write it
            if (!text.alive && text.x < 340 && text.y > 364) {
                text.alive = true;
                gameVariables.currentState.game.add.tween(text).to( { alpha: 1 }, 1000, "Linear", true);
            }
    	    //If there's an active text on the top, we kill it
    	    if (text.alive && text.y <= 364) {
    	    	text.alive = false;
    	    	gameVariables.currentState.game.add.tween(text).to( { alpha: 0.1 }, 1000, "Linear", true);
    	    }
    	}
    	//If player is on second platform
    	if (gameVariables.currentState.player.y <= 271 && gameVariables.currentState.player.y > 175) {
    	    //If it's the top right corner text and it's not already active, we write it
            if (!text.alive && text.x >= 340 && text.y <= 364) {
                text.alive = true;
                gameVariables.currentState.game.add.tween(text).to( { alpha: 1 }, 1000, "Linear", true);
            }
            //If there's an active text in the top left corner, we kill it
    	    if (text.alive && text.x < 340 && text.y <= 364) {
    	    	text.alive = false;
    	    	gameVariables.currentState.game.add.tween(text).to( { alpha: 0.1 }, 1000, "Linear", true);
    	    }
    	}
    	//If player is on third platform or higher
    	if (!text.alive && gameVariables.currentState.player.y <= 175) {
    	    //Every message should be active
    	    text.alive = true;
    	    gameVariables.currentState.game.add.tween(text).to( { alpha: 1 }, 1000, "Linear", true);
    	}
    }
};
