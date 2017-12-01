var ExperienceVisualsManager = {

	//generate the light above the waterfall, behind the diamond
	generateDiamondLight: function(state) {
		var light = state.game.add.sprite(389, 422, 'textureAtlas', 'light');
		light.alpha = 0;

		return light;
	},







	//create things other than platforms (rocks/branchs/trees/flowers...)
	//BEHIND the map
	behindMap: function(state) {
		var tree = state.game.add.sprite(230, state.game.height*0.5 + 20, 'textureAtlas', 'pine2');
		tree.scale.setTo(0.7);
	},







	//create the guidance sign and its text
	generateSigns: function(state) {
		var contactSign = state.game.add.sprite(state.game.width - 30, state.game.height - 85, 'textureAtlas', 'sign0');
		contactSign.scale.setTo(0.5);
		contactSign.anchor.setTo(0.5);
		contactSign.angle = 90;

		generalFunctions.displayText(state.game.width - 50, state.game.height - 110, 'contact', 'guidance', 'right');
	},







	//Create the diamond and hide it
	generateDiamond: function(state) {
		state.diamond = state.game.add.sprite(state.game.width *0.5 + 130, state.game.height - 50, 'textureAtlas', 'diamond');
		state.diamond.scale.setTo(0.7);
		state.diamond.anchor.setTo(0.5);
		state.diamond.alpha = 0;
		state.diamond.alive = false;
	},







	//generate the left tree
	generateLeftTree: function(state) {
		var tree = state.game.add.sprite(state.game.width*0.5 - 50, state.game.height - 155, 'textureAtlas', 'branch1');
		tree.scale.setTo(0.6);

		var foliage1 = state.game.add.sprite(state.game.width*0.5, state.game.height - 190, 'textureAtlas', 'branch10');
		foliage1.angle = 10;

		var foliage2 = state.game.add.sprite(state.game.width*0.5 + 20, state.game.height - 180, 'textureAtlas', 'branch10');
		foliage2.angle = 90;

		var foliage3 = state.game.add.sprite(state.game.width*0.5 - 10, state.game.height - 150, 'textureAtlas', 'branch10');
		foliage3.angle = -5;

		var foliage4 = state.game.add.sprite(state.game.width*0.5 + 100, state.game.height - 100, 'textureAtlas', 'branch10');
		foliage4.angle = 150;

		var apple1 = state.game.add.sprite(state.game.width*0.5 + 50, state.game.height - 140, 'textureAtlas', 'apple');
		apple1.alpha = 0.9;

		var apple2 = state.game.add.sprite(state.game.width*0.5 + 30, state.game.height - 100, 'textureAtlas', 'apple');
		apple2.alpha = 0.9;

		var apple3 = state.game.add.sprite(state.game.width*0.5 - 10, state.game.height - 130, 'textureAtlas', 'apple');
		apple3.alpha = 0.9;
	},

	//generate the right tree
	generateRightTree: function(state) {
		var tree = state.game.add.sprite(state.game.width - 100, state.game.height - 155, 'textureAtlas', 'branch1');
		tree.scale.x = -0.6;
		tree.scale.y = 0.6;

		var foliage1 = state.game.add.sprite(state.game.width - 210, state.game.height - 190, 'textureAtlas', 'branch10');

		var foliage2 = state.game.add.sprite(state.game.width - 210, state.game.height - 170, 'textureAtlas', 'branch10');

		var foliage3 = state.game.add.sprite(state.game.width - 210, state.game.height - 70, 'textureAtlas', 'branch10');
		foliage3.angle = -120;

		var foliage4 = state.game.add.sprite(state.game.width - 230, state.game.height - 150, 'textureAtlas', 'branch10');

		var apple1 = state.game.add.sprite(state.game.width - 150, state.game.height - 120, 'textureAtlas', 'apple');
		apple1.alpha = 0.9;

		var apple2 = state.game.add.sprite(state.game.width - 200, state.game.height - 110, 'textureAtlas', 'apple');
		apple2.alpha = 0.9;

		var apple3 = state.game.add.sprite(state.game.width - 160, state.game.height - 160, 'textureAtlas', 'apple');
		apple3.alpha = 0.9;

		var apple4 = state.game.add.sprite(state.game.width - 210, state.game.height - 170, 'textureAtlas', 'apple');
		apple4.alpha = 0.9;
	},

	//create a waterfall either on normal or reversed
	manageWaterfall: function(state, side) {
		var x, y;

		if (side === 'left') {
			x = state.game.width*0.5 - 46;
			y = state.game.height - 70;
		}
		else if (side === 'right') {
			x = state.game.width - 105;
			y = state.game.height - 70;
		}

		var waterfall = state.game.add.sprite(x, y, 'waterfallLight');

		if (side === 'left') {
			waterfall.scale.setTo(2);
		}
		if (side === 'right') {
			waterfall.scale.setTo(-2, 2);
		}

        waterfall.animations.add('flow', Phaser.Animation.generateFrameNames('waterfallLight', 0, 31), 20, true);
        waterfall.animations.play('flow');
	},

	//create things other than platforms (rocks/branchs/trees/flowers...)
	//IN FRONT OF the dark panel
	//BEHIND the player
	frontPanelsBehindPlayer: function(state) {
		//Side downward path
		state.game.add.sprite(0, 40, 'textureAtlas', 'plant6');

		var flower1 = state.game.add.sprite(90, 170, 'textureAtlas', 'flower6');
		flower1.scale.setTo(0.3);

		var plant1 = state.game.add.sprite(62, 185, 'textureAtlas', 'plant4');
		plant1.scale.setTo(0.6);

		var plant2 = state.game.add.sprite(147, state.game.height*0.5 + 20, 'textureAtlas', 'plant14');
		plant2.angle = -10;

		state.game.add.sprite(77, state.game.height - 169, 'textureAtlas', 'plant3');

		//ground
		this.generateLeftTree(state);
		this.generateRightTree(state);

		this.manageWaterfall(state, 'left');
		this.manageWaterfall(state, 'right');

		state.game.add.sprite(170, state.game.height - 103, 'textureAtlas', 'plant17');
		state.game.add.sprite(state.game.width*0.5 - 100, state.game.height - 75, 'textureAtlas', 'plant3');
	},







	//create things other than platforms (rocks/branchs/trees/flowers...)
	//IN FRONT OF the dark panel
	//IN FRONT OF the player
	frontPanelsFrontPlayer: function(state) {
		//Side downward path
		state.game.add.sprite(48, state.game.height*0.5 - 30, 'textureAtlas', 'plant15');
		var leaves1 = state.game.add.sprite(45, 130, 'textureAtlas', 'plant9');
		leaves1.scale.setTo(0.4);
		var leaves2 = state.game.add.sprite(43, state.game.height*0.5 + 20, 'textureAtlas', 'plant12');
		leaves2.scale.setTo(0.6);

		state.game.add.sprite(115, state.game.height - 140, 'textureAtlas', 'plant16');
		state.game.add.sprite(115, state.game.height - 110, 'textureAtlas', 'plant16');

		//left part of the separating wall
		var foliage1 = state.game.add.sprite(205, 60, 'textureAtlas', 'plant15');
		foliage1.scale.x = -1;
		var foliage2 = state.game.add.sprite(205, -10, 'textureAtlas', 'plant15');
		foliage2.scale.x = -1;
		var foliage3 = state.game.add.sprite(205, state.game.height*0.5 - 150, 'textureAtlas', 'plant15');
		foliage3.scale.x = -1;
		var foliage4 = state.game.add.sprite(205, state.game.height*0.5 - 40, 'textureAtlas', 'plant15');
		foliage4.scale.x = -1;
		var foliage5 = state.game.add.sprite(205, state.game.height*0.5 + 30, 'textureAtlas', 'plant15');
		foliage5.scale.x = -1;

		//right part of the separating wall
		state.game.add.sprite(242, state.game.height*0.5 - 120, 'textureAtlas', 'plant15');
		state.game.add.sprite(242, 110, 'textureAtlas', 'plant15');
		state.game.add.sprite(242, state.game.height*0.5 - 50, 'textureAtlas', 'plant15');

		//ground
		var plant1 = state.game.add.sprite(state.game.width *0.5 + 130, state.game.height - 40, 'textureAtlas', 'plant1');
		plant1.anchor.setTo(0.5);

		var plant2 = state.game.add.sprite(state.game.width *0.5 + 130, state.game.height - 50, 'textureAtlas', 'plant2');
		plant2.anchor.setTo(0.5);

		var plant3 = state.game.add.sprite(state.game.width *0.5 - 10, state.game.height - 45, 'textureAtlas', 'plant4');
		plant3.anchor.setTo(0.5);
		plant3.scale.setTo(0.8);

		var plant4 = state.game.add.sprite(state.game.width *0.5 + 260, state.game.height - 45, 'textureAtlas', 'plant4');
		plant4.anchor.setTo(0.5);
		plant4.scale.setTo(0.8);

		state.game.add.sprite(130, state.game.height - 60, 'textureAtlas', 'plant5');
	},
};
