var HomeGame = HomeGame || {};

HomeGame.Experience = function() {};

HomeGame.Experience.prototype = {
	widthStart: 0,

	heightStart: 0,

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

		//we define the class variables
		this.widthStart = this.game.width * 0.5 - 102;
		this.heightStart = 78;

		// Draw a black background rectangle behind the overlay
		this.generateContentBg();

		//then we generate the content on top of it
		this.generateContent();

		//and the exerience bar going below the content
		this.generateExperienceBarSection();

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

		//we setup all needed tweens
		this.setupTweens();
		//we setup state variables
		this.setupVariables();

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
		if ( this.player.body.maxVelocity.x !== 0 ) {
			generalFunctions.playerMov(this);
		}

		//if the player is on the ground and the diamond doesn't 'exist' yet
		if ( this.player.y >= 556 && !this.diamond.alive ) {
			this.startCinematic();
		}

		//we don't forget to update the experience bar crop if the cinematic is done
		if ( this.diamond.alive ) {
			this.experienceBar.updateCrop();
			
			this.updatePercentage();
		}

		//if the player is on the diamond
		if ( this.player.x >= 503 && this.player.x <= 552 && this.player.y === 431 ) {
			this.homeShortcut();
		}
		//else we have to check for a bunch of stuff to make sure those tweens don't mess with others
		else if ( this.light.alpha > 0.2 && !this.firstTweenLightUp.isRunning && !this.firstTweenBlue.isRunning ) {
			//if it's still the first cinematic
			if ( !this.started ) {
				this.firstEffectsDown();
			}
			else {
				this.manageEffectsDown();
			}
		}

		//on click anywhere else, we close the modal if its open
		if (this.modalStarted && this.game.input.activePointer.isDown) {
			this.manageModalQuit();
		}

		//Changing map by walking to a specific spot on the current map
		if ( this.player.x > this.game.width - 75 && this.player.y > 600 ) {
			generalFunctions.leavingExperienceX = this.player.x;
			generalFunctions.leavingExperienceScaleX = this.player.scale.x;
			this.game.state.start('Contact');
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
		var contactSign = this.game.add.sprite(this.game.width - 30, this.game.height - 85, 'textureAtlas', 'sign0');
		contactSign.scale.setTo(0.5);
		contactSign.anchor.setTo(0.5);
		contactSign.angle = 90;

		generalFunctions.displayText(this.game.width - 50, this.game.height - 110, 'contact', 'guidance', 'right');
	},

	//create the dark background for content
	generateContentBg: function() {
		//main background
		var blackBg = this.game.add.graphics(0, 0);
		blackBg.beginFill(0x000000, 0.5);
		blackBg.drawRect(this.widthStart, this.heightStart, 460, 345);
		blackBg.endFill();

		//background for the experience bar
		var whiteBg = this.game.add.graphics(0, 0);
		whiteBg.beginFill(0xffffff, 0.3);
		whiteBg.drawRect(this.widthStart, this.heightStart + 295, 460, 50);
		whiteBg.endFill();
	},

	//create the content
	generateContent: function() {
		this.generateFirstLink();
		this.generateSecondLink();
		this.generateThirdLink();
		this.generateFourthLink();
		this.generateFifthLink();
	},

	//create the full first link of the panel
	generateFirstLink: function() {
		//we create a group to have the clickable fake sprite as a child
		this.firstButtonGroup = this.game.add.group();
		this.firstButtonGroup.inputEnableChildren = true;
		
		//we generate the background button
		generalFunctions.generateButton(this.widthStart + 10, this.heightStart + 10, 215, 200, 0.3, this.firstButtonGroup);

		//then we add the text, in its own group
		this.firstButtonTextGroup = this.game.add.group();
		var titleValue1 = generalFunctions.displayText(this.widthStart + 117, this.heightStart + 99, 'experienceFirstLinkTitle1', 'mediumContent1', 'center'),
			titleValue2 = generalFunctions.displayText(this.widthStart + 117, this.heightStart + 122, 'experienceFirstLinkTitle2', 'mediumContent1', 'center');
		this.firstButtonTextGroup.add(titleValue1);
		this.firstButtonTextGroup.add(titleValue2);

		//and we don't forget to add the text group as a child of the button group
		this.firstButtonGroup.add(this.firstButtonTextGroup);

		//another group for what's displayed on hover
		this.firstHoverGroup = this.game.add.group();
		this.firstHoverGroup.inputEnableChildren = true;

		//we generate the button design that'll show when hovering
		this.generateBackgroundImage(this.widthStart + 10, this.heightStart + 10, 215, 200, 'btn_louvre', this.firstHoverGroup);

		var hoverDate = generalFunctions.displayText(this.widthStart + 117, this.heightStart + 80, 'experienceFirstLinkDate', 'mediumContent1', 'center');
		this.firstHoverGroup.add(hoverDate);

		var skillsValue1 = generalFunctions.displayText(this.widthStart + 117, this.heightStart + 150, 'experienceFirstLinkSkills1', 'smallContent', 'center'),
			skillsValue2 = generalFunctions.displayText(this.widthStart + 117, this.heightStart + 170, 'experienceFirstLinkSkills2', 'smallContent', 'center');
		this.firstHoverGroup.add(skillsValue1);
		this.firstHoverGroup.add(skillsValue2);

		this.firstHoverGroup.alpha = 0;
		this.firstButtonGroup.alpha = 0;
	},

	//create the full second link of the panel
	generateSecondLink: function() {
		//we create a group to have the clickable fake sprite as a child
		this.secondButtonGroup = this.game.add.group();
		this.secondButtonGroup.inputEnableChildren = true;
		
		//we generate the background img
		this.generateBackgroundImage(this.widthStart + 10, this.heightStart + 220, 215, 65, 'btn_interactive', this.secondButtonGroup);

		//then we add the text, in its own group
		this.secondButtonTextGroup = this.game.add.group();
		var titleValue = generalFunctions.displayText(this.widthStart + 117, this.heightStart + 241, 'experienceSecondLinkTitle', 'mediumContent1', 'center'),
			youHere = generalFunctions.displayText(this.widthStart + 117, this.heightStart + 270, 'experienceSecondLinkYouHere', 'smallContent', 'center');
		this.secondButtonTextGroup.add(titleValue);
		this.secondButtonTextGroup.add(youHere);

		//and we don't forget to add the text group as a child of the button group
		this.secondButtonGroup.add(this.secondButtonTextGroup);

		//another group for what's displayed on hover
		this.secondHoverGroup = this.game.add.group();
		this.secondHoverGroup.inputEnableChildren = true;

		var hoverDate = generalFunctions.displayText(this.widthStart + 117, this.heightStart + 241, 'experienceSecondLinkDate', 'mediumContent1', 'center');
		this.secondHoverGroup.add(hoverDate);

		var skillsValue = generalFunctions.displayText(this.widthStart + 117, this.heightStart + 270, 'experienceSecondLinkSkills', 'smallContent', 'center');
		this.secondHoverGroup.add(skillsValue);

		this.secondHoverGroup.alpha = 0;
		this.secondButtonGroup.alpha = 0;
	},

	//create the full third link of the panel
	generateThirdLink: function() {
		//we create a group to have the clickable fake sprite as a child
		this.thirdButtonGroup = this.game.add.group();
		this.thirdButtonGroup.inputEnableChildren = true;
		
		//we generate the background img
		generalFunctions.generateButton(this.widthStart + 235, this.heightStart + 10, 215, 95, 0.3, this.thirdButtonGroup);
		
		//then we add the text, in its own group
		this.thirdButtonTextGroup = this.game.add.group();
		var titleValue1 = generalFunctions.displayText(this.widthStart + 342, this.heightStart + 49, 'experienceThirdLinkTitle1', 'mediumContent1', 'center'),
			titleValue2 = generalFunctions.displayText(this.widthStart + 342, this.heightStart + 72, 'experienceThirdLinkTitle2', 'mediumContent1', 'center');
		this.thirdButtonTextGroup.add(titleValue1);
		this.thirdButtonTextGroup.add(titleValue2);

		//and we don't forget to add the text group as a child of the button group
		this.thirdButtonGroup.add(this.thirdButtonTextGroup);

		//another group for what's displayed on hover
		this.thirdHoverGroup = this.game.add.group();
		this.thirdHoverGroup.inputEnableChildren = true;

		//we generate the button design that'll show when hovering
		this.generateBackgroundImage(this.widthStart + 235, this.heightStart + 10, 215, 95, 'btn_microcms', this.thirdHoverGroup);

		var hoverDate = generalFunctions.displayText(this.widthStart + 342, this.heightStart + 46, 'experienceThirdLinkDate', 'mediumContent1', 'center');
		this.thirdHoverGroup.add(hoverDate);

		var skillsValue = generalFunctions.displayText(this.widthStart + 342, this.heightStart + 75, 'experienceThirdLinkSkills', 'smallContent', 'center');
		this.thirdHoverGroup.add(skillsValue);

		this.thirdHoverGroup.alpha = 0;
		this.thirdButtonGroup.alpha = 0;
	},

	//create the full fourth link of the panel
	generateFourthLink: function() {
		//we create a group to have the clickable fake sprite as a child
		this.fourthButtonGroup = this.game.add.group();
		this.fourthButtonGroup.inputEnableChildren = true;
		
		//we generate the background img
		generalFunctions.generateButton(this.widthStart + 235, this.heightStart + 115, 215, 95, 0.3, this.fourthButtonGroup);

		//then we add the text, in its own group
		this.fourthButtonTextGroup = this.game.add.group();
		var titleValue1 = generalFunctions.displayText(this.widthStart + 342, this.heightStart + 152, 'experienceFourthLinkTitle1', 'mediumContent1', 'center'),
			titleValue2 = generalFunctions.displayText(this.widthStart + 342, this.heightStart + 175, 'experienceFourthLinkTitle2', 'mediumContent1', 'center');
		this.fourthButtonTextGroup.add(titleValue1);
		this.fourthButtonTextGroup.add(titleValue2);

		//and we don't forget to add the text group as a child of the button group
		this.fourthButtonGroup.add(this.fourthButtonTextGroup);

		//another group for what's displayed on hover
		this.fourthHoverGroup = this.game.add.group();
		this.fourthHoverGroup.inputEnableChildren = true;

		//we generate the button design that'll show when hovering
		this.generateBackgroundImage(this.widthStart + 235, this.heightStart + 115, 215, 95, 'btn_tours', this.fourthHoverGroup);

		var hoverDate = generalFunctions.displayText(this.widthStart + 342, this.heightStart + 149, 'experienceFourthLinkDate', 'mediumContent1', 'center');
		this.fourthHoverGroup.add(hoverDate);

		var skillsValue = generalFunctions.displayText(this.widthStart + 342, this.heightStart + 178, 'experienceFourthLinkSkills', 'smallContent', 'center');
		this.fourthHoverGroup.add(skillsValue);

		this.fourthHoverGroup.alpha = 0;
		this.fourthButtonGroup.alpha = 0;
	},

	//create the full fifth link of the panel
	generateFifthLink: function() {
		//we create a group
		this.fifthButtonGroup = this.game.add.group();
		this.fifthButtonGroup.inputEnableChildren = true;

		//we generate the button design
		generalFunctions.generateButton(this.widthStart + 235, this.heightStart + 220, 215, 65, 0.3, this.fifthButtonGroup);

		//then we add the text, in its own group
		var titleValue = generalFunctions.displayText(this.widthStart + 342, this.heightStart + 255, 'experienceFifthLinkTitle', 'mediumContent1', 'center');
		this.fifthButtonGroup.add(titleValue);

		this.fifthButtonGroup.alpha = 0;
	},

	//generate a background image for a link
	generateBackgroundImage: function(x, y, width, height, name, currentGroup){
		var img = this.game.add.sprite(x, y, 'textureAtlas', name);
		img.tint = 0xaaaaaa;

		var cropRect = new Phaser.Rectangle(0, 0, img.width, height * 2);

		img.crop(cropRect);

		img.scale.setTo(0.5);

		//then we add it to the group
		currentGroup.add(img);

		return img;
	},

	//generate the experience bar section
	generateExperienceBarSection: function() {
		this.levelUpText = generalFunctions.displayText(this.widthStart + 230, this.heightStart + 310, 'experienceExperienceBarTitle', 'smallContent', 'center');
		this.levelUpText.alpha = 0;

		//the dark rectangle behind the experience bar
		var blackBg = this.game.add.graphics(0, 0);
		blackBg.beginFill(0x332222, 0.9);
		blackBg.drawRect(this.widthStart + 10, this.heightStart + 322, 440, 18);
		blackBg.endFill();

		//we create a group to hold the actual bar as well as the percentage written in it
		this.experienceBarGroup = this.game.add.group();

		//the experience bar itself
		this.experienceBar = this.game.add.sprite(this.widthStart + 10, this.heightStart + 322, 'textureAtlas', 'experience-bar');
		this.experienceBar.width = 440;
		this.experienceBar.originalWidth = 440;

		this.cropExperienceBar = new Phaser.Rectangle(0, 0, 3, this.experienceBar.height);
		this.experienceBar.crop(this.cropExperienceBar);

		//the percentage text
		this.percentageText = generalFunctions.displayText(this.widthStart + 15, this.heightStart + 319, '0%', 'smallContent', 'left', false);
		this.percentageText.alpha = 0.5;

		//and we add them all to the group
		this.experienceBarGroup.add(this.experienceBar);
		this.experienceBarGroup.add(this.percentageText);
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
			waterfall.scale.setTo(2);
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

	//setup all necessary tweens
	setupTweens: function() {
		//all tweens for background color + light alpha
		this.firstTweenBlue = this.tweenTint(this.background, 0xffffff, 0x5FC6D4, 4000);
		this.firstTweenLightUp = this.game.add.tween(this.light).to( { alpha: 0.5 }, 4000, "Linear");

		this.firstTweenWhite = this.tweenTint(this.background, 0x5FC6D4, 0xffffff, 2000, 1000);
		this.firstTweenLightDown = this.game.add.tween(this.light).to( { alpha: 0.2 }, 2000, "Linear", false, 1000);

		this.tweenBlue = this.tweenTint(this.background, 0xffffff, 0x5FC6D4, 5000);
		this.tweenWhite = this.tweenTint(this.background, 0x5FC6D4, 0xffffff, 1000);

		this.tweenLightUp = this.game.add.tween(this.light).to( { alpha: 0.5 }, 5000, "Linear");
		this.tweenLightDown = this.game.add.tween(this.light).to( { alpha: 0.2 }, 1000, "Linear");

		//tweens for the experience bar
		//I have no idea why but 1025 seems to be the right width to aim at for the experience bar
		this.tweenExperienceBarGrowth = this.game.add.tween(this.cropExperienceBar).to( { width: 1025 }, 4000, "Linear");
		this.tweenExperienceBarGrowth.onComplete.add(this.onBarGrowthComplete, this);
		this.tweenExperienceBarBlink = this.game.add.tween(this.experienceBarGroup).to( { alpha: 0.8 }, 1000, "Linear", false, 0, -1, true);
	},

	//tint a sprite over time
	tweenTint: function(obj, startColor, endColor, time, delay = 0) {
		// create an object to tween with our step value at 0
		var colorBlend = {step: 0};

		// create the tween on this object and tween its step property to 100
		var colorTween = this.game.add.tween(colorBlend).to({step: 100}, time, null, false, delay);

		// run the interpolateColor function every time the tween updates, feeding it the
		// updated value of our tween each time, and set the result as our tint
		colorTween.onUpdateCallback(function() {
			obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
		});

		return colorTween;
	},

	//pop the level up text on bar growth complete
	onBarGrowthComplete: function() {
		//we actually pop the text
		this.game.add.tween(this.levelUpText).to( { alpha: 1 }, 2000, "Linear", true);

		//then we start making it blink slightly
		setTimeout(function(state) {
			state.tweenLevelUpBlink = state.game.add.tween(state.levelUpText).to( { alpha: 0.8 }, 1000, "Linear", true, 0, -1, true);
		}, 2000, this);
	},

	//setup state variables
	setupVariables: function() {
		this.started = false;
		this.modalStarted = false;
		this.currentTint = 0x5FC6D4;
	},

	//start the small cinematic depicting the jewel arrival
	startCinematic: function() {
		//we start by stopping the player
		this.player.body.maxVelocity.x = 0;
		this.player.body.maxVelocity.y = 0;
		this.player.animations.paused = true;

		//we start the first tweens
		this.firstTweenBlue.start();
		this.firstTweenLightUp.start();

		var exclamation = this.game.add.sprite(this.player.body.x, this.player.body.y - 20, 'textureAtlas', 'exclamation');
		exclamation.anchor.setTo(0.5);
		exclamation.scale.setTo(0.9);

		//separate timeOut because delayed 2 more seconds
		setTimeout(function(state) {
			//now the player can move again
			state.player.body.maxVelocity.x = 10000;
			state.player.body.maxVelocity.y = 10000;
			//and the exclamation isn't needed anymore
			exclamation.destroy();
		}, 5000, this);

		//next we start the whole diamond thingy
		this.diamondAlive();

		//and we start popping out projects
		this.popContent();
	},

	//pop the diamond and start the animations
	diamondAlive: function() {
		this.diamond.alive = true;
		//we make the diamond appear and let him rise slowly
		this.game.add.tween(this.diamond).to( { alpha: 1 }, 2000, "Linear", true);
		this.game.add.tween(this.diamond).to( { x: this.game.width *0.5 + 130, y: this.game.height - 170 }, 5000, Phaser.Easing.Quadratic.InOut, true);
	},

	//pop the content one button by one button
	popContent: function() {
		//with 1sec delay between each
		setTimeout(function(state) {
			state.game.add.tween(state.fourthButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			state.fillExperienceBar(state.fourthButtonGroup);
		}, 1000, this);

		setTimeout(function(state) {
			state.game.add.tween(state.secondButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			state.fillExperienceBar(state.secondButtonGroup);
		}, 2000, this);

		setTimeout(function(state) {
			state.game.add.tween(state.thirdButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			state.fillExperienceBar(state.thirdButtonGroup);
		}, 3000, this);

		setTimeout(function(state) {
			state.game.add.tween(state.firstButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			state.fillExperienceBar(state.firstButtonGroup);
		}, 4000, this);

		setTimeout(function(state) {
			state.game.add.tween(state.fifthButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
		}, 5000, this);

		//and the links become clickable after everything is popped
		setTimeout(function(state) {
			state.setupLinks();
		}, 7000, this);

		//we also start to make the experience bar blink a little bit
		this.tweenExperienceBarBlink.start();
	},

	//make the experience bar fill up
	fillExperienceBar: function(group) {
		//if it's the first group to pop, we start the tween
		if (group === this.fourthButtonGroup)
			this.tweenExperienceBarGrowth.start();
		//else we resume it
		else
			this.tweenExperienceBarGrowth.resume();

		//in any case, we have to pause the bar growth a bit before the next growth start
		setTimeout(function(state) {
			//if it's the last group to pop, we stop the tween instead of just pausing it
			if (group === state.firstButtonGroup)
				state.tweenExperienceBarGrowth.stop(true);
			else
				state.tweenExperienceBarGrowth.pause();
		}, 800, this);
	},
	

	//setup the clickable fake sprite on top of buttons
	setupLinks: function() {
		this.firstHoverGroup.onChildInputDown.add(function() { this.associateLink(this.firstHoverGroup); }, this);
		this.firstHoverGroup.onChildInputOver.add(function() { this.manageHover(this.firstHoverGroup, true); }, this);
		this.firstHoverGroup.onChildInputOut.add(function() { this.manageHover(this.firstHoverGroup, false); }, this);
		this.changeCursorOnHover(this.firstHoverGroup);

		this.secondHoverGroup.onChildInputOver.add(function() { this.manageHover(this.secondHoverGroup, true, true); }, this);
		this.secondHoverGroup.onChildInputOut.add(function() { this.manageHover(this.secondHoverGroup, false, true); }, this);

		this.thirdHoverGroup.onChildInputDown.add(function() { this.associateLink(this.thirdHoverGroup); }, this);
		this.thirdHoverGroup.onChildInputOver.add(function() { this.manageHover(this.thirdHoverGroup, true); }, this);
		this.thirdHoverGroup.onChildInputOut.add(function() { this.manageHover(this.thirdHoverGroup, false); }, this);
		this.changeCursorOnHover(this.thirdHoverGroup);

		this.fourthHoverGroup.onChildInputDown.add(function() { this.associateLink(this.fourthHoverGroup); }, this);
		this.fourthHoverGroup.onChildInputOver.add(function() { this.manageHover(this.fourthHoverGroup, true); }, this);
		this.fourthHoverGroup.onChildInputOut.add(function() { this.manageHover(this.fourthHoverGroup, false); }, this);
		this.changeCursorOnHover(this.fourthHoverGroup);

		this.fifthButtonGroup.onChildInputDown.add(function() { this.associateLink(this.fifthButtonGroup); }, this);
		this.changeCursorOnHover(this.fifthButtonGroup);
	},

	//actually associate a button with a link to go to
	associateLink: function(group) {
		//then we get the actual link
		switch (group) {
			case this.firstHoverGroup:
				window.open('http://louvre.fhuszti.tech/'+userLang);
				break;
			case this.thirdHoverGroup:
				window.open('http://microcms.fhuszti.tech/');
				break;
			case this.fourthHoverGroup:
				window.open('http://tours.fhuszti.tech/');
				break;
			case this.fifthButtonGroup:
				window.open('http://www.fhuszti.com/'+userLang+'/projects/');
				break;
		}
	},

	//manage hover on buttons
	//for the type, true = hover over, false = hover out
	manageHover: function(group, type, second = false) {
		//if over
		if (type) {
			this.game.add.tween(group).to( { alpha: 1 }, 300, "Linear", true);

			//if it's the interactive resume button
			if (second)
				this.game.add.tween(this.secondButtonTextGroup).to( { alpha: 0 }, 300, "Linear", true);
		}
		//if out
		else {
			this.game.add.tween(group).to( { alpha: 0 }, 300, "Linear", true);

			//if it's the interactive resume button
			if (second)
				this.game.add.tween(this.secondButtonTextGroup).to( { alpha: 1 }, 300, "Linear", true);
		}
	},

	//switch the cursor on hover of the given group's children
	changeCursorOnHover: function(group) {
		group.forEach(function(child) {
			child.input.useHandCursor = true;
		}, this, true);
	},

	//update the percentage in the experience bar section
	updatePercentage: function() {
		//we destroy the old one
		this.percentageText.destroy();
		
		//get the actual percentage
		var currentPercentage = Math.floor(this.experienceBar.width * 100 / this.experienceBar.originalWidth).toString()+'%';
		//and pop it again
		this.percentageText = generalFunctions.displayText(this.widthStart + 15, this.heightStart + 319, currentPercentage, 'smallContent', 'left', false);
		this.percentageText.alpha = 0.5;
	},

	homeShortcut: function() {
		//we gradually up the light and tint the background to their "cinematic" value, where the shortcut activates
		//but as this method is called from update(), we gotta make sure the tweens don't mess with others that may be ongoing
		if ( this.light.alpha === 0.2 && !this.tweenLightUp.isRunning && !this.tweenLightDown.isRunning && !this.tweenBlue.isRunning && !this.tweenWhite.isRunning ) {
			this.tweenLightUp = this.game.add.tween(this.light).to( { alpha: 0.5 }, 5000, "Linear");
			this.tweenLightUp.start();
			
			this.tweenBlue = this.tweenTint(this.background, 0xffffff, 0x5FC6D4, 5000);
			this.tweenBlue.start();
		}

		//if light alpha and background tint are maxed, we pop the question
		if ( !this.modalStarted && this.light.alpha == 0.5 ) {
			this.setupModalShortcut();
			this.modalStarted = true;
		}
	},

	//Setup a modal window to ask for the shortcut
	setupModalShortcut: function() {
		//we start by stopping the player
		this.player.body.maxVelocity.x = 0;
		this.player.body.maxVelocity.y = 0;
		this.player.animations.paused = true;

		//we smoothly pop the hidden modal
		this.generateModal();
	},

	//create the modal window for the shortcut
	generateModal: function() {
		this.modal = this.game.add.group();
		this.modal.inputEnableChildren = true;

		//first, a blackish overlay to prevent from clicking anywhere behind the modal
		this.modalOverlay = this.game.add.graphics(0, 0);
		this.modalOverlay.beginFill(0x000000, 0.2);
		this.modalOverlay.drawRect(0, 0, 800, 600);
		this.modalOverlay.endFill();
		this.modal.add(this.modalOverlay);

		//we double the background to artifically get alpha up
		generalFunctions.generateButton(this.game.width * 0.5 - 200, this.game.height * 0.5 - 100, 400, 200, 0.5, this.modal);
		generalFunctions.generateButton(this.game.width * 0.5 - 200, this.game.height * 0.5 - 100, 400, 200, 0.7, this.modal);

		//we generate all the text
		var title1 = generalFunctions.displayText(this.game.width * 0.5, this.game.height * 0.5 - 60, "experienceModalTitle1", 'title', 'center'),
			title2 = generalFunctions.displayText(this.game.width * 0.5, this.game.height * 0.5 - 35, "experienceModalTitle2", 'title', 'center'),
			title3 = generalFunctions.displayText(this.game.width * 0.5, this.game.height * 0.5 - 10, "experienceModalTitle3", 'title', 'center'),
			no = generalFunctions.displayText(this.game.width * 0.5 - 100, this.game.height * 0.5 + 60, "experienceModalNo", 'title', 'center'),
			yes = generalFunctions.displayText(this.game.width * 0.5 + 100, this.game.height * 0.5 + 60, "experienceModalYes", 'title', 'center');

		//on click on "Yes"
		yes.events.onInputDown.add(this.redirectToGameHub, this);
		yes.inputEnabled = true;
		yes.input.useHandCursor = true;

		no.inputEnabled = true;
		no.input.useHandCursor = true;

		//we had them all to the same group
		this.modal.add(title1);
		this.modal.add(title2);
		this.modal.add(title3);
		this.modal.add(yes);
		this.modal.add(no);

		this.modal.alpha = 0;
		this.game.add.tween(this.modal).to( { alpha: 1 }, 600, "Linear", true);
	},

	//redirect player to Hub state
	redirectToGameHub: function() {
		this.game.state.start('Hub');
	},

	//manage the first time background and light go back to normal
	firstEffectsDown: function() {
		this.firstTweenWhite.start();
		this.firstTweenLightDown.start();

		this.started = true;
	},

	//manage every other time background and light go back to normal
	manageEffectsDown: function() {
		if ( !this.tweenLightDown.isRunning && !this.firstTweenLightDown.isRunning ) {
			if ( this.tweenLightUp.isRunning ) {
				this.tweenLightUp.stop();
			}

			this.tweenLightDown = this.game.add.tween(this.light).to( { alpha: 0.2 }, 1000, "Linear");
			this.tweenLightDown.start();
		}

		if ( !this.tweenWhite.isRunning && !this.firstTweenWhite.isRunning ) {
			if ( this.tweenBlue.isRunning ) {
				this.tweenBlue.stop();
				//so it doesn't start the gradient at the max value if it wasn't there already
				this.currentTint = this.background.tint;
			}

			this.tweenWhite = this.tweenTint(this.background, this.currentTint, 0xffffff, 1000);
			this.tweenWhite.start();
		}
	},

	//manage eveyrthing that happens when the user quits the shortcut modal
	manageModalQuit: function() {
		//now the player can move again
		this.player.body.maxVelocity.x = 10000;
		this.player.body.maxVelocity.y = 10000;

		this.game.add.tween(this.modal).to( { alpha: 0 }, 300, "Linear", true);
		//timeout on the destroy to let the animation to alpha 0 play first
		setTimeout(function(state) {
			state.modal.destroy();
		}, 400, this);

		//so it doesn't start the gradient at the max value if it wasn't there already
		this.currentTint = this.background.tint;
		this.tweenWhite = this.tweenTint(this.background, this.currentTint, 0xffffff, 300);
		this.tweenWhite.start();

		this.tweenLightDown = this.game.add.tween(this.light).to( { alpha: 0.2 }, 300, "Linear");
		this.tweenLightDown.start();

		//we delay the change of the boolean to let the light alpha go down first
		setTimeout(function(state) {
			state.modalStarted = false;
		}, 1000, this);
	}
};
