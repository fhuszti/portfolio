var ExperienceUpdateContentManager = {

	//pop the diamond and start the animations
	diamondAlive: function() {
		gameVariables.currentState.diamond.alive = true;
		//we make the diamond appear and let him rise slowly
		gameVariables.currentState.game.add.tween(gameVariables.currentState.diamond).to( { alpha: 1 }, 2000, "Linear", true);
		gameVariables.currentState.game.add.tween(gameVariables.currentState.diamond).to( { x: gameVariables.currentState.game.width *0.5 + 130, y: gameVariables.currentState.game.height - 170 }, 5000, Phaser.Easing.Quadratic.InOut, true);
	},

	//make the experience bar fill up
	fillExperienceBar: function(group) {
		//if it's the first group to pop, we start the tween
		if (group === gameVariables.currentState.fourthButtonGroup)
			gameVariables.currentState.tweenExperienceBarGrowth.start();
		//else we resume it
		else
			gameVariables.currentState.tweenExperienceBarGrowth.resume();

		//in any case, we have to pause the bar growth a bit before the next growth start
		setTimeout(function(state) {
			//if it's the last group to pop, we stop the tween instead of just pausing it
			if (group === state.firstButtonGroup)
				state.tweenExperienceBarGrowth.stop(true);
			else
				state.tweenExperienceBarGrowth.pause();
		}, 800, gameVariables.currentState);
	},

	//actually associate a button with a link to go to
	associateLink: function(group) {
		//then we get the actual link
		switch (group) {
			case gameVariables.currentState.firstHoverGroup:
				window.open('http://louvre.fhuszti.tech/'+userLang);
				break;
			case gameVariables.currentState.thirdHoverGroup:
				window.open('http://microcms.fhuszti.tech/');
				break;
			case gameVariables.currentState.fourthHoverGroup:
				window.open('http://tours.fhuszti.tech/');
				break;
			case gameVariables.currentState.fifthButtonGroup:
				window.open('http://www.fhuszti.com/'+userLang+'/projects/');
				break;
		}
	},

	//manage hover on buttons
	//for the type, true = hover over, false = hover out
	manageHover: function(group, type, second = false) {
		//if over
		if (type) {
			gameVariables.currentState.game.add.tween(group).to( { alpha: 1 }, 300, "Linear", true);

			//if it's the interactive resume button
			if (second)
				gameVariables.currentState.game.add.tween(gameVariables.currentState.secondButtonTextGroup).to( { alpha: 0 }, 300, "Linear", true);
		}
		//if out
		else {
			gameVariables.currentState.game.add.tween(group).to( { alpha: 0 }, 300, "Linear", true);

			//if it's the interactive resume button
			if (second)
				gameVariables.currentState.game.add.tween(gameVariables.currentState.secondButtonTextGroup).to( { alpha: 1 }, 300, "Linear", true);
		}
	},

	//switch the cursor on hover of the given group's children
	changeCursorOnHover: function(group) {
		group.forEach(function(child) {
			child.input.useHandCursor = true;
		}, gameVariables.currentState, true);
	},
	
	//setup the clickable fake sprite on top of buttons
	setupLinks: function(manager) {
		gameVariables.currentState.firstHoverGroup.onChildInputDown.add(function() { manager.associateLink(gameVariables.currentState.firstHoverGroup); }, gameVariables.currentState);
		gameVariables.currentState.firstHoverGroup.onChildInputOver.add(function() { manager.manageHover(gameVariables.currentState.firstHoverGroup, true); }, gameVariables.currentState);
		gameVariables.currentState.firstHoverGroup.onChildInputOut.add(function() { manager.manageHover(gameVariables.currentState.firstHoverGroup, false); }, gameVariables.currentState);
		manager.changeCursorOnHover(gameVariables.currentState.firstHoverGroup);

		gameVariables.currentState.secondHoverGroup.onChildInputOver.add(function() { manager.manageHover(gameVariables.currentState.secondHoverGroup, true, true); }, gameVariables.currentState);
		gameVariables.currentState.secondHoverGroup.onChildInputOut.add(function() { manager.manageHover(gameVariables.currentState.secondHoverGroup, false, true); }, gameVariables.currentState);

		gameVariables.currentState.thirdHoverGroup.onChildInputDown.add(function() { manager.associateLink(gameVariables.currentState.thirdHoverGroup); }, gameVariables.currentState);
		gameVariables.currentState.thirdHoverGroup.onChildInputOver.add(function() { manager.manageHover(gameVariables.currentState.thirdHoverGroup, true); }, gameVariables.currentState);
		gameVariables.currentState.thirdHoverGroup.onChildInputOut.add(function() { manager.manageHover(gameVariables.currentState.thirdHoverGroup, false); }, gameVariables.currentState);
		manager.changeCursorOnHover(gameVariables.currentState.thirdHoverGroup);

		gameVariables.currentState.fourthHoverGroup.onChildInputDown.add(function() { manager.associateLink(gameVariables.currentState.fourthHoverGroup); }, gameVariables.currentState);
		gameVariables.currentState.fourthHoverGroup.onChildInputOver.add(function() { manager.manageHover(gameVariables.currentState.fourthHoverGroup, true); }, gameVariables.currentState);
		gameVariables.currentState.fourthHoverGroup.onChildInputOut.add(function() { manager.manageHover(gameVariables.currentState.fourthHoverGroup, false); }, gameVariables.currentState);
		manager.changeCursorOnHover(gameVariables.currentState.fourthHoverGroup);

		gameVariables.currentState.fifthButtonGroup.onChildInputDown.add(function() { manager.associateLink(gameVariables.currentState.fifthButtonGroup); }, gameVariables.currentState);
		manager.changeCursorOnHover(gameVariables.currentState.fifthButtonGroup);
	},

	//pop the content one button by one button
	popContent: function() {
		//with 1sec delay between each
		setTimeout(function(manager) {
			gameVariables.currentState.game.add.tween(gameVariables.currentState.fourthButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			manager.fillExperienceBar(gameVariables.currentState.fourthButtonGroup);
		}, 1000, this);

		setTimeout(function(manager) {
			gameVariables.currentState.game.add.tween(gameVariables.currentState.secondButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			manager.fillExperienceBar(gameVariables.currentState.secondButtonGroup);
		}, 2000, this);

		setTimeout(function(manager) {
			gameVariables.currentState.game.add.tween(gameVariables.currentState.thirdButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			manager.fillExperienceBar(gameVariables.currentState.thirdButtonGroup);
		}, 3000, this);

		setTimeout(function(manager) {
			gameVariables.currentState.game.add.tween(gameVariables.currentState.firstButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			manager.fillExperienceBar(gameVariables.currentState.firstButtonGroup);
		}, 4000, this);

		setTimeout(function() {
			gameVariables.currentState.game.add.tween(gameVariables.currentState.fifthButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
		}, 5000, this);

		//and the links become clickable after everything is popped
		setTimeout(function(manager) {
			manager.setupLinks(manager);
		}, 7000, this);

		//we also start to make the experience bar blink a little bit
		gameVariables.currentState.tweenExperienceBarBlink.start();
	},

	//start the small cinematic depicting the jewel arrival
	startCinematic: function() {
		//we start by stopping the player
		gameVariables.currentState.player.body.maxVelocity.x = 0;
		gameVariables.currentState.player.body.maxVelocity.y = 0;
		gameVariables.currentState.player.animations.paused = true;

		//we start the first tweens
		gameVariables.currentState.firstTweenBlue.start();
		gameVariables.currentState.firstTweenLightUp.start();

		var exclamation = gameVariables.currentState.game.add.sprite(gameVariables.currentState.player.body.x, gameVariables.currentState.player.body.y - 20, 'textureAtlas', 'exclamation');
		exclamation.anchor.setTo(0.5);
		exclamation.scale.setTo(0.9);

		//separate timeOut because delayed 2 more seconds
		setTimeout(function(state) {
			//now the player can move again
			state.player.body.maxVelocity.x = 10000;
			state.player.body.maxVelocity.y = 10000;
			//and the exclamation isn't needed anymore
			exclamation.destroy();
		}, 5000, gameVariables.currentState);

		//next we start the whole diamond thingy
		this.diamondAlive();

		//and we start popping out projects
		this.popContent();
	},







	//update the percentage in the experience bar section
	updatePercentage: function() {
		//we destroy the old one
		gameVariables.currentState.percentageText.destroy();
		
		//get the actual percentage
		var currentPercentage = Math.floor(gameVariables.currentState.experienceBar.width * 100 / gameVariables.currentState.experienceBar.originalWidth).toString()+'%';
		//and pop it again
		gameVariables.currentState.percentageText = gameMethods.displayText(gameVariables.currentState.widthStart + 15, gameVariables.currentState.heightStart + 319, currentPercentage, 'smallContent', 'left', false);
		gameVariables.currentState.percentageText.alpha = 0.5;
	},







	//redirect player to Hub state
	redirectToGameHub: function() {
		this.game.state.start('Hub');
	},

	//create the modal window for the shortcut
	generateModal: function() {
		gameVariables.currentState.modal = gameVariables.currentState.game.add.group();
		gameVariables.currentState.modal.inputEnableChildren = true;

		//first, a blackish overlay to prevent from clicking anywhere behind the modal
		gameVariables.currentState.modalOverlay = gameVariables.currentState.game.add.graphics(0, 0);
		gameVariables.currentState.modalOverlay.beginFill(0x000000, 0.2);
		gameVariables.currentState.modalOverlay.drawRect(0, 0, 800, 600);
		gameVariables.currentState.modalOverlay.endFill();
		gameVariables.currentState.modal.add(gameVariables.currentState.modalOverlay);

		//we double the background to artifically get alpha up
		gameMethods.generateButton(gameVariables.currentState.game.width * 0.5 - 200, gameVariables.currentState.game.height * 0.5 - 100, 400, 200, 0.5, gameVariables.currentState.modal);
		gameMethods.generateButton(gameVariables.currentState.game.width * 0.5 - 200, gameVariables.currentState.game.height * 0.5 - 100, 400, 200, 0.7, gameVariables.currentState.modal);

		//we generate all the text
		var title1 = gameMethods.displayText(gameVariables.currentState.game.width * 0.5, gameVariables.currentState.game.height * 0.5 - 60, "experienceModalTitle1", 'title', 'center'),
			title2 = gameMethods.displayText(gameVariables.currentState.game.width * 0.5, gameVariables.currentState.game.height * 0.5 - 35, "experienceModalTitle2", 'title', 'center'),
			title3 = gameMethods.displayText(gameVariables.currentState.game.width * 0.5, gameVariables.currentState.game.height * 0.5 - 10, "experienceModalTitle3", 'title', 'center'),
			no = gameMethods.displayText(gameVariables.currentState.game.width * 0.5 - 100, gameVariables.currentState.game.height * 0.5 + 60, "experienceModalNo", 'title', 'center'),
			yes = gameMethods.displayText(gameVariables.currentState.game.width * 0.5 + 100, gameVariables.currentState.game.height * 0.5 + 60, "experienceModalYes", 'title', 'center');

		//on click on "Yes"
		yes.events.onInputDown.add(this.redirectToGameHub, gameVariables.currentState);
		yes.inputEnabled = true;
		yes.input.useHandCursor = true;

		no.inputEnabled = true;
		no.input.useHandCursor = true;

		//we had them all to the same group
		gameVariables.currentState.modal.add(title1);
		gameVariables.currentState.modal.add(title2);
		gameVariables.currentState.modal.add(title3);
		gameVariables.currentState.modal.add(yes);
		gameVariables.currentState.modal.add(no);

		gameVariables.currentState.modal.alpha = 0;
		gameVariables.currentState.game.add.tween(gameVariables.currentState.modal).to( { alpha: 1 }, 600, "Linear", true);
	},

	//Setup a modal window to ask for the shortcut
	setupModalShortcut: function() {
		//we start by stopping the player
		gameVariables.currentState.player.body.maxVelocity.x = 0;
		gameVariables.currentState.player.body.maxVelocity.y = 0;
		gameVariables.currentState.player.animations.paused = true;

		//we smoothly pop the hidden modal
		this.generateModal();
	},

	//manage the shortcut-to-home visual activation 
	homeShortcut: function() {
		//we gradually up the light and tint the background to their "cinematic" value, where the shortcut activates
		//but as this method is called from update(), we gotta make sure the tweens don't mess with others that may be ongoing
		if ( gameVariables.currentState.light.alpha === 0.2 && !gameVariables.currentState.tweenLightUp.isRunning && !gameVariables.currentState.tweenLightDown.isRunning && !gameVariables.currentState.tweenBlue.isRunning && !gameVariables.currentState.tweenWhite.isRunning ) {
			gameVariables.currentState.tweenLightUp = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.5 }, 5000, "Linear");
			gameVariables.currentState.tweenLightUp.start();
			
			gameVariables.currentState.tweenBlue = ExperienceConfigManager.tweenTint(gameVariables.currentState.background, 0xffffff, 0x5FC6D4, 5000);
			gameVariables.currentState.tweenBlue.start();
		}

		//if light alpha and background tint are maxed, we pop the question
		if ( !gameVariables.currentState.modalStarted && gameVariables.currentState.light.alpha == 0.5 ) {
			this.setupModalShortcut();
			gameVariables.currentState.modalStarted = true;
		}
	},







	//manage the first time background and light go back to normal
	firstEffectsDown: function() {
		gameVariables.currentState.firstTweenWhite.start();
		gameVariables.currentState.firstTweenLightDown.start();

		gameVariables.currentState.started = true;
	},







	//manage every other time background and light go back to normal
	manageEffectsDown: function() {
		if ( !gameVariables.currentState.tweenLightDown.isRunning && !gameVariables.currentState.firstTweenLightDown.isRunning ) {
			if ( gameVariables.currentState.tweenLightUp.isRunning ) {
				gameVariables.currentState.tweenLightUp.stop();
			}

			gameVariables.currentState.tweenLightDown = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.2 }, 1000, "Linear");
			gameVariables.currentState.tweenLightDown.start();
		}

		if ( !gameVariables.currentState.tweenWhite.isRunning && !gameVariables.currentState.firstTweenWhite.isRunning ) {
			if ( gameVariables.currentState.tweenBlue.isRunning ) {
				gameVariables.currentState.tweenBlue.stop();
				//so it doesn't start the gradient at the max value if it wasn't there already
				gameVariables.currentState.currentTint = gameVariables.currentState.background.tint;
			}

			gameVariables.currentState.tweenWhite = ExperienceConfigManager.tweenTint(gameVariables.currentState.background, gameVariables.currentState.currentTint, 0xffffff, 1000);
			gameVariables.currentState.tweenWhite.start();
		}
	},







	//manage eveyrthing that happens when the user quits the shortcut modal
	manageModalQuit: function() {
		//now the player can move again
		gameVariables.currentState.player.body.maxVelocity.x = 10000;
		gameVariables.currentState.player.body.maxVelocity.y = 10000;

		gameVariables.currentState.game.add.tween(gameVariables.currentState.modal).to( { alpha: 0 }, 300, "Linear", true);
		//timeout on the destroy to let the animation to alpha 0 play first
		setTimeout(function() {
			gameVariables.currentState.modal.destroy();
		}, 400, this);

		//so it doesn't start the gradient at the max value if it wasn't there already
		gameVariables.currentState.currentTint = gameVariables.currentState.background.tint;
		gameVariables.currentState.tweenWhite = ExperienceConfigManager.tweenTint(gameVariables.currentState.background, gameVariables.currentState.currentTint, 0xffffff, 300);
		gameVariables.currentState.tweenWhite.start();

		gameVariables.currentState.tweenLightDown = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.2 }, 300, "Linear");
		gameVariables.currentState.tweenLightDown.start();

		//we delay the change of the boolean to let the light alpha go down first
		setTimeout(function() {
			gameVariables.currentState.modalStarted = false;
		}, 1000, this);
	}
};
