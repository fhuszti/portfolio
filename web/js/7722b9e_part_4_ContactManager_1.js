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
	}
};
