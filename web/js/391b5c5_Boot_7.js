var HomeGame = HomeGame || {};

HomeGame.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
HomeGame.Boot.prototype = {

  preload: function() {
    //the texture atlas
	this.load.atlasJSONArray('textureAtlas', assetsBaseDir+'atlas/png/textureAtlas.png', assetsBaseDir+'atlas/json/textureAtlas.json');
  },

  create: function() {
    //loading screen will have a white background
    this.game.stage.backgroundColor = '#fff';

    //scaling options
    if (!this.game.device.desktop)
    	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    else
    	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    //screen size will be set automatically
    this.scale.updateLayout(true);

    //physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('Preload');
  }

};
