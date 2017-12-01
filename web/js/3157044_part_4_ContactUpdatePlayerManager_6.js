var ContactUpdatePlayerManager = {

	//Manage all movements inside the no gravity zone
    zeroGravityMov: function() {
        if (gameVariables.currentState.cursors.right.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.x / (gameVariables.currentState.game.width *0.5)) === gameMethods.RIGHT) {
            //  Move to the right
            gameVariables.currentState.player.body.velocity.x = 125;
            gameVariables.currentState.player.animations.play('run');
        } else if (gameVariables.currentState.cursors.left.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.x / (gameVariables.currentState.game.width *0.5)) === gameMethods.LEFT) {
            //  Move to the left
            gameVariables.currentState.player.body.velocity.x = -125;
            gameVariables.currentState.player.animations.play('run');
        } else {
            //  Stand still
            gameVariables.currentState.player.animations.stop();
            gameVariables.currentState.player.frameName = 'ninja1';
        }

        //Up&Down management
        if (gameVariables.currentState.cursors.up.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.y / (gameVariables.currentState.game.height *0.5)) === gameMethods.UP) {
            //  Move to the top
            gameVariables.currentState.player.body.velocity.y = -125;
            gameVariables.currentState.player.animations.play('run');
        } else if (gameVariables.currentState.cursors.down.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.x / (gameVariables.currentState.game.width *0.5)) === gameMethods.DOWN) {
            //  Move to the bottom
            gameVariables.currentState.player.body.velocity.y = 125;
            gameVariables.currentState.player.animations.play('run');
        }
    }
};
