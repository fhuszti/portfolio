var AcademicsVisualsManager = {

	//plop sprites behind the map
	behindMap: function() {
		gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 150, gameVariables.currentState.game.height*0.5 - 150, 'textureAtlas', 'pine2');
	},







    //create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the wooden panels
    //BEHIND the player
    behindPanelsBehindPlayer: function() {
    	gameVariables.currentState.add.sprite(50, gameVariables.currentState.game.height*0.5 + 35, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(90, gameVariables.currentState.game.height*0.5 + 35, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(150, gameVariables.currentState.game.height*0.5 + 35, 'textureAtlas', 'plant14');
    },





	

    //create the guidance sign and its text
    generateSigns: function() {
    	var homeSign = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 40, 45, 'textureAtlas', 'sign0');

        homeSign.scale.setTo(0.5);
        homeSign.anchor.setTo(0.5);
        
        gameMethods.displayText(gameVariables.currentState.game.width - 80, 30, 'home', 'guidance', 'right');
    },





	

    //Create a background wooden panel
    backgroundPanels: function(height, side) {
    	var bg1 = null,
            bg2 = null,
            bg3 = null;

        if(side === 'left') {
            bg1 = gameVariables.currentState.game.add.sprite(5, height, 'textureAtlas', 'sign6');
            bg2 = gameVariables.currentState.game.add.sprite(95, height, 'textureAtlas', 'sign8');
            bg3 = gameVariables.currentState.game.add.sprite(185, height, 'textureAtlas', 'sign7');
        }
        if (side === 'right') {
            bg1 = gameVariables.currentState.game.add.sprite(325, height, 'textureAtlas', 'sign6');
            bg2 = gameVariables.currentState.game.add.sprite(415, height, 'textureAtlas', 'sign8');
            bg3 = gameVariables.currentState.game.add.sprite(505, height, 'textureAtlas', 'sign7');
        }
    },

    //Create all wooden panels background
    generatePanels: function() {
    	this.backgroundPanels(gameVariables.currentState.game.height*0.5 - 150, 'left');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 - 88, 'left');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 - 26, 'left');

        this.backgroundPanels(gameVariables.currentState.game.height*0.5 + 70, 'left');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 + 132, 'left');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 + 194, 'left');

        this.backgroundPanels(gameVariables.currentState.game.height*0.5 - 150, 'right');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 - 88, 'right');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 - 26, 'right');

        this.backgroundPanels(gameVariables.currentState.game.height*0.5 + 70, 'right');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 + 132, 'right');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 + 194, 'right');

        //Adding the panel behind the title
        var titlePanel3 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width/3 + 28, 105, 'textureAtlas', 'sign1'),
            titlePanel1 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width/3 - 45, 105, 'textureAtlas', 'sign1'),
            titlePanel2 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width/3 + 114, 105, 'textureAtlas', 'sign2');
        titlePanel1.anchor.setTo(0.5);
        titlePanel2.anchor.setTo(0.5);
        titlePanel3.anchor.setTo(0.5);
        titlePanel1.scale.setTo(0.9);
        titlePanel2.scale.setTo(0.9);
        titlePanel3.scale.setTo(0.9);
    },





	

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the wooden panels
    //BEHIND the player
    frontPanelsBehindPlayer: function() {
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 150, gameVariables.currentState.game.height - 140, 'textureAtlas', 'plant3');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 80, gameVariables.currentState.game.height - 140, 'textureAtlas', 'plant3');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 120, gameVariables.currentState.game.height - 140, 'textureAtlas', 'plant5');
    },





	

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the wooden panels
    //IN FRONT OF the player
    frontPanelsFrontPlayer: function() {
    	gameVariables.currentState.liane1 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 130, 30, 'textureAtlas', 'plant15');
        gameVariables.currentState.liane1.angle = -45;
        gameVariables.currentState.add.sprite(75, 30, 'textureAtlas', 'plant16');
        gameVariables.currentState.add.sprite(5, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(45, 0, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(75, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 250, 0, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 220, 0, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 190, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 150, 0, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 120, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 80, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 25, 0, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 55, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 95, 0, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 125, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 205, 0, 'textureAtlas', 'plant14').scale.x = -1;
        gameVariables.currentState.plant12 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 200, 135, 'textureAtlas', 'plant12');
        gameVariables.currentState.plant12.scale.setTo(-0.7, 0.7);
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 250, 105, 'textureAtlas', 'plant11').scale.setTo(0.7);
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 220, 105, 'textureAtlas', 'plant10');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 60, 105, 'textureAtlas', 'plant10');

	    gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 195, 10, 'textureAtlas', 'plant16');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 195, gameVariables.currentState.game.height*0.5 - 140, 'textureAtlas', 'plant15');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 195, gameVariables.currentState.game.height*0.5 - 60, 'textureAtlas', 'plant16');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 195, gameVariables.currentState.game.height*0.5 + 100, 'textureAtlas', 'plant16');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 195, gameVariables.currentState.game.height*0.5 + 180, 'textureAtlas', 'plant15');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 195, gameVariables.currentState.game.height*0.5 + 260, 'textureAtlas', 'plant16');
        gameVariables.currentState.rightHorizLiane1 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 200, gameVariables.currentState.game.height*0.5 + 88, 'textureAtlas', 'plant15');
        gameVariables.currentState.rightHorizLiane1.scale.x = -1;
        gameVariables.currentState.rightHorizLiane1.angle = 90;
        gameVariables.currentState.rightHorizLiane2 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 83, gameVariables.currentState.game.height*0.5 + 261, 'textureAtlas', 'plant15');
        gameVariables.currentState.rightHorizLiane2.scale.y = -1;
        gameVariables.currentState.rightHorizLiane2.angle = 90;
        gameVariables.currentState.plant12 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 200, gameVariables.currentState.game.height*0.5 + 30, 'textureAtlas', 'plant12');
        gameVariables.currentState.plant12.angle = 40;
        gameVariables.currentState.plant12.scale.setTo(0.6);
        gameVariables.currentState.liane3 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 85, gameVariables.currentState.game.height*0.5 - 150, 'textureAtlas', 'plant15');
        gameVariables.currentState.liane3.angle = 50;
        gameVariables.currentState.liane3.scale.setTo(1.1);
        gameVariables.currentState.liane4 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 25, gameVariables.currentState.game.height*0.5 - 93, 'textureAtlas', 'plant15');
        gameVariables.currentState.liane4.angle = 75;
        gameVariables.currentState.liane4.scale.y = 1.2;
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 55, gameVariables.currentState.game.height*0.5 - 143, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 85, gameVariables.currentState.game.height*0.5 - 143, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 115, gameVariables.currentState.game.height*0.5 - 143, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 155, gameVariables.currentState.game.height*0.5 - 143, 'textureAtlas', 'plant14');

        gameVariables.currentState.plant9right = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 60, gameVariables.currentState.game.height*0.5 + 150, 'textureAtlas', 'plant9');
        gameVariables.currentState.plant9right.anchor.setTo(0.5);
        gameVariables.currentState.plant9right.scale.setTo(-0.7, 0.7);
        gameVariables.currentState.plant9right.angle = -60;
        gameVariables.currentState.plant9left = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 135, gameVariables.currentState.game.height*0.5 + 50, 'textureAtlas', 'plant9');
        gameVariables.currentState.plant9left.anchor.setTo(0.5);
        gameVariables.currentState.plant9left.scale.setTo(0.6);
        gameVariables.currentState.plant9left.angle = 60;
        gameVariables.currentState.leftHorizLiane1 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 120, gameVariables.currentState.game.height*0.5 + 261, 'textureAtlas', 'plant15');
        gameVariables.currentState.leftHorizLiane1.angle = 90;
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 70, gameVariables.currentState.game.height*0.5 - 145, 'textureAtlas', 'plant15').scale.x = -1;
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 70, gameVariables.currentState.game.height*0.5 - 80, 'textureAtlas', 'plant16').scale.x = -1;
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 70, gameVariables.currentState.game.height*0.5 - 30, 'textureAtlas', 'plant15').scale.x = -1;
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 70, gameVariables.currentState.game.height*0.5 + 30, 'textureAtlas', 'plant16').scale.x = -1;
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 125, gameVariables.currentState.game.height*0.5 - 145, 'textureAtlas', 'plant16');
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 125, gameVariables.currentState.game.height*0.5 - 10, 'textureAtlas', 'plant16');
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 125, gameVariables.currentState.game.height*0.5 + 60, 'textureAtlas', 'plant15');
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 125, gameVariables.currentState.game.height*0.5 + 130, 'textureAtlas', 'plant16');
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 125, gameVariables.currentState.game.height*0.5 + 190, 'textureAtlas', 'plant16');

        gameVariables.currentState.leftHorizLiane2 = gameVariables.currentState.add.sprite(10, gameVariables.currentState.game.height*0.5 + 261, 'textureAtlas', 'plant15');
        gameVariables.currentState.leftHorizLiane2.scale.y = -1;
        gameVariables.currentState.leftHorizLiane2.angle = 90;
        gameVariables.currentState.add.sprite(12, 10, 'textureAtlas', 'plant16').scale.x = -1;
        gameVariables.currentState.add.sprite(12, 80, 'textureAtlas', 'plant15').scale.x = -1;
    	gameVariables.currentState.add.sprite(12, gameVariables.currentState.game.height*0.5 - 60, 'textureAtlas', 'plant16').scale.x = -1;
    	gameVariables.currentState.add.sprite(12, gameVariables.currentState.game.height*0.5 + 100, 'textureAtlas', 'plant16').scale.x = -1;
    	gameVariables.currentState.add.sprite(12, gameVariables.currentState.game.height*0.5 + 190, 'textureAtlas', 'plant15').scale.x = -1;
    }
};
