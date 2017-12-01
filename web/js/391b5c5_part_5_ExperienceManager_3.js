var ExperienceManager = {

	generateExperience: function() {
		gameMethods.addBackground();

		//we setup state variables
		ExperienceConfigManager.setupVariables();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//BEHIND the map
		ExperienceVisualsManager.behindMap();

		//Initial map setup
		gameMethods.mapSetup('experienceMap');

		//Adding the guidance sign and its text
		ExperienceVisualsManager.generateSigns();

		//we define the class variables
		gameVariables.currentState.widthStart = gameVariables.currentState.game.width * 0.5 - 102;
		gameVariables.currentState.heightStart = 78;

		// Draw a black background rectangle behind the overlay
		ExperienceContentManager.generateContentBg();

		//then we generate the content on top of it
		ExperienceContentManager.generateContent();

		//and the exerience bar going below the content
		ExperienceContentManager.generateExperienceBarSection();

		//we generate the diamond
		ExperienceVisualsManager.generateDiamond();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//IN FRONT OF the dark panel
		//BEHIND the player
		ExperienceVisualsManager.frontPanelsBehindPlayer();

		//create player
		ExperiencePlayerManager.createPlayer();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//IN FRONT OF the dark panel
		//IN FRONT OF the player
		ExperienceVisualsManager.frontPanelsFrontPlayer();

		//we setup all needed tweens
		ExperienceConfigManager.setupTweens();

		//setting physics for the player and things other than platforms
		gameVariables.currentState.game.physics.arcade.enable([gameVariables.currentState.player, gameVariables.currentState.diamond]);
		gameVariables.currentState.diamond.body.immovable = true;

		//fine tune some player parameters now that the player has a physical body
		gameMethods.playerSetup();

		gameVariables.previousState = 'experience';
	},







	updateExperience: function() {
		//collisions
		gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);
		gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.diamond);

		//Player movements management
		//not active if the player is paused (cinematic)
		if ( gameVariables.currentState.player.body.maxVelocity.x !== 0 ) {
			gameMethods.playerMov();
		}

		//if the player is on the ground and the diamond doesn't 'exist' yet
		if ( gameVariables.currentState.player.y >= 556 && !gameVariables.currentState.diamond.alive ) {
			ExperienceUpdateContentManager.startCinematic();
		}

		//we don't forget to update the experience bar crop if the cinematic is done
		if ( gameVariables.currentState.diamond.alive ) {
			gameVariables.currentState.experienceBar.updateCrop();
			
			ExperienceUpdateContentManager.updatePercentage();
		}

		//if the player is on the diamond
		if ( gameVariables.currentState.player.x >= 503 && gameVariables.currentState.player.x <= 552 && gameVariables.currentState.player.y === 431 ) {
			ExperienceUpdateContentManager.homeShortcut();
		}
		//else we have to check for a bunch of stuff to make sure those tweens don't mess with others
		else if ( gameVariables.currentState.light.alpha > 0.2 && !gameVariables.currentState.firstTweenLightUp.isRunning && !gameVariables.currentState.firstTweenBlue.isRunning ) {
			//if it's still the first cinematic
			if ( !gameVariables.currentState.started ) {
				ExperienceUpdateContentManager.firstEffectsDown();
			}
			else {
				ExperienceUpdateContentManager.manageEffectsDown();
			}
		}

		//on click anywhere else, we close the modal if its open
		if (gameVariables.currentState.modalStarted && gameVariables.currentState.game.input.activePointer.isDown) {
			ExperienceUpdateContentManager.manageModalQuit();
		}

		//Changing map by walking to a specific spot on the current map
		if ( gameVariables.currentState.player.x > gameVariables.currentState.game.width - 75 && gameVariables.currentState.player.y > 600 ) {
			gameVariables.leavingExperienceX = gameVariables.currentState.player.x;
			gameVariables.leavingExperienceScaleX = gameVariables.currentState.player.scale.x;
			gameVariables.currentState.game.state.start('Contact');
		}
	}
};
