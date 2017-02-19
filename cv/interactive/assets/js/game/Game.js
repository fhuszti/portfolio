var HomeGame = HomeGame || {};

HomeGame.Game = function() {};

HomeGame.Game.prototype = {

    create: function() {
    	generalFunctions.addBackground(this);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        this.behindMap();

        //Initial map setup
        generalFunctions.mapSetup(this, 'homeMap');

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        this.behindSignsBehindPlayer();

        //adding a title to the homepage
        generalFunctions.displayText(this.game.width*0.5, 100, 'home', 'title', 'center');

        //Create all guidance signs
        this.generateSigns();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        //IN FRONT OF the signs
        this.frontSignsBehindPlayer();

        //create player at different places depending where the visitor was before
        this.createPlayer();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the player
        this.frontSignsFrontPlayer();

        //setting physics for the player and things other than platforms
        this.game.physics.arcade.enable([this.player, this.branch8]);
        this.branch8.body.immovable = true;

        //fine tune some player parameters now that the player has a physical body
    	generalFunctions.playerSetup(this);
    },

    update: function() {
        //collisions
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
        this.game.physics.arcade.collide(this.player, this.branch8);

        //Player movements management
        generalFunctions.playerMov(this);

        if (this.player.x < 20 && this.player.y < 150) {
      	    this.game.state.start('Languages');
    	}
        if (this.player.x < 20 && this.player.y > this.game.height - 150) {
      	    this.game.state.start('Formation');
    	}
        if (this.player.x > this.game.width - 20 && this.player.y < 150) {
      	    this.game.state.start('Experience');
    	}
        if (this.player.x > this.game.width - 20 && this.player.y > this.game.height - 250) {
      	    this.game.state.start('Contact');
    	}
    },

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the map
    behindMap: function() {
    	this.add.sprite(250, 160, 'textureAtlas', 'pine1');
        this.add.sprite(150, 220, 'textureAtlas', 'pine2');
        this.branch6 = this.add.sprite(150, 190, 'textureAtlas', 'branch6');
        this.branch6.anchor.set(0.5);
        this.branch6.angle = 180;
        this.branch10 = this.add.sprite(110, 200, 'textureAtlas', 'branch10');
        this.branch10.anchor.set(0.5);
        this.branch10.angle = -80;
        this.rock4 = this.add.sprite(100, this.game.height - 110, 'textureAtlas', 'rock4');
        this.rock4.angle = -15;
    },

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the signs
    //BEHIND the player
    behindSignsBehindPlayer: function() {
    	this.add.sprite(90, this.game.height - 90, 'textureAtlas', 'plant14');
        this.add.sprite(260, this.game.height - 175, 'textureAtlas', 'plant4');
        this.add.sprite(this.game.width - 40, this.game.height - 170, 'textureAtlas', 'plant5');
        this.add.sprite(this.game.width*0.5 + 110, this.game.height - 190, 'textureAtlas', 'plant17');
        this.branch8 = this.add.sprite(this.game.width - 255, this.game.height - 180, 'textureAtlas', 'branch8');
        this.add.sprite(230, this.game.height*0.5 - 140, 'textureAtlas', 'plant13');
        this.add.sprite(this.game.width*0.5 + 120, this.game.height*0.5 - 120, 'textureAtlas', 'plant14');
        this.signPlant2 = this.add.sprite(45, this.game.height - 95, 'textureAtlas', 'plant4');
        this.signPlant2.anchor.setTo(0.5, 0);
        this.signPlant2.scale.setTo(0.5);
    },

    //Create all guidance signs
    generateSigns: function() {
    	var skillsSign = this.game.add.sprite(5, 55, 'textureAtlas', 'sign5'),
            experienceSign = this.game.add.sprite(this.game.width - 125, 23, 'textureAtlas', 'sign4'),
            contactSign = this.game.add.sprite(this.game.width - 50, this.game.height - 195, 'textureAtlas', 'sign4'),
            formationSign = this.game.add.sprite(15, this.game.height - 130, 'textureAtlas', 'sign5');

        skillsSign.scale.setTo(0.5);
        experienceSign.scale.setTo(0.5);
        contactSign.scale.setTo(0.5);
        formationSign.scale.setTo(0.5);

        //Adding the text next to the signs
        generalFunctions.displayText(80, 60, 'skills', 'guidance');
        generalFunctions.displayText(this.game.width - 150, 25, 'experience', 'guidance', 'right');
        generalFunctions.displayText(this.game.width - 70, this.game.height - 140, 'contact', 'guidance', 'right');
        generalFunctions.displayText(20, this.game.height - 160, 'formation', 'guidance');
    },

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the signs
    //BEHIND the player
    frontSignsBehindPlayer: function() {
    	this.add.sprite(this.game.width - 150, 46, 'textureAtlas', 'plant3');
        this.signPlant1 = this.add.sprite(45, 92, 'textureAtlas', 'plant4');
        this.signPlant1.anchor.setTo(0.5, 0);
        this.signPlant1.scale.setTo(0.5);
    },

    //create player at different places depending where the visitor was before
    createPlayer: function() {
        var widthPop = null, heightPop = null;

        //nothing special when coming from Experience, thus going to default
        switch(generalFunctions.previousState) {
            case 'languages':
            	widthPop = 50;
            	heightPop = 100;
            	break;
            case 'contact':
           	    widthPop = this.game.width - 30;
           	    heightPop = 430;
           	    break;
            case 'formation':
           	    widthPop = 50;
           	    heightPop = this.game.height - 100;
           	    break;
            default:
           	    widthPop = 360;
           	    heightPop = 430;
        }
        this.player = this.game.add.sprite(widthPop, heightPop, 'textureAtlas', 'ninja1');
        if (this.player.x > this.game.width - 200)
            this.player.scale.x = -1;
    },

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the signs
    //IN FRONT OF the player
    frontSignsFrontPlayer: function() {
        this.waterfall = this.game.add.sprite(this.game.width - 230, 60, 'waterfallLight');
        this.waterfall.scale.setTo(2);

        this.waterfall.animations.add('flow', Phaser.Animation.generateFrameNames('waterfallLight', 0, 31), 20, true);
        this.waterfall.animations.play('flow');


        this.add.sprite(this.game.width*0.5 - 10, this.game.height*0.5 - 85, 'textureAtlas', 'flower6').scale.setTo(0.3);
        this.add.sprite(250, this.game.height - 170, 'textureAtlas', 'plant6');
        this.add.sprite(this.game.width - 280, this.game.height - 170, 'textureAtlas', 'plant6');
        this.add.sprite(this.game.width - 100, 50, 'textureAtlas', 'plant4');
        this.add.sprite(210, this.game.height - 140, 'textureAtlas', 'plant8');
        this.add.sprite(this.game.width*0.5 + 155, this.game.height*0.5 - 120, 'textureAtlas', 'plant15');
        this.add.sprite(this.game.width*0.5 + 80, this.game.height*0.5 - 120, 'textureAtlas', 'plant14');
        this.add.sprite(this.game.width*0.5, this.game.height - 175, 'textureAtlas', 'plant18');
    }
};
