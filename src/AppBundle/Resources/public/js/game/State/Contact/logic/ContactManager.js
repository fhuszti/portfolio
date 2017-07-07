var ContactManager = {

	generateContact: function(state) {
		generalFunctions.addBackground(state);

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//BEHIND the map
		ContactVisualsManager.behindMap(state);

		//Initial map setup
		generalFunctions.mapSetup(state, 'contactMap');

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//BEHIND the player
		ContactVisualsManager.behindPlayer(state);

		//Create the guidance sign
		ContactVisualsManager.generateSign(state);

		// Draw a dark background rectangle behind the main text
		ContactContentManager.generateContentBg(state);

		//create the title and the main text
		ContactContentManager.generateMainContent(state);

		//Create all needed buttons
		ContactContentManager.generateEmailButton(state);
		ContactContentManager.generateFormButton(state);
		ContactContentManager.generateGithubButton(state);
		ContactContentManager.generateLinkedinButton(state);

		//create player
		ContactPlayerManager.createPlayer(state);

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//IN FRONT OF the player
		ContactVisualsManager.frontPlayer(state);

		//setting physics for the player and things other than platforms
		state.game.physics.arcade.enable([state.player]);

		//fine tune some player parameters now that the player has a physical body
		generalFunctions.playerSetup(state);
		ContactPlayerManager.playerSetup(state);

		generalFunctions.previousState = 'contact';
	},







	updateContact: function(state) {
		//collisions
		state.game.physics.arcade.collide(state.player, state.blockedLayer);

		//Player movements management
		if (state.player.x < 305) {
			state.game.add.tween(state.player).to({
				angle: 0
			}, 50, "Linear", true);

			state.player.body.gravity.y = 900;
			state.player.body.bounce.setTo(0, 0);

			generalFunctions.playerMov(state);
		}
		//If player is in zero gravity zone
		if (state.player.x >= 305) {
			state.player.angle += 2;

			state.player.body.gravity.y = 0;
			state.player.body.bounce.setTo(0.8, 0.8);

			ContactPlayerManager.zeroGravityMov(state);
		}

		if (state.player.x < 20) {
			state.game.state.start('Hub');
		}
	}
};
