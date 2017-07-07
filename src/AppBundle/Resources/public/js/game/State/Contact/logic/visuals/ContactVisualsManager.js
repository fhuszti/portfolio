var ContactVisualsManager = {

	//plop sprites behind the map
	behindMap: function(state) {
		state.game.add.sprite(40, -3, 'textureAtlas', 'rock4');
		state.game.add.sprite(80, -10, 'textureAtlas', 'rock2');
		state.game.add.sprite(50, -10, 'textureAtlas', 'rock1');
	},







	//plop sprites behind the player
	behindPlayer: function(state){
		state.signPlant = state.add.sprite(45, state.game.height *0.5 + 15, 'textureAtlas', 'plant4');
		state.signPlant.anchor.setTo(0.5, 0);
		state.signPlant.scale.setTo(0.5);
		state.add.sprite(200, state.game.height *0.5 - 65, 'textureAtlas', 'zeroGravitySign').scale.setTo(0.35);
		state.game.add.sprite(130, state.game.height *0.5 - 5, 'textureAtlas', 'plant10').scale.setTo(0.7);
		state.game.add.sprite(208, state.game.height*0.5 + 20, 'textureAtlas', 'plant8');
		state.game.add.sprite(208, state.game.height*0.5 + 60, 'textureAtlas', 'plant8');
		state.game.add.sprite(208, state.game.height*0.5 + 130, 'textureAtlas', 'plant8');
	},







	//create the sign and its associated guidance text
	generateSign: function(state) {
		//generating the sign itself
		var homeSign = state.game.add.sprite(15, state.game.height *0.5 - 20, 'textureAtlas', 'sign5');
		homeSign.scale.setTo(0.5);

		//Adding the text next to the sign
		gameMethods.displayText(80, state.game.height *0.5 - 30, 'home', 'guidance');
	},







	//create and manage the waterfall
	manageWaterfall: function(state) {
		state.waterfall = state.game.add.sprite(-160, 10, 'waterfallHeavy');
		state.waterfall.scale.setTo(2);

		state.waterfall.animations.add('flow', Phaser.Animation.generateFrameNames('waterfallHeavy', 0, 31), 20, true);
		state.waterfall.animations.play('flow');
	},

	//plop sprites in front of the player
	frontPlayer: function(state) {
		state.game.add.sprite(60, 40, 'textureAtlas', 'plant1');
		state.game.add.sprite(100, 43, 'textureAtlas', 'plant1');

		this.manageWaterfall(state);

		state.game.add.sprite(5, 30, 'textureAtlas', 'plant14');
		state.game.add.sprite(150, 30, 'textureAtlas', 'plant13');
		state.game.add.sprite(170, 25, 'textureAtlas', 'plant5');
		state.game.add.sprite(60, 35, 'textureAtlas', 'plant2').scale.setTo(0.6);
		state.game.add.sprite(100, 30, 'textureAtlas', 'plant7').scale.setTo(0.6);
		state.game.add.sprite(210, -3, 'textureAtlas', 'plant8');
		state.game.add.sprite(210, 55, 'textureAtlas', 'plant8');
	}
};