var ExperienceContentManager = {

	//create the dark background for content
	generateContentBg: function(state) {
		//main background
		var blackBg = state.game.add.graphics(0, 0);
		blackBg.beginFill(0x000000, 0.5);
		blackBg.drawRect(state.widthStart, state.heightStart, 460, 345);
		blackBg.endFill();

		//background for the experience bar
		var whiteBg = state.game.add.graphics(0, 0);
		whiteBg.beginFill(0xffffff, 0.3);
		whiteBg.drawRect(state.widthStart, state.heightStart + 295, 460, 50);
		whiteBg.endFill();
	},







	//generate a background image for a link
	generateBackgroundImage: function(state, x, y, width, height, name, currentGroup){
		var img = state.game.add.sprite(x, y, 'textureAtlas', name);
		img.tint = 0xaaaaaa;

		var cropRect = new Phaser.Rectangle(0, 0, img.width, height * 2);

		img.crop(cropRect);

		img.scale.setTo(0.5);

		//then we add it to the group
		currentGroup.add(img);

		return img;
	},

	//create the full first link of the panel
	generateFirstLink: function(state) {
		//we create a group to have the clickable fake sprite as a child
		state.firstButtonGroup = state.game.add.group();
		state.firstButtonGroup.inputEnableChildren = true;
		
		//we generate the background button
		gameMethods.generateButton(state.widthStart + 10, state.heightStart + 10, 215, 200, 0.3, state.firstButtonGroup);

		//then we add the text, in its own group
		state.firstButtonTextGroup = state.game.add.group();
		var titleValue1 = gameMethods.displayText(state.widthStart + 117, state.heightStart + 99, 'experienceFirstLinkTitle1', 'mediumContent1', 'center'),
			titleValue2 = gameMethods.displayText(state.widthStart + 117, state.heightStart + 122, 'experienceFirstLinkTitle2', 'mediumContent1', 'center');
		state.firstButtonTextGroup.add(titleValue1);
		state.firstButtonTextGroup.add(titleValue2);

		//and we don't forget to add the text group as a child of the button group
		state.firstButtonGroup.add(state.firstButtonTextGroup);

		//another group for what's displayed on hover
		state.firstHoverGroup = state.game.add.group();
		state.firstHoverGroup.inputEnableChildren = true;

		//we generate the button design that'll show when hovering
		this.generateBackgroundImage(state, state.widthStart + 10, state.heightStart + 10, 215, 200, 'btn_louvre', state.firstHoverGroup);

		var hoverDate = gameMethods.displayText(state.widthStart + 117, state.heightStart + 80, 'experienceFirstLinkDate', 'mediumContent1', 'center');
		state.firstHoverGroup.add(hoverDate);

		var skillsValue1 = gameMethods.displayText(state.widthStart + 117, state.heightStart + 150, 'experienceFirstLinkSkills1', 'smallContent', 'center'),
			skillsValue2 = gameMethods.displayText(state.widthStart + 117, state.heightStart + 170, 'experienceFirstLinkSkills2', 'smallContent', 'center');
		state.firstHoverGroup.add(skillsValue1);
		state.firstHoverGroup.add(skillsValue2);

		state.firstHoverGroup.alpha = 0;
		state.firstButtonGroup.alpha = 0;
	},

	//create the full second link of the panel
	generateSecondLink: function(state) {
		//we create a group to have the clickable fake sprite as a child
		state.secondButtonGroup = state.game.add.group();
		state.secondButtonGroup.inputEnableChildren = true;
		
		//we generate the background img
		this.generateBackgroundImage(state, state.widthStart + 10, state.heightStart + 220, 215, 65, 'btn_interactive', state.secondButtonGroup);

		//then we add the text, in its own group
		state.secondButtonTextGroup = state.game.add.group();
		var titleValue = gameMethods.displayText(state.widthStart + 117, state.heightStart + 241, 'experienceSecondLinkTitle', 'mediumContent1', 'center'),
			youHere = gameMethods.displayText(state.widthStart + 117, state.heightStart + 270, 'experienceSecondLinkYouHere', 'smallContent', 'center');
		state.secondButtonTextGroup.add(titleValue);
		state.secondButtonTextGroup.add(youHere);

		//and we don't forget to add the text group as a child of the button group
		state.secondButtonGroup.add(state.secondButtonTextGroup);

		//another group for what's displayed on hover
		state.secondHoverGroup = state.game.add.group();
		state.secondHoverGroup.inputEnableChildren = true;

		var hoverDate = gameMethods.displayText(state.widthStart + 117, state.heightStart + 241, 'experienceSecondLinkDate', 'mediumContent1', 'center');
		state.secondHoverGroup.add(hoverDate);

		var skillsValue = gameMethods.displayText(state.widthStart + 117, state.heightStart + 270, 'experienceSecondLinkSkills', 'smallContent', 'center');
		state.secondHoverGroup.add(skillsValue);

		state.secondHoverGroup.alpha = 0;
		state.secondButtonGroup.alpha = 0;
	},

	//create the full third link of the panel
	generateThirdLink: function(state) {
		//we create a group to have the clickable fake sprite as a child
		state.thirdButtonGroup = state.game.add.group();
		state.thirdButtonGroup.inputEnableChildren = true;
		
		//we generate the background img
		gameMethods.generateButton(state.widthStart + 235, state.heightStart + 10, 215, 95, 0.3, state.thirdButtonGroup);
		
		//then we add the text, in its own group
		state.thirdButtonTextGroup = state.game.add.group();
		var titleValue1 = gameMethods.displayText(state.widthStart + 342, state.heightStart + 49, 'experienceThirdLinkTitle1', 'mediumContent1', 'center'),
			titleValue2 = gameMethods.displayText(state.widthStart + 342, state.heightStart + 72, 'experienceThirdLinkTitle2', 'mediumContent1', 'center');
		state.thirdButtonTextGroup.add(titleValue1);
		state.thirdButtonTextGroup.add(titleValue2);

		//and we don't forget to add the text group as a child of the button group
		state.thirdButtonGroup.add(state.thirdButtonTextGroup);

		//another group for what's displayed on hover
		state.thirdHoverGroup = state.game.add.group();
		state.thirdHoverGroup.inputEnableChildren = true;

		//we generate the button design that'll show when hovering
		this.generateBackgroundImage(state, state.widthStart + 235, state.heightStart + 10, 215, 95, 'btn_microcms', state.thirdHoverGroup);

		var hoverDate = gameMethods.displayText(state.widthStart + 342, state.heightStart + 46, 'experienceThirdLinkDate', 'mediumContent1', 'center');
		state.thirdHoverGroup.add(hoverDate);

		var skillsValue = gameMethods.displayText(state.widthStart + 342, state.heightStart + 75, 'experienceThirdLinkSkills', 'smallContent', 'center');
		state.thirdHoverGroup.add(skillsValue);

		state.thirdHoverGroup.alpha = 0;
		state.thirdButtonGroup.alpha = 0;
	},

	//create the full fourth link of the panel
	generateFourthLink: function(state) {
		//we create a group to have the clickable fake sprite as a child
		state.fourthButtonGroup = state.game.add.group();
		state.fourthButtonGroup.inputEnableChildren = true;
		
		//we generate the background img
		gameMethods.generateButton(state.widthStart + 235, state.heightStart + 115, 215, 95, 0.3, state.fourthButtonGroup);

		//then we add the text, in its own group
		state.fourthButtonTextGroup = state.game.add.group();
		var titleValue1 = gameMethods.displayText(state.widthStart + 342, state.heightStart + 152, 'experienceFourthLinkTitle1', 'mediumContent1', 'center'),
			titleValue2 = gameMethods.displayText(state.widthStart + 342, state.heightStart + 175, 'experienceFourthLinkTitle2', 'mediumContent1', 'center');
		state.fourthButtonTextGroup.add(titleValue1);
		state.fourthButtonTextGroup.add(titleValue2);

		//and we don't forget to add the text group as a child of the button group
		state.fourthButtonGroup.add(state.fourthButtonTextGroup);

		//another group for what's displayed on hover
		state.fourthHoverGroup = state.game.add.group();
		state.fourthHoverGroup.inputEnableChildren = true;

		//we generate the button design that'll show when hovering
		this.generateBackgroundImage(state, state.widthStart + 235, state.heightStart + 115, 215, 95, 'btn_tours', state.fourthHoverGroup);

		var hoverDate = gameMethods.displayText(state.widthStart + 342, state.heightStart + 149, 'experienceFourthLinkDate', 'mediumContent1', 'center');
		state.fourthHoverGroup.add(hoverDate);

		var skillsValue = gameMethods.displayText(state.widthStart + 342, state.heightStart + 178, 'experienceFourthLinkSkills', 'smallContent', 'center');
		state.fourthHoverGroup.add(skillsValue);

		state.fourthHoverGroup.alpha = 0;
		state.fourthButtonGroup.alpha = 0;
	},

	//create the full fifth link of the panel
	generateFifthLink: function(state) {
		//we create a group
		state.fifthButtonGroup = state.game.add.group();
		state.fifthButtonGroup.inputEnableChildren = true;

		//we generate the button design
		gameMethods.generateButton(state.widthStart + 235, state.heightStart + 220, 215, 65, 0.3, state.fifthButtonGroup);

		//then we add the text, in its own group
		var titleValue = gameMethods.displayText(state.widthStart + 342, state.heightStart + 255, 'experienceFifthLinkTitle', 'mediumContent1', 'center');
		state.fifthButtonGroup.add(titleValue);

		state.fifthButtonGroup.alpha = 0;
	},

	//create the content
	generateContent: function(state) {
		//Adding the title of the state at the right place
		gameMethods.displayText(state.game.width *0.5 + 130, 40, 'experience', 'title', 'center');

		//and all the links
		this.generateFirstLink(state);
		this.generateSecondLink(state);
		this.generateThirdLink(state);
		this.generateFourthLink(state);
		this.generateFifthLink(state);
	},







	//generate the experience bar section
	generateExperienceBarSection: function(state) {
		state.levelUpText = gameMethods.displayText(state.widthStart + 230, state.heightStart + 310, 'experienceExperienceBarTitle', 'smallContent', 'center');
		state.levelUpText.alpha = 0;

		//the dark rectangle behind the experience bar
		var blackBg = state.game.add.graphics(0, 0);
		blackBg.beginFill(0x332222, 0.9);
		blackBg.drawRect(state.widthStart + 10, state.heightStart + 322, 440, 18);
		blackBg.endFill();

		//we create a group to hold the actual bar as well as the percentage written in it
		state.experienceBarGroup = state.game.add.group();

		//the experience bar itself
		state.experienceBar = state.game.add.sprite(state.widthStart + 10, state.heightStart + 322, 'textureAtlas', 'experience-bar');
		state.experienceBar.width = 440;
		state.experienceBar.originalWidth = 440;

		state.cropExperienceBar = new Phaser.Rectangle(0, 0, 3, state.experienceBar.height);
		state.experienceBar.crop(state.cropExperienceBar);

		//the percentage text
		state.percentageText = gameMethods.displayText(state.widthStart + 15, state.heightStart + 319, '0%', 'smallContent', 'left', false);
		state.percentageText.alpha = 0.5;

		//and we add them all to the group
		state.experienceBarGroup.add(state.experienceBar);
		state.experienceBarGroup.add(state.percentageText);
	}
};
