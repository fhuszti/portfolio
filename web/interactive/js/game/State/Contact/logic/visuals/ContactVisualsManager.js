var ContactVisualsManager = {

	//plop sprites behind the map
	behindMap: function() {
		gameVariables.currentState.game.add.sprite(40, -3, 'textureAtlas', 'rock4');
		gameVariables.currentState.game.add.sprite(80, -10, 'textureAtlas', 'rock2');
		gameVariables.currentState.game.add.sprite(50, -10, 'textureAtlas', 'rock1');
	},







	//plop sprites behind the player
	behindPlayer: function(){
		gameVariables.currentState.signPlant = gameVariables.currentState.add.sprite(45, gameVariables.currentState.game.height *0.5 + 15, 'textureAtlas', 'plant4');
		gameVariables.currentState.signPlant.anchor.setTo(0.5, 0);
		gameVariables.currentState.signPlant.scale.setTo(0.5);
		gameVariables.currentState.add.sprite(200, gameVariables.currentState.game.height *0.5 - 65, 'textureAtlas', 'zeroGravitySign').scale.setTo(0.35);
		gameVariables.currentState.game.add.sprite(130, gameVariables.currentState.game.height *0.5 - 5, 'textureAtlas', 'plant10').scale.setTo(0.7);
		gameVariables.currentState.game.add.sprite(208, gameVariables.currentState.game.height*0.5 + 20, 'textureAtlas', 'plant8');
		gameVariables.currentState.game.add.sprite(208, gameVariables.currentState.game.height*0.5 + 60, 'textureAtlas', 'plant8');
		gameVariables.currentState.game.add.sprite(208, gameVariables.currentState.game.height*0.5 + 130, 'textureAtlas', 'plant8');
	},







	//create the sign and its associated guidance text
	generateSign: function() {
		//generating the sign itself
		var homeSign = gameVariables.currentState.game.add.sprite(15, gameVariables.currentState.game.height *0.5 - 20, 'textureAtlas', 'sign5');
		homeSign.scale.setTo(0.5);

		//Adding the text next to the sign
		gameMethods.displayText(80, gameVariables.currentState.game.height *0.5 - 30, 'home', 'guidance');
	},







	//create and manage the waterfall
	manageWaterfall: function() {
		gameVariables.currentState.waterfall = gameVariables.currentState.game.add.sprite(-160, 10, 'waterfallHeavy');
		gameVariables.currentState.waterfall.scale.setTo(2);

		gameVariables.currentState.waterfall.animations.add('flow', Phaser.Animation.generateFrameNames('waterfallHeavy', 0, 31), 20, true);
		gameVariables.currentState.waterfall.animations.play('flow');
	},

	//plop sprites in front of the player
	frontPlayer: function() {
		gameVariables.currentState.game.add.sprite(60, 40, 'textureAtlas', 'plant1');
		gameVariables.currentState.game.add.sprite(100, 43, 'textureAtlas', 'plant1');

		this.manageWaterfall();

		gameVariables.currentState.game.add.sprite(5, 30, 'textureAtlas', 'plant14');
		gameVariables.currentState.game.add.sprite(150, 30, 'textureAtlas', 'plant13');
		gameVariables.currentState.game.add.sprite(170, 25, 'textureAtlas', 'plant5');
		gameVariables.currentState.game.add.sprite(60, 35, 'textureAtlas', 'plant2').scale.setTo(0.6);
		gameVariables.currentState.game.add.sprite(100, 30, 'textureAtlas', 'plant7').scale.setTo(0.6);
		gameVariables.currentState.game.add.sprite(210, -3, 'textureAtlas', 'plant8');
		gameVariables.currentState.game.add.sprite(210, 55, 'textureAtlas', 'plant8');
	}
};