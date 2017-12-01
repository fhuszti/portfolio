var ExperiencePlayerManager = {

	//create player
	createPlayer: function(state) {
		state.player = state.game.add.sprite(30, 60, 'textureAtlas', 'ninja1');
	}
};
