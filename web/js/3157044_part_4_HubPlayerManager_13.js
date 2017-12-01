var HubPlayerManager = {

	//create player at different places depending where the visitor was before
    createPlayer: function() {
        var widthPop = null, heightPop = null;

        //nothing special when coming from Experience, thus going to default
        switch(gameVariables.previousState) {
            case 'languages':
            	widthPop = 50;
            	heightPop = 100;
            	break;
            case 'contact':
           	    widthPop = gameVariables.currentState.game.width - 30;
           	    heightPop = 430;
           	    break;
            case 'academics':
           	    widthPop = 50;
           	    heightPop = gameVariables.currentState.game.height - 100;
           	    break;
            default:
           	    widthPop = 360;
           	    heightPop = 430;
        }
        gameVariables.currentState.player = gameVariables.currentState.game.add.sprite(widthPop, heightPop, 'textureAtlas', 'ninja1');
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 200)
            gameVariables.currentState.player.scale.x = -1;
    }
};
