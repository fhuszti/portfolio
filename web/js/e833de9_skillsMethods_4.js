var skillsMethods = {

    /*
    CREATE
    */



    //create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the map
    behindMap: function() {
    	gameVariables.currentState.pine3 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 130, gameVariables.currentState.game.height*0.5, 'textureAtlas', 'pine2');
        gameVariables.currentState.pine3.scale.setTo(0.8);
        gameVariables.currentState.add.sprite(240, 20, 'textureAtlas', 'rock1').scale.setTo(0.7);
    },

    /*
    Display all text in the table
    */
    displayTableTitles: function(titles = []) {
        var titleHeight = 228;

        gameMethods.displayText(330, 200, 'skillsNewbie', 'bigContent', 'center');
        gameMethods.displayText(490, 200, 'skillsIntermediate', 'bigContent', 'center');
        gameMethods.displayText(640, 200, 'skillsAdvanced', 'bigContent', 'center');

        if (titles.length > 0) {
            titles.forEach(function(title) {
                gameMethods.displayText(230, titleHeight, title, 'bigContent', 'right');
                titleHeight += 50;
            });
        }
    },

    //Create the main table
    generateTable: function(items) {
    	gameMethods.displayLine(100, 205);
        gameMethods.displayLine(100, 255);
        gameMethods.displayLine(100, 305);
        gameMethods.displayLine(100, 355);
        gameMethods.displayLine(100, 405);

        gameMethods.displayLine(240, 480, 'vertical');

        this.displayTableTitles(items);
    },

    //Create the top of the chests (behind the coins)
    createTopChests: function(emptyChests = [0, 0, 0]) {
    	gameVariables.currentState.topChests = gameVariables.currentState.game.add.group();
        gameVariables.currentState.leftChest = this.generateChests('top', 'left', emptyChests[0]);
        gameVariables.currentState.centerChest = this.generateChests('top', 'center', emptyChests[1]);
        gameVariables.currentState.rightChest = this.generateChests('top', 'right', emptyChests[2]);
    },

    //Create the coins' group
    coinsGroup: function() {
        gameVariables.currentState.coins = gameVariables.currentState.game.add.group();
        gameVariables.currentState.goldCoins = gameVariables.currentState.game.add.group();
        gameVariables.currentState.silverCoins = gameVariables.currentState.game.add.group();
        gameVariables.currentState.bronzeCoins = gameVariables.currentState.game.add.group();

        gameVariables.currentState.coins.add(gameVariables.currentState.goldCoins);
        gameVariables.currentState.coins.add(gameVariables.currentState.silverCoins);
        gameVariables.currentState.coins.add(gameVariables.currentState.bronzeCoins);

        //enable physics in them
        gameVariables.currentState.goldCoins.enableBody = true;
        gameVariables.currentState.goldCoins.physicsBodyType = Phaser.Physics.ARCADE;
        gameVariables.currentState.silverCoins.enableBody = true;
        gameVariables.currentState.silverCoins.physicsBodyType = Phaser.Physics.ARCADE;
        gameVariables.currentState.bronzeCoins.enableBody = true;
        gameVariables.currentState.bronzeCoins.physicsBodyType = Phaser.Physics.ARCADE;
    },

    //Generate coins
    generateCoin: function(type, maxHeight) {
        //we get the right type of coin for the current page, star coins as default
        var coinType = 'coinStar';

        if (gameVariables.currentState.key === 'Languages')
            coinType = 'coinStar';
        if (gameVariables.currentState.key === 'Frameworks')
            coinType = 'coinHexagon';
        if (gameVariables.currentState.key === 'Others')
            coinType = 'coinDiamond';

        //we assign a coinName to the current coin to call its frames when adding animation
        //and we add the newly created coin to its group
        var coinName = coinType+type.slice(0, 1).toUpperCase()+type.slice(1),
            coin;

        if (type === 'gold')
            coin = gameVariables.currentState.goldCoins.create(640, gameVariables.currentState.game.height - 62, 'textureAtlas');
        else if (type === 'silver')
            coin = gameVariables.currentState.silverCoins.create(490, gameVariables.currentState.game.height - 62, 'textureAtlas');
        else if (type === 'bronze')
            coin = gameVariables.currentState.bronzeCoins.create(335, gameVariables.currentState.game.height - 62, 'textureAtlas');

        //adding the correct animation to the coin
        coin.animations.add('turn', Phaser.Animation.generateFrameNames(coinName, 1, 6), 10, true);

        //fine tuning the coin
        coin.minHeight = gameVariables.currentState.game.height - 62;
        coin.maxHeight = maxHeight;

        coin.scale.setTo(0.65);
        coin.anchor.setTo(0.5);
        coin.body.immovable = true;
        coin.animations.play('turn');

        coin.body.collideWorldBounds = true;

        return coin;
    },

    //Create the bottom of the chests (in front of the coins)
    createBottomChests: function() {
        gameVariables.currentState.bottomChests = gameVariables.currentState.game.add.group();
        this.generateChests('bottom');
    },

    //Generate the chests, top only or bottom only
    generateChests: function(part, side, chestEmpty = 0) {
        if (part === 'top')  {
            //two variables we'll need to decide if the chest has to already be open or not
            var animated;

            if (side === 'left') {
                var chestLeft = gameVariables.currentState.topChests.create(337, gameVariables.currentState.game.height - 90, 'textureAtlas');

                //if the chest is empty, we make it appear opened already
                if(chestEmpty === 0) {
                    chestLeft.frameName = 'chest0';
                    animated = true;
                }
                else {
                    chestLeft.frameName = 'chest1';
                    animated = false;
                }

                //now we fine tuned the sprite
                chestLeft = this.manageNewChest(chestLeft, animated);

                return chestLeft;
            }
            if (side === 'center') {
                var chestCenter = gameVariables.currentState.topChests.create(492, gameVariables.currentState.game.height - 90, 'textureAtlas');

                //if the chest is empty, we make it appear opened already
                if(chestEmpty === 0) {
                    chestCenter.frameName = 'chest0';
                    animated = true;
                }
                else {
                    chestCenter.frameName = 'chest1';
                    animated = false;
                }

                //now we fine tuned the sprite
                chestCenter = this.manageNewChest(chestCenter, animated);

                return chestCenter;
            }
            if (side === 'right') {
                var chestRight = gameVariables.currentState.topChests.create(642, gameVariables.currentState.game.height - 90, 'textureAtlas');

                //if the chest is empty, we make it appear opened already
                if(chestEmpty === 0) {
                    chestRight.frameName = 'chest0';
                    animated = true;
                }
                else {
                    chestRight.frameName = 'chest1';
                    animated = false;
                }

                //now we fine tuned the sprite
                chestRight = this.manageNewChest(chestRight, animated);

                return chestRight;
            }
        }
        if (part === 'bottom') {
            gameVariables.currentState.bottomChests.create(337, gameVariables.currentState.game.height - 60, 'textureAtlas', 'chest2');
            gameVariables.currentState.bottomChests.create(492, gameVariables.currentState.game.height - 60, 'textureAtlas', 'chest2');
            gameVariables.currentState.bottomChests.create(642, gameVariables.currentState.game.height - 60, 'textureAtlas', 'chest2');

            gameVariables.currentState.bottomChests.forEach(function(chest) {
                chest.anchor.setTo(0.5);
                chest.scale.setTo(0.85);
            });
        }
    },

    //fine tune the newly created chests
    manageNewChest: function(chest, animated) {
        if (animated) {
            chest.animations.add('open', ['chest0', 'chest1'], 10, false);
            chest.animations.add('close', ['chest1', 'chest0'], 10, false);
        }

        chest.anchor.setTo(0.5);
        chest.scale.setTo(0.85);

        return chest;
    },

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the player
    //IN FRONT OF the chests
    frontChestsBehindPlayer: function() {
    	gameVariables.currentState.rocks = gameVariables.currentState.game.add.group();
        //upper part
        gameVariables.currentState.rocks.create(175, 101, 'textureAtlas', 'rock3');
        gameVariables.currentState.rocks.create(135, 101, 'textureAtlas', 'rock3');
        gameVariables.currentState.rocks.create(195, 100, 'textureAtlas', 'rock3');
        gameVariables.currentState.rocks.create(145, 100, 'textureAtlas', 'rock3');
        gameVariables.currentState.rocks.create(95, 100, 'textureAtlas', 'rock3');
        gameVariables.currentState.rocks.create(235, 100, 'textureAtlas', 'rock3');
        gameVariables.currentState.add.sprite(570, 60, 'textureAtlas', 'plant18');
        gameVariables.currentState.add.sprite(500, 95, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(600, 95, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(630, 95, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(660, 95, 'textureAtlas', 'plant13');
        gameVariables.currentState.signPlant = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5, 95, 'textureAtlas', 'plant4');
        gameVariables.currentState.signPlant.anchor.setTo(0.5, 0);
        gameVariables.currentState.signPlant.scale.setTo(0.5);
        //lower part
        gameVariables.currentState.plant17 = gameVariables.currentState.add.sprite(45, gameVariables.currentState.game.height - 90, 'textureAtlas', 'plant17');
        gameVariables.currentState.plant17.scale.setTo(0.8);
        gameVariables.currentState.add.sprite(245, gameVariables.currentState.game.height - 55, 'textureAtlas', 'plant8');
        gameVariables.currentState.branch8 = gameVariables.currentState.add.sprite(65, gameVariables.currentState.game.height - 75, 'textureAtlas', 'branch8');
        gameVariables.currentState.flower6 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 30, gameVariables.currentState.game.height - 80, 'textureAtlas', 'flower6');
        gameVariables.currentState.flower6.scale.setTo(0.3);
        gameVariables.currentState.pine1 = gameVariables.currentState.add.sprite(10, gameVariables.currentState.game.height - 215, 'textureAtlas', 'pine1');
        gameVariables.currentState.pine1.anchor.setTo(0.5);
        gameVariables.currentState.pine2 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width + 10, gameVariables.currentState.game.height - 215, 'textureAtlas', 'pine1');
        gameVariables.currentState.pine2.anchor.setTo(0.5);
        gameVariables.currentState.chestPlant1 = gameVariables.currentState.add.sprite(315, gameVariables.currentState.game.height - 60, 'textureAtlas', 'plant4');
        gameVariables.currentState.chestPlant1.scale.setTo(0.5);
        gameVariables.currentState.chestPlant2 = gameVariables.currentState.add.sprite(473, gameVariables.currentState.game.height - 67, 'textureAtlas', 'plant3');
        gameVariables.currentState.chestPlant2.scale.setTo(0.8);
        gameVariables.currentState.chestPlant3 = gameVariables.currentState.add.sprite(610, gameVariables.currentState.game.height - 60, 'textureAtlas', 'plant4');
        gameVariables.currentState.chestPlant3.scale.setTo(0.5);
    },

    //Create all signs and guidance texts, as well as the title of the page
    generateSigns: function(title, left, right) {
    	gameMethods.displayText(gameVariables.currentState.game.width*0.5, 30, title, 'title', 'center');

        gameMethods.displayText(30, 50, left, 'guidance');
        gameMethods.displayText(gameVariables.currentState.game.width - 30, 50, right, 'guidance', 'right');

        //Create all guidance signs
        var doubleSign = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width*0.5, 80, 'textureAtlas', 'sign3');

        doubleSign.anchor.setTo(0.5);
        doubleSign.scale.setTo(0.5);
    },

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

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the chests
    //IN FRONT OF the player
    frontChestsFrontPlayer: function() {
    	//upper
        gameVariables.currentState.add.sprite(180, 110, 'textureAtlas', 'plant9').scale.setTo(0.6);
        gameVariables.currentState.add.sprite(120, 85, 'textureAtlas', 'plant11').scale.setTo(0.6);
        gameVariables.currentState.add.sprite(200, 85, 'textureAtlas', 'plant11').scale.setTo(0.6);
        gameVariables.currentState.add.sprite(70, 85, 'textureAtlas', 'plant10').scale.setTo(0.9);
        gameVariables.currentState.add.sprite(150, 85, 'textureAtlas', 'plant10').scale.setTo(0.9);
        //lower
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 150, gameVariables.currentState.game.height - 70, 'textureAtlas', 'plant6');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 30, gameVariables.currentState.game.height - 90, 'textureAtlas', 'plant17');
        gameVariables.currentState.add.sprite(500, gameVariables.currentState.game.height - 67, 'textureAtlas', 'plant5');
    },

    //Set some objects immovable so we can use them as platforms
    setImmovableObjects: function(){
    	gameVariables.currentState.rocks.forEach(function(rock) {
            rock.anchor.setTo(0.5);
            rock.body.immovable = true;
        });
        gameVariables.currentState.branch8.body.immovable = true;
    },



    /*
    *
    */




    /*
    UPDATE
    */



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
    },

    //Turn the key up
    useKey: function(key) {
        key.angle = -90;
    },

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
    }



    /*
    *
    */

};
