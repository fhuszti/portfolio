var AcademicsPlayerManager = {

	//create player
    createPlayer: function(state) {
    	state.player = state.game.add.sprite(state.game.width - 30, state.game.height - 150, 'textureAtlas', 'ninja1');
        state.player.scale.x = -1;
    },







    //Check if the given text should be displayed or hidden
    checkHeight: function(state, text) {
    	//If player is on bottom platform
    	if(state.player.y > 367) {
    	    //If it's the bottom right corner text and it's not already active, we write it
    	    if (!text.alive && text.x >= 340 && text.y > 364) {
    	    	text.alive = true;
    	    	state.game.add.tween(text).to( { alpha: 1 }, 1500, "Linear", true);
    	    }
    	    //If there's an active text anywhere else, we kill it
    	    if (text.alive && (text.x < 340 || text.y <= 364)) {
    	    	text.alive = false;
    	    	state.game.add.tween(text).to( { alpha: 0.1 }, 1000, "Linear", true);
    	    }
    	}
    	//If player is on first platform
    	if (state.player.y <= 367 && state.player.y > 271) {
    	    //If it's the bottom left corner text and it's not already active, we write it
            if (!text.alive && text.x < 340 && text.y > 364) {
                text.alive = true;
                state.game.add.tween(text).to( { alpha: 1 }, 1000, "Linear", true);
            }
    	    //If there's an active text on the top, we kill it
    	    if (text.alive && text.y <= 364) {
    	    	text.alive = false;
    	    	state.game.add.tween(text).to( { alpha: 0.1 }, 1000, "Linear", true);
    	    }
    	}
    	//If player is on second platform
    	if (state.player.y <= 271 && state.player.y > 175) {
    	    //If it's the top right corner text and it's not already active, we write it
            if (!text.alive && text.x >= 340 && text.y <= 364) {
                text.alive = true;
                state.game.add.tween(text).to( { alpha: 1 }, 1000, "Linear", true);
            }
            //If there's an active text in the top left corner, we kill it
    	    if (text.alive && text.x < 340 && text.y <= 364) {
    	    	text.alive = false;
    	    	state.game.add.tween(text).to( { alpha: 0.1 }, 1000, "Linear", true);
    	    }
    	}
    	//If player is on third platform or higher
    	if (!text.alive && state.player.y <= 175) {
    	    //Every message should be active
    	    text.alive = true;
    	    state.game.add.tween(text).to( { alpha: 1 }, 1000, "Linear", true);
    	}
    }
};
