var SkillsVisualsManager = {

	//create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the map
    behindMap: function() {
    	gameVariables.currentState.pine3 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 130, gameVariables.currentState.game.height*0.5, 'textureAtlas', 'pine2');
        gameVariables.currentState.pine3.scale.setTo(0.8);
        gameVariables.currentState.add.sprite(240, 20, 'textureAtlas', 'rock1').scale.setTo(0.7);
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

    //Create the top of the chests (behind the coins)
    createTopChests: function(emptyChests = [0, 0, 0]) {
    	gameVariables.currentState.topChests = gameVariables.currentState.game.add.group();
        gameVariables.currentState.leftChest = this.generateChests('top', 'left', emptyChests[0]);
        gameVariables.currentState.centerChest = this.generateChests('top', 'center', emptyChests[1]);
        gameVariables.currentState.rightChest = this.generateChests('top', 'right', emptyChests[2]);
    },







    //Create the bottom of the chests (in front of the coins)
    createBottomChests: function() {
        gameVariables.currentState.bottomChests = gameVariables.currentState.game.add.group();
        this.generateChests('bottom');
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
    }
};
