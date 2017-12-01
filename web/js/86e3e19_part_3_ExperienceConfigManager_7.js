var ExperienceConfigManager = {

	//setup state variables
	setupVariables: function(state) {
		state.started = false;
		state.modalStarted = false;
		state.currentTint = 0x5FC6D4;

		state.light = ExperienceVisualsManager.generateDiamondLight(state);
	},







	//tint a sprite over time
	tweenTint: function(state, obj, startColor, endColor, time, delay = 0) {
		// create an object to tween with our step value at 0
		var colorBlend = {step: 0};

		// create the tween on this object and tween its step property to 100
		var colorTween = state.game.add.tween(colorBlend).to({step: 100}, time, null, false, delay);

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
	setupTweens: function(state) {
		//all tweens for background color + light alpha
		state.firstTweenBlue = this.tweenTint(state, state.background, 0xffffff, 0x5FC6D4, 4000);
		state.firstTweenLightUp = state.game.add.tween(state.light).to( { alpha: 0.5 }, 4000, "Linear");

		state.firstTweenWhite = this.tweenTint(state, state.background, 0x5FC6D4, 0xffffff, 2000, 1000);
		state.firstTweenLightDown = state.game.add.tween(state.light).to( { alpha: 0.2 }, 2000, "Linear", false, 1000);

		state.tweenBlue = this.tweenTint(state, state.background, 0xffffff, 0x5FC6D4, 5000);
		state.tweenWhite = this.tweenTint(state, state.background, 0x5FC6D4, 0xffffff, 1000);

		state.tweenLightUp = state.game.add.tween(state.light).to( { alpha: 0.5 }, 5000, "Linear");
		state.tweenLightDown = state.game.add.tween(state.light).to( { alpha: 0.2 }, 1000, "Linear");

		//tweens for the experience bar
		//I have no idea why but 1025 seems to be the right width to aim at for the experience bar
		state.tweenExperienceBarGrowth = state.game.add.tween(state.cropExperienceBar).to( { width: 1025 }, 4000, "Linear");
		state.tweenExperienceBarGrowth.onComplete.add(this.onBarGrowthComplete, state);
		state.tweenExperienceBarBlink = state.game.add.tween(state.experienceBarGroup).to( { alpha: 0.8 }, 1000, "Linear", false, 0, -1, true);
	}
};
