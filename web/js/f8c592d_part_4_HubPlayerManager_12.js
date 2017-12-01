var HubPlayerManager = {

	//create player at different places depending where the visitor was before
    createPlayer: function(state) {
        var widthPop = null, heightPop = null;

        //nothing special when coming from Experience, thus going to default
        switch(gameVariables.previousState) {
            case 'languages':
            	widthPop = 50;
            	heightPop = 100;
            	break;
            case 'contact':
           	    widthPop = state.game.width - 30;
           	    heightPop = 430;
           	    break;
            case 'formation':
           	    widthPop = 50;
           	    heightPop = state.game.height - 100;
           	    break;
            default:
           	    widthPop = 360;
           	    heightPop = 430;
        }
        state.player = state.game.add.sprite(widthPop, heightPop, 'textureAtlas', 'ninja1');
        if (state.player.x > state.game.width - 200)
            state.player.scale.x = -1;
    }
};
