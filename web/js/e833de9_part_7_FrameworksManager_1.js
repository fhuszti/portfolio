var FrameworksManager = {

	generateFrameworks: function() {
		gameMethods.addBackground();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        skillsMethods.behindMap();

        //Adding the table
        skillsMethods.generateTable(['BootStrap', 'Symfony', 'Phaser.js', 'Silex']);

        //Initial map setup
        gameMethods.mapSetup('skillsMap');

        //Create the top of the chests (behind the coins)
        skillsMethods.createTopChests([0, 0, 0]);

        //Create the coins
        skillsMethods.coinsGroup();

        skillsMethods.generateCoin('gold', 250);
        skillsMethods.generateCoin('silver', 352);
        skillsMethods.generateCoin('silver', 300);
        skillsMethods.generateCoin('bronze', 402);

        //Create the bottom of the chests (in front of the coins)
        skillsMethods.createBottomChests();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        //IN FRONT OF the chests
        skillsMethods.frontChestsBehindPlayer();

        //Adding the adequate title and signs
        skillsMethods.generateSigns('frameworks', 'others', 'languages');

        //create player at different places depending where the visitor was before
        skillsMethods.createPlayer();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the chests
        //IN FRONT OF the player
        skillsMethods.frontChestsFrontPlayer();

        //setting physics for the player and things other than platforms
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.player);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.clone);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.keyItem);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.rocks);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.branch8);

        //fine tune some player parameters now that everything has a physical body
        gameMethods.playerSetup();
        skillsMethods.cloneSetup();

        //Set some objects immovable so we can use them as platforms
        skillsMethods.setImmovableObjects();

        gameVariables.previousState = 'frameworks';
	},







	updateFrameworks: function() {
		//collisions
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.clone, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.keyItem, gameVariables.currentState.blockedLayer);

        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.rocks);

        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.clone, gameVariables.currentState.branch8);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.keyItem, gameVariables.currentState.branch8);

        //Player movements management
        gameMethods.playerMov();
        skillsMethods.cloneMov();

        //Checking for the coins
	    skillsMethods.manageCoins(gameVariables.currentState.clone.x);

        //Stopping the coins at the right time
        skillsMethods.stopCoins();

        //Checking for the chests
	    skillsMethods.checkChests();

        //Going to another map
        if (gameVariables.currentState.player.x < 20 && gameVariables.currentState.player.y < 150) {
      	    gameVariables.currentState.game.state.start('Others');
    	}
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 20 && gameVariables.currentState.player.y < 150) {
      	    gameVariables.currentState.game.state.start('Languages');
    	}
	}
};
