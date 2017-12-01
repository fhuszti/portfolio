var ContactManager = {

	generateContact: function() {
		gameMethods.addBackground();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//BEHIND the map
		ContactVisualsManager.behindMap();

		//Initial map setup
		gameMethods.mapSetup('contactMap');

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//BEHIND the player
		ContactVisualsManager.behindPlayer();

		//Create the guidance sign
		ContactVisualsManager.generateSign();

		// Draw a dark background rectangle behind the main text
		ContactContentManager.generateContentBg();

		//create the title and the main text
		ContactContentManager.generateMainContent();

		//Create all needed buttons
		ContactContentManager.generateEmailButton();
		ContactContentManager.generateFormButton();
		ContactContentManager.generateGithubButton();
		ContactContentManager.generateLinkedinButton();

		//create player
		ContactPlayerManager.createPlayer();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//IN FRONT OF the player
		ContactVisualsManager.frontPlayer();

		//setting physics for the player and things other than platforms
		gameVariables.currentState.game.physics.arcade.enable([gameVariables.currentState.player]);

		//fine tune some player parameters now that the player has a physical body
		gameMethods.playerSetup();
		ContactPlayerManager.playerSetup();

		gameVariables.previousState = 'contact';
	},







	updateContact: function() {
		//collisions
		gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);

		//Player movements management
		if (gameVariables.currentState.player.x < 305) {
			gameVariables.currentState.game.add.tween(gameVariables.currentState.player).to({
				angle: 0
			}, 50, "Linear", true);

			gameVariables.currentState.player.body.gravity.y = 900;
			gameVariables.currentState.player.body.bounce.setTo(0, 0);

			gameMethods.playerMov();
		}
		//If player is in zero gravity zone
		if (gameVariables.currentState.player.x >= 305) {
			gameVariables.currentState.player.angle += 2;

			gameVariables.currentState.player.body.gravity.y = 0;
			gameVariables.currentState.player.body.bounce.setTo(0.8, 0.8);

			ContactUpdatePlayerManager.zeroGravityMov();
		}

		if (gameVariables.currentState.player.x < 20) {
			gameVariables.currentState.game.state.start('Hub');
		}
	}
};
