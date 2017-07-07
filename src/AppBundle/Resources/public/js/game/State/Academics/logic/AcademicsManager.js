var AcademicsManager = {

	generateAcademics: function() {
		gameMethods.addBackground();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        AcademicsVisualsManager.behindMap();

        //Initial map setup
        gameMethods.mapSetup('academicsMap');

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the wooden panels
        //BEHIND the player
        AcademicsVisualsManager.behindPanelsBehindPlayer();

        //Adding the guidance sign and its text
        AcademicsVisualsManager.generateSigns();

        //Wooden panels background
        AcademicsVisualsManager.generatePanels();

        //Adding the title of the page at the right place
        AcademicsContentManager.displayTitle();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the wooden panels
        //BEHIND the player
        AcademicsVisualsManager.frontPanelsBehindPlayer();

        //create player
        AcademicsPlayerManager.createPlayer();

        //Display all texts on creation, then call checkHeight to delete those that shouldn't appear yet
        AcademicsContentManager.displayFormationTexts();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the wooden panels
        //IN FRONT OF the player
        AcademicsVisualsManager.frontPanelsFrontPlayer();

        //setting physics for the player and things other than platforms
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.player);

        //fine tune some player parameters now that the player has a physical body
    	gameMethods.playerSetup();

        gameVariables.previousState = 'academics';
	},







    updateAcademics: function() {
        //collisions
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.branch8);

        //Player movements management
        gameMethods.playerMov();

        //We check to add/remove the text or not
        for (var text in gameVariables.currentState.academicsTexts) {
            AcademicsPlayerManager.checkHeight(gameVariables.currentState.academicsTexts[text]);
        }

        //Changing map by walking to a specific spot on the current map
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 20 && gameVariables.currentState.player.y < 100) {
            gameVariables.currentState.game.state.start('Hub');
        }
    }
};
