var ExperienceContentManager = {

	//create the dark background for content
	generateContentBg: function() {
		//main background
		var blackBg = gameVariables.currentState.game.add.graphics(0, 0);
		blackBg.beginFill(0x000000, 0.5);
		blackBg.drawRect(gameVariables.currentState.widthStart, gameVariables.currentState.heightStart, 460, 345);
		blackBg.endFill();

		//background for the experience bar
		var whiteBg = gameVariables.currentState.game.add.graphics(0, 0);
		whiteBg.beginFill(0xffffff, 0.3);
		whiteBg.drawRect(gameVariables.currentState.widthStart, gameVariables.currentState.heightStart + 295, 460, 50);
		whiteBg.endFill();
	},







	//generate a background image for a link
	generateBackgroundImage: function(x, y, width, height, name, currentGroup){
		var img = gameVariables.currentState.game.add.sprite(x, y, 'textureAtlas', name);
		img.tint = 0xaaaaaa;

		var cropRect = new Phaser.Rectangle(0, 0, img.width, height * 2);

		img.crop(cropRect);

		img.scale.setTo(0.5);

		//then we add it to the group
		currentGroup.add(img);

		return img;
	},

	//create the full first link of the panel
	generateFirstLink: function() {
		//we create a group to have the clickable fake sprite as a child
		gameVariables.currentState.firstButtonGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.firstButtonGroup.inputEnableChildren = true;
		
		//we generate the background button
		gameMethods.generateButton(gameVariables.currentState.widthStart + 10, gameVariables.currentState.heightStart + 10, 215, 200, 0.3, gameVariables.currentState.firstButtonGroup);

		//then we add the text, in its own group
		gameVariables.currentState.firstButtonTextGroup = gameVariables.currentState.game.add.group();
		var titleValue1 = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 99, 'experienceFirstLinkTitle1', 'mediumContent1', 'center'),
			titleValue2 = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 122, 'experienceFirstLinkTitle2', 'mediumContent1', 'center');
		gameVariables.currentState.firstButtonTextGroup.add(titleValue1);
		gameVariables.currentState.firstButtonTextGroup.add(titleValue2);

		//and we don't forget to add the text group as a child of the button group
		gameVariables.currentState.firstButtonGroup.add(gameVariables.currentState.firstButtonTextGroup);

		//another group for what's displayed on hover
		gameVariables.currentState.firstHoverGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.firstHoverGroup.inputEnableChildren = true;

		//we generate the button design that'll show when hovering
		this.generateBackgroundImage(gameVariables.currentState.widthStart + 10, gameVariables.currentState.heightStart + 10, 215, 200, 'btn_louvre', gameVariables.currentState.firstHoverGroup);

		var hoverDate = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 80, 'experienceFirstLinkDate', 'mediumContent1', 'center');
		gameVariables.currentState.firstHoverGroup.add(hoverDate);

		var skillsValue1 = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 150, 'experienceFirstLinkSkills1', 'smallContent', 'center'),
			skillsValue2 = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 170, 'experienceFirstLinkSkills2', 'smallContent', 'center');
		gameVariables.currentState.firstHoverGroup.add(skillsValue1);
		gameVariables.currentState.firstHoverGroup.add(skillsValue2);

		gameVariables.currentState.firstHoverGroup.alpha = 0;
		gameVariables.currentState.firstButtonGroup.alpha = 0;
	},

	//create the full second link of the panel
	generateSecondLink: function() {
		//we create a group to have the clickable fake sprite as a child
		gameVariables.currentState.secondButtonGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.secondButtonGroup.inputEnableChildren = true;
		
		//we generate the background img
		this.generateBackgroundImage(gameVariables.currentState.widthStart + 10, gameVariables.currentState.heightStart + 220, 215, 65, 'btn_interactive', gameVariables.currentState.secondButtonGroup);

		//then we add the text, in its own group
		gameVariables.currentState.secondButtonTextGroup = gameVariables.currentState.game.add.group();
		var titleValue = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 241, 'experienceSecondLinkTitle', 'mediumContent1', 'center'),
			youHere = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 270, 'experienceSecondLinkYouHere', 'smallContent', 'center');
		gameVariables.currentState.secondButtonTextGroup.add(titleValue);
		gameVariables.currentState.secondButtonTextGroup.add(youHere);

		//and we don't forget to add the text group as a child of the button group
		gameVariables.currentState.secondButtonGroup.add(gameVariables.currentState.secondButtonTextGroup);

		//another group for what's displayed on hover
		gameVariables.currentState.secondHoverGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.secondHoverGroup.inputEnableChildren = true;

		var hoverDate = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 241, 'experienceSecondLinkDate', 'mediumContent1', 'center');
		gameVariables.currentState.secondHoverGroup.add(hoverDate);

		var skillsValue = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 270, 'experienceSecondLinkSkills', 'smallContent', 'center');
		gameVariables.currentState.secondHoverGroup.add(skillsValue);

		gameVariables.currentState.secondHoverGroup.alpha = 0;
		gameVariables.currentState.secondButtonGroup.alpha = 0;
	},

	//create the full third link of the panel
	generateThirdLink: function() {
		//we create a group to have the clickable fake sprite as a child
		gameVariables.currentState.thirdButtonGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.thirdButtonGroup.inputEnableChildren = true;
		
		//we generate the background img
		gameMethods.generateButton(gameVariables.currentState.widthStart + 235, gameVariables.currentState.heightStart + 10, 215, 95, 0.3, gameVariables.currentState.thirdButtonGroup);
		
		//then we add the text, in its own group
		gameVariables.currentState.thirdButtonTextGroup = gameVariables.currentState.game.add.group();
		var titleValue1 = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 49, 'experienceThirdLinkTitle1', 'mediumContent1', 'center'),
			titleValue2 = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 72, 'experienceThirdLinkTitle2', 'mediumContent1', 'center');
		gameVariables.currentState.thirdButtonTextGroup.add(titleValue1);
		gameVariables.currentState.thirdButtonTextGroup.add(titleValue2);

		//and we don't forget to add the text group as a child of the button group
		gameVariables.currentState.thirdButtonGroup.add(gameVariables.currentState.thirdButtonTextGroup);

		//another group for what's displayed on hover
		gameVariables.currentState.thirdHoverGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.thirdHoverGroup.inputEnableChildren = true;

		//we generate the button design that'll show when hovering
		this.generateBackgroundImage(gameVariables.currentState.widthStart + 235, gameVariables.currentState.heightStart + 10, 215, 95, 'btn_microcms', gameVariables.currentState.thirdHoverGroup);

		var hoverDate = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 46, 'experienceThirdLinkDate', 'mediumContent1', 'center');
		gameVariables.currentState.thirdHoverGroup.add(hoverDate);

		var skillsValue = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 75, 'experienceThirdLinkSkills', 'smallContent', 'center');
		gameVariables.currentState.thirdHoverGroup.add(skillsValue);

		gameVariables.currentState.thirdHoverGroup.alpha = 0;
		gameVariables.currentState.thirdButtonGroup.alpha = 0;
	},

	//create the full fourth link of the panel
	generateFourthLink: function() {
		//we create a group to have the clickable fake sprite as a child
		gameVariables.currentState.fourthButtonGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.fourthButtonGroup.inputEnableChildren = true;
		
		//we generate the background img
		gameMethods.generateButton(gameVariables.currentState.widthStart + 235, gameVariables.currentState.heightStart + 115, 215, 95, 0.3, gameVariables.currentState.fourthButtonGroup);

		//then we add the text, in its own group
		gameVariables.currentState.fourthButtonTextGroup = gameVariables.currentState.game.add.group();
		var titleValue1 = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 152, 'experienceFourthLinkTitle1', 'mediumContent1', 'center'),
			titleValue2 = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 175, 'experienceFourthLinkTitle2', 'mediumContent1', 'center');
		gameVariables.currentState.fourthButtonTextGroup.add(titleValue1);
		gameVariables.currentState.fourthButtonTextGroup.add(titleValue2);

		//and we don't forget to add the text group as a child of the button group
		gameVariables.currentState.fourthButtonGroup.add(gameVariables.currentState.fourthButtonTextGroup);

		//another group for what's displayed on hover
		gameVariables.currentState.fourthHoverGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.fourthHoverGroup.inputEnableChildren = true;

		//we generate the button design that'll show when hovering
		this.generateBackgroundImage(gameVariables.currentState.widthStart + 235, gameVariables.currentState.heightStart + 115, 215, 95, 'btn_tours', gameVariables.currentState.fourthHoverGroup);

		var hoverDate = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 149, 'experienceFourthLinkDate', 'mediumContent1', 'center');
		gameVariables.currentState.fourthHoverGroup.add(hoverDate);

		var skillsValue = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 178, 'experienceFourthLinkSkills', 'smallContent', 'center');
		gameVariables.currentState.fourthHoverGroup.add(skillsValue);

		gameVariables.currentState.fourthHoverGroup.alpha = 0;
		gameVariables.currentState.fourthButtonGroup.alpha = 0;
	},

	//create the full fifth link of the panel
	generateFifthLink: function() {
		//we create a group
		gameVariables.currentState.fifthButtonGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.fifthButtonGroup.inputEnableChildren = true;

		//we generate the button design
		gameMethods.generateButton(gameVariables.currentState.widthStart + 235, gameVariables.currentState.heightStart + 220, 215, 65, 0.3, gameVariables.currentState.fifthButtonGroup);

		//then we add the text, in its own group
		var titleValue = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 255, 'experienceFifthLinkTitle', 'mediumContent1', 'center');
		gameVariables.currentState.fifthButtonGroup.add(titleValue);

		gameVariables.currentState.fifthButtonGroup.alpha = 0;
	},

	//create the content
	generateContent: function() {
		//Adding the title of the state at the right place
		gameMethods.displayText(gameVariables.currentState.game.width *0.5 + 130, 40, 'experience', 'title', 'center');

		//and all the links
		this.generateFirstLink();
		this.generateSecondLink();
		this.generateThirdLink();
		this.generateFourthLink();
		this.generateFifthLink();
	},







	//generate the experience bar section
	generateExperienceBarSection: function() {
		gameVariables.currentState.levelUpText = gameMethods.displayText(gameVariables.currentState.widthStart + 230, gameVariables.currentState.heightStart + 310, 'experienceExperienceBarTitle', 'smallContent', 'center');
		gameVariables.currentState.levelUpText.alpha = 0;

		//the dark rectangle behind the experience bar
		var blackBg = gameVariables.currentState.game.add.graphics(0, 0);
		blackBg.beginFill(0x332222, 0.9);
		blackBg.drawRect(gameVariables.currentState.widthStart + 10, gameVariables.currentState.heightStart + 322, 440, 18);
		blackBg.endFill();

		//we create a group to hold the actual bar as well as the percentage written in it
		gameVariables.currentState.experienceBarGroup = gameVariables.currentState.game.add.group();

		//the experience bar itself
		gameVariables.currentState.experienceBar = gameVariables.currentState.game.add.sprite(gameVariables.currentState.widthStart + 10, gameVariables.currentState.heightStart + 322, 'textureAtlas', 'experience-bar');
		gameVariables.currentState.experienceBar.width = 440;
		gameVariables.currentState.experienceBar.originalWidth = 440;

		gameVariables.currentState.cropExperienceBar = new Phaser.Rectangle(0, 0, 3, gameVariables.currentState.experienceBar.height);
		gameVariables.currentState.experienceBar.crop(gameVariables.currentState.cropExperienceBar);

		//the percentage text
		gameVariables.currentState.percentageText = gameMethods.displayText(gameVariables.currentState.widthStart + 15, gameVariables.currentState.heightStart + 319, '0%', 'smallContent', 'left', false);
		gameVariables.currentState.percentageText.alpha = 0.5;

		//and we add them all to the group
		gameVariables.currentState.experienceBarGroup.add(gameVariables.currentState.experienceBar);
		gameVariables.currentState.experienceBarGroup.add(gameVariables.currentState.percentageText);
	}
};
