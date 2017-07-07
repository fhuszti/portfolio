var SkillsPlayerManager = {

	//Generate the player, clone and key
    createPlayer: function() {
    	if((gameVariables.currentState.key === 'Languages' && gameVariables.previousState === 'frameworks') || (gameVariables.currentState.key === 'Frameworks' && gameVariables.previousState === 'others')) {
    	    gameVariables.currentState.player = gameVariables.currentState.game.add.sprite(50, 100, 'textureAtlas', 'ninja1');
            gameVariables.currentState.clone = gameVariables.currentState.game.add.sprite(50, gameVariables.currentState.game.height - 60, 'textureAtlas', 'ninjaWhite1');

            gameVariables.currentState.keyItem = gameVariables.currentState.game.add.sprite(73, gameVariables.currentState.game.height - 57, 'textureAtlas', 'key');

            //Fitting the key
            gameVariables.currentState.keyItem.anchor.setTo(0.5);
            gameVariables.currentState.keyItem.scale.setTo(0.8);
            gameVariables.currentState.keyItem.angle = 90;
    	}
    	else {
    	    gameVariables.currentState.player = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 50, 100, 'textureAtlas', 'ninja1');
            gameVariables.currentState.clone = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 50, gameVariables.currentState.game.height - 60, 'textureAtlas', 'ninjaWhite1');

            gameVariables.currentState.keyItem = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 73, gameVariables.currentState.game.height - 57, 'textureAtlas', 'key');

            //reverse the sprite so the player starts facing the right way
            gameVariables.currentState.player.scale.x = -1;
            gameVariables.currentState.clone.scale.x = -1;

            //Fitting the key
            gameVariables.currentState.keyItem.anchor.setTo(0.5);
            gameVariables.currentState.keyItem.scale.setTo(0.8);
            gameVariables.currentState.keyItem.angle = -90;
            gameVariables.currentState.keyItem.scale.x *= -1;
    	}
    },







    //fine tune some player parameters now that the clone and the key have a physical body
    cloneSetup: function() {
    	gameVariables.currentState.clone.body.collideWorldBounds = true;

        //to prevent the player from "floating" above the ground, reducing its physical body size to ease collisions
        gameVariables.currentState.clone.body.setSize(30, 25);
        gameVariables.currentState.keyItem.body.setSize(5, 35);

        //player gravity
        gameVariables.currentState.clone.body.gravity.y = 1700;
        gameVariables.currentState.keyItem.body.gravity.y = 1700;

        //Animations
        gameVariables.currentState.clone.anchor.setTo(0.5);
        gameVariables.currentState.clone.animations.add('run', Phaser.Animation.generateFrameNames('ninjaWhite', 1, 6), 15, true);

        //move player with cursor keys
        gameVariables.currentState.cursors = gameVariables.currentState.game.input.keyboard.createCursorKeys();
    }
};
