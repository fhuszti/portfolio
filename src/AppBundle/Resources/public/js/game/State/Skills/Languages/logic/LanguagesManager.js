var LanguagesManager = {

	generateLanguages: function() {
		gameMethods.addBackground();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        SkillsVisualsManager.behindMap();

        //Adding the table
        SkillsContentManager.generateTable(['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']);

        //Initial map setup
        gameMethods.mapSetup('skillsMap');

        //Create the top of the chests (behind the coins)
        SkillsVisualsManager.createTopChests([1, 0, 0]);

        //Create the coins
        SkillsVisualsManager.coinsGroup();

        SkillsVisualsManager.generateCoin('gold', 352);
        SkillsVisualsManager.generateCoin('gold', 300);
        SkillsVisualsManager.generateCoin('gold', 250);
        SkillsVisualsManager.generateCoin('silver', 450);
        SkillsVisualsManager.generateCoin('silver', 402);

        //Create the bottom of the chests (in front of the coins)
        SkillsVisualsManager.createBottomChests();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        //IN FRONT OF the chests
        SkillsVisualsManager.frontChestsBehindPlayer();

        //Adding the adequate title and signs
        SkillsVisualsManager.generateSigns('languages', 'frameworks', 'home');

        //create player at different places depending where the visitor was before
        SkillsPlayerManager.createPlayer();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the chests
        //IN FRONT OF the player
        SkillsVisualsManager.frontChestsFrontPlayer();

        //setting physics for the player and things other than platforms
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.player);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.clone);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.keyItem);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.rocks);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.branch8);

        //fine tune some player parameters now that everything has a physical body
        gameMethods.playerSetup();
        SkillsPlayerManager.cloneSetup();

        //Set some objects immovable so we can use them as platforms
        SkillsConfigManager.setImmovableObjects();

        gameVariables.previousState = 'languages';
	},







	updateLanguages: function() {
		//collisions
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.clone, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.keyItem, gameVariables.currentState.blockedLayer);

        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.rocks);

        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.clone, gameVariables.currentState.branch8);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.keyItem, gameVariables.currentState.branch8);

        //Player movements management
        gameMethods.playerMov();
        SkillsUpdatePlayerManager.cloneMov();

        //Checking for the coins
	    SkillsUpdateContentManager.manageCoins(gameVariables.currentState.clone.x);

        //Stopping the coins at the right time
        SkillsUpdateContentManager.stopCoins();

        //Checking for the chests
	    SkillsUpdateContentManager.checkChests();

        //Going to another map
        if (gameVariables.currentState.player.x < 20 && gameVariables.currentState.player.y < 150) {
      	    gameVariables.currentState.game.state.start('Frameworks');
    	}
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 20 && gameVariables.currentState.player.y < 150) {
      	    gameVariables.currentState.game.state.start('Hub');
    	}
	}
};
