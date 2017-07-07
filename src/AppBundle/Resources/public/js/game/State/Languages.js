var HomeGame = HomeGame || {};

HomeGame.Languages = function() {};

HomeGame.Languages.prototype = {
    create: function() {
        gameMethods.addBackground(this);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        skillsMethods.behindMap(this);

        //Adding the table
        skillsMethods.generateTable(['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']);

        //Initial map setup
        gameMethods.mapSetup(this, 'skillsMap');

        //Create the top of the chests (behind the coins)
        skillsMethods.createTopChests(this, [1, 0, 0]);

        //Create the coins
        skillsMethods.coinsGroup(this);

        skillsMethods.generateCoin(this, 'gold', 352);
        skillsMethods.generateCoin(this, 'gold', 300);
        skillsMethods.generateCoin(this, 'gold', 250);
        skillsMethods.generateCoin(this, 'silver', 450);
        skillsMethods.generateCoin(this, 'silver', 402);

        //Create the bottom of the chests (in front of the coins)
        skillsMethods.createBottomChests(this);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        //IN FRONT OF the chests
        skillsMethods.frontChestsBehindPlayer(this);

        //Adding the adequate title and signs
        skillsMethods.generateSigns(this, 'languages', 'frameworks', 'home');

        //create player at different places depending where the visitor was before
        skillsMethods.createPlayer(this);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the chests
        //IN FRONT OF the player
        skillsMethods.frontChestsFrontPlayer(this);

        //setting physics for the player and things other than platforms
        this.game.physics.arcade.enable(this.player);
        this.game.physics.arcade.enable(this.clone);
        this.game.physics.arcade.enable(this.keyItem);
        this.game.physics.arcade.enable(this.rocks);
        this.game.physics.arcade.enable(this.branch8);

        //fine tune some player parameters now that everything has a physical body
        gameMethods.playerSetup(this);
        skillsMethods.cloneSetup(this);

        //Set some objects immovable so we can use them as platforms
        skillsMethods.setImmovableObjects(this);

        gameVariables.previousState = 'languages';
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
        gameMethods.playerMov(this);
        skillsMethods.cloneMov(this);

        //Checking for the coins
	    skillsMethods.manageCoins(this, this.clone.x);

        //Stopping the coins at the right time
        skillsMethods.stopCoins(this);

        //Checking for the chests
	    skillsMethods.checkChests(this);

        //Going to another map
        if (this.player.x < 20 && this.player.y < 150) {
      	    this.game.state.start('Frameworks');
    	}
        if (this.player.x > this.game.width - 20 && this.player.y < 150) {
      	    this.game.state.start('Hub');
    	}
    }
};
