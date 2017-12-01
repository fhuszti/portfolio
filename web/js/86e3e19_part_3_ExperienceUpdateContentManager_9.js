var ExperienceUpdateContentManager = {

	//pop the diamond and start the animations
	diamondAlive: function(currentState) {
		currentState.diamond.alive = true;
		//we make the diamond appear and let him rise slowly
		currentState.game.add.tween(currentState.diamond).to( { alpha: 1 }, 2000, "Linear", true);
		currentState.game.add.tween(currentState.diamond).to( { x: currentState.game.width *0.5 + 130, y: currentState.game.height - 170 }, 5000, Phaser.Easing.Quadratic.InOut, true);
	},

	//make the experience bar fill up
	fillExperienceBar: function(currentState, group) {
		//if it's the first group to pop, we start the tween
		if (group === currentState.fourthButtonGroup)
			currentState.tweenExperienceBarGrowth.start();
		//else we resume it
		else
			currentState.tweenExperienceBarGrowth.resume();

		//in any case, we have to pause the bar growth a bit before the next growth start
		setTimeout(function(state) {
			//if it's the last group to pop, we stop the tween instead of just pausing it
			if (group === state.firstButtonGroup)
				state.tweenExperienceBarGrowth.stop(true);
			else
				state.tweenExperienceBarGrowth.pause();
		}, 800, currentState);
	},

	//actually associate a button with a link to go to
	associateLink: function(currentState, group) {
		//then we get the actual link
		switch (group) {
			case currentState.firstHoverGroup:
				window.open('http://louvre.fhuszti.tech/'+userLang);
				break;
			case currentState.thirdHoverGroup:
				window.open('http://microcms.fhuszti.tech/');
				break;
			case currentState.fourthHoverGroup:
				window.open('http://tours.fhuszti.tech/');
				break;
			case currentState.fifthButtonGroup:
				window.open('http://www.fhuszti.com/'+userLang+'/projects/');
				break;
		}
	},

	//manage hover on buttons
	//for the type, true = hover over, false = hover out
	manageHover: function(currentState, group, type, second = false) {
		//if over
		if (type) {
			currentState.game.add.tween(group).to( { alpha: 1 }, 300, "Linear", true);

			//if it's the interactive resume button
			if (second)
				currentState.game.add.tween(currentState.secondButtonTextGroup).to( { alpha: 0 }, 300, "Linear", true);
		}
		//if out
		else {
			currentState.game.add.tween(group).to( { alpha: 0 }, 300, "Linear", true);

			//if it's the interactive resume button
			if (second)
				currentState.game.add.tween(currentState.secondButtonTextGroup).to( { alpha: 1 }, 300, "Linear", true);
		}
	},

	//switch the cursor on hover of the given group's children
	changeCursorOnHover: function(currentState, group) {
		group.forEach(function(child) {
			child.input.useHandCursor = true;
		}, currentState, true);
	},
	
	//setup the clickable fake sprite on top of buttons
	setupLinks: function(manager, currentState) {
		currentState.firstHoverGroup.onChildInputDown.add(function() { manager.associateLink(currentState, currentState.firstHoverGroup); }, currentState);
		currentState.firstHoverGroup.onChildInputOver.add(function() { manager.manageHover(currentState, currentState.firstHoverGroup, true); }, currentState);
		currentState.firstHoverGroup.onChildInputOut.add(function() { manager.manageHover(currentState, currentState.firstHoverGroup, false); }, currentState);
		manager.changeCursorOnHover(currentState, currentState.firstHoverGroup);

		currentState.secondHoverGroup.onChildInputOver.add(function() { manager.manageHover(currentState, currentState.secondHoverGroup, true, true); }, currentState);
		currentState.secondHoverGroup.onChildInputOut.add(function() { manager.manageHover(currentState, currentState.secondHoverGroup, false, true); }, currentState);

		currentState.thirdHoverGroup.onChildInputDown.add(function() { manager.associateLink(currentState, currentState.thirdHoverGroup); }, currentState);
		currentState.thirdHoverGroup.onChildInputOver.add(function() { manager.manageHover(currentState, currentState.thirdHoverGroup, true); }, currentState);
		currentState.thirdHoverGroup.onChildInputOut.add(function() { manager.manageHover(currentState, currentState.thirdHoverGroup, false); }, currentState);
		manager.changeCursorOnHover(currentState, currentState.thirdHoverGroup);

		currentState.fourthHoverGroup.onChildInputDown.add(function() { manager.associateLink(currentState, currentState.fourthHoverGroup); }, currentState);
		currentState.fourthHoverGroup.onChildInputOver.add(function() { manager.manageHover(currentState, currentState.fourthHoverGroup, true); }, currentState);
		currentState.fourthHoverGroup.onChildInputOut.add(function() { manager.manageHover(currentState, currentState.fourthHoverGroup, false); }, currentState);
		manager.changeCursorOnHover(currentState, currentState.fourthHoverGroup);

		currentState.fifthButtonGroup.onChildInputDown.add(function() { manager.associateLink(currentState, currentState.fifthButtonGroup); }, currentState);
		manager.changeCursorOnHover(currentState, currentState.fifthButtonGroup);
	},

	//pop the content one button by one button
	popContent: function(currentState) {
		//with 1sec delay between each
		setTimeout(function(manager) {
			currentState.game.add.tween(currentState.fourthButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			manager.fillExperienceBar(currentState, currentState.fourthButtonGroup);
		}, 1000, this);

		setTimeout(function(manager) {
			currentState.game.add.tween(currentState.secondButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			manager.fillExperienceBar(currentState, currentState.secondButtonGroup);
		}, 2000, this);

		setTimeout(function(manager) {
			currentState.game.add.tween(currentState.thirdButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			manager.fillExperienceBar(currentState, currentState.thirdButtonGroup);
		}, 3000, this);

		setTimeout(function(manager) {
			currentState.game.add.tween(currentState.firstButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			manager.fillExperienceBar(currentState, currentState.firstButtonGroup);
		}, 4000, this);

		setTimeout(function() {
			currentState.game.add.tween(currentState.fifthButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
		}, 5000, this);

		//and the links become clickable after everything is popped
		setTimeout(function(manager) {
			manager.setupLinks(manager, currentState);
		}, 7000, this);

		//we also start to make the experience bar blink a little bit
		currentState.tweenExperienceBarBlink.start();
	},

	//start the small cinematic depicting the jewel arrival
	startCinematic: function(currentState) {
		//we start by stopping the player
		currentState.player.body.maxVelocity.x = 0;
		currentState.player.body.maxVelocity.y = 0;
		currentState.player.animations.paused = true;

		//we start the first tweens
		currentState.firstTweenBlue.start();
		currentState.firstTweenLightUp.start();

		var exclamation = currentState.game.add.sprite(currentState.player.body.x, currentState.player.body.y - 20, 'textureAtlas', 'exclamation');
		exclamation.anchor.setTo(0.5);
		exclamation.scale.setTo(0.9);

		//separate timeOut because delayed 2 more seconds
		setTimeout(function(state) {
			//now the player can move again
			state.player.body.maxVelocity.x = 10000;
			state.player.body.maxVelocity.y = 10000;
			//and the exclamation isn't needed anymore
			exclamation.destroy();
		}, 5000, currentState);

		//next we start the whole diamond thingy
		this.diamondAlive(currentState);

		//and we start popping out projects
		this.popContent(currentState);
	},







	//update the percentage in the experience bar section
	updatePercentage: function(currentState) {
		//we destroy the old one
		currentState.percentageText.destroy();
		
		//get the actual percentage
		var currentPercentage = Math.floor(currentState.experienceBar.width * 100 / currentState.experienceBar.originalWidth).toString()+'%';
		//and pop it again
		currentState.percentageText = generalFunctions.displayText(currentState.widthStart + 15, currentState.heightStart + 319, currentPercentage, 'smallContent', 'left', false);
		currentState.percentageText.alpha = 0.5;
	},







	//redirect player to Hub state
	redirectToGameHub: function() {
		this.game.state.start('Hub');
	},

	//create the modal window for the shortcut
	generateModal: function(currentState) {
		currentState.modal = currentState.game.add.group();
		currentState.modal.inputEnableChildren = true;

		//first, a blackish overlay to prevent from clicking anywhere behind the modal
		currentState.modalOverlay = currentState.game.add.graphics(0, 0);
		currentState.modalOverlay.beginFill(0x000000, 0.2);
		currentState.modalOverlay.drawRect(0, 0, 800, 600);
		currentState.modalOverlay.endFill();
		currentState.modal.add(currentState.modalOverlay);

		//we double the background to artifically get alpha up
		generalFunctions.generateButton(currentState.game.width * 0.5 - 200, currentState.game.height * 0.5 - 100, 400, 200, 0.5, currentState.modal);
		generalFunctions.generateButton(currentState.game.width * 0.5 - 200, currentState.game.height * 0.5 - 100, 400, 200, 0.7, currentState.modal);

		//we generate all the text
		var title1 = generalFunctions.displayText(currentState.game.width * 0.5, currentState.game.height * 0.5 - 60, "experienceModalTitle1", 'title', 'center'),
			title2 = generalFunctions.displayText(currentState.game.width * 0.5, currentState.game.height * 0.5 - 35, "experienceModalTitle2", 'title', 'center'),
			title3 = generalFunctions.displayText(currentState.game.width * 0.5, currentState.game.height * 0.5 - 10, "experienceModalTitle3", 'title', 'center'),
			no = generalFunctions.displayText(currentState.game.width * 0.5 - 100, currentState.game.height * 0.5 + 60, "experienceModalNo", 'title', 'center'),
			yes = generalFunctions.displayText(currentState.game.width * 0.5 + 100, currentState.game.height * 0.5 + 60, "experienceModalYes", 'title', 'center');

		//on click on "Yes"
		yes.events.onInputDown.add(this.redirectToGameHub, currentState);
		yes.inputEnabled = true;
		yes.input.useHandCursor = true;

		no.inputEnabled = true;
		no.input.useHandCursor = true;

		//we had them all to the same group
		currentState.modal.add(title1);
		currentState.modal.add(title2);
		currentState.modal.add(title3);
		currentState.modal.add(yes);
		currentState.modal.add(no);

		currentState.modal.alpha = 0;
		currentState.game.add.tween(currentState.modal).to( { alpha: 1 }, 600, "Linear", true);
	},

	//Setup a modal window to ask for the shortcut
	setupModalShortcut: function(currentState) {
		//we start by stopping the player
		currentState.player.body.maxVelocity.x = 0;
		currentState.player.body.maxVelocity.y = 0;
		currentState.player.animations.paused = true;

		//we smoothly pop the hidden modal
		this.generateModal(currentState);
	},

	//manage the shortcut-to-home visual activation 
	homeShortcut: function(currentState) {
		//we gradually up the light and tint the background to their "cinematic" value, where the shortcut activates
		//but as this method is called from update(), we gotta make sure the tweens don't mess with others that may be ongoing
		if ( currentState.light.alpha === 0.2 && !currentState.tweenLightUp.isRunning && !currentState.tweenLightDown.isRunning && !currentState.tweenBlue.isRunning && !currentState.tweenWhite.isRunning ) {
			currentState.tweenLightUp = currentState.game.add.tween(currentState.light).to( { alpha: 0.5 }, 5000, "Linear");
			currentState.tweenLightUp.start();
			
			currentState.tweenBlue = ExperienceConfigManager.tweenTint(currentState, currentState.background, 0xffffff, 0x5FC6D4, 5000);
			currentState.tweenBlue.start();
		}

		//if light alpha and background tint are maxed, we pop the question
		if ( !currentState.modalStarted && currentState.light.alpha == 0.5 ) {
			this.setupModalShortcut(currentState);
			currentState.modalStarted = true;
		}
	},







	//manage the first time background and light go back to normal
	firstEffectsDown: function(currentState) {
		console.log('firstEffectsDown');
		currentState.firstTweenWhite.start();
		currentState.firstTweenLightDown.start();

		currentState.started = true;
	},







	//manage every other time background and light go back to normal
	manageEffectsDown: function(currentState) {
		console.log('manageEffectsDown : nop');
		if ( !currentState.tweenLightDown.isRunning && !currentState.firstTweenLightDown.isRunning ) {
			console.log('manageLightEffectsDown : yep');
			if ( currentState.tweenLightUp.isRunning ) {
				currentState.tweenLightUp.stop();
			}

			currentState.tweenLightDown = currentState.game.add.tween(currentState.light).to( { alpha: 0.2 }, 1000, "Linear");
			currentState.tweenLightDown.start();
		}

		if ( !currentState.tweenWhite.isRunning && !currentState.firstTweenWhite.isRunning ) {
			console.log('manageBlueEffectsDown : yep');
			if ( currentState.tweenBlue.isRunning ) {
				currentState.tweenBlue.stop();
				//so it doesn't start the gradient at the max value if it wasn't there already
				currentState.currentTint = currentState.background.tint;
			}

			currentState.tweenWhite = ExperienceConfigManager.tweenTint(currentState, currentState.background, currentState.currentTint, 0xffffff, 1000);
			currentState.tweenWhite.start();
		}
	},







	//manage eveyrthing that happens when the user quits the shortcut modal
	manageModalQuit: function(currentState) {
		console.log('manageModalQuit');
		//now the player can move again
		currentState.player.body.maxVelocity.x = 10000;
		currentState.player.body.maxVelocity.y = 10000;

		currentState.game.add.tween(currentState.modal).to( { alpha: 0 }, 300, "Linear", true);
		//timeout on the destroy to let the animation to alpha 0 play first
		setTimeout(function() {
			currentState.modal.destroy();
		}, 400, this);

		//so it doesn't start the gradient at the max value if it wasn't there already
		currentState.currentTint = currentState.background.tint;
		currentState.tweenWhite = ExperienceConfigManager.tweenTint(currentState, currentState.background, currentState.currentTint, 0xffffff, 300);
		currentState.tweenWhite.start();

		currentState.tweenLightDown = currentState.game.add.tween(currentState.light).to( { alpha: 0.2 }, 300, "Linear");
		currentState.tweenLightDown.start();

		//we delay the change of the boolean to let the light alpha go down first
		setTimeout(function() {
			currentState.modalStarted = false;
		}, 1000, this);
	}
};
