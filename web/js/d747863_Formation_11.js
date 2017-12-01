var HomeGame = HomeGame || {};

HomeGame.Formation = function() {};

HomeGame.Formation.prototype = {
    formationTexts: {},

    create: function() {
        generalFunctions.addBackground(this);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        this.add.sprite(this.game.width - 150, this.game.height*0.5 - 150, 'textureAtlas', 'pine2');

        //Initial map setup
        generalFunctions.mapSetup(this, 'formationMap');

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the wooden panels
        //BEHIND the player
        this.behindPanelsBehindPlayer();

        //Adding the guidance sign and its text
        this.generateSigns();

        //Wooden panels background
        this.generatePanels();

        //Adding the title of the page at the right place
        generalFunctions.displayText(this.game.width/3 + 35, 110, 'formation', 'title', 'center');

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the wooden panels
        //BEHIND the player
        this.frontPanelsBehindPlayer();

        //create player
        this.createPlayer();

        //Display all texts on creation, then call checkHeight to delete those that shouldn't appear yet
        this.displayFormationTexts();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the wooden panels
        //IN FRONT OF the player
        this.frontPanelsFrontPlayer();

        //setting physics for the player and things other than platforms
        this.game.physics.arcade.enable(this.player);

        //fine tune some player parameters now that the player has a physical body
    	generalFunctions.playerSetup(this);

        generalFunctions.previousState = 'formation';
    },

    update: function() {
        //collisions
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
        this.game.physics.arcade.collide(this.player, this.branch8);

        //Player movements management
        generalFunctions.playerMov(this);

        //We check to add/remove the text or not
        for (var text in this.formationTexts) {
        	this.checkHeight(this.formationTexts[text]);
        }

        //Changing map by walking to a specific spot on the current map
        if (this.player.x > this.game.width - 20 && this.player.y < 100) {
      	    this.game.state.start('Hub');
    	}
    },

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the wooden panels
    //BEHIND the player
    behindPanelsBehindPlayer: function() {
    	this.add.sprite(50, this.game.height*0.5 + 35, 'textureAtlas', 'plant14');
        this.add.sprite(90, this.game.height*0.5 + 35, 'textureAtlas', 'plant13');
        this.add.sprite(150, this.game.height*0.5 + 35, 'textureAtlas', 'plant14');
    },

    //create the guidance sign and its text
    generateSigns: function() {
    	var homeSign = this.game.add.sprite(this.game.width - 40, 45, 'textureAtlas', 'sign0');

        homeSign.scale.setTo(0.5);
        homeSign.anchor.setTo(0.5);
        
        generalFunctions.displayText(this.game.width - 80, 30, 'home', 'guidance', 'right');
    },

    //Create all wooden panels background
    generatePanels: function() {
    	this.backgroundPanels(this.game.height*0.5 - 150, 'left');
        this.backgroundPanels(this.game.height*0.5 - 88, 'left');
        this.backgroundPanels(this.game.height*0.5 - 26, 'left');

        this.backgroundPanels(this.game.height*0.5 + 70, 'left');
        this.backgroundPanels(this.game.height*0.5 + 132, 'left');
        this.backgroundPanels(this.game.height*0.5 + 194, 'left');

        this.backgroundPanels(this.game.height*0.5 - 150, 'right');
        this.backgroundPanels(this.game.height*0.5 - 88, 'right');
        this.backgroundPanels(this.game.height*0.5 - 26, 'right');

        this.backgroundPanels(this.game.height*0.5 + 70, 'right');
        this.backgroundPanels(this.game.height*0.5 + 132, 'right');
        this.backgroundPanels(this.game.height*0.5 + 194, 'right');

        //Adding the panel behind the title
        var titlePanel3 = this.game.add.sprite(this.game.width/3 + 28, 105, 'textureAtlas', 'sign1'),
            titlePanel1 = this.game.add.sprite(this.game.width/3 - 45, 105, 'textureAtlas', 'sign1'),
            titlePanel2 = this.game.add.sprite(this.game.width/3 + 114, 105, 'textureAtlas', 'sign2');
        titlePanel1.anchor.setTo(0.5);
        titlePanel2.anchor.setTo(0.5);
        titlePanel3.anchor.setTo(0.5);
        titlePanel1.scale.setTo(0.9);
        titlePanel2.scale.setTo(0.9);
        titlePanel3.scale.setTo(0.9);
    },

    //Create a background wooden panel
    backgroundPanels: function(height, side) {
    	var bg1 = null,
            bg2 = null,
            bg3 = null;

        if(side === 'left') {
            bg1 = this.game.add.sprite(5, height, 'textureAtlas', 'sign6');
            bg2 = this.game.add.sprite(95, height, 'textureAtlas', 'sign8');
            bg3 = this.game.add.sprite(185, height, 'textureAtlas', 'sign7');
        }
        if (side === 'right') {
            bg1 = this.game.add.sprite(325, height, 'textureAtlas', 'sign6');
            bg2 = this.game.add.sprite(415, height, 'textureAtlas', 'sign8');
            bg3 = this.game.add.sprite(505, height, 'textureAtlas', 'sign7');
        }
    },

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the wooden panels
    //BEHIND the player
    frontPanelsBehindPlayer: function() {
    	this.add.sprite(this.game.width - 150, this.game.height - 140, 'textureAtlas', 'plant3');
        this.add.sprite(this.game.width - 80, this.game.height - 140, 'textureAtlas', 'plant3');
        this.add.sprite(this.game.width - 120, this.game.height - 140, 'textureAtlas', 'plant5');
    },

    //create player
    createPlayer: function() {
    	this.player = this.game.add.sprite(this.game.width - 30, this.game.height - 150, 'textureAtlas', 'ninja1');
        this.player.scale.x = -1;
    },

    //Display all texts on creation, then call checkHeight to delete those that shouldn't appear yet
    displayFormationTexts: function() {
    	//We stock all texts in a table for later manipulation on them
        this.formationTexts['OCDate'] = generalFunctions.displayText(345, this.game.height*0.5 + 92, 'formationOCDate', 'mediumContent2');
        this.formationTexts['OCPlace1'] = generalFunctions.displayText(this.game.width*0.5 + 180, this.game.height*0.5 + 150, 'formationOCPlace1', 'mediumContent2', 'right');
        this.formationTexts['OCPlace2'] = generalFunctions.displayText(this.game.width*0.5 + 180, this.game.height*0.5 + 170, 'formationOCPlace2', 'mediumContent2', 'right');
        this.formationTexts['OCDesc1'] = generalFunctions.displayText(345, this.game.height*0.5 + 215, 'formationOCDesc1', 'mediumContent2');
        this.formationTexts['OCDesc2'] = generalFunctions.displayText(345, this.game.height*0.5 + 235, 'formationOCDesc2', 'mediumContent2');

        this.formationTexts['PrepaDate'] = generalFunctions.displayText(345, this.game.height*0.5 - 128, 'formationPrepaDate', 'mediumContent2');
        this.formationTexts['PrepaPlace1'] = generalFunctions.displayText(this.game.width*0.5 + 180, this.game.height*0.5 - 70, 'formationPrepaPlace1', 'mediumContent2', 'right');
        this.formationTexts['PrepaPlace2'] = generalFunctions.displayText(this.game.width*0.5 + 180, this.game.height*0.5 - 50, 'formationPrepaPlace2', 'mediumContent2', 'right');
        this.formationTexts['PrepaDesc1'] = generalFunctions.displayText(345, this.game.height*0.5 - 5, 'formationPrepaDesc1', 'mediumContent2');
        this.formationTexts['PrepaDesc2'] = generalFunctions.displayText(345, this.game.height*0.5 + 15, 'formationPrepaDesc2', 'mediumContent2');

        this.formationTexts['FacDate'] = generalFunctions.displayText(25, this.game.height*0.5 + 92, 'formationFacDate', 'mediumContent2');
        this.formationTexts['FacPlace1'] = generalFunctions.displayText(this.game.width*0.5 - 140, this.game.height*0.5 + 150, 'formationFacPlace1', 'mediumContent2', 'right');
        this.formationTexts['FacPlace2'] = generalFunctions.displayText(this.game.width*0.5 - 140, this.game.height*0.5 + 170, 'formationFacPlace2', 'mediumContent2', 'right');
        this.formationTexts['FacDesc'] = generalFunctions.displayText(25, this.game.height*0.5 + 215, 'formationFacDesc', 'mediumContent2');

        this.formationTexts['BacDate'] = generalFunctions.displayText(25, this.game.height*0.5 - 128, 'formationBacDate', 'mediumContent2');
        this.formationTexts['BacPlace1'] = generalFunctions.displayText(this.game.width*0.5 - 140, this.game.height*0.5 - 70, 'formationBacPlace1', 'mediumContent2', 'right');
        this.formationTexts['BacPlace2'] = generalFunctions.displayText(this.game.width*0.5 - 140, this.game.height*0.5 - 50, 'formationBacPlace2', 'mediumContent2', 'right');
        this.formationTexts['BacDesc1'] = generalFunctions.displayText(25, this.game.height*0.5 - 5, 'formationBacDesc1', 'mediumContent2');
        this.formationTexts['BacDesc2'] = generalFunctions.displayText(25, this.game.height*0.5 + 15, 'formationBacDesc2', 'mediumContent2');

        //Now we call checkHeight to make the higher texts disappear
        for (var text in this.formationTexts) {
        	this.formationTexts[text].alive = false;
        	this.formationTexts[text].alpha = 0.1;
        	this.checkHeight(this.formationTexts[text]);
        }
    },

    //Check if the given text should be displayed or hidden
    checkHeight: function(text) {
    	//If player is on bottom platform
    	if(this.player.y > 367) {
    	    //If it's the bottom right corner text and it's not already active, we write it
    	    if (!text.alive && text.x >= 340 && text.y > 364) {
    	    	text.alive = true;
    	    	this.game.add.tween(text).to( { alpha: 1 }, 1500, "Linear", true);
    	    }
    	    //If there's an active text anywhere else, we kill it
    	    if (text.alive && (text.x < 340 || text.y <= 364)) {
    	    	text.alive = false;
    	    	this.game.add.tween(text).to( { alpha: 0.1 }, 1000, "Linear", true);
    	    }
    	}
    	//If player is on first platform
    	if (this.player.y <= 367 && this.player.y > 271) {
    	    //If it's the bottom left corner text and it's not already active, we write it
            if (!text.alive && text.x < 340 && text.y > 364) {
                text.alive = true;
                this.game.add.tween(text).to( { alpha: 1 }, 1000, "Linear", true);
            }
    	    //If there's an active text on the top, we kill it
    	    if (text.alive && text.y <= 364) {
    	    	text.alive = false;
    	    	this.game.add.tween(text).to( { alpha: 0.1 }, 1000, "Linear", true);
    	    }
    	}
    	//If player is on second platform
    	if (this.player.y <= 271 && this.player.y > 175) {
    	    //If it's the top right corner text and it's not already active, we write it
            if (!text.alive && text.x >= 340 && text.y <= 364) {
                text.alive = true;
                this.game.add.tween(text).to( { alpha: 1 }, 1000, "Linear", true);
            }
            //If there's an active text in the top left corner, we kill it
    	    if (text.alive && text.x < 340 && text.y <= 364) {
    	    	text.alive = false;
    	    	this.game.add.tween(text).to( { alpha: 0.1 }, 1000, "Linear", true);
    	    }
    	}
    	//If player is on third platform or higher
    	if (!text.alive && this.player.y <= 175) {
    	    //Every message should be active
    	    text.alive = true;
    	    this.game.add.tween(text).to( { alpha: 1 }, 1000, "Linear", true);
    	}
    },

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the wooden panels
    //IN FRONT OF the player
    frontPanelsFrontPlayer: function() {
    	this.liane1 = this.add.sprite(this.game.width*0.5 + 130, 30, 'textureAtlas', 'plant15');
        this.liane1.angle = -45;
        this.add.sprite(75, 30, 'textureAtlas', 'plant16');
        this.add.sprite(5, 0, 'textureAtlas', 'plant14');
        this.add.sprite(45, 0, 'textureAtlas', 'plant13');
        this.add.sprite(75, 0, 'textureAtlas', 'plant14');
        this.add.sprite(this.game.width*0.5 - 250, 0, 'textureAtlas', 'plant13');
        this.add.sprite(this.game.width*0.5 - 220, 0, 'textureAtlas', 'plant13');
        this.add.sprite(this.game.width*0.5 - 190, 0, 'textureAtlas', 'plant14');
        this.add.sprite(this.game.width*0.5 - 150, 0, 'textureAtlas', 'plant13');
        this.add.sprite(this.game.width*0.5 - 120, 0, 'textureAtlas', 'plant14');
        this.add.sprite(this.game.width*0.5 - 80, 0, 'textureAtlas', 'plant14');
        this.add.sprite(this.game.width*0.5 + 25, 0, 'textureAtlas', 'plant13');
        this.add.sprite(this.game.width*0.5 + 55, 0, 'textureAtlas', 'plant14');
        this.add.sprite(this.game.width*0.5 + 95, 0, 'textureAtlas', 'plant13');
        this.add.sprite(this.game.width*0.5 + 125, 0, 'textureAtlas', 'plant14');
        this.add.sprite(this.game.width*0.5 + 205, 0, 'textureAtlas', 'plant14').scale.x = -1;
        this.plant12 = this.add.sprite(this.game.width*0.5 - 200, 135, 'textureAtlas', 'plant12');
        this.plant12.scale.setTo(-0.7, 0.7);
        this.add.sprite(this.game.width*0.5 - 250, 105, 'textureAtlas', 'plant11').scale.setTo(0.7);
        this.add.sprite(this.game.width*0.5 - 220, 105, 'textureAtlas', 'plant10');
        this.add.sprite(this.game.width*0.5 - 60, 105, 'textureAtlas', 'plant10');

	    this.add.sprite(this.game.width*0.5 + 195, 10, 'textureAtlas', 'plant16');
        this.add.sprite(this.game.width*0.5 + 195, this.game.height*0.5 - 140, 'textureAtlas', 'plant15');
        this.add.sprite(this.game.width*0.5 + 195, this.game.height*0.5 - 60, 'textureAtlas', 'plant16');
        this.add.sprite(this.game.width*0.5 + 195, this.game.height*0.5 + 100, 'textureAtlas', 'plant16');
        this.add.sprite(this.game.width*0.5 + 195, this.game.height*0.5 + 180, 'textureAtlas', 'plant15');
        this.add.sprite(this.game.width*0.5 + 195, this.game.height*0.5 + 260, 'textureAtlas', 'plant16');
        this.rightHorizLiane1 = this.add.sprite(this.game.width*0.5 + 200, this.game.height*0.5 + 88, 'textureAtlas', 'plant15');
        this.rightHorizLiane1.scale.x = -1;
        this.rightHorizLiane1.angle = 90;
        this.rightHorizLiane2 = this.add.sprite(this.game.width*0.5 - 83, this.game.height*0.5 + 261, 'textureAtlas', 'plant15');
        this.rightHorizLiane2.scale.y = -1;
        this.rightHorizLiane2.angle = 90;
        this.plant12 = this.add.sprite(this.game.width*0.5 + 200, this.game.height*0.5 + 30, 'textureAtlas', 'plant12');
        this.plant12.angle = 40;
        this.plant12.scale.setTo(0.6);
        this.liane3 = this.add.sprite(this.game.width*0.5 + 85, this.game.height*0.5 - 150, 'textureAtlas', 'plant15');
        this.liane3.angle = 50;
        this.liane3.scale.setTo(1.1);
        this.liane4 = this.add.sprite(this.game.width*0.5 + 25, this.game.height*0.5 - 93, 'textureAtlas', 'plant15');
        this.liane4.angle = 75;
        this.liane4.scale.y = 1.2;
        this.add.sprite(this.game.width*0.5 + 55, this.game.height*0.5 - 143, 'textureAtlas', 'plant14');
        this.add.sprite(this.game.width*0.5 + 85, this.game.height*0.5 - 143, 'textureAtlas', 'plant13');
        this.add.sprite(this.game.width*0.5 + 115, this.game.height*0.5 - 143, 'textureAtlas', 'plant14');
        this.add.sprite(this.game.width*0.5 + 155, this.game.height*0.5 - 143, 'textureAtlas', 'plant14');

        this.plant9right = this.add.sprite(this.game.width*0.5 - 60, this.game.height*0.5 + 150, 'textureAtlas', 'plant9');
        this.plant9right.anchor.setTo(0.5);
        this.plant9right.scale.setTo(-0.7, 0.7);
        this.plant9right.angle = -60;
        this.plant9left = this.add.sprite(this.game.width*0.5 - 135, this.game.height*0.5 + 50, 'textureAtlas', 'plant9');
        this.plant9left.anchor.setTo(0.5);
        this.plant9left.scale.setTo(0.6);
        this.plant9left.angle = 60;
        this.leftHorizLiane1 = this.add.sprite(this.game.width*0.5 - 120, this.game.height*0.5 + 261, 'textureAtlas', 'plant15');
        this.leftHorizLiane1.angle = 90;
    	this.add.sprite(this.game.width*0.5 - 70, this.game.height*0.5 - 145, 'textureAtlas', 'plant15').scale.x = -1;
    	this.add.sprite(this.game.width*0.5 - 70, this.game.height*0.5 - 80, 'textureAtlas', 'plant16').scale.x = -1;
    	this.add.sprite(this.game.width*0.5 - 70, this.game.height*0.5 - 30, 'textureAtlas', 'plant15').scale.x = -1;
    	this.add.sprite(this.game.width*0.5 - 70, this.game.height*0.5 + 30, 'textureAtlas', 'plant16').scale.x = -1;
    	this.add.sprite(this.game.width*0.5 - 125, this.game.height*0.5 - 145, 'textureAtlas', 'plant16');
    	this.add.sprite(this.game.width*0.5 - 125, this.game.height*0.5 - 10, 'textureAtlas', 'plant16');
    	this.add.sprite(this.game.width*0.5 - 125, this.game.height*0.5 + 60, 'textureAtlas', 'plant15');
    	this.add.sprite(this.game.width*0.5 - 125, this.game.height*0.5 + 130, 'textureAtlas', 'plant16');
    	this.add.sprite(this.game.width*0.5 - 125, this.game.height*0.5 + 190, 'textureAtlas', 'plant16');

        this.leftHorizLiane2 = this.add.sprite(10, this.game.height*0.5 + 261, 'textureAtlas', 'plant15');
        this.leftHorizLiane2.scale.y = -1;
        this.leftHorizLiane2.angle = 90;
        this.add.sprite(12, 10, 'textureAtlas', 'plant16').scale.x = -1;
        this.add.sprite(12, 80, 'textureAtlas', 'plant15').scale.x = -1;
    	this.add.sprite(12, this.game.height*0.5 - 60, 'textureAtlas', 'plant16').scale.x = -1;
    	this.add.sprite(12, this.game.height*0.5 + 100, 'textureAtlas', 'plant16').scale.x = -1;
    	this.add.sprite(12, this.game.height*0.5 + 190, 'textureAtlas', 'plant15').scale.x = -1;
    }
};
