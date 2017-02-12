var HomeGame = HomeGame || {};

HomeGame.Experience = function() {};

HomeGame.Experience.prototype = {
	create: function() {
		generalFunctions.addBackground(this);

		this.light = this.generateDiamondLight();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//BEHIND the map
		this.behindMap();

		//Initial map setup
		generalFunctions.mapSetup(this, 'experienceMap');

		//Adding the guidance sign and its text
		this.generateSigns();

		//Adding the title of the page at the right place
		generalFunctions.displayText(this.game.width *0.5 + 130, 40, 'experience', 'title', 'center');

		// Draw a black background rectangle behind the overlay
		var widthStart = this.game.width *0.5 - 102,
			heightStart = 78;

		//we pop the dark bg used to display the content
		this.generateContentBg(widthStart, heightStart);

		//then we generate the content on top of it
		this.generateContent();

		//Now we create the grid overlay
		this.generateGrid(widthStart, heightStart);

		//we generate the diamond
		this.generateDiamond();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//IN FRONT OF the dark panel
		//BEHIND the player
		this.frontPanelsBehindPlayer();

		//create player
		this.createPlayer();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//IN FRONT OF the dark panel
		//IN FRONT OF the player
		this.frontPanelsFrontPlayer();

		//setting physics for the player and things other than platforms
		this.game.physics.arcade.enable([this.player, this.diamond]);
		this.diamond.body.immovable = true;

		//fine tune some player parameters now that the player has a physical body
		generalFunctions.playerSetup(this);

		generalFunctions.previousState = 'experience';
	},

	update: function() {
		//collisions
		this.game.physics.arcade.collide(this.player, this.blockedLayer);
		this.game.physics.arcade.collide(this.player, this.diamond);

		//Player movements management
		//not active if the player is paused (cinematic)
		if (this.player.body.maxVelocity.x !== 0) {
			generalFunctions.playerMov(this);
		}

		//if the player is on the ground and the diamond doesn't 'exist' yet
		if (this.player.y >= 556 && !this.diamond.alive) {
			this.startCinematic();
		}

		//Changing map by walking to a specific spot on the current map
		if (this.player.x > this.game.width - 20) {
			this.game.state.start('Game');
		}
	},

	//create things other than platforms (rocks/branchs/trees/flowers...)
	//BEHIND the map
	behindMap: function() {
		var tree = this.game.add.sprite(230, this.game.height*0.5 + 20, 'textureAtlas', 'pine2');
		tree.scale.setTo(0.7);
	},

	generateDiamondLight: function() {
		var light = this.game.add.sprite(389, 422, 'textureAtlas', 'light');
		light.alpha = 0;

		return light;
	},

	//create the guidance sign and its text
	generateSigns: function() {
		var plant = this.game.add.sprite(this.game.width - 55, this.game.height - 50, 'textureAtlas', 'plant4');
		plant.scale.setTo(0.4);
		plant.anchor.setTo(0.5);

		var homeSign = this.game.add.sprite(this.game.width - 40, this.game.height - 70, 'textureAtlas', 'sign4');
		homeSign.scale.setTo(0.5);
		homeSign.anchor.setTo(0.5);

		generalFunctions.displayText(this.game.width - 40, this.game.height - 135, 'home', 'guidance', 'right');
	},

	//create the dark background for content
	generateContentBg: function(widthStart, heightStart) {
		var blackBg = this.game.add.graphics(0, 0);
		blackBg.beginFill(0x000000, 0.5);
		blackBg.drawRect(widthStart, heightStart, 460, 345);
		blackBg.endFill();

		//we create a group to hold the different drawn backgrounds
		//because we need to tune down their alpha while the diamond is still active
		//before putting it back up when the animation is done playing
		//otherwise it leaves a mark behind the Confidential panel
		this.bgGroup = this.game.add.group();

		var whiteBg = this.game.add.graphics(0, 0);
		whiteBg.beginFill(0xffffff, 0.3);
		whiteBg.drawRect(widthStart + 250, heightStart + 10, 200, 325);
		whiteBg.endFill();
		this.bgGroup.addChild(whiteBg);

		var whiteLine = this.game.add.graphics(0.0);
		whiteLine.lineStyle(3, 0xffffff, 0.3);
		whiteLine.moveTo(widthStart + 50, heightStart + 172);
		whiteLine.lineTo(widthStart + 200, heightStart + 172);
		this.bgGroup.addChild(whiteLine);

		this.bgGroup.alpha = 0.1;
	},

	//create the content
	generateContent: function() {
		//we need a group with all our content to fade it in and out easily
		this.contentGroup = this.game.add.group();

		//we create both parts of the panel
		this.generateContentLinks();
		this.generateContentSidePanel();

		this.contentGroup.alpha = 0.3;
	},

	//generate the links on the left side of the content panel
	generateContentLinks: function() {
		this.generateFirstLink();
		this.generateSecondLink();
	},

	//create the full first link of the panel
	generateFirstLink: function() {
		//we create a group to have the clickable fake sprite as a child
		var boudinBlancButton = this.game.add.group();
		boudinBlancButton.inputEnableChildren = true;

		//and another for both background image and text
		this.firstBackgroundGroup = this.game.add.group();

		//we generate the button design
		generalFunctions.generateButton(this.game.width*0.5 - 92, 130, 230, 100, 0.1, boudinBlancButton);

		//as well as the background img and text that'll show when hovering
		this.firstBackgroundImg = this.generateBackgroundImage(this.game.width*0.5 - 92, 130, 'boudinblanc');
		this.firstBackgroundGroup.addChild(this.firstBackgroundImg);

		this.firstBackgroundText = generalFunctions.displayText(this.game.width*0.5 + 23, 180, 'experienceFirstLinkLocation', 'experienceTitle', 'center');
		this.firstBackgroundGroup.addChild(this.firstBackgroundText);

		this.firstBackgroundGroup.alpha = 0;

		//then we add the text
		var titleValue = generalFunctions.displayText(this.game.width*0.5 + 23, 160, 'experienceFirstLinkTitle', 'experienceTitle', 'center');
		boudinBlancButton.add(titleValue);

		var durationValue = generalFunctions.displayText(this.game.width*0.5 + 23, 190, 'experienceFirstLinkDuration', 'experienceContent', 'center');
		boudinBlancButton.add(durationValue);

		var jobValue = generalFunctions.displayText(this.game.width*0.5 + 23, 210, 'experienceFirstLinkJob', 'experienceContent', 'center');
		boudinBlancButton.add(jobValue);

		this.contentGroup.addChild(titleValue);
		this.contentGroup.addChild(durationValue);
		this.contentGroup.addChild(jobValue);

		//we create a fake sprite on top of the whole button and attach the click event to it
		this.firstFakeSprite = generalFunctions.generateFakeSprite(this.game.width*0.5 - 92, 130, 230, 100, boudinBlancButton);
		this.firstFakeSprite.input.useHandCursor = false;
	},

	//generate a background image for a link
	generateBackgroundImage: function(x, y, name){
		var img = this.game.add.sprite(x, y, 'textureAtlas', name);
		img.scale.setTo(0.5);
		img.width = 230;
		img.height = 100;

		return img;
	},

	//create the full second link of the panel
	generateSecondLink: function() {
		//we create a group to have the clickable fake sprite as a child
		var mcdonaldsButton = this.game.add.group();
		mcdonaldsButton.inputEnableChildren = true;

		//and another for both background image and text
		this.secondBackgroundGroup = this.game.add.group();

		//we generate the button design
		generalFunctions.generateButton(this.game.width*0.5 - 92, this.game.height*0.5 - 30, 230, 100, 0.1, mcdonaldsButton);

		//as well as the background img that'll show when hovering
		this.secondBackgroundImg = this.generateBackgroundImage(this.game.width*0.5 - 92, this.game.height*0.5 - 30, 'mcdonalds');
		this.secondBackgroundGroup.addChild(this.secondBackgroundImg);

		this.secondBackgroundText = generalFunctions.displayText(this.game.width*0.5 + 23, this.game.height*0.5 + 20, 'experienceSecondLinkLocation', 'experienceTitle', 'center');
		this.secondBackgroundGroup.addChild(this.secondBackgroundText);

		this.secondBackgroundGroup.alpha = 0;

		//then we add the text
		var titleValue = generalFunctions.displayText(this.game.width*0.5 + 23, this.game.height*0.5, 'experienceSecondLinkTitle', 'experienceTitle', 'center');
		mcdonaldsButton.add(titleValue);

		var durationValue = generalFunctions.displayText(this.game.width*0.5 + 23, this.game.height*0.5 + 30, 'experienceSecondLinkDuration', 'experienceContent', 'center');
		mcdonaldsButton.add(durationValue);

		var jobValue = generalFunctions.displayText(this.game.width*0.5 + 23, this.game.height*0.5 + 50, 'experienceSecondLinkJob', 'experienceContent', 'center');
		mcdonaldsButton.add(jobValue);

		this.contentGroup.addChild(titleValue);
		this.contentGroup.addChild(durationValue);
		this.contentGroup.addChild(jobValue);

		//we create a fake sprite on top of the whole button and attach the click event to it
		this.secondFakeSprite = generalFunctions.generateFakeSprite(this.game.width*0.5 - 92, 270, 230, 100, mcdonaldsButton);
		this.secondFakeSprite.input.useHandCursor = false;
	},

	//create the side panel of the main content
	generateContentSidePanel: function() {
		var skillsTitle = generalFunctions.displayText(this.game.width - 150, 130, 'experienceSkillsTitle', 'experienceTitle', 'center');
		this.contentGroup.addChild(skillsTitle);

		var skillsFirst = generalFunctions.displayText(this.game.width - 150, 230, 'experienceSkillsFirst', 'experienceSkills', 'center');
		this.contentGroup.addChild(skillsFirst);

		var skillsSecond = generalFunctions.displayText(this.game.width - 245, 265, 'experienceSkillsSecond', 'experienceSkills', 'left');
		this.contentGroup.addChild(skillsSecond);

		var skillsThird = generalFunctions.displayText(this.game.width - 60, 265, 'experienceSkillsThird', 'experienceSkills', 'right');
		this.contentGroup.addChild(skillsThird);

		var skillsFourth = generalFunctions.displayText(this.game.width - 150, 335, 'experienceSkillsFourth', 'experienceSkills', 'center');
		this.contentGroup.addChild(skillsFourth);

		var skillsFifth = generalFunctions.displayText(this.game.width - 150, 385, 'experienceSkillsFifth', 'experienceSkills', 'center');
		this.contentGroup.addChild(skillsFifth);
	},

	//create the grid overlay
	generateGrid: function(widthStart, heightStart) {
		var widthCurrent = widthStart + 2,
			heightCurrent = heightStart + 2,
			pieceKey = 0,
			k, l;

		//we empty piecesArray and piecesGroups just in case
		// - piecesArray will contain all 12 pieces sprites, including their background
		// - piecesGroups will contain 12 groups, containing each 1 cell sprite + bg
		//   and 1 part of Confidential tag if needed, so we can fade the whole thing together when needed
		this.piecesArray = {};
		this.piecesGroups = {};


		//We create the array holding the puzzle, as well as the puzzle itself
		for (k = 0; k < 3; k++) {
			for (l = 0; l < 4; l++) {
				//we create a group to hold the sprite + background + eventual Confidential tag
				this.piecesGroups[k + 'x' + l] = this.game.add.group();

				//We fill piecesArray with all different cells
				this.piecesArray[k + 'x' + l] = this.game.add.sprite(widthCurrent, heightCurrent);
				this.piecesArray[k + 'x' + l].key = pieceKey;
				this.piecesArray[k + 'x' + l].posX = widthCurrent;
				this.piecesArray[k + 'x' + l].posY = heightCurrent;

				//add the piece to its respective group
				this.piecesGroups[k + 'x' + l].addChild(this.piecesArray[k + 'x' + l]);

				//Now we fill the current cell with whatever we want
				this.fillCell(k, l);

				//Moving to the right one cell at a time
				widthCurrent += 114;
				pieceKey++;
			}

			//Coming back to the first cell, one line below in the table
			widthCurrent = widthStart + 2;
			heightCurrent += 114;
		}
	},

	//fill a given cell
	fillCell: function(x, y) {
		var cellBg = this.game.add.graphics(0, 0);
		this.piecesArray[x + 'x' + y].addChild(cellBg);

		cellBg.beginFill(0xFFFFFF, 0.9);
		cellBg.drawRect(0, 0, 113, 113);
		cellBg.endFill();

		//we pop the Confidential tag in the middle
		this.generateConfidential(x, y);
	},

	//create the Confidential tag
	generateConfidential: function(x, y) {
		//if it's the cell on the middle-left, we add a part of the Confidential png
		//depending on the current language
		if (x === 1 && y === 1) {
			var leftPart;

			//we pop the left half of the correct localization "Confidential" sign
			if (actualLang === 'fr') {
				leftPart = this.game.add.sprite(this.piecesArray['1x1'].x + 113, this.piecesArray['1x1'].y - 5, 'textureAtlas', 'confidentiel0');

				leftPart.anchor.setTo(1, 0);
				leftPart.scale.setTo(0.5);
			}
			else {
				leftPart = this.game.add.sprite(this.piecesArray['1x1'].x + 113, this.piecesArray['1x1'].y - 10, 'textureAtlas', 'confidential0');

				leftPart.anchor.setTo(1, 0);
				leftPart.scale.setTo(0.35);
			}

			this.piecesGroups[x + 'x' + y].addChild(leftPart);
		}

		//if it's the cell on the middle-right, we add a part of the Confidential png
		//depending on the current language
		if (x === 1 && y === 2) {
			var rightPart;

			//we pop the right half of the correct localization "Confidential" sign
			if (actualLang === 'fr') {
				rightPart = this.game.add.sprite(this.piecesArray['1x2'].x, this.piecesArray['1x2'].y - 5, 'textureAtlas', 'confidentiel1');

				rightPart.scale.setTo(0.5);
			}
			else {
				rightPart = this.game.add.sprite(this.piecesArray['1x2'].x, this.piecesArray['1x2'].y - 10, 'textureAtlas', 'confidential1');

				rightPart.scale.setTo(0.35);
			}

			this.piecesGroups[x + 'x' + y].addChild(rightPart);
		}
	},

	//Create the diamond and hide it
	generateDiamond: function() {
		this.diamond = this.game.add.sprite(this.game.width *0.5 + 130, this.game.height - 50, 'textureAtlas', 'diamond');
		this.diamond.scale.setTo(0.7);
		this.diamond.anchor.setTo(0.5);
		this.diamond.alpha = 0;
		this.diamond.alive = false;
	},

	//create things other than platforms (rocks/branchs/trees/flowers...)
	//IN FRONT OF the dark panel
	//BEHIND the player
	frontPanelsBehindPlayer: function() {
		//Side downward path
		this.game.add.sprite(0, 40, 'textureAtlas', 'plant6');

		var flower1 = this.game.add.sprite(90, 170, 'textureAtlas', 'flower6');
		flower1.scale.setTo(0.3);

		var plant1 = this.game.add.sprite(62, 185, 'textureAtlas', 'plant4');
		plant1.scale.setTo(0.6);

		var plant2 = this.game.add.sprite(147, this.game.height*0.5 + 20, 'textureAtlas', 'plant14');
		plant2.angle = -10;

		this.game.add.sprite(77, this.game.height - 169, 'textureAtlas', 'plant3');

		//ground
		this.generateLeftTree();
		this.generateRightTree();

		this.manageWaterfall('left');
		this.manageWaterfall('right');

		this.game.add.sprite(170, this.game.height - 103, 'textureAtlas', 'plant17');
		this.game.add.sprite(this.game.width*0.5 - 100, this.game.height - 75, 'textureAtlas', 'plant3');
	},

	//create a waterfall either on normal or reversed
	manageWaterfall: function(side) {
		var x, y;

		if (side === 'left') {
			x = this.game.width*0.5 - 46;
			y = this.game.height - 70;
		}
		else if (side === 'right') {
			x = this.game.width - 105;
			y = this.game.height - 70;
		}

		var waterfall = this.game.add.sprite(x, y, 'waterfallLight');

		if (side === 'left') {
			waterfall.scale.setTo(2)
		}
		if (side === 'right') {
			waterfall.scale.setTo(-2, 2);
		}

        waterfall.animations.add('flow', Phaser.Animation.generateFrameNames('waterfallLight', 0, 31), 20, true);
        waterfall.animations.play('flow');
	},

	//generate the left tree
	generateLeftTree: function() {
		var tree = this.game.add.sprite(this.game.width*0.5 - 50, this.game.height - 155, 'textureAtlas', 'branch1');
		tree.scale.setTo(0.6);

		var foliage1 = this.game.add.sprite(this.game.width*0.5, this.game.height - 190, 'textureAtlas', 'branch10');
		foliage1.angle = 10;

		var foliage2 = this.game.add.sprite(this.game.width*0.5 + 20, this.game.height - 180, 'textureAtlas', 'branch10');
		foliage2.angle = 90;

		var foliage3 = this.game.add.sprite(this.game.width*0.5 - 10, this.game.height - 150, 'textureAtlas', 'branch10');
		foliage3.angle = -5;

		var foliage4 = this.game.add.sprite(this.game.width*0.5 + 100, this.game.height - 100, 'textureAtlas', 'branch10');
		foliage4.angle = 150;

		var apple1 = this.game.add.sprite(this.game.width*0.5 + 50, this.game.height - 140, 'textureAtlas', 'apple');
		apple1.alpha = 0.9;

		var apple2 = this.game.add.sprite(this.game.width*0.5 + 30, this.game.height - 100, 'textureAtlas', 'apple');
		apple2.alpha = 0.9;

		var apple3 = this.game.add.sprite(this.game.width*0.5 - 10, this.game.height - 130, 'textureAtlas', 'apple');
		apple3.alpha = 0.9;
	},

	//generate the right tree
	generateRightTree: function() {
		var tree = this.game.add.sprite(this.game.width - 100, this.game.height - 155, 'textureAtlas', 'branch1');
		tree.scale.x = -0.6;
		tree.scale.y = 0.6;

		var foliage1 = this.game.add.sprite(this.game.width - 210, this.game.height - 190, 'textureAtlas', 'branch10');

		var foliage2 = this.game.add.sprite(this.game.width - 210, this.game.height - 170, 'textureAtlas', 'branch10');

		var foliage3 = this.game.add.sprite(this.game.width - 210, this.game.height - 70, 'textureAtlas', 'branch10');
		foliage3.angle = -120;

		var foliage4 = this.game.add.sprite(this.game.width - 230, this.game.height - 150, 'textureAtlas', 'branch10');

		var apple1 = this.game.add.sprite(this.game.width - 150, this.game.height - 120, 'textureAtlas', 'apple');
		apple1.alpha = 0.9;

		var apple2 = this.game.add.sprite(this.game.width - 200, this.game.height - 110, 'textureAtlas', 'apple');
		apple2.alpha = 0.9;

		var apple3 = this.game.add.sprite(this.game.width - 160, this.game.height - 160, 'textureAtlas', 'apple');
		apple3.alpha = 0.9;

		var apple4 = this.game.add.sprite(this.game.width - 210, this.game.height - 170, 'textureAtlas', 'apple');
		apple4.alpha = 0.9;
	},

	//create player
	createPlayer: function() {
		this.player = this.game.add.sprite(30, 60, 'textureAtlas', 'ninja1');
	},

	//create things other than platforms (rocks/branchs/trees/flowers...)
	//IN FRONT OF the dark panel
	//IN FRONT OF the player
	frontPanelsFrontPlayer: function() {
		//Side downward path
		this.game.add.sprite(48, this.game.height*0.5 - 30, 'textureAtlas', 'plant15');
		var leaves1 = this.game.add.sprite(45, 130, 'textureAtlas', 'plant9');
		leaves1.scale.setTo(0.4);
		var leaves2 = this.game.add.sprite(43, this.game.height*0.5 + 20, 'textureAtlas', 'plant12');
		leaves2.scale.setTo(0.6);

		this.game.add.sprite(115, this.game.height - 140, 'textureAtlas', 'plant16');
		this.game.add.sprite(115, this.game.height - 110, 'textureAtlas', 'plant16');

		//left part of the separating wall
		var foliage1 = this.game.add.sprite(205, 60, 'textureAtlas', 'plant15');
		foliage1.scale.x = -1;
		var foliage2 = this.game.add.sprite(205, -10, 'textureAtlas', 'plant15');
		foliage2.scale.x = -1;
		var foliage3 = this.game.add.sprite(205, this.game.height*0.5 - 150, 'textureAtlas', 'plant15');
		foliage3.scale.x = -1;
		var foliage4 = this.game.add.sprite(205, this.game.height*0.5 - 40, 'textureAtlas', 'plant15');
		foliage4.scale.x = -1;
		var foliage5 = this.game.add.sprite(205, this.game.height*0.5 + 30, 'textureAtlas', 'plant15');
		foliage5.scale.x = -1;

		//right part of the separating wall
		this.game.add.sprite(242, this.game.height*0.5 - 120, 'textureAtlas', 'plant15');
		this.game.add.sprite(242, 110, 'textureAtlas', 'plant15');
		this.game.add.sprite(242, this.game.height*0.5 - 50, 'textureAtlas', 'plant15');

		//ground
		var plant1 = this.game.add.sprite(this.game.width *0.5 + 130, this.game.height - 40, 'textureAtlas', 'plant1');
		plant1.anchor.setTo(0.5);

		var plant2 = this.game.add.sprite(this.game.width *0.5 + 130, this.game.height - 50, 'textureAtlas', 'plant2');
		plant2.anchor.setTo(0.5);

		var plant3 = this.game.add.sprite(this.game.width *0.5 - 10, this.game.height - 45, 'textureAtlas', 'plant4');
		plant3.anchor.setTo(0.5);
		plant3.scale.setTo(0.8);

		var plant4 = this.game.add.sprite(this.game.width *0.5 + 260, this.game.height - 45, 'textureAtlas', 'plant4');
		plant4.anchor.setTo(0.5);
		plant4.scale.setTo(0.8);

		this.game.add.sprite(130, this.game.height - 60, 'textureAtlas', 'plant5');
	},

	//start the small cinematic depicting the jewel arrival
	startCinematic: function() {
		//we start by stopping the player and signaling a cinematic with a sprite pop
		this.player.body.maxVelocity.x = 0;
		this.player.body.maxVelocity.y = 0;
		this.player.animations.paused = true;

		//we tint the background for added effect
		this.tweenTint(this.background, 0xffffff, 0x5FC6D4, 2000);
		//we also make the light illusion appear
		this.game.add.tween(this.light).to( { alpha: 0.5 }, 2000, "Linear", true);

		var exclamation = this.game.add.sprite(this.player.body.x, this.player.body.y - 20, 'textureAtlas', 'exclamation');
		exclamation.anchor.setTo(0.5);
		exclamation.scale.setTo(0.9);

		//then we don't forget to set these all back 8 seconds later
		setTimeout(function(state) {
			//we tint the bg back to normal
			state.tweenTint(state.background, 0x5FC6D4, 0xffffff, 2000);

			//we just fade the light a bit more, subtil
			state.game.add.tween(state.light).to( { alpha: 0.3 }, 2000, "Linear", true);
		}, 6000, this);

		//separate timeOut because delayed 2 more seconds
		setTimeout(function(state) {
			//now the player can move again
			state.player.body.maxVelocity.x = 10000;
			state.player.body.maxVelocity.y = 10000;
			//and the exclamation isn't needed anymore
			exclamation.destroy();
		}, 8000, this);

		//next we start the whole diamond thingy
		this.diamondAlive();
	},

	//tint a sprite over time
	tweenTint: function(obj, startColor, endColor, time) {
		// create an object to tween with our step value at 0
		var colorBlend = {step: 0};

		// create the tween on this object and tween its step property to 100
		var colorTween = this.game.add.tween(colorBlend).to({step: 100}, time);

		// run the interpolateColor function every time the tween updates, feeding it the
		// updated value of our tween each time, and set the result as our tint
		colorTween.onUpdateCallback(function() {
			obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
		});

		// set the object to the start color straight away
		obj.tint = startColor;

		// start the tween
		colorTween.start();
	},

	//pop the diamond and start the animations
	diamondAlive: function() {
		this.diamond.alive = true;
		//we make the diamond appear and let him rise slowly
		this.game.add.tween(this.diamond).to( { alpha: 1 }, 2000, "Linear", true);
		this.diamond.body.velocity.y = -15;

		//we need to temporarily store a copy of the pieces to keep track of which are out
		this.remainingPiecesArray = this.piecesArray;

		//now we start animating the whole thing
		setTimeout(function(state) {
			state.animateDiamond(12);
		}, 3000, this);
	},

	//start the diamond animation
	animateDiamond: function(amountOfPieces) {
		setTimeout(this.timeoutAnimateDiamond, 900, this, amountOfPieces);
	},

	timeoutAnimateDiamond: function(state, amountOfPieces) {
		//we choose and go to a piece 12 times, until there's none left
		//by checking if remainingPiecesArray isn't empty
		if (Object.keys(state.remainingPiecesArray).length !== 0 && state.remainingPiecesArray.constructor === Object) {
			//selection of a random piece among those still there
			var selectedPiece = state.pickRandomProperty(state.remainingPiecesArray);

			//we go through the remainingPiecesArray to find the selected piece
			for (var arrayKey in state.remainingPiecesArray) {
				//check to filter going through protoype methods and such
				if (state.remainingPiecesArray.hasOwnProperty(arrayKey)) {
					//when we finally got our selected piece
					if (selectedPiece === arrayKey) {
						//we get the center of the selected piece to point the diamond to there
						var widthCenter = state.piecesArray[arrayKey].posX + 56,
							heightCenter = state.piecesArray[arrayKey].posY + 56;

						//the diamond moves to that piece
						state.game.add.tween(state.diamond).to( { x: widthCenter, y: heightCenter }, 1000, Phaser.Easing.Quadratic.Out, true);

						//we stop the diamond velocity
						state.diamond.body.velocity.y = 0;

						//we make the selected piece "blink" and disappear
						//by making alpha go up, the piece goes bright for a brief moment before disappearing
						//timed it so that it happens when the diamond arrives, simulates action
						state.game.add.tween(state.piecesGroups[arrayKey]).to( { alpha: 1.5 }, 500, "Linear", true, 900);
						state.game.add.tween(state.piecesGroups[arrayKey]).to( { alpha: 0 }, 1000, "Linear", true, 1000);

						//and we remove it from the temp array
						delete state.remainingPiecesArray[arrayKey];
					}
				}
			}

			state.animateDiamond(amountOfPieces);
		}
		//job done, the diamond can go rest under the dark panel
		else {
			state.game.add.tween(state.diamond).to( { x: state.game.width *0.5 + 130, y: state.game.height - 170 }, 1000, Phaser.Easing.Quadratic.InOut, true);

			//we up the content's alpha now that the stage is cleared
			state.game.add.tween(state.bgGroup).to( { alpha: 1 }, 2000, "Linear", true);
			state.game.add.tween(state.contentGroup).to( { alpha: 1 }, 2000, "Linear", true);

			//and the links are now clickable
			state.firstFakeSprite.events.onInputDown.add(state.linkToBoudinBlanc, state);
			state.firstFakeSprite.events.onInputOver.add(state.hoverOnBoudinBlanc, state);
			state.firstFakeSprite.events.onInputOut.add(state.hoverOffBoudinBlanc, state);
			state.firstFakeSprite.input.useHandCursor = true;
			state.secondFakeSprite.events.onInputDown.add(state.linkToMcdonalds, state);
			state.secondFakeSprite.events.onInputOver.add(state.hoverOnMcDonalds, state);
			state.secondFakeSprite.events.onInputOut.add(state.hoverOffMcDonalds, state);
			state.secondFakeSprite.input.useHandCursor = true;
		}
	},

	//pick a random property in a given object
	pickRandomProperty: function(obj) {
	    var result;
	    var count = 0;
	    for (var prop in obj)
	        if (Math.random() < 1/++count)
	           result = prop;
	    return result;
	},

	//links outside the resume to the Boudin Blanc website
	linkToBoudinBlanc: function() {
		window.location.href = 'http://www.boudinblanc.co.uk/'; 
	},

	//make the background picture appear when hovering over the first link
	hoverOnBoudinBlanc: function() {
		this.game.add.tween(this.firstBackgroundGroup).to( { alpha: 1 }, 500, "Linear", true);
	},

	//make the background picture disappear when hovering out of the first link
	hoverOffBoudinBlanc: function() {
		this.game.add.tween(this.firstBackgroundGroup).to( { alpha: 0 }, 500, "Linear", true);
	},

	//links outside the resume to the McDonald's website
	linkToMcdonalds: function() {
		window.location.href = 'https://www.restaurants.mcdonalds.fr/mcdonalds-tours-centre-ville'; 
	},

	//make the background picture appear when hovering over the first link
	hoverOnMcDonalds: function() {
		this.game.add.tween(this.secondBackgroundGroup).to( { alpha: 1 }, 500, "Linear", true);
	},

	//make the background picture disappear when hovering out of the first link
	hoverOffMcDonalds: function() {
		this.game.add.tween(this.secondBackgroundGroup).to( { alpha: 0 }, 500, "Linear", true);
	}
};
