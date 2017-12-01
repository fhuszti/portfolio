var AcademicsManager = {

	generateAcademics: function(state) {
		generalFunctions.addBackground(state);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        AcademicsVisualsManager.behindMap(state);

        //Initial map setup
        generalFunctions.mapSetup(state, 'academicsMap');

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the wooden panels
        //BEHIND the player
        AcademicsVisualsManager.behindPanelsBehindPlayer(state);

        //Adding the guidance sign and its text
        AcademicsVisualsManager.generateSigns(state);

        //Wooden panels background
        AcademicsVisualsManager.generatePanels(state);

        //Adding the title of the page at the right place
        AcademicsContentManager.displayTitle(state);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the wooden panels
        //BEHIND the player
        AcademicsVisualsManager.frontPanelsBehindPlayer(state);

        //create player
        AcademicsPlayerManager.createPlayer(state);

        //Display all texts on creation, then call checkHeight to delete those that shouldn't appear yet
        AcademicsContentManager.displayFormationTexts(state);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the wooden panels
        //IN FRONT OF the player
        AcademicsVisualsManager.frontPanelsFrontPlayer(state);

        //setting physics for the player and things other than platforms
        state.game.physics.arcade.enable(state.player);

        //fine tune some player parameters now that the player has a physical body
    	generalFunctions.playerSetup(state);

        generalFunctions.previousState = 'academics';
	},







    updateAcademics: function(state) {
        //collisions
        state.game.physics.arcade.collide(state.player, state.blockedLayer);
        state.game.physics.arcade.collide(state.player, state.branch8);

        //Player movements management
        generalFunctions.playerMov(state);

        //We check to add/remove the text or not
        for (var text in state.academicsTexts) {
            AcademicsPlayerManager.checkHeight(state, state.academicsTexts[text]);
        }

        //Changing map by walking to a specific spot on the current map
        if (state.player.x > state.game.width - 20 && state.player.y < 100) {
            state.game.state.start('Hub');
        }
    }
};
