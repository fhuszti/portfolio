var ExperienceConfigManager = {

	//setup state variables
	setupVariables: function() {
		gameVariables.currentState.started = false;
		gameVariables.currentState.modalStarted = false;
		gameVariables.currentState.currentTint = 0x5FC6D4;

		gameVariables.currentState.light = ExperienceVisualsManager.generateDiamondLight();
	},







	//tint a sprite over time
	tweenTint: function(obj, startColor, endColor, time, delay = 0) {
		// create an object to tween with our step value at 0
		var colorBlend = {step: 0};

		// create the tween on this object and tween its step property to 100
		var colorTween = gameVariables.currentState.game.add.tween(colorBlend).to({step: 100}, time, null, false, delay);

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

	//setup all necessary tweens
	setupTweens: function() {
		//all tweens for background color + light alpha
		gameVariables.currentState.firstTweenBlue = this.tweenTint(gameVariables.currentState.background, 0xffffff, 0x5FC6D4, 4000);
		gameVariables.currentState.firstTweenLightUp = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.5 }, 4000, "Linear");

		gameVariables.currentState.firstTweenWhite = this.tweenTint(gameVariables.currentState.background, 0x5FC6D4, 0xffffff, 2000, 1000);
		gameVariables.currentState.firstTweenLightDown = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.2 }, 2000, "Linear", false, 1000);

		gameVariables.currentState.tweenBlue = this.tweenTint(gameVariables.currentState.background, 0xffffff, 0x5FC6D4, 5000);
		gameVariables.currentState.tweenWhite = this.tweenTint(gameVariables.currentState.background, 0x5FC6D4, 0xffffff, 1000);

		gameVariables.currentState.tweenLightUp = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.5 }, 5000, "Linear");
		gameVariables.currentState.tweenLightDown = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.2 }, 1000, "Linear");

		//tweens for the experience bar
		//I have no idea why but 1025 seems to be the right width to aim at for the experience bar
		gameVariables.currentState.tweenExperienceBarGrowth = gameVariables.currentState.game.add.tween(gameVariables.currentState.cropExperienceBar).to( { width: 1025 }, 4000, "Linear");
		gameVariables.currentState.tweenExperienceBarGrowth.onComplete.add(this.onBarGrowthComplete, gameVariables.currentState);
		gameVariables.currentState.tweenExperienceBarBlink = gameVariables.currentState.game.add.tween(gameVariables.currentState.experienceBarGroup).to( { alpha: 0.8 }, 1000, "Linear", false, 0, -1, true);
	}
};
