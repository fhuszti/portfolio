var ExperienceManager = {

	generateExperience: function(currentState) {
		generalFunctions.addBackground(currentState);

		//we setup state variables
		ExperienceConfigManager.setupVariables(currentState);

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//BEHIND the map
		ExperienceVisualsManager.behindMap(currentState);

		//Initial map setup
		generalFunctions.mapSetup(currentState, 'experienceMap');

		//Adding the guidance sign and its text
		ExperienceVisualsManager.generateSigns(currentState);

		//we define the class variables
		currentState.widthStart = currentState.game.width * 0.5 - 102;
		currentState.heightStart = 78;

		// Draw a black background rectangle behind the overlay
		ExperienceContentManager.generateContentBg(currentState);

		//then we generate the content on top of it
		ExperienceContentManager.generateContent(currentState);

		//and the exerience bar going below the content
		ExperienceContentManager.generateExperienceBarSection(currentState);

		//we generate the diamond
		ExperienceVisualsManager.generateDiamond(currentState);

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//IN FRONT OF the dark panel
		//BEHIND the player
		ExperienceVisualsManager.frontPanelsBehindPlayer(currentState);

		//create player
		ExperiencePlayerManager.createPlayer(currentState);

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//IN FRONT OF the dark panel
		//IN FRONT OF the player
		ExperienceVisualsManager.frontPanelsFrontPlayer(currentState);

		//we setup all needed tweens
		ExperienceConfigManager.setupTweens(currentState);

		//setting physics for the player and things other than platforms
		currentState.game.physics.arcade.enable([currentState.player, currentState.diamond]);
		currentState.diamond.body.immovable = true;

		//fine tune some player parameters now that the player has a physical body
		generalFunctions.playerSetup(currentState);

		generalFunctions.previousState = 'experience';
	},







	updateExperience: function(currentState) {
		//collisions
		currentState.game.physics.arcade.collide(currentState.player, currentState.blockedLayer);
		currentState.game.physics.arcade.collide(currentState.player, currentState.diamond);

		//Player movements management
		//not active if the player is paused (cinematic)
		if ( currentState.player.body.maxVelocity.x !== 0 ) {
			generalFunctions.playerMov(currentState);
		}

		//if the player is on the ground and the diamond doesn't 'exist' yet
		if ( currentState.player.y >= 556 && !currentState.diamond.alive ) {
			ExperienceUpdateContentManager.startCinematic(currentState);
		}

		//we don't forget to update the experience bar crop if the cinematic is done
		if ( currentState.diamond.alive ) {
			currentState.experienceBar.updateCrop();
			
			ExperienceUpdateContentManager.updatePercentage(currentState);
		}

		//if the player is on the diamond
		if ( currentState.player.x >= 503 && currentState.player.x <= 552 && currentState.player.y === 431 ) {
			ExperienceUpdateContentManager.homeShortcut(currentState);
		}
		//else we have to check for a bunch of stuff to make sure those tweens don't mess with others
		else if ( currentState.light.alpha > 0.2 && !currentState.firstTweenLightUp.isRunning && !currentState.firstTweenBlue.isRunning ) {
			//if it's still the first cinematic
			if ( !currentState.started ) {
				ExperienceUpdateContentManager.firstEffectsDown(currentState);
			}
			else {
				ExperienceUpdateContentManager.manageEffectsDown(currentState);
			}
		}

		//on click anywhere else, we close the modal if its open
		if (currentState.modalStarted && currentState.game.input.activePointer.isDown) {
			ExperienceUpdateContentManager.manageModalQuit(currentState);
		}

		//Changing map by walking to a specific spot on the current map
		if ( currentState.player.x > currentState.game.width - 75 && currentState.player.y > 600 ) {
			generalFunctions.leavingExperienceX = currentState.player.x;
			generalFunctions.leavingExperienceScaleX = currentState.player.scale.x;
			currentState.game.state.start('Contact');
		}
	}
};
