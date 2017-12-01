var HubVisualsManager = {

	//create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the map
    behindMap: function(state) {
    	state.add.sprite(250, 160, 'textureAtlas', 'pine1');
        state.add.sprite(150, 220, 'textureAtlas', 'pine2');
        state.branch6 = state.add.sprite(150, 190, 'textureAtlas', 'branch6');
        state.branch6.anchor.set(0.5);
        state.branch6.angle = 180;
        state.branch10 = state.add.sprite(110, 200, 'textureAtlas', 'branch10');
        state.branch10.anchor.set(0.5);
        state.branch10.angle = -80;
        state.rock4 = state.add.sprite(100, state.game.height - 110, 'textureAtlas', 'rock4');
        state.rock4.angle = -15;
    },





    

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the signs
    //BEHIND the player
    behindSignsBehindPlayer: function(state) {
    	state.add.sprite(90, state.game.height - 90, 'textureAtlas', 'plant14');
        state.add.sprite(260, state.game.height - 175, 'textureAtlas', 'plant4');
        state.add.sprite(state.game.width - 40, state.game.height - 170, 'textureAtlas', 'plant5');
        state.add.sprite(state.game.width*0.5 + 110, state.game.height - 190, 'textureAtlas', 'plant17');
        state.branch8 = state.add.sprite(state.game.width - 255, state.game.height - 180, 'textureAtlas', 'branch8');
        state.add.sprite(230, state.game.height*0.5 - 140, 'textureAtlas', 'plant13');
        state.add.sprite(state.game.width*0.5 + 120, state.game.height*0.5 - 120, 'textureAtlas', 'plant14');
        state.signPlant2 = state.add.sprite(45, state.game.height - 95, 'textureAtlas', 'plant4');
        state.signPlant2.anchor.setTo(0.5, 0);
        state.signPlant2.scale.setTo(0.5);
    },







    //Create all guidance signs
    generateSigns: function(state) {
    	var skillsSign = state.game.add.sprite(5, 55, 'textureAtlas', 'sign5'),
            experienceSign = state.game.add.sprite(state.game.width - 125, 23, 'textureAtlas', 'sign4'),
            contactSign = state.game.add.sprite(state.game.width - 50, state.game.height - 195, 'textureAtlas', 'sign4'),
            formationSign = state.game.add.sprite(15, state.game.height - 130, 'textureAtlas', 'sign5');

        skillsSign.scale.setTo(0.5);
        experienceSign.scale.setTo(0.5);
        contactSign.scale.setTo(0.5);
        formationSign.scale.setTo(0.5);

        //Adding the text next to the signs
        generalFunctions.displayText(80, 60, 'skills', 'guidance');
        generalFunctions.displayText(state.game.width - 150, 25, 'experience', 'guidance', 'right');
        generalFunctions.displayText(state.game.width - 70, state.game.height - 140, 'contact', 'guidance', 'right');
        generalFunctions.displayText(20, state.game.height - 160, 'academics', 'guidance');
    },







    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the signs
    //BEHIND the player
    frontSignsBehindPlayer: function(state) {
    	state.add.sprite(state.game.width - 150, 46, 'textureAtlas', 'plant3');
        state.signPlant1 = state.add.sprite(45, 92, 'textureAtlas', 'plant4');
        state.signPlant1.anchor.setTo(0.5, 0);
        state.signPlant1.scale.setTo(0.5);
    },







    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the signs
    //IN FRONT OF the player
    frontSignsFrontPlayer: function(state) {
        state.waterfall = state.game.add.sprite(state.game.width - 230, 60, 'waterfallLight');
        state.waterfall.scale.setTo(2);

        state.waterfall.animations.add('flow', Phaser.Animation.generateFrameNames('waterfallLight', 0, 31), 20, true);
        state.waterfall.animations.play('flow');


        state.add.sprite(state.game.width*0.5 - 10, state.game.height*0.5 - 85, 'textureAtlas', 'flower6').scale.setTo(0.3);
        state.add.sprite(250, state.game.height - 170, 'textureAtlas', 'plant6');
        state.add.sprite(state.game.width - 280, state.game.height - 170, 'textureAtlas', 'plant6');
        state.add.sprite(state.game.width - 100, 50, 'textureAtlas', 'plant4');
        state.add.sprite(210, state.game.height - 140, 'textureAtlas', 'plant8');
        state.add.sprite(state.game.width*0.5 + 155, state.game.height*0.5 - 120, 'textureAtlas', 'plant15');
        state.add.sprite(state.game.width*0.5 + 80, state.game.height*0.5 - 120, 'textureAtlas', 'plant14');
        state.add.sprite(state.game.width*0.5, state.game.height - 175, 'textureAtlas', 'plant18');
    }
};
