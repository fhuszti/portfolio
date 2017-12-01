var gameMethods = {
    
    /*
    x = x-coordinate of text
    y = y-coordinate of text
    translationKey = which line to use in the languages files
    type = type of styling to use
    anchor = 'left', 'right' or 'center'. default 'left'
    shadow = manage shadows underneath the text. bool, default true
    */
    displayText: function(x, y, translationKey, type, anchor = 'left', shadow = true) {
        var textToRender = null,
            styleToRender = null,
            title = {
                font: "25px 'Cabin Sketch'",
                fill: "rgb(240, 240, 240)",
                align: "center",
                stroke: "black",
                strokeThickness: 4
            },
            guidance = {
                font: "18px 'Cabin Sketch'",
                fill: "rgb(240, 240, 240)",
                align: "center",
                stroke: "black",
                strokeThickness: 3
            },
            bigContent = {
                font: "23px 'Cagliostro'",
                fill: "white",
                align: "center",
                stroke: "black",
                strokeThickness: 3
            },
            mediumContent1 = {
                font: "20px 'Cagliostro'",
                fill: "white",
                align: "center",
                stroke: "black",
                strokeThickness: 4
            },
            mediumContent2 = {
                font: "18px 'Cagliostro'",
                fill: "white",
                align: "center",
                stroke: "black",
                strokeThickness: 3
            },
            smallContent = {
                font: "15px 'Cagliostro'",
                fill: "white",
                align: "center",
                stroke: "black",
                strokeThickness: 4
            };

        //We get a different text file depending on the current user language
        if (userLang === 'fr') {
            if (translationKey in HomeGame.game.cache.getJSON('frJSON'))
                textToRender = HomeGame.game.cache.getJSON('frJSON')[translationKey];
            else
                textToRender = translationKey;
        } else {
            if (translationKey in HomeGame.game.cache.getJSON('enJSON'))
                textToRender = HomeGame.game.cache.getJSON('enJSON')[translationKey];
            else
                textToRender = translationKey;
        }

        switch (type) {
            case 'title':
                styleToRender = title;
                break;
            case 'guidance':
                styleToRender = guidance;
                break;
            case 'bigContent':
                styleToRender = bigContent;
                break;
            case 'mediumContent1':
                styleToRender = mediumContent1;
                break;
            case 'mediumContent2':
                styleToRender = mediumContent2;
                break;
            case 'smallContent':
                styleToRender = smallContent;
                break;
            default:
                styleToRender = '';
        }

        // draw our caption, set some things, then add it
        var finalText = HomeGame.game.make.text(x, y, textToRender, styleToRender);

        if (anchor === 'right')
            finalText.anchor.setTo(1, 0);
        else if (anchor === 'center')
            finalText.anchor.setTo(0.5);
        else
            finalText.anchor.setTo(0, 0)

        if (shadow)
            finalText.setShadow(2, 2, 'rgba(10, 10, 10, 0.5)', 1);

        //We need to be able to put texts in variables in different occasions, thus the 'return'
        return HomeGame.game.add.existing(finalText);
    },






    /*
    Render clickable manually drawn buttons
    */
	generateButton: function(x, y, width, height, alpha, currentGroup) {
		//First we draw the background
		var buttonBg = HomeGame.game.add.graphics(0, 0);
		buttonBg.beginFill(0xFFFFFF, alpha);
		buttonBg.drawRect(x, y, width, height);
		buttonBg.endFill();

        //then we add it to the group
        currentGroup.add(buttonBg);

		//Next we generate the green delimiters
		this.generateButtonDelimiters(x, y, width, height, currentGroup);
	},

    generateButtonDelimiters: function(x, y, width, height, currentGroup) {
        var buttonDelimiters = HomeGame.game.add.graphics(0, 0);
        buttonDelimiters.lineStyle(3, 0x005400, 0.8);

        buttonDelimiters.moveTo(x + 81, y - 1);
        buttonDelimiters.lineTo(x + width, y - 1);
        buttonDelimiters.lineTo(x + width, y + 9);

        buttonDelimiters.moveTo(x + width - 81, y + height + 1);
        buttonDelimiters.lineTo(x - 1, y + height + 1);
        buttonDelimiters.lineTo(x - 1, y + height - 9);

        currentGroup.add(buttonDelimiters);

        return buttonDelimiters;
    },

	//Create an invisible sprite
	generateFakeSprite: function(x, y, width, height, currentGroup) {
		var fakeSprite = HomeGame.game.add.graphics(0, 0);
		fakeSprite.beginFill(0xFFFFFF, 0);
		fakeSprite.drawRect(x, y, width, height);
		fakeSprite.endFill();

		currentGroup.add(fakeSprite);

		fakeSprite.input.useHandCursor = true;

		return fakeSprite;
	},








    /*
    Display dotted lines, either horizontal or vertical
    */
    displayLine: function(x, y, layout = 'horizontal') {
        var line = HomeGame.game.make.text(x, y, '------------------------------------------------------------------------', {
            font: "23px 'Cagliostro'",
            fill: "rgb(240, 240, 240)",
            stroke: "black",
            strokeThickness: 1
        });

        if (layout === 'vertical') {
            line.angle = -90;
            line.scale.setTo(0.5, 1);
        }

        line.setShadow(2, 2, 'rgba(10, 10, 10, 0.5)', 1);

        HomeGame.game.add.existing(line);
    },








    /*
    Player movements management
    */
    playerMov: function() {
        //Reset speed to steady every frame exept on no gravity zone
        if (gameVariables.currentState.key != 'Contact' || gameVariables.currentState.player.x < 305)
            gameVariables.currentState.player.body.velocity.x = 0;
        if (gameVariables.currentState.key == 'Languages' || gameVariables.currentState.key == 'Frameworks' || gameVariables.currentState.key == 'Others')
            gameVariables.currentState.clone.body.velocity.x = 0;

        //Player movements management
        if (gameVariables.currentState.cursors.right.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.x / (gameVariables.currentState.game.width *0.5)) === gameVariables.RIGHT) {
            //  Move to the right
            gameVariables.currentState.player.body.velocity.x = 125;
            if (gameVariables.currentState.player.scale.x < 0)
                gameVariables.currentState.player.scale.x *= -1;
            gameVariables.currentState.player.animations.play('run');
        } else if (gameVariables.currentState.cursors.left.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.x / (gameVariables.currentState.game.width *0.5)) === gameVariables.LEFT) {
            //  Move to the left
            gameVariables.currentState.player.body.velocity.x = -125;
            if (gameVariables.currentState.player.scale.x > 0)
                gameVariables.currentState.player.scale.x *= -1;
            gameVariables.currentState.player.animations.play('run');
        } else {
            //  Stand still
            gameVariables.currentState.player.animations.stop();
            gameVariables.currentState.player.frameName = 'ninja1';
        }

        //Jump management
        if (gameVariables.currentState.cursors.up.isDown || gameVariables.currentState.game.input.pointer1.isDown && Math.floor(gameVariables.currentState.game.input.y / (gameVariables.currentState.game.height *0.5)) === gameVariables.UP) {
            this.playerJump();
        }
    },


    playerJump: function() {
        if (gameVariables.currentState.player.body.blocked.down || gameVariables.currentState.player.body.touching.down) {
            gameVariables.currentState.player.body.velocity.y -= 500;
            gameVariables.currentState.player.frameName = 'ninja4';
        }

        if (gameVariables.currentState.key == 'Languages' || gameVariables.currentState.key == 'Frameworks' || gameVariables.currentState.key == 'Others') {
            if (gameVariables.currentState.clone.body.blocked.down || gameVariables.currentState.clone.body.touching.down) {
                gameVariables.currentState.clone.body.velocity.y -= 500;
                gameVariables.currentState.clone.frameName = 'ninjaWhite4';
            }
            if (gameVariables.currentState.keyItem.body.blocked.down || gameVariables.currentState.keyItem.body.touching.down) {
                gameVariables.currentState.keyItem.body.velocity.y -= 500;
            }
        }
    },






    /*
    Initial map setup
    */
    mapSetup: function(map) {
        gameVariables.currentState.map = gameVariables.currentState.game.add.tilemap(map);

        //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
        gameVariables.currentState.map.addTilesetImage('mainSpritesheet', 'mainTiles');

        //create layers
        gameVariables.currentState.backgroundLayer = gameVariables.currentState.map.createLayer('backgroundLayer');
        gameVariables.currentState.blockedLayer = gameVariables.currentState.map.createLayer('blockedLayer');

        //collision on blockedLayer
        gameVariables.currentState.map.setCollisionBetween(1, 100000, true, 'blockedLayer');

        //resizes the game world to match the layer dimensions
        gameVariables.currentState.backgroundLayer.resizeWorld();
        gameVariables.currentState.blockedLayer.resizeWorld();
    },

    addBackground: function() {
        gameVariables.currentState.background = gameVariables.currentState.add.sprite(0, 0, 'textureAtlas', 'background');
    },





    /*
    fine tune some player parameters now that the player has a physical body
    */
    playerSetup: function() {
        gameVariables.currentState.player.body.collideWorldBounds = true;

        //to prevent the player from "floating" above the ground, reducing its physical body size to ease collisions
        gameVariables.currentState.player.body.setSize(30, 25);

        //player gravity
        gameVariables.currentState.player.body.gravity.y = 900;

        //Animations
        gameVariables.currentState.player.anchor.setTo(0.5, 1);
        gameVariables.currentState.player.animations.add('run', Phaser.Animation.generateFrameNames('ninja', 1, 6), 15, true);

        //move player with cursor keys
        gameVariables.currentState.cursors = gameVariables.currentState.game.input.keyboard.createCursorKeys();
    }
};
