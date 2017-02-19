var HomeGame = HomeGame || {};

HomeGame.Languages = function() {};

HomeGame.Languages.prototype = {
    create: function() {
        generalFunctions.addBackground(this);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        skillsFunctions.behindMap(this);

        //Adding the table
        skillsFunctions.generateTable(['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']);

        //Initial map setup
        generalFunctions.mapSetup(this, 'skillsMap');

        //Create the top of the chests (behind the coins)
        skillsFunctions.createTopChests(this, [1, 0, 0]);

        //Create the coins
        skillsFunctions.coinsGroup(this);

        skillsFunctions.generateCoin(this, 'gold', 352);
        skillsFunctions.generateCoin(this, 'gold', 300);
        skillsFunctions.generateCoin(this, 'gold', 250);
        skillsFunctions.generateCoin(this, 'silver', 450);
        skillsFunctions.generateCoin(this, 'silver', 402);

        //Create the bottom of the chests (in front of the coins)
        skillsFunctions.createBottomChests(this);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        //IN FRONT OF the chests
        skillsFunctions.frontChestsBehindPlayer(this);

        //Adding the adequate title and signs
        skillsFunctions.generateSigns(this, 'languages', 'frameworks', 'home');

        //create player at different places depending where the visitor was before
        skillsFunctions.createPlayer(this);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the chests
        //IN FRONT OF the player
        skillsFunctions.frontChestsFrontPlayer(this);

        //setting physics for the player and things other than platforms
        this.game.physics.arcade.enable(this.player);
        this.game.physics.arcade.enable(this.clone);
        this.game.physics.arcade.enable(this.keyItem);
        this.game.physics.arcade.enable(this.rocks);
        this.game.physics.arcade.enable(this.branch8);

        //fine tune some player parameters now that everything has a physical body
        generalFunctions.playerSetup(this);
        skillsFunctions.cloneSetup(this);

        //Set some objects immovable so we can use them as platforms
        skillsFunctions.setImmovableObjects(this);

        generalFunctions.previousState = 'languages';
    },

    update: function() {
        //collisions
        this.game.physics.arcade.collide(this.player, this.blockedLayer);
        this.game.physics.arcade.collide(this.clone, this.blockedLayer);
        this.game.physics.arcade.collide(this.keyItem, this.blockedLayer);

        this.game.physics.arcade.collide(this.player, this.rocks);

        this.game.physics.arcade.collide(this.clone, this.branch8);
        this.game.physics.arcade.collide(this.keyItem, this.branch8);

        //Player movements management
        generalFunctions.playerMov(this);
        skillsFunctions.cloneMov(this);

        //Checking for the coins
	skillsFunctions.manageCoins(this, this.clone.x);

        //Stopping the coins at the right time
        skillsFunctions.stopCoins(this);

        //Checking for the chests
	skillsFunctions.checkChests(this);

        //Going to another map
        if (this.player.x < 20 && this.player.y < 150) {
      	    this.game.state.start('Frameworks');
    	}
        if (this.player.x > this.game.width - 20 && this.player.y < 150) {
      	    this.game.state.start('Game');
    	}
    }
};
