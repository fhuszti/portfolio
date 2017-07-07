var ExperiencePlayerManager = {

	//create player
	createPlayer: function() {
		gameVariables.currentState.player = gameVariables.currentState.game.add.sprite(30, 60, 'textureAtlas', 'ninja1');
	}
};
