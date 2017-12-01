var HomeGame = HomeGame || {};

//loading the game assets
HomeGame.Preload = function() {};

HomeGame.Preload.prototype = {
	preload: function() {
		//load Tiled maps
		this.load.tilemap('homeMap', assetsBaseDir+'tilemaps/home.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('skillsMap', assetsBaseDir+'tilemaps/skills.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('academicsMap', assetsBaseDir+'tilemaps/academics.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('contactMap', assetsBaseDir+'tilemaps/contact.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('experienceMap', assetsBaseDir+'tilemaps/experience.json', null, Phaser.Tilemap.TILED_JSON);

		//the terrain Spritesheet
		this.load.image('mainTiles', assetsBaseDir+'atlas/png/mainSpritesheet.png');

		//Waterfall atlas
		this.load.atlas('waterfallLight', assetsBaseDir+'atlas/png/waterfallLight.png', assetsBaseDir+'atlas/json/waterfallLight.json');
		this.load.atlas('waterfallHeavy', assetsBaseDir+'atlas/png/waterfallHeavy.png', assetsBaseDir+'atlas/json/waterfallHeavy.json');

		//JSON language files
		this.load.json('frJSON', 'lang_fr');
		this.load.json('enJSON', 'lang_en');

		//show loading screen
		this.add.sprite(0, 0, 'textureAtlas', 'background');
		//pop the light effect, hidden for now
		var light = this.add.sprite(0, 0, 'textureAtlas', 'light');
		light.width = 800;
		light.height = 600;
		light.alpha = 0;

		var loadingText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 150, '0%',
			{
				fill: '#ffffff',
				stroke: 'black',
				strokeThickness: 4
			}),
			progressDisplay = 0;

		loadingText.anchor.setTo(0.5);

		var timerEvt = this.game.time.events.loop(1, function() {
			if (progressDisplay < 100) {
				if (progressDisplay < this.game.load.progress) {
					loadingText.text = (++progressDisplay) + '%';

					//we also make the light illusion fade in
					//more and more as loading goes forward
					if (this.game.load.progress >= 30 && this.game.load.progress < 60)
						this.game.add.tween(light).to( { alpha: 0.3 }, 300, "Linear", true);
					if (this.game.load.progress >= 60 && this.game.load.progress < 90)
						this.game.add.tween(light).to( { alpha: 0.6 }, 300, "Linear", true);
					if (this.game.load.progress >= 90)
						this.game.add.tween(light).to( { alpha: 0.9 }, 300, "Linear", true);
				}
			} else {
				loadingText.text = '100% !';
				this.game.time.events.remove(timerEvt);
			}
		}, this);

		//we start the loading animation
		this.generateAnimation();
	},

	create: function() {
		this.state.start('Academics');
	},

	//create the loading animation
	generateAnimation: function() {
		//first we create the platform
		var platform = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'textureAtlas', 'platform');
		platform.anchor.setTo(0.5);

		//then the character
		this.generateNinja();
	},

	//create the character
	generateNinja: function() {
		var ninja = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 35, 'textureAtlas');
		ninja.anchor.setTo(0.5);

		//we don't use the ninja2 sprite for the run animation because it makes the character go forward
		ninja.animations.add('run', ['ninja1', 'ninja3', 'ninja4', 'ninja5', 'ninja6'], 15, true);
		ninja.animations.play('run');
	}
};
