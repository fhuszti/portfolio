var HubManager = {

    generateHub: function(state) {
    	gameMethods.addBackground(state);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        HubVisualsManager.behindMap(state);

        //Initial map setup
        gameMethods.mapSetup(state, 'homeMap');

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        HubVisualsManager.behindSignsBehindPlayer(state);

        //adding a title to the homepage
        gameMethods.displayText(state.game.width*0.5, 100, 'home', 'title', 'center');

        //Create all guidance signs
        HubVisualsManager.generateSigns(state);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        //IN FRONT OF the signs
        HubVisualsManager.frontSignsBehindPlayer(state);

        //create player at different places depending where the visitor was before
        HubPlayerManager.createPlayer(state);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the player
        HubVisualsManager.frontSignsFrontPlayer(state);

        //setting physics for the player and things other than platforms
        state.game.physics.arcade.enable([state.player, state.branch8]);
        state.branch8.body.immovable = true;

        //fine tune some player parameters now that the player has a physical body
    	gameMethods.playerSetup(state);
    },







    updateHub: function(state) {
        //collisions
        state.game.physics.arcade.collide(state.player, state.blockedLayer);
        state.game.physics.arcade.collide(state.player, state.branch8);

        //Player movements management
        gameMethods.playerMov(state);

        if (state.player.x < 20 && state.player.y < 150) {
            state.game.state.start('Languages');
        }
        if (state.player.x < 20 && state.player.y > state.game.height - 150) {
            state.game.state.start('Academics');
        }
        if (state.player.x > state.game.width - 20 && state.player.y < 150) {
            state.game.state.start('Experience');
        }
        if (state.player.x > state.game.width - 20 && state.player.y > state.game.height - 250) {
            state.game.state.start('Contact');
        }
    }
};
