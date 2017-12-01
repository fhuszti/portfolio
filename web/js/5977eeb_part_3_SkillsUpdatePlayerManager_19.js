var SkillsUpdatePlayerManager = {

	//Clone and key movements manager
    cloneMov: function() {
        if (gameVariables.currentState.cursors.right.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.x / (gameVariables.currentState.game.width *0.5)) === gameVariables.RIGHT) {
            //  Move to the right
            gameVariables.currentState.clone.body.velocity.x = 125;

            gameVariables.currentState.keyItem.x = gameVariables.currentState.clone.x + 28;
            gameVariables.currentState.keyItem.y = gameVariables.currentState.clone.y + 5;

            if (gameVariables.currentState.clone.scale.x < 0)
                gameVariables.currentState.clone.scale.x *= -1;

            if (gameVariables.currentState.keyItem.x < gameVariables.currentState.clone.x)
                gameVariables.currentState.keyItem.x += 47;

            if (gameVariables.currentState.keyItem.scale.x < 0)
                gameVariables.currentState.keyItem.scale.x *= -1;
            if (gameVariables.currentState.keyItem.angle < 0)
                gameVariables.currentState.keyItem.angle = 90;

            gameVariables.currentState.clone.animations.play('run');
        } else if (gameVariables.currentState.cursors.left.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.x / (gameVariables.currentState.game.width *0.5)) === gameVariables.LEFT) {
            //  Move to the left
            gameVariables.currentState.clone.body.velocity.x = -125;

            gameVariables.currentState.keyItem.x = gameVariables.currentState.clone.x - 28;
            gameVariables.currentState.keyItem.y = gameVariables.currentState.clone.y + 5;

            if (gameVariables.currentState.clone.scale.x > 0)
                gameVariables.currentState.clone.scale.x *= -1;

            if (gameVariables.currentState.keyItem.x > gameVariables.currentState.clone.x)
                gameVariables.currentState.keyItem.x -= 47;

            if (gameVariables.currentState.keyItem.scale.x > 0)
                gameVariables.currentState.keyItem.scale.x *= -1;
            if (gameVariables.currentState.keyItem.angle > 0)
                gameVariables.currentState.keyItem.angle = -90;

            gameVariables.currentState.clone.animations.play('run');
        } else {
            //  Stand still
            gameVariables.currentState.clone.animations.stop();
            gameVariables.currentState.clone.frameName = 'ninjaWhite1';
        }

        //So neither the clone nor the player keep going forward if the other one is blocked on his path for any reason
        if (gameVariables.currentState.player.body.touching.left || gameVariables.currentState.player.body.touching.right) {
            gameVariables.currentState.clone.body.velocity.x = 0;
            gameVariables.currentState.keyItem.body.velocity.x = 0;
        }
        if (gameVariables.currentState.clone.body.touching.left || gameVariables.currentState.clone.body.touching.right) {
            gameVariables.currentState.player.body.velocity.x = 0;
            gameVariables.currentState.keyItem.body.velocity.x = 0;
        }
    }
};
