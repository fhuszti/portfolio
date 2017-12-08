var SkillsUpdateContentManager = {

    //Checking on the different coins at any given time
    //+30 modifier on x to take length of the key into account
    manageCoins: function(x) {
        //if the player is at the start of the map
        if (x > 640 + 35) {
            gameVariables.currentState.coins.forEach(function(coinsGroup) {
                coinsGroup.forEach(function(coin) {
                    if (coin.y <= coin.maxHeight)
                        coin.y += 1;
                    if (coin.y <= coin.maxHeight + 1 || coin.body.velocity.y === -100)
                        coin.body.velocity.y = 100;
                });
            });
        }
        //if the player is after "Advanced"
        else if (x <= 640 + 35 && x > 490 + 35) {
            gameVariables.currentState.goldCoins.forEach(function(coin) {
                if (coin.y >= coin.minHeight)
                    coin.y -= 1;
                if (coin.body.velocity.y === 100 || coin.y >= coin.minHeight - 1)
                    coin.body.velocity.y = -100;
            });

            gameVariables.currentState.silverCoins.forEach(function(coin) {
                if (coin.y <= coin.maxHeight)
                    coin.y += 1;
                if (coin.y <= coin.maxHeight + 1 || coin.body.velocity.y === -100)
                    coin.body.velocity.y = 100;
            });

            gameVariables.currentState.bronzeCoins.forEach(function(coin) {
                if (coin.y <= coin.maxHeight)
                    coin.y += 1;
                if (coin.y <= coin.maxHeight + 1 || coin.body.velocity.y === -100)
                    coin.body.velocity.y = 100;
            });
        }
        //if the player is after "Intermediate"
        else if (x <= 490 + 35 && x > 335 + 35) {
            gameVariables.currentState.goldCoins.forEach(function(coin) {
                if (coin.y >= coin.minHeight)
                    coin.y -= 1;
                if (coin.body.velocity.y === 100 || coin.y >= coin.minHeight - 1)
                    coin.body.velocity.y = -100;
            });

            gameVariables.currentState.silverCoins.forEach(function(coin) {
                if (coin.y >= coin.minHeight)
                    coin.y -= 1;
                if (coin.body.velocity.y === 100 || coin.y >= coin.minHeight - 1)
                    coin.body.velocity.y = -100;
            });

            gameVariables.currentState.bronzeCoins.forEach(function(coin) {
                if (coin.y <= coin.maxHeight)
                    coin.y += 1;
                if (coin.y <= coin.maxHeight + 1 || coin.body.velocity.y === -100)
                    coin.body.velocity.y = 100;
            });
        }
        //if the player is at the end of the map
        else {
            gameVariables.currentState.coins.forEach(function(coinsGroup) {
                coinsGroup.forEach(function(coin) {
                    if (coin.y >= coin.minHeight)
                        coin.y -= 1;
                    if (coin.body.velocity.y === 100 || coin.y >= coin.minHeight - 1)
                        coin.body.velocity.y = -100;
                });
            });
        }
    },







    //Stop coins when needed
    stopCoins: function() {
        gameVariables.currentState.coins.forEach(function(coinsGroup) {
            coinsGroup.forEach(function(coin) {
                if (coin.y <= coin.maxHeight || coin.y >= coin.minHeight)
                    coin.body.velocity.y = 0;
            });
        });
    },







    //Turn the key up
    useKey: function(key) {
        key.angle = -90;
    },

    //Open or close chests when needed
    checkChests: function() {
        var goldUp = false,
            silverUp = false,
            bronzeUp = false;

        //Checking the gold coins chest
        gameVariables.currentState.goldCoins.forEach(function(coin) {
            if (coin.y < coin.minHeight)
                goldUp = true;
        });
        if (goldUp) {
            if (gameVariables.currentState.rightChest.frameName === 'chest0') {
                gameVariables.currentState.rightChest.animations.play('open');
                gameVariables.currentState.keyItem.angle = 0;
                setTimeout(this.useKey, 200, gameVariables.currentState.keyItem);
            }
        }
        if (!goldUp) {
            if (gameVariables.currentState.rightChest.frameName === 'chest1')
                gameVariables.currentState.rightChest.animations.play('close');
        }

        //Checking the silver coins chest
        gameVariables.currentState.silverCoins.forEach(function(coin) {
            if (coin.y < coin.minHeight)
                silverUp = true;
        });
        if (silverUp) {
            if (gameVariables.currentState.centerChest.frameName === 'chest0') {
                gameVariables.currentState.centerChest.animations.play('open');
                gameVariables.currentState.keyItem.angle = 0;
                setTimeout(this.useKey, 200, gameVariables.currentState.keyItem);
            }
        }
        if (!silverUp) {
            if (gameVariables.currentState.centerChest.frameName === 'chest1')
                gameVariables.currentState.centerChest.animations.play('close');
        }

        //Checking the bronze coins chest
        gameVariables.currentState.bronzeCoins.forEach(function(coin) {
            if (coin.y < coin.minHeight)
                bronzeUp = true;
        });
        if (bronzeUp) {
            if (gameVariables.currentState.leftChest.frameName === 'chest0') {
                gameVariables.currentState.leftChest.animations.play('open');
                gameVariables.currentState.keyItem.angle = 0;
                setTimeout(this.useKey, 200, gameVariables.currentState.keyItem);
            }
        }
        if (!bronzeUp) {
            if (gameVariables.currentState.leftChest.frameName === 'chest1')
                gameVariables.currentState.leftChest.animations.play('close');
        }
    }
};
