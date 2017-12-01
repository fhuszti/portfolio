var skillsMethods = {

    /*
    CREATE
    */



    //create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the map
    behindMap: function(state) {
    	state.pine3 = state.add.sprite(state.game.width - 130, state.game.height*0.5, 'textureAtlas', 'pine2');
        state.pine3.scale.setTo(0.8);
        state.add.sprite(240, 20, 'textureAtlas', 'rock1').scale.setTo(0.7);
    },

    /*
    Display all text in the table
    */
    displayTableTitles: function(titles = []) {
        var titleHeight = 228;

        this.displayText(330, 200, 'skillsNewbie', 'bigContent', 'center');
        this.displayText(490, 200, 'skillsIntermediate', 'bigContent', 'center');
        this.displayText(640, 200, 'skillsAdvanced', 'bigContent', 'center');

        if (titles.length > 0) {
            titles.forEach(function(title) {
                this.displayText(230, titleHeight, title, 'bigContent', 'right');
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
    createTopChests: function(state, emptyChests = [0, 0, 0]) {
    	state.topChests = state.game.add.group();
        state.leftChest = this.generateChests(state, 'top', 'left', emptyChests[0]);
        state.centerChest = this.generateChests(state, 'top', 'center', emptyChests[1]);
        state.rightChest = this.generateChests(state, 'top', 'right', emptyChests[2]);
    },

    //Create the coins' group
    coinsGroup: function(state) {
        state.coins = state.game.add.group();
        state.goldCoins = state.game.add.group();
        state.silverCoins = state.game.add.group();
        state.bronzeCoins = state.game.add.group();

        state.coins.add(state.goldCoins);
        state.coins.add(state.silverCoins);
        state.coins.add(state.bronzeCoins);

        //enable physics in them
        state.goldCoins.enableBody = true;
        state.goldCoins.physicsBodyType = Phaser.Physics.ARCADE;
        state.silverCoins.enableBody = true;
        state.silverCoins.physicsBodyType = Phaser.Physics.ARCADE;
        state.bronzeCoins.enableBody = true;
        state.bronzeCoins.physicsBodyType = Phaser.Physics.ARCADE;
    },

    //Generate coins
    generateCoin: function(state, type, maxHeight) {
        //we get the right type of coin for the current page, star coins as default
        var coinType = 'coinStar';

        if (state.key === 'Languages')
            coinType = 'coinStar';
        if (state.key === 'Frameworks')
            coinType = 'coinHexagon';
        if (state.key === 'Others')
            coinType = 'coinDiamond';

        //we assign a coinName to the current coin to call its frames when adding animation
        //and we add the newly created coin to its group
        var coinName = coinType+type.slice(0, 1).toUpperCase()+type.slice(1),
            coin;

        if (type === 'gold')
            coin = state.goldCoins.create(640, state.game.height - 62, 'textureAtlas');
        else if (type === 'silver')
            coin = state.silverCoins.create(490, state.game.height - 62, 'textureAtlas');
        else if (type === 'bronze')
            coin = state.bronzeCoins.create(335, state.game.height - 62, 'textureAtlas');

        //adding the correct animation to the coin
        coin.animations.add('turn', Phaser.Animation.generateFrameNames(coinName, 1, 6), 10, true);

        //fine tuning the coin
        coin.minHeight = state.game.height - 62;
        coin.maxHeight = maxHeight;

        coin.scale.setTo(0.65);
        coin.anchor.setTo(0.5);
        coin.body.immovable = true;
        coin.animations.play('turn');

        coin.body.collideWorldBounds = true;

        return coin;
    },

    //Create the bottom of the chests (in front of the coins)
    createBottomChests: function(state) {
        state.bottomChests = state.game.add.group();
        this.generateChests(state, 'bottom');
    },

    //Generate the chests, top only or bottom only
    generateChests: function(state, part, side, chestEmpty = 0) {
        if (part === 'top')  {
            //two variables we'll need to decide if the chest has to already be open or not
            var animated;

            if (side === 'left') {
                var chestLeft = state.topChests.create(337, state.game.height - 90, 'textureAtlas');

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
                var chestCenter = state.topChests.create(492, state.game.height - 90, 'textureAtlas');

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
                var chestRight = state.topChests.create(642, state.game.height - 90, 'textureAtlas');

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
            state.bottomChests.create(337, state.game.height - 60, 'textureAtlas', 'chest2');
            state.bottomChests.create(492, state.game.height - 60, 'textureAtlas', 'chest2');
            state.bottomChests.create(642, state.game.height - 60, 'textureAtlas', 'chest2');

            state.bottomChests.forEach(function(chest) {
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
    frontChestsBehindPlayer: function(state) {
    	state.rocks = state.game.add.group();
        //upper part
        state.rocks.create(175, 101, 'textureAtlas', 'rock3');
        state.rocks.create(135, 101, 'textureAtlas', 'rock3');
        state.rocks.create(195, 100, 'textureAtlas', 'rock3');
        state.rocks.create(145, 100, 'textureAtlas', 'rock3');
        state.rocks.create(95, 100, 'textureAtlas', 'rock3');
        state.rocks.create(235, 100, 'textureAtlas', 'rock3');
        state.add.sprite(570, 60, 'textureAtlas', 'plant18');
        state.add.sprite(500, 95, 'textureAtlas', 'plant14');
        state.add.sprite(600, 95, 'textureAtlas', 'plant13');
        state.add.sprite(630, 95, 'textureAtlas', 'plant14');
        state.add.sprite(660, 95, 'textureAtlas', 'plant13');
        state.signPlant = state.add.sprite(state.game.width*0.5, 95, 'textureAtlas', 'plant4');
        state.signPlant.anchor.setTo(0.5, 0);
        state.signPlant.scale.setTo(0.5);
        //lower part
        state.plant17 = state.add.sprite(45, state.game.height - 90, 'textureAtlas', 'plant17');
        state.plant17.scale.setTo(0.8);
        state.add.sprite(245, state.game.height - 55, 'textureAtlas', 'plant8');
        state.branch8 = state.add.sprite(65, state.game.height - 75, 'textureAtlas', 'branch8');
        state.flower6 = state.add.sprite(state.game.width - 30, state.game.height - 80, 'textureAtlas', 'flower6');
        state.flower6.scale.setTo(0.3);
        state.pine1 = state.add.sprite(10, state.game.height - 215, 'textureAtlas', 'pine1');
        state.pine1.anchor.setTo(0.5);
        state.pine2 = state.add.sprite(state.game.width + 10, state.game.height - 215, 'textureAtlas', 'pine1');
        state.pine2.anchor.setTo(0.5);
        state.chestPlant1 = state.add.sprite(315, state.game.height - 60, 'textureAtlas', 'plant4');
        state.chestPlant1.scale.setTo(0.5);
        state.chestPlant2 = state.add.sprite(473, state.game.height - 67, 'textureAtlas', 'plant3');
        state.chestPlant2.scale.setTo(0.8);
        state.chestPlant3 = state.add.sprite(610, state.game.height - 60, 'textureAtlas', 'plant4');
        state.chestPlant3.scale.setTo(0.5);
    },

    //Create all signs and guidance texts, as well as the title of the page
    generateSigns: function(state, title, left, right) {
    	gameMethods.displayText(state.game.width*0.5, 30, title, 'title', 'center');

        gameMethods.displayText(30, 50, left, 'guidance');
        gameMethods.displayText(state.game.width - 30, 50, right, 'guidance', 'right');

        //Create all guidance signs
        var doubleSign = state.game.add.sprite(state.game.width*0.5, 80, 'textureAtlas', 'sign3');

        doubleSign.anchor.setTo(0.5);
        doubleSign.scale.setTo(0.5);
    },

    //Generate the player, clone and key
    createPlayer: function(state) {
    	if((state.key === 'Languages' && gameVariables.previousState === 'frameworks') || (state.key === 'Frameworks' && gameVariables.previousState === 'others')) {
    	    state.player = state.game.add.sprite(50, 100, 'textureAtlas', 'ninja1');
            state.clone = state.game.add.sprite(50, state.game.height - 60, 'textureAtlas', 'ninjaWhite1');

            state.keyItem = state.game.add.sprite(73, state.game.height - 57, 'textureAtlas', 'key');

            //Fitting the key
            state.keyItem.anchor.setTo(0.5);
            state.keyItem.scale.setTo(0.8);
            state.keyItem.angle = 90;
    	}
    	else {
    	    state.player = state.game.add.sprite(state.game.width - 50, 100, 'textureAtlas', 'ninja1');
            state.clone = state.game.add.sprite(state.game.width - 50, state.game.height - 60, 'textureAtlas', 'ninjaWhite1');

            state.keyItem = state.add.sprite(state.game.width - 73, state.game.height - 57, 'textureAtlas', 'key');

            //reverse the sprite so the player starts facing the right way
            state.player.scale.x = -1;
            state.clone.scale.x = -1;

            //Fitting the key
            state.keyItem.anchor.setTo(0.5);
            state.keyItem.scale.setTo(0.8);
            state.keyItem.angle = -90;
            state.keyItem.scale.x *= -1;
    	}
    },

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the chests
    //IN FRONT OF the player
    frontChestsFrontPlayer: function(state) {
    	//upper
        state.add.sprite(180, 110, 'textureAtlas', 'plant9').scale.setTo(0.6);
        state.add.sprite(120, 85, 'textureAtlas', 'plant11').scale.setTo(0.6);
        state.add.sprite(200, 85, 'textureAtlas', 'plant11').scale.setTo(0.6);
        state.add.sprite(70, 85, 'textureAtlas', 'plant10').scale.setTo(0.9);
        state.add.sprite(150, 85, 'textureAtlas', 'plant10').scale.setTo(0.9);
        //lower
        state.add.sprite(state.game.width - 150, state.game.height - 70, 'textureAtlas', 'plant6');
        state.add.sprite(state.game.width*0.5 - 30, state.game.height - 90, 'textureAtlas', 'plant17');
        state.add.sprite(500, state.game.height - 67, 'textureAtlas', 'plant5');
    },

    //Set some objects immovable so we can use them as platforms
    setImmovableObjects: function(state){
    	state.rocks.forEach(function(rock) {
            rock.anchor.setTo(0.5);
            rock.body.immovable = true;
        });
        state.branch8.body.immovable = true;
    },



    /*
    *
    */




    /*
    UPDATE
    */



    //Clone and key movements manager
    cloneMov: function(state) {
        if (state.cursors.right.isDown || state.game.input.pointer1.isDown && Math.floor(state.game.input.x / (state.game.width *0.5)) === gameMethods.RIGHT) {
            //  Move to the right
            state.clone.body.velocity.x = 125;

            state.keyItem.x = state.clone.x + 28;
            state.keyItem.y = state.clone.y + 5;

            if (state.clone.scale.x < 0)
                state.clone.scale.x *= -1;

            if (state.keyItem.x < state.clone.x)
                state.keyItem.x += 47;

            if (state.keyItem.scale.x < 0)
                state.keyItem.scale.x *= -1;
            if (state.keyItem.angle < 0)
                state.keyItem.angle = 90;

            state.clone.animations.play('run');
        } else if (state.cursors.left.isDown || state.game.input.pointer1.isDown && Math.floor(state.game.input.x / (state.game.width *0.5)) === gameMethods.LEFT) {
            //  Move to the left
            state.clone.body.velocity.x = -125;

            state.keyItem.x = state.clone.x - 28;
            state.keyItem.y = state.clone.y + 5;

            if (state.clone.scale.x > 0)
                state.clone.scale.x *= -1;

            if (state.keyItem.x > state.clone.x)
                state.keyItem.x -= 47;

            if (state.keyItem.scale.x > 0)
                state.keyItem.scale.x *= -1;
            if (state.keyItem.angle > 0)
                state.keyItem.angle = -90;

            state.clone.animations.play('run');
        } else {
            //  Stand still
            state.clone.animations.stop();
            state.clone.frameName = 'ninjaWhite1';
        }

        //So neither the clone nor the player keep going forward if the other one is blocked on his path for any reason
        if (state.player.body.touching.left || state.player.body.touching.right) {
            state.clone.body.velocity.x = 0;
            state.keyItem.body.velocity.x = 0;
        }
        if (state.clone.body.touching.left || state.clone.body.touching.right) {
            state.player.body.velocity.x = 0;
            state.keyItem.body.velocity.x = 0;
        }
    },

    //fine tune some player parameters now that the clone and the key have a physical body
    cloneSetup: function(state) {
    	state.clone.body.collideWorldBounds = true;

        //to prevent the player from "floating" above the ground, reducing its physical body size to ease collisions
        state.clone.body.setSize(30, 25);
        state.keyItem.body.setSize(5, 35);

        //player gravity
        state.clone.body.gravity.y = 1700;
        state.keyItem.body.gravity.y = 1700;

        //Animations
        state.clone.anchor.setTo(0.5);
        state.clone.animations.add('run', Phaser.Animation.generateFrameNames('ninjaWhite', 1, 6), 15, true);

        //move player with cursor keys
        state.cursors = state.game.input.keyboard.createCursorKeys();
    },

    //Open or close chests when needed
    checkChests: function(state) {
        var goldUp = false,
            silverUp = false,
            bronzeUp = false;

        //Checking the gold coins chest
        state.goldCoins.forEach(function(coin) {
            if (coin.y < coin.minHeight)
                goldUp = true;
        });
        if (goldUp) {
            if (state.rightChest.frameName === 'chest0') {
                state.rightChest.animations.play('open');
                state.keyItem.angle = 0;
                setTimeout(this.useKey, 200, state.keyItem);
            }
        }
        if (!goldUp) {
            if (state.rightChest.frameName === 'chest1')
                state.rightChest.animations.play('close');
        }

        //Checking the silver coins chest
        state.silverCoins.forEach(function(coin) {
            if (coin.y < coin.minHeight)
                silverUp = true;
        });
        if (silverUp) {
            if (state.centerChest.frameName === 'chest0') {
                state.centerChest.animations.play('open');
                state.keyItem.angle = 0;
                setTimeout(this.useKey, 200, state.keyItem);
            }
        }
        if (!silverUp) {
            if (state.centerChest.frameName === 'chest1')
                state.centerChest.animations.play('close');
        }

        //Checking the bronze coins chest
        state.bronzeCoins.forEach(function(coin) {
            if (coin.y < coin.minHeight)
                bronzeUp = true;
        });
        if (bronzeUp) {
            if (state.leftChest.frameName === 'chest0') {
                state.leftChest.animations.play('open');
                state.keyItem.angle = 0;
                setTimeout(this.useKey, 200, state.keyItem);
            }
        }
        if (!bronzeUp) {
            if (state.leftChest.frameName === 'chest1')
                state.leftChest.animations.play('close');
        }
    },

    //Turn the key up
    useKey: function(key) {
        key.angle = -90;
    },

    //Checking on the state of the different coins at any given time
    //+30 modifier on x to take length of the key into account
    manageCoins: function(state, x) {
        //if the player is at the start of the map
        if (x > 640 + 35) {
            state.coins.forEach(function(coinsGroup) {
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
            state.goldCoins.forEach(function(coin) {
                if (coin.y >= coin.minHeight)
                    coin.y -= 1;
                if (coin.body.velocity.y === 100 || coin.y >= coin.minHeight - 1)
                    coin.body.velocity.y = -100;
            });

            state.silverCoins.forEach(function(coin) {
                if (coin.y <= coin.maxHeight)
                    coin.y += 1;
                if (coin.y <= coin.maxHeight + 1 || coin.body.velocity.y === -100)
                    coin.body.velocity.y = 100;
            });

            state.bronzeCoins.forEach(function(coin) {
                if (coin.y <= coin.maxHeight)
                    coin.y += 1;
                if (coin.y <= coin.maxHeight + 1 || coin.body.velocity.y === -100)
                    coin.body.velocity.y = 100;
            });
        }
        //if the player is after "Intermediate"
        else if (x <= 490 + 35 && x > 335 + 35) {
            state.goldCoins.forEach(function(coin) {
                if (coin.y >= coin.minHeight)
                    coin.y -= 1;
                if (coin.body.velocity.y === 100 || coin.y >= coin.minHeight - 1)
                    coin.body.velocity.y = -100;
            });

            state.silverCoins.forEach(function(coin) {
                if (coin.y >= coin.minHeight)
                    coin.y -= 1;
                if (coin.body.velocity.y === 100 || coin.y >= coin.minHeight - 1)
                    coin.body.velocity.y = -100;
            });

            state.bronzeCoins.forEach(function(coin) {
                if (coin.y <= coin.maxHeight)
                    coin.y += 1;
                if (coin.y <= coin.maxHeight + 1 || coin.body.velocity.y === -100)
                    coin.body.velocity.y = 100;
            });
        }
        //if the player is at the end of the map
        else {
            state.coins.forEach(function(coinsGroup) {
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
    stopCoins: function(state) {
        state.coins.forEach(function(coinsGroup) {
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
