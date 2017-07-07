var HubVisualsManager = {

	//create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the map
    behindMap: function() {
    	gameVariables.currentState.add.sprite(250, 160, 'textureAtlas', 'pine1');
        gameVariables.currentState.add.sprite(150, 220, 'textureAtlas', 'pine2');
        gameVariables.currentState.branch6 = gameVariables.currentState.add.sprite(150, 190, 'textureAtlas', 'branch6');
        gameVariables.currentState.branch6.anchor.set(0.5);
        gameVariables.currentState.branch6.angle = 180;
        gameVariables.currentState.branch10 = gameVariables.currentState.add.sprite(110, 200, 'textureAtlas', 'branch10');
        gameVariables.currentState.branch10.anchor.set(0.5);
        gameVariables.currentState.branch10.angle = -80;
        gameVariables.currentState.rock4 = gameVariables.currentState.add.sprite(100, gameVariables.currentState.game.height - 110, 'textureAtlas', 'rock4');
        gameVariables.currentState.rock4.angle = -15;
    },





    

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the signs
    //BEHIND the player
    behindSignsBehindPlayer: function() {
    	gameVariables.currentState.add.sprite(90, gameVariables.currentState.game.height - 90, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(260, gameVariables.currentState.game.height - 175, 'textureAtlas', 'plant4');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 40, gameVariables.currentState.game.height - 170, 'textureAtlas', 'plant5');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 110, gameVariables.currentState.game.height - 190, 'textureAtlas', 'plant17');
        gameVariables.currentState.branch8 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 255, gameVariables.currentState.game.height - 180, 'textureAtlas', 'branch8');
        gameVariables.currentState.add.sprite(230, gameVariables.currentState.game.height*0.5 - 140, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 120, gameVariables.currentState.game.height*0.5 - 120, 'textureAtlas', 'plant14');
        gameVariables.currentState.signPlant2 = gameVariables.currentState.add.sprite(45, gameVariables.currentState.game.height - 95, 'textureAtlas', 'plant4');
        gameVariables.currentState.signPlant2.anchor.setTo(0.5, 0);
        gameVariables.currentState.signPlant2.scale.setTo(0.5);
    },







    //Create all guidance signs
    generateSigns: function() {
    	var skillsSign = gameVariables.currentState.game.add.sprite(5, 55, 'textureAtlas', 'sign5'),
            experienceSign = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 125, 23, 'textureAtlas', 'sign4'),
            contactSign = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 50, gameVariables.currentState.game.height - 195, 'textureAtlas', 'sign4'),
            formationSign = gameVariables.currentState.game.add.sprite(15, gameVariables.currentState.game.height - 130, 'textureAtlas', 'sign5');

        skillsSign.scale.setTo(0.5);
        experienceSign.scale.setTo(0.5);
        contactSign.scale.setTo(0.5);
        formationSign.scale.setTo(0.5);

        //Adding the text next to the signs
        gameMethods.displayText(80, 60, 'skills', 'guidance');
        gameMethods.displayText(gameVariables.currentState.game.width - 150, 25, 'experience', 'guidance', 'right');
        gameMethods.displayText(gameVariables.currentState.game.width - 70, gameVariables.currentState.game.height - 140, 'contact', 'guidance', 'right');
        gameMethods.displayText(20, gameVariables.currentState.game.height - 160, 'academics', 'guidance');
    },







    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the signs
    //BEHIND the player
    frontSignsBehindPlayer: function() {
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 150, 46, 'textureAtlas', 'plant3');
        gameVariables.currentState.signPlant1 = gameVariables.currentState.add.sprite(45, 92, 'textureAtlas', 'plant4');
        gameVariables.currentState.signPlant1.anchor.setTo(0.5, 0);
        gameVariables.currentState.signPlant1.scale.setTo(0.5);
    },







    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the signs
    //IN FRONT OF the player
    frontSignsFrontPlayer: function() {
        gameVariables.currentState.waterfall = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 230, 60, 'waterfallLight');
        gameVariables.currentState.waterfall.scale.setTo(2);

        gameVariables.currentState.waterfall.animations.add('flow', Phaser.Animation.generateFrameNames('waterfallLight', 0, 31), 20, true);
        gameVariables.currentState.waterfall.animations.play('flow');


        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 10, gameVariables.currentState.game.height*0.5 - 85, 'textureAtlas', 'flower6').scale.setTo(0.3);
        gameVariables.currentState.add.sprite(250, gameVariables.currentState.game.height - 170, 'textureAtlas', 'plant6');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 280, gameVariables.currentState.game.height - 170, 'textureAtlas', 'plant6');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 100, 50, 'textureAtlas', 'plant4');
        gameVariables.currentState.add.sprite(210, gameVariables.currentState.game.height - 140, 'textureAtlas', 'plant8');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 155, gameVariables.currentState.game.height*0.5 - 120, 'textureAtlas', 'plant15');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 80, gameVariables.currentState.game.height*0.5 - 120, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5, gameVariables.currentState.game.height - 175, 'textureAtlas', 'plant18');
    }
};
