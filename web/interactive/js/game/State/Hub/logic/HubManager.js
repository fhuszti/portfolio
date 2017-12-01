var HubManager = {

    generateHub: function() {
    	gameMethods.addBackground();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        HubVisualsManager.behindMap();

        //Initial map setup
        gameMethods.mapSetup('homeMap');

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        HubVisualsManager.behindSignsBehindPlayer();

        //adding a title to the homepage
        gameMethods.displayText(gameVariables.currentState.game.width*0.5, 100, 'home', 'title', 'center');

        //Create all guidance signs
        HubVisualsManager.generateSigns();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        //IN FRONT OF the signs
        HubVisualsManager.frontSignsBehindPlayer();

        //create player at different places depending where the visitor was before
        HubPlayerManager.createPlayer();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the player
        HubVisualsManager.frontSignsFrontPlayer();

        //setting physics for the player and things other than platforms
        gameVariables.currentState.game.physics.arcade.enable([gameVariables.currentState.player, gameVariables.currentState.branch8]);
        gameVariables.currentState.branch8.body.immovable = true;

        //fine tune some player parameters now that the player has a physical body
    	gameMethods.playerSetup();
    },







    updateHub: function() {
        //collisions
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.branch8);

        //Player movements management
        gameMethods.playerMov();

        if (gameVariables.currentState.player.x < 20 && gameVariables.currentState.player.y < 150) {
            gameVariables.currentState.game.state.start('Languages');
        }
        if (gameVariables.currentState.player.x < 20 && gameVariables.currentState.player.y > gameVariables.currentState.game.height - 150) {
            gameVariables.currentState.game.state.start('Academics');
        }
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 20 && gameVariables.currentState.player.y < 150) {
            gameVariables.currentState.game.state.start('Experience');
        }
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 20 && gameVariables.currentState.player.y > gameVariables.currentState.game.height - 250) {
            gameVariables.currentState.game.state.start('Contact');
        }
    }
};
