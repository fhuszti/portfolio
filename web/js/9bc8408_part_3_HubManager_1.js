var HubManager = {

    generateHub: function(state) {
    	generalFunctions.addBackground(state);

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        state.behindMap();

        //Initial map setup
        generalFunctions.mapSetup(state, 'homeMap');

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        state.behindSignsBehindPlayer();

        //adding a title to the homepage
        generalFunctions.displayText(state.game.width*0.5, 100, 'home', 'title', 'center');

        //Create all guidance signs
        state.generateSigns();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        //IN FRONT OF the signs
        state.frontSignsBehindPlayer();

        //create player at different places depending where the visitor was before
        state.createPlayer();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the player
        state.frontSignsFrontPlayer();

        //setting physics for the player and things other than platforms
        state.game.physics.arcade.enable([state.player, state.branch8]);
        state.branch8.body.immovable = true;

        //fine tune some player parameters now that the player has a physical body
    	generalFunctions.playerSetup(state);
    }
};
