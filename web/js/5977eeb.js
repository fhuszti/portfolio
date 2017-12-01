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

var gameVariables = {

	previousState: null,

	currentState: null,
    
    leavingExperienceX: null,
    
    leavingExperienceScaleX: null,
    
    //For touch controls
    LEFT: 0,
    RIGHT: 1,
    UP: 0,
    DOWN: 1,
};

var AcademicsContentManager = {

	//display title text for the map
	displayTitle: function() {
		 gameMethods.displayText(gameVariables.currentState.game.width/3 + 35, 110, 'academics', 'title', 'center');
	},







	//Display all texts on creation, then call checkHeight to delete those that shouldn't appear yet
    displayFormationTexts: function() {
    	//We stock all texts in a table for later manipulation on them
        gameVariables.currentState.academicsTexts['OCDate'] = gameMethods.displayText(345, gameVariables.currentState.game.height*0.5 + 92, 'academicsOCDate', 'mediumContent2');
        gameVariables.currentState.academicsTexts['OCPlace1'] = gameMethods.displayText(gameVariables.currentState.game.width*0.5 + 180, gameVariables.currentState.game.height*0.5 + 150, 'academicsOCPlace1', 'mediumContent2', 'right');
        gameVariables.currentState.academicsTexts['OCPlace2'] = gameMethods.displayText(gameVariables.currentState.game.width*0.5 + 180, gameVariables.currentState.game.height*0.5 + 170, 'academicsOCPlace2', 'mediumContent2', 'right');
        gameVariables.currentState.academicsTexts['OCDesc1'] = gameMethods.displayText(345, gameVariables.currentState.game.height*0.5 + 215, 'academicsOCDesc1', 'mediumContent2');
        gameVariables.currentState.academicsTexts['OCDesc2'] = gameMethods.displayText(345, gameVariables.currentState.game.height*0.5 + 235, 'academicsOCDesc2', 'mediumContent2');

        gameVariables.currentState.academicsTexts['PrepaDate'] = gameMethods.displayText(345, gameVariables.currentState.game.height*0.5 - 128, 'academicsPrepaDate', 'mediumContent2');
        gameVariables.currentState.academicsTexts['PrepaPlace1'] = gameMethods.displayText(gameVariables.currentState.game.width*0.5 + 180, gameVariables.currentState.game.height*0.5 - 70, 'academicsPrepaPlace1', 'mediumContent2', 'right');
        gameVariables.currentState.academicsTexts['PrepaPlace2'] = gameMethods.displayText(gameVariables.currentState.game.width*0.5 + 180, gameVariables.currentState.game.height*0.5 - 50, 'academicsPrepaPlace2', 'mediumContent2', 'right');
        gameVariables.currentState.academicsTexts['PrepaDesc1'] = gameMethods.displayText(345, gameVariables.currentState.game.height*0.5 - 5, 'academicsPrepaDesc1', 'mediumContent2');
        gameVariables.currentState.academicsTexts['PrepaDesc2'] = gameMethods.displayText(345, gameVariables.currentState.game.height*0.5 + 15, 'academicsPrepaDesc2', 'mediumContent2');

        gameVariables.currentState.academicsTexts['FacDate'] = gameMethods.displayText(25, gameVariables.currentState.game.height*0.5 + 92, 'academicsFacDate', 'mediumContent2');
        gameVariables.currentState.academicsTexts['FacPlace1'] = gameMethods.displayText(gameVariables.currentState.game.width*0.5 - 140, gameVariables.currentState.game.height*0.5 + 150, 'academicsFacPlace1', 'mediumContent2', 'right');
        gameVariables.currentState.academicsTexts['FacPlace2'] = gameMethods.displayText(gameVariables.currentState.game.width*0.5 - 140, gameVariables.currentState.game.height*0.5 + 170, 'academicsFacPlace2', 'mediumContent2', 'right');
        gameVariables.currentState.academicsTexts['FacDesc'] = gameMethods.displayText(25, gameVariables.currentState.game.height*0.5 + 215, 'academicsFacDesc', 'mediumContent2');

        gameVariables.currentState.academicsTexts['BacDate'] = gameMethods.displayText(25, gameVariables.currentState.game.height*0.5 - 128, 'academicsBacDate', 'mediumContent2');
        gameVariables.currentState.academicsTexts['BacPlace1'] = gameMethods.displayText(gameVariables.currentState.game.width*0.5 - 140, gameVariables.currentState.game.height*0.5 - 70, 'academicsBacPlace1', 'mediumContent2', 'right');
        gameVariables.currentState.academicsTexts['BacPlace2'] = gameMethods.displayText(gameVariables.currentState.game.width*0.5 - 140, gameVariables.currentState.game.height*0.5 - 50, 'academicsBacPlace2', 'mediumContent2', 'right');
        gameVariables.currentState.academicsTexts['BacDesc1'] = gameMethods.displayText(25, gameVariables.currentState.game.height*0.5 - 5, 'academicsBacDesc1', 'mediumContent2');
        gameVariables.currentState.academicsTexts['BacDesc2'] = gameMethods.displayText(25, gameVariables.currentState.game.height*0.5 + 15, 'academicsBacDesc2', 'mediumContent2');

        //Now we call checkHeight to make the higher texts disappear
        for (var text in gameVariables.currentState.academicsTexts) {
        	gameVariables.currentState.academicsTexts[text].alive = false;
        	gameVariables.currentState.academicsTexts[text].alpha = 0.1;
        	AcademicsPlayerManager.checkHeight(gameVariables.currentState.academicsTexts[text]);
        }
    }
};

var AcademicsPlayerManager = {

	//create player
    createPlayer: function() {
    	gameVariables.currentState.player = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 30, gameVariables.currentState.game.height - 150, 'textureAtlas', 'ninja1');
        gameVariables.currentState.player.scale.x = -1;
    },







    //Check if the given text should be displayed or hidden
    checkHeight: function(text) {
    	//If player is on bottom platform
    	if(gameVariables.currentState.player.y > 367) {
    	    //If it's the bottom right corner text and it's not already active, we write it
    	    if (!text.alive && text.x >= 340 && text.y > 364) {
    	    	text.alive = true;
    	    	gameVariables.currentState.game.add.tween(text).to( { alpha: 1 }, 1500, "Linear", true);
    	    }
    	    //If there's an active text anywhere else, we kill it
    	    if (text.alive && (text.x < 340 || text.y <= 364)) {
    	    	text.alive = false;
    	    	gameVariables.currentState.game.add.tween(text).to( { alpha: 0.1 }, 1000, "Linear", true);
    	    }
    	}
    	//If player is on first platform
    	if (gameVariables.currentState.player.y <= 367 && gameVariables.currentState.player.y > 271) {
    	    //If it's the bottom left corner text and it's not already active, we write it
            if (!text.alive && text.x < 340 && text.y > 364) {
                text.alive = true;
                gameVariables.currentState.game.add.tween(text).to( { alpha: 1 }, 1000, "Linear", true);
            }
    	    //If there's an active text on the top, we kill it
    	    if (text.alive && text.y <= 364) {
    	    	text.alive = false;
    	    	gameVariables.currentState.game.add.tween(text).to( { alpha: 0.1 }, 1000, "Linear", true);
    	    }
    	}
    	//If player is on second platform
    	if (gameVariables.currentState.player.y <= 271 && gameVariables.currentState.player.y > 175) {
    	    //If it's the top right corner text and it's not already active, we write it
            if (!text.alive && text.x >= 340 && text.y <= 364) {
                text.alive = true;
                gameVariables.currentState.game.add.tween(text).to( { alpha: 1 }, 1000, "Linear", true);
            }
            //If there's an active text in the top left corner, we kill it
    	    if (text.alive && text.x < 340 && text.y <= 364) {
    	    	text.alive = false;
    	    	gameVariables.currentState.game.add.tween(text).to( { alpha: 0.1 }, 1000, "Linear", true);
    	    }
    	}
    	//If player is on third platform or higher
    	if (!text.alive && gameVariables.currentState.player.y <= 175) {
    	    //Every message should be active
    	    text.alive = true;
    	    gameVariables.currentState.game.add.tween(text).to( { alpha: 1 }, 1000, "Linear", true);
    	}
    }
};

var AcademicsVisualsManager = {

	//plop sprites behind the map
	behindMap: function() {
		gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 150, gameVariables.currentState.game.height*0.5 - 150, 'textureAtlas', 'pine2');
	},







    //create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the wooden panels
    //BEHIND the player
    behindPanelsBehindPlayer: function() {
    	gameVariables.currentState.add.sprite(50, gameVariables.currentState.game.height*0.5 + 35, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(90, gameVariables.currentState.game.height*0.5 + 35, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(150, gameVariables.currentState.game.height*0.5 + 35, 'textureAtlas', 'plant14');
    },





	

    //create the guidance sign and its text
    generateSigns: function() {
    	var homeSign = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 40, 45, 'textureAtlas', 'sign0');

        homeSign.scale.setTo(0.5);
        homeSign.anchor.setTo(0.5);
        
        gameMethods.displayText(gameVariables.currentState.game.width - 80, 30, 'home', 'guidance', 'right');
    },





	

    //Create a background wooden panel
    backgroundPanels: function(height, side) {
    	var bg1 = null,
            bg2 = null,
            bg3 = null;

        if(side === 'left') {
            bg1 = gameVariables.currentState.game.add.sprite(5, height, 'textureAtlas', 'sign6');
            bg2 = gameVariables.currentState.game.add.sprite(95, height, 'textureAtlas', 'sign8');
            bg3 = gameVariables.currentState.game.add.sprite(185, height, 'textureAtlas', 'sign7');
        }
        if (side === 'right') {
            bg1 = gameVariables.currentState.game.add.sprite(325, height, 'textureAtlas', 'sign6');
            bg2 = gameVariables.currentState.game.add.sprite(415, height, 'textureAtlas', 'sign8');
            bg3 = gameVariables.currentState.game.add.sprite(505, height, 'textureAtlas', 'sign7');
        }
    },

    //Create all wooden panels background
    generatePanels: function() {
    	this.backgroundPanels(gameVariables.currentState.game.height*0.5 - 150, 'left');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 - 88, 'left');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 - 26, 'left');

        this.backgroundPanels(gameVariables.currentState.game.height*0.5 + 70, 'left');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 + 132, 'left');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 + 194, 'left');

        this.backgroundPanels(gameVariables.currentState.game.height*0.5 - 150, 'right');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 - 88, 'right');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 - 26, 'right');

        this.backgroundPanels(gameVariables.currentState.game.height*0.5 + 70, 'right');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 + 132, 'right');
        this.backgroundPanels(gameVariables.currentState.game.height*0.5 + 194, 'right');

        //Adding the panel behind the title
        var titlePanel3 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width/3 + 28, 105, 'textureAtlas', 'sign1'),
            titlePanel1 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width/3 - 45, 105, 'textureAtlas', 'sign1'),
            titlePanel2 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width/3 + 114, 105, 'textureAtlas', 'sign2');
        titlePanel1.anchor.setTo(0.5);
        titlePanel2.anchor.setTo(0.5);
        titlePanel3.anchor.setTo(0.5);
        titlePanel1.scale.setTo(0.9);
        titlePanel2.scale.setTo(0.9);
        titlePanel3.scale.setTo(0.9);
    },





	

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the wooden panels
    //BEHIND the player
    frontPanelsBehindPlayer: function() {
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 150, gameVariables.currentState.game.height - 140, 'textureAtlas', 'plant3');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 80, gameVariables.currentState.game.height - 140, 'textureAtlas', 'plant3');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 120, gameVariables.currentState.game.height - 140, 'textureAtlas', 'plant5');
    },





	

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the wooden panels
    //IN FRONT OF the player
    frontPanelsFrontPlayer: function() {
    	gameVariables.currentState.liane1 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 130, 30, 'textureAtlas', 'plant15');
        gameVariables.currentState.liane1.angle = -45;
        gameVariables.currentState.add.sprite(75, 30, 'textureAtlas', 'plant16');
        gameVariables.currentState.add.sprite(5, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(45, 0, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(75, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 250, 0, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 220, 0, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 190, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 150, 0, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 120, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 80, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 25, 0, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 55, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 95, 0, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 125, 0, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 205, 0, 'textureAtlas', 'plant14').scale.x = -1;
        gameVariables.currentState.plant12 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 200, 135, 'textureAtlas', 'plant12');
        gameVariables.currentState.plant12.scale.setTo(-0.7, 0.7);
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 250, 105, 'textureAtlas', 'plant11').scale.setTo(0.7);
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 220, 105, 'textureAtlas', 'plant10');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 60, 105, 'textureAtlas', 'plant10');

	    gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 195, 10, 'textureAtlas', 'plant16');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 195, gameVariables.currentState.game.height*0.5 - 140, 'textureAtlas', 'plant15');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 195, gameVariables.currentState.game.height*0.5 - 60, 'textureAtlas', 'plant16');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 195, gameVariables.currentState.game.height*0.5 + 100, 'textureAtlas', 'plant16');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 195, gameVariables.currentState.game.height*0.5 + 180, 'textureAtlas', 'plant15');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 195, gameVariables.currentState.game.height*0.5 + 260, 'textureAtlas', 'plant16');
        gameVariables.currentState.rightHorizLiane1 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 200, gameVariables.currentState.game.height*0.5 + 88, 'textureAtlas', 'plant15');
        gameVariables.currentState.rightHorizLiane1.scale.x = -1;
        gameVariables.currentState.rightHorizLiane1.angle = 90;
        gameVariables.currentState.rightHorizLiane2 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 83, gameVariables.currentState.game.height*0.5 + 261, 'textureAtlas', 'plant15');
        gameVariables.currentState.rightHorizLiane2.scale.y = -1;
        gameVariables.currentState.rightHorizLiane2.angle = 90;
        gameVariables.currentState.plant12 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 200, gameVariables.currentState.game.height*0.5 + 30, 'textureAtlas', 'plant12');
        gameVariables.currentState.plant12.angle = 40;
        gameVariables.currentState.plant12.scale.setTo(0.6);
        gameVariables.currentState.liane3 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 85, gameVariables.currentState.game.height*0.5 - 150, 'textureAtlas', 'plant15');
        gameVariables.currentState.liane3.angle = 50;
        gameVariables.currentState.liane3.scale.setTo(1.1);
        gameVariables.currentState.liane4 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 25, gameVariables.currentState.game.height*0.5 - 93, 'textureAtlas', 'plant15');
        gameVariables.currentState.liane4.angle = 75;
        gameVariables.currentState.liane4.scale.y = 1.2;
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 55, gameVariables.currentState.game.height*0.5 - 143, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 85, gameVariables.currentState.game.height*0.5 - 143, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 115, gameVariables.currentState.game.height*0.5 - 143, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 155, gameVariables.currentState.game.height*0.5 - 143, 'textureAtlas', 'plant14');

        gameVariables.currentState.plant9right = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 60, gameVariables.currentState.game.height*0.5 + 150, 'textureAtlas', 'plant9');
        gameVariables.currentState.plant9right.anchor.setTo(0.5);
        gameVariables.currentState.plant9right.scale.setTo(-0.7, 0.7);
        gameVariables.currentState.plant9right.angle = -60;
        gameVariables.currentState.plant9left = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 135, gameVariables.currentState.game.height*0.5 + 50, 'textureAtlas', 'plant9');
        gameVariables.currentState.plant9left.anchor.setTo(0.5);
        gameVariables.currentState.plant9left.scale.setTo(0.6);
        gameVariables.currentState.plant9left.angle = 60;
        gameVariables.currentState.leftHorizLiane1 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 120, gameVariables.currentState.game.height*0.5 + 261, 'textureAtlas', 'plant15');
        gameVariables.currentState.leftHorizLiane1.angle = 90;
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 70, gameVariables.currentState.game.height*0.5 - 145, 'textureAtlas', 'plant15').scale.x = -1;
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 70, gameVariables.currentState.game.height*0.5 - 80, 'textureAtlas', 'plant16').scale.x = -1;
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 70, gameVariables.currentState.game.height*0.5 - 30, 'textureAtlas', 'plant15').scale.x = -1;
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 70, gameVariables.currentState.game.height*0.5 + 30, 'textureAtlas', 'plant16').scale.x = -1;
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 125, gameVariables.currentState.game.height*0.5 - 145, 'textureAtlas', 'plant16');
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 125, gameVariables.currentState.game.height*0.5 - 10, 'textureAtlas', 'plant16');
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 125, gameVariables.currentState.game.height*0.5 + 60, 'textureAtlas', 'plant15');
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 125, gameVariables.currentState.game.height*0.5 + 130, 'textureAtlas', 'plant16');
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 125, gameVariables.currentState.game.height*0.5 + 190, 'textureAtlas', 'plant16');

        gameVariables.currentState.leftHorizLiane2 = gameVariables.currentState.add.sprite(10, gameVariables.currentState.game.height*0.5 + 261, 'textureAtlas', 'plant15');
        gameVariables.currentState.leftHorizLiane2.scale.y = -1;
        gameVariables.currentState.leftHorizLiane2.angle = 90;
        gameVariables.currentState.add.sprite(12, 10, 'textureAtlas', 'plant16').scale.x = -1;
        gameVariables.currentState.add.sprite(12, 80, 'textureAtlas', 'plant15').scale.x = -1;
    	gameVariables.currentState.add.sprite(12, gameVariables.currentState.game.height*0.5 - 60, 'textureAtlas', 'plant16').scale.x = -1;
    	gameVariables.currentState.add.sprite(12, gameVariables.currentState.game.height*0.5 + 100, 'textureAtlas', 'plant16').scale.x = -1;
    	gameVariables.currentState.add.sprite(12, gameVariables.currentState.game.height*0.5 + 190, 'textureAtlas', 'plant15').scale.x = -1;
    }
};

var ContactContentManager = {

	//create the dark transparent background behind the main content
	generateContentBg: function() {
		var graphics = gameVariables.currentState.game.add.graphics(0, 0);

		graphics.beginFill('#5E5E5E', 0.3);
		graphics.drawRect(gameVariables.currentState.game.width *0.5 - 60, 90, 440, 480);
		graphics.endFill();
	},







	//Plop the main text content of the page
	generateMainContent: function() {
		gameMethods.displayText(gameVariables.currentState.game.width *0.5 + 150, 50, 'contact', 'title', 'center');

		gameMethods.displayText(gameVariables.currentState.game.width *0.5 + 160, 160, 'contactLooking', 'mediumContent1', 'center');
		gameMethods.displayText(gameVariables.currentState.game.width *0.5 + 160, 300, 'contactOffer', 'mediumContent1', 'center');
	},







	//works with copyTextToClipboard
	//fades the confirmation text after one second
	fadeText: function() {
		gameVariables.currentState.game.add.tween(this.copyText).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
	},
	
    //Copy text to clipboard on button click
	//Can be used in another project, just call it via eventListener in procedural JS
	//Thanks to Dean Taylor on StackOverflow, probably saved me hours with that
	copyTextToClipboard: function() {
		var textArea = document.createElement("textarea");

		//
		// *** This styling is an extra step which is likely not required. ***
		//
		// Why is it here? To ensure:
		// 1. the element is able to have focus and selection.
		// 2. if element was to flash render it has minimal visual impact.
		// 3. less flakyness with selection and copying which **might** occur if
		//    the textarea element is not visible.
		//
		// The likelihood is the element won't even render, not even a flash,
		// so some of these are just precautions. However in IE the element
		// is visible whilst the popup box asking the user for permission for
		// the web page to copy to the clipboard.
		//

		// Place in top-left corner of screen regardless of scroll position.
		textArea.style.position = 'fixed';
		textArea.style.top = 0;
		textArea.style.left = 0;

		// Ensure it has a small width and height. Setting to 1px / 1em
		// doesn't work as this gives a negative w/h on some browsers.
		textArea.style.width = '2em';
		textArea.style.height = '2em';

		// We don't need padding, reducing the size if it does flash render.
		textArea.style.padding = 0;

		// Clean up any borders.
		textArea.style.border = 'none';
		textArea.style.outline = 'none';
		textArea.style.boxShadow = 'none';

		// Avoid flash of white box if rendered for any reason.
		textArea.style.background = 'transparent';


		textArea.value = 'contact@fhuszti.tech';

		document.body.appendChild(textArea);

		textArea.select();

		//in here, 'this' represents 'HomeGame.Contact'
		try {
			if (document.execCommand('copy')) {
				this.copyText = gameMethods.displayText(this.game.width *0.5 + 50, 480, 'contactCopySuccess', 'smallContent', 'center');
				this.game.time.events.add(2000, ContactContentManager.fadeText, this, this);
			} else {
				this.copyText = gameMethods.displayText(this.game.width *0.5 + 50, 480, 'contactCopyFail', 'smallContent', 'center', false);
				this.game.time.events.add(2000, ContactContentManager.fadeText, this, this);
			}
		} catch (err) {
			this.copyText = gameMethods.displayText(this.game.width *0.5 + 50, 480, 'contactCopyFail', 'smallContent', 'center', false);
			this.game.time.events.add(2000, ContactContentManager.fadeText, this, this);
		}

		document.body.removeChild(textArea);
	},

	//Create the button containing the email address
	generateEmailButton: function() {
		//we create a group
		var emailButton = gameVariables.currentState.game.add.group();
		emailButton.inputEnableChildren = true;

		//we generate the button design
		gameMethods.generateButton(355, 415, 185, 35, 0.3, emailButton);

		//then we add the text
		var textValue = gameMethods.displayText(447, 435, 'email', 'mediumContent2', 'center');
		emailButton.add(textValue);

		//we create a fake sprite on top of the whole button and attach the click event to it
		var fakeSprite = gameMethods.generateFakeSprite(355, 415, 185, 35, emailButton);
		fakeSprite.events.onInputDown.add(this.copyTextToClipboard, gameVariables.currentState, 0, gameVariables.currentState);
	},







	//link to the contact form on the main website
	linkToForm: function() {
		window.open('http://www.fhuszti.com/'+userLang+'#contactForm'); 
	},

	//Create the button containing the link to the form
	generateFormButton: function() {
		//we create a group
		var formButton = gameVariables.currentState.game.add.group();
		formButton.inputEnableChildren = true;

		//we generate the button design
		gameMethods.generateButton(575, 415, 185, 35, 0.3, formButton);

		//then we add the text
		var textValue = gameMethods.displayText(670, 435, 'contactFormButtonValue', 'mediumContent2', 'center');
		formButton.add(textValue);

		//we create a fake sprite on top of the whole button and attach the click event to it
		var fakeSprite = gameMethods.generateFakeSprite(575, 415, 185, 35, formButton);
		fakeSprite.events.onInputDown.add(this.linkToForm, gameVariables.currentState);
	},





	

	//link to my LinkedIn profile
	linkToGithub: function() {
		//either in french or english depending on the current stored lang for this session
		window.open('https://github.com/fhuszti'); 
	},

	//Create the button containing the link to my GitHub
	generateGithubButton: function() {
		//we create a group
		var githubButton = gameVariables.currentState.game.add.group();
		githubButton.inputEnableChildren = true;

		//we generate the button design
		gameMethods.generateButton(355, 510, 185, 35, 0.3, githubButton);

		//then we add the text
		var textValue = gameMethods.displayText(447, 530, 'contactGitHubButtonValue', 'mediumContent2', 'center');
		githubButton.add(textValue);

		//we create a fake sprite on top of the whole button and attach the click event to it
		var fakeSprite = gameMethods.generateFakeSprite(355, 510, 185, 35, githubButton);
		fakeSprite.events.onInputDown.add(this.linkToGithub, gameVariables.currentState);
	},





	

	//link to my LinkedIn profile
	linkToLinkedin: function() {
		//either in french or english depending on the current stored lang for this session
		window.open('https://www.linkedin.com/in/francoishuszti'); 
	},

	//Create the button containing the link to my LinkedIn
	generateLinkedinButton: function() {
		//we create a group
		var linkedinButton = gameVariables.currentState.game.add.group();
		linkedinButton.inputEnableChildren = true;

		//we generate the button design
		gameMethods.generateButton(575, 510, 185, 35, 0.3, linkedinButton);

		//then we add the text
		var textValue = gameMethods.displayText(670, 530, 'contactLinkedinButtonValue', 'mediumContent2', 'center');
		linkedinButton.add(textValue);

		//we create a fake sprite on top of the whole button and attach the click event to it
		var fakeSprite = gameMethods.generateFakeSprite(575, 510, 185, 35, linkedinButton);
		fakeSprite.events.onInputDown.add(this.linkToLinkedin, gameVariables.currentState);
	}
};

var ContactPlayerManager = {

	//create player
    createPlayer: function() {
    	var widthPop = null, heightPop = null;

    	if (gameVariables.previousState === 'experience') {
    		widthPop = gameVariables.leavingExperienceX;
    		heightPop = 0;
    	}
		else {
			widthPop = 90;
    		heightPop = gameVariables.currentState.game.height * 0.5;
		}

		gameVariables.currentState.player = gameVariables.currentState.game.add.sprite(widthPop, heightPop, 'textureAtlas', 'ninja1');
    	
		if (gameVariables.previousState === 'experience')
    		gameVariables.currentState.player.scale.x = gameVariables.leavingExperienceScaleX;
    },





    

    //manually tells the client that the down key isn't pressed anymore
    disableCursorDown: function(cursors) {
        cursors.down.isDown = false;
    },

    //additional setup for the player for this stage
    playerSetup: function() {
    	if (gameVariables.currentState.player.x >= 305) {
			gameVariables.currentState.cursors.down.isDown = true;

			setTimeout(this.disableCursorDown.bind(null, gameVariables.currentState.cursors), 1000);
		}
    }
};

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

var ContactVisualsManager = {

	//plop sprites behind the map
	behindMap: function() {
		gameVariables.currentState.game.add.sprite(40, -3, 'textureAtlas', 'rock4');
		gameVariables.currentState.game.add.sprite(80, -10, 'textureAtlas', 'rock2');
		gameVariables.currentState.game.add.sprite(50, -10, 'textureAtlas', 'rock1');
	},







	//plop sprites behind the player
	behindPlayer: function(){
		gameVariables.currentState.signPlant = gameVariables.currentState.add.sprite(45, gameVariables.currentState.game.height *0.5 + 15, 'textureAtlas', 'plant4');
		gameVariables.currentState.signPlant.anchor.setTo(0.5, 0);
		gameVariables.currentState.signPlant.scale.setTo(0.5);
		gameVariables.currentState.add.sprite(200, gameVariables.currentState.game.height *0.5 - 65, 'textureAtlas', 'zeroGravitySign').scale.setTo(0.35);
		gameVariables.currentState.game.add.sprite(130, gameVariables.currentState.game.height *0.5 - 5, 'textureAtlas', 'plant10').scale.setTo(0.7);
		gameVariables.currentState.game.add.sprite(208, gameVariables.currentState.game.height*0.5 + 20, 'textureAtlas', 'plant8');
		gameVariables.currentState.game.add.sprite(208, gameVariables.currentState.game.height*0.5 + 60, 'textureAtlas', 'plant8');
		gameVariables.currentState.game.add.sprite(208, gameVariables.currentState.game.height*0.5 + 130, 'textureAtlas', 'plant8');
	},







	//create the sign and its associated guidance text
	generateSign: function() {
		//generating the sign itself
		var homeSign = gameVariables.currentState.game.add.sprite(15, gameVariables.currentState.game.height *0.5 - 20, 'textureAtlas', 'sign5');
		homeSign.scale.setTo(0.5);

		//Adding the text next to the sign
		gameMethods.displayText(80, gameVariables.currentState.game.height *0.5 - 30, 'home', 'guidance');
	},







	//create and manage the waterfall
	manageWaterfall: function() {
		gameVariables.currentState.waterfall = gameVariables.currentState.game.add.sprite(-160, 10, 'waterfallHeavy');
		gameVariables.currentState.waterfall.scale.setTo(2);

		gameVariables.currentState.waterfall.animations.add('flow', Phaser.Animation.generateFrameNames('waterfallHeavy', 0, 31), 20, true);
		gameVariables.currentState.waterfall.animations.play('flow');
	},

	//plop sprites in front of the player
	frontPlayer: function() {
		gameVariables.currentState.game.add.sprite(60, 40, 'textureAtlas', 'plant1');
		gameVariables.currentState.game.add.sprite(100, 43, 'textureAtlas', 'plant1');

		this.manageWaterfall();

		gameVariables.currentState.game.add.sprite(5, 30, 'textureAtlas', 'plant14');
		gameVariables.currentState.game.add.sprite(150, 30, 'textureAtlas', 'plant13');
		gameVariables.currentState.game.add.sprite(170, 25, 'textureAtlas', 'plant5');
		gameVariables.currentState.game.add.sprite(60, 35, 'textureAtlas', 'plant2').scale.setTo(0.6);
		gameVariables.currentState.game.add.sprite(100, 30, 'textureAtlas', 'plant7').scale.setTo(0.6);
		gameVariables.currentState.game.add.sprite(210, -3, 'textureAtlas', 'plant8');
		gameVariables.currentState.game.add.sprite(210, 55, 'textureAtlas', 'plant8');
	}
};
var ExperienceConfigManager = {

	//setup state variables
	setupVariables: function() {
		gameVariables.currentState.started = false;
		gameVariables.currentState.modalStarted = false;
		gameVariables.currentState.currentTint = 0x5FC6D4;

		gameVariables.currentState.light = ExperienceVisualsManager.generateDiamondLight();
	},







	//tint a sprite over time
	tweenTint: function(obj, startColor, endColor, time, delay = 0) {
		// create an object to tween with our step value at 0
		var colorBlend = {step: 0};

		// create the tween on this object and tween its step property to 100
		var colorTween = gameVariables.currentState.game.add.tween(colorBlend).to({step: 100}, time, null, false, delay);

		// run the interpolateColor function every time the tween updates, feeding it the
		// updated value of our tween each time, and set the result as our tint
		colorTween.onUpdateCallback(function() {
			obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
		});

		return colorTween;
	},

	//pop the level up text on bar growth complete
	onBarGrowthComplete: function() {
		//we actually pop the text
		this.game.add.tween(this.levelUpText).to( { alpha: 1 }, 2000, "Linear", true);

		//then we start making it blink slightly
		setTimeout(function(state) {
			state.tweenLevelUpBlink = state.game.add.tween(state.levelUpText).to( { alpha: 0.8 }, 1000, "Linear", true, 0, -1, true);
		}, 2000, this);
	},

	//setup all necessary tweens
	setupTweens: function() {
		//all tweens for background color + light alpha
		gameVariables.currentState.firstTweenBlue = this.tweenTint(gameVariables.currentState.background, 0xffffff, 0x5FC6D4, 4000);
		gameVariables.currentState.firstTweenLightUp = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.5 }, 4000, "Linear");

		gameVariables.currentState.firstTweenWhite = this.tweenTint(gameVariables.currentState.background, 0x5FC6D4, 0xffffff, 2000, 1000);
		gameVariables.currentState.firstTweenLightDown = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.2 }, 2000, "Linear", false, 1000);

		gameVariables.currentState.tweenBlue = this.tweenTint(gameVariables.currentState.background, 0xffffff, 0x5FC6D4, 5000);
		gameVariables.currentState.tweenWhite = this.tweenTint(gameVariables.currentState.background, 0x5FC6D4, 0xffffff, 1000);

		gameVariables.currentState.tweenLightUp = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.5 }, 5000, "Linear");
		gameVariables.currentState.tweenLightDown = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.2 }, 1000, "Linear");

		//tweens for the experience bar
		//I have no idea why but 1025 seems to be the right width to aim at for the experience bar
		gameVariables.currentState.tweenExperienceBarGrowth = gameVariables.currentState.game.add.tween(gameVariables.currentState.cropExperienceBar).to( { width: 1025 }, 4000, "Linear");
		gameVariables.currentState.tweenExperienceBarGrowth.onComplete.add(this.onBarGrowthComplete, gameVariables.currentState);
		gameVariables.currentState.tweenExperienceBarBlink = gameVariables.currentState.game.add.tween(gameVariables.currentState.experienceBarGroup).to( { alpha: 0.8 }, 1000, "Linear", false, 0, -1, true);
	}
};

var ExperienceContentManager = {

	//create the dark background for content
	generateContentBg: function() {
		//main background
		var blackBg = gameVariables.currentState.game.add.graphics(0, 0);
		blackBg.beginFill(0x000000, 0.5);
		blackBg.drawRect(gameVariables.currentState.widthStart, gameVariables.currentState.heightStart, 460, 345);
		blackBg.endFill();

		//background for the experience bar
		var whiteBg = gameVariables.currentState.game.add.graphics(0, 0);
		whiteBg.beginFill(0xffffff, 0.3);
		whiteBg.drawRect(gameVariables.currentState.widthStart, gameVariables.currentState.heightStart + 295, 460, 50);
		whiteBg.endFill();
	},







	//generate a background image for a link
	generateBackgroundImage: function(x, y, width, height, name, currentGroup){
		var img = gameVariables.currentState.game.add.sprite(x, y, 'textureAtlas', name);
		img.tint = 0xaaaaaa;

		var cropRect = new Phaser.Rectangle(0, 0, img.width, height * 2);

		img.crop(cropRect);

		img.scale.setTo(0.5);

		//then we add it to the group
		currentGroup.add(img);

		return img;
	},

	//create the full first link of the panel
	generateFirstLink: function() {
		//we create a group to have the clickable fake sprite as a child
		gameVariables.currentState.firstButtonGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.firstButtonGroup.inputEnableChildren = true;
		
		//we generate the background button
		gameMethods.generateButton(gameVariables.currentState.widthStart + 10, gameVariables.currentState.heightStart + 10, 215, 200, 0.3, gameVariables.currentState.firstButtonGroup);

		//then we add the text, in its own group
		gameVariables.currentState.firstButtonTextGroup = gameVariables.currentState.game.add.group();
		var titleValue1 = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 99, 'experienceFirstLinkTitle1', 'mediumContent1', 'center'),
			titleValue2 = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 122, 'experienceFirstLinkTitle2', 'mediumContent1', 'center');
		gameVariables.currentState.firstButtonTextGroup.add(titleValue1);
		gameVariables.currentState.firstButtonTextGroup.add(titleValue2);

		//and we don't forget to add the text group as a child of the button group
		gameVariables.currentState.firstButtonGroup.add(gameVariables.currentState.firstButtonTextGroup);

		//another group for what's displayed on hover
		gameVariables.currentState.firstHoverGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.firstHoverGroup.inputEnableChildren = true;

		//we generate the button design that'll show when hovering
		this.generateBackgroundImage(gameVariables.currentState.widthStart + 10, gameVariables.currentState.heightStart + 10, 215, 200, 'btn_louvre', gameVariables.currentState.firstHoverGroup);

		var hoverDate = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 80, 'experienceFirstLinkDate', 'mediumContent1', 'center');
		gameVariables.currentState.firstHoverGroup.add(hoverDate);

		var skillsValue1 = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 150, 'experienceFirstLinkSkills1', 'smallContent', 'center'),
			skillsValue2 = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 170, 'experienceFirstLinkSkills2', 'smallContent', 'center');
		gameVariables.currentState.firstHoverGroup.add(skillsValue1);
		gameVariables.currentState.firstHoverGroup.add(skillsValue2);

		gameVariables.currentState.firstHoverGroup.alpha = 0;
		gameVariables.currentState.firstButtonGroup.alpha = 0;
	},

	//create the full second link of the panel
	generateSecondLink: function() {
		//we create a group to have the clickable fake sprite as a child
		gameVariables.currentState.secondButtonGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.secondButtonGroup.inputEnableChildren = true;
		
		//we generate the background img
		this.generateBackgroundImage(gameVariables.currentState.widthStart + 10, gameVariables.currentState.heightStart + 220, 215, 65, 'btn_interactive', gameVariables.currentState.secondButtonGroup);

		//then we add the text, in its own group
		gameVariables.currentState.secondButtonTextGroup = gameVariables.currentState.game.add.group();
		var titleValue = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 241, 'experienceSecondLinkTitle', 'mediumContent1', 'center'),
			youHere = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 270, 'experienceSecondLinkYouHere', 'smallContent', 'center');
		gameVariables.currentState.secondButtonTextGroup.add(titleValue);
		gameVariables.currentState.secondButtonTextGroup.add(youHere);

		//and we don't forget to add the text group as a child of the button group
		gameVariables.currentState.secondButtonGroup.add(gameVariables.currentState.secondButtonTextGroup);

		//another group for what's displayed on hover
		gameVariables.currentState.secondHoverGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.secondHoverGroup.inputEnableChildren = true;

		var hoverDate = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 241, 'experienceSecondLinkDate', 'mediumContent1', 'center');
		gameVariables.currentState.secondHoverGroup.add(hoverDate);

		var skillsValue = gameMethods.displayText(gameVariables.currentState.widthStart + 117, gameVariables.currentState.heightStart + 270, 'experienceSecondLinkSkills', 'smallContent', 'center');
		gameVariables.currentState.secondHoverGroup.add(skillsValue);

		gameVariables.currentState.secondHoverGroup.alpha = 0;
		gameVariables.currentState.secondButtonGroup.alpha = 0;
	},

	//create the full third link of the panel
	generateThirdLink: function() {
		//we create a group to have the clickable fake sprite as a child
		gameVariables.currentState.thirdButtonGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.thirdButtonGroup.inputEnableChildren = true;
		
		//we generate the background img
		gameMethods.generateButton(gameVariables.currentState.widthStart + 235, gameVariables.currentState.heightStart + 10, 215, 95, 0.3, gameVariables.currentState.thirdButtonGroup);
		
		//then we add the text, in its own group
		gameVariables.currentState.thirdButtonTextGroup = gameVariables.currentState.game.add.group();
		var titleValue1 = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 49, 'experienceThirdLinkTitle1', 'mediumContent1', 'center'),
			titleValue2 = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 72, 'experienceThirdLinkTitle2', 'mediumContent1', 'center');
		gameVariables.currentState.thirdButtonTextGroup.add(titleValue1);
		gameVariables.currentState.thirdButtonTextGroup.add(titleValue2);

		//and we don't forget to add the text group as a child of the button group
		gameVariables.currentState.thirdButtonGroup.add(gameVariables.currentState.thirdButtonTextGroup);

		//another group for what's displayed on hover
		gameVariables.currentState.thirdHoverGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.thirdHoverGroup.inputEnableChildren = true;

		//we generate the button design that'll show when hovering
		this.generateBackgroundImage(gameVariables.currentState.widthStart + 235, gameVariables.currentState.heightStart + 10, 215, 95, 'btn_microcms', gameVariables.currentState.thirdHoverGroup);

		var hoverDate = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 46, 'experienceThirdLinkDate', 'mediumContent1', 'center');
		gameVariables.currentState.thirdHoverGroup.add(hoverDate);

		var skillsValue = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 75, 'experienceThirdLinkSkills', 'smallContent', 'center');
		gameVariables.currentState.thirdHoverGroup.add(skillsValue);

		gameVariables.currentState.thirdHoverGroup.alpha = 0;
		gameVariables.currentState.thirdButtonGroup.alpha = 0;
	},

	//create the full fourth link of the panel
	generateFourthLink: function() {
		//we create a group to have the clickable fake sprite as a child
		gameVariables.currentState.fourthButtonGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.fourthButtonGroup.inputEnableChildren = true;
		
		//we generate the background img
		gameMethods.generateButton(gameVariables.currentState.widthStart + 235, gameVariables.currentState.heightStart + 115, 215, 95, 0.3, gameVariables.currentState.fourthButtonGroup);

		//then we add the text, in its own group
		gameVariables.currentState.fourthButtonTextGroup = gameVariables.currentState.game.add.group();
		var titleValue1 = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 152, 'experienceFourthLinkTitle1', 'mediumContent1', 'center'),
			titleValue2 = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 175, 'experienceFourthLinkTitle2', 'mediumContent1', 'center');
		gameVariables.currentState.fourthButtonTextGroup.add(titleValue1);
		gameVariables.currentState.fourthButtonTextGroup.add(titleValue2);

		//and we don't forget to add the text group as a child of the button group
		gameVariables.currentState.fourthButtonGroup.add(gameVariables.currentState.fourthButtonTextGroup);

		//another group for what's displayed on hover
		gameVariables.currentState.fourthHoverGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.fourthHoverGroup.inputEnableChildren = true;

		//we generate the button design that'll show when hovering
		this.generateBackgroundImage(gameVariables.currentState.widthStart + 235, gameVariables.currentState.heightStart + 115, 215, 95, 'btn_tours', gameVariables.currentState.fourthHoverGroup);

		var hoverDate = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 149, 'experienceFourthLinkDate', 'mediumContent1', 'center');
		gameVariables.currentState.fourthHoverGroup.add(hoverDate);

		var skillsValue = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 178, 'experienceFourthLinkSkills', 'smallContent', 'center');
		gameVariables.currentState.fourthHoverGroup.add(skillsValue);

		gameVariables.currentState.fourthHoverGroup.alpha = 0;
		gameVariables.currentState.fourthButtonGroup.alpha = 0;
	},

	//create the full fifth link of the panel
	generateFifthLink: function() {
		//we create a group
		gameVariables.currentState.fifthButtonGroup = gameVariables.currentState.game.add.group();
		gameVariables.currentState.fifthButtonGroup.inputEnableChildren = true;

		//we generate the button design
		gameMethods.generateButton(gameVariables.currentState.widthStart + 235, gameVariables.currentState.heightStart + 220, 215, 65, 0.3, gameVariables.currentState.fifthButtonGroup);

		//then we add the text, in its own group
		var titleValue = gameMethods.displayText(gameVariables.currentState.widthStart + 342, gameVariables.currentState.heightStart + 255, 'experienceFifthLinkTitle', 'mediumContent1', 'center');
		gameVariables.currentState.fifthButtonGroup.add(titleValue);

		gameVariables.currentState.fifthButtonGroup.alpha = 0;
	},

	//create the content
	generateContent: function() {
		//Adding the title of the state at the right place
		gameMethods.displayText(gameVariables.currentState.game.width *0.5 + 130, 40, 'experience', 'title', 'center');

		//and all the links
		this.generateFirstLink();
		this.generateSecondLink();
		this.generateThirdLink();
		this.generateFourthLink();
		this.generateFifthLink();
	},







	//generate the experience bar section
	generateExperienceBarSection: function() {
		gameVariables.currentState.levelUpText = gameMethods.displayText(gameVariables.currentState.widthStart + 230, gameVariables.currentState.heightStart + 310, 'experienceExperienceBarTitle', 'smallContent', 'center');
		gameVariables.currentState.levelUpText.alpha = 0;

		//the dark rectangle behind the experience bar
		var blackBg = gameVariables.currentState.game.add.graphics(0, 0);
		blackBg.beginFill(0x332222, 0.9);
		blackBg.drawRect(gameVariables.currentState.widthStart + 10, gameVariables.currentState.heightStart + 322, 440, 18);
		blackBg.endFill();

		//we create a group to hold the actual bar as well as the percentage written in it
		gameVariables.currentState.experienceBarGroup = gameVariables.currentState.game.add.group();

		//the experience bar itself
		gameVariables.currentState.experienceBar = gameVariables.currentState.game.add.sprite(gameVariables.currentState.widthStart + 10, gameVariables.currentState.heightStart + 322, 'textureAtlas', 'experience-bar');
		gameVariables.currentState.experienceBar.width = 440;
		gameVariables.currentState.experienceBar.originalWidth = 440;

		gameVariables.currentState.cropExperienceBar = new Phaser.Rectangle(0, 0, 3, gameVariables.currentState.experienceBar.height);
		gameVariables.currentState.experienceBar.crop(gameVariables.currentState.cropExperienceBar);

		//the percentage text
		gameVariables.currentState.percentageText = gameMethods.displayText(gameVariables.currentState.widthStart + 15, gameVariables.currentState.heightStart + 319, '0%', 'smallContent', 'left', false);
		gameVariables.currentState.percentageText.alpha = 0.5;

		//and we add them all to the group
		gameVariables.currentState.experienceBarGroup.add(gameVariables.currentState.experienceBar);
		gameVariables.currentState.experienceBarGroup.add(gameVariables.currentState.percentageText);
	}
};

var ExperienceUpdateContentManager = {

	//pop the diamond and start the animations
	diamondAlive: function() {
		gameVariables.currentState.diamond.alive = true;
		//we make the diamond appear and let him rise slowly
		gameVariables.currentState.game.add.tween(gameVariables.currentState.diamond).to( { alpha: 1 }, 2000, "Linear", true);
		gameVariables.currentState.game.add.tween(gameVariables.currentState.diamond).to( { x: gameVariables.currentState.game.width *0.5 + 130, y: gameVariables.currentState.game.height - 170 }, 5000, Phaser.Easing.Quadratic.InOut, true);
	},

	//make the experience bar fill up
	fillExperienceBar: function(group) {
		//if it's the first group to pop, we start the tween
		if (group === gameVariables.currentState.fourthButtonGroup)
			gameVariables.currentState.tweenExperienceBarGrowth.start();
		//else we resume it
		else
			gameVariables.currentState.tweenExperienceBarGrowth.resume();

		//in any case, we have to pause the bar growth a bit before the next growth start
		setTimeout(function(state) {
			//if it's the last group to pop, we stop the tween instead of just pausing it
			if (group === state.firstButtonGroup)
				state.tweenExperienceBarGrowth.stop(true);
			else
				state.tweenExperienceBarGrowth.pause();
		}, 800, gameVariables.currentState);
	},

	//actually associate a button with a link to go to
	associateLink: function(group) {
		//then we get the actual link
		switch (group) {
			case gameVariables.currentState.firstHoverGroup:
				window.open('http://louvre.fhuszti.tech/'+userLang);
				break;
			case gameVariables.currentState.thirdHoverGroup:
				window.open('http://microcms.fhuszti.tech/');
				break;
			case gameVariables.currentState.fourthHoverGroup:
				window.open('http://tours.fhuszti.tech/');
				break;
			case gameVariables.currentState.fifthButtonGroup:
				window.open('http://www.fhuszti.com/'+userLang+'/projects/');
				break;
		}
	},

	//manage hover on buttons
	//for the type, true = hover over, false = hover out
	manageHover: function(group, type, second = false) {
		//if over
		if (type) {
			gameVariables.currentState.game.add.tween(group).to( { alpha: 1 }, 300, "Linear", true);

			//if it's the interactive resume button
			if (second)
				gameVariables.currentState.game.add.tween(gameVariables.currentState.secondButtonTextGroup).to( { alpha: 0 }, 300, "Linear", true);
		}
		//if out
		else {
			gameVariables.currentState.game.add.tween(group).to( { alpha: 0 }, 300, "Linear", true);

			//if it's the interactive resume button
			if (second)
				gameVariables.currentState.game.add.tween(gameVariables.currentState.secondButtonTextGroup).to( { alpha: 1 }, 300, "Linear", true);
		}
	},

	//switch the cursor on hover of the given group's children
	changeCursorOnHover: function(group) {
		group.forEach(function(child) {
			child.input.useHandCursor = true;
		}, gameVariables.currentState, true);
	},
	
	//setup the clickable fake sprite on top of buttons
	setupLinks: function(manager) {
		gameVariables.currentState.firstHoverGroup.onChildInputDown.add(function() { manager.associateLink(gameVariables.currentState.firstHoverGroup); }, gameVariables.currentState);
		gameVariables.currentState.firstHoverGroup.onChildInputOver.add(function() { manager.manageHover(gameVariables.currentState.firstHoverGroup, true); }, gameVariables.currentState);
		gameVariables.currentState.firstHoverGroup.onChildInputOut.add(function() { manager.manageHover(gameVariables.currentState.firstHoverGroup, false); }, gameVariables.currentState);
		manager.changeCursorOnHover(gameVariables.currentState.firstHoverGroup);

		gameVariables.currentState.secondHoverGroup.onChildInputOver.add(function() { manager.manageHover(gameVariables.currentState.secondHoverGroup, true, true); }, gameVariables.currentState);
		gameVariables.currentState.secondHoverGroup.onChildInputOut.add(function() { manager.manageHover(gameVariables.currentState.secondHoverGroup, false, true); }, gameVariables.currentState);

		gameVariables.currentState.thirdHoverGroup.onChildInputDown.add(function() { manager.associateLink(gameVariables.currentState.thirdHoverGroup); }, gameVariables.currentState);
		gameVariables.currentState.thirdHoverGroup.onChildInputOver.add(function() { manager.manageHover(gameVariables.currentState.thirdHoverGroup, true); }, gameVariables.currentState);
		gameVariables.currentState.thirdHoverGroup.onChildInputOut.add(function() { manager.manageHover(gameVariables.currentState.thirdHoverGroup, false); }, gameVariables.currentState);
		manager.changeCursorOnHover(gameVariables.currentState.thirdHoverGroup);

		gameVariables.currentState.fourthHoverGroup.onChildInputDown.add(function() { manager.associateLink(gameVariables.currentState.fourthHoverGroup); }, gameVariables.currentState);
		gameVariables.currentState.fourthHoverGroup.onChildInputOver.add(function() { manager.manageHover(gameVariables.currentState.fourthHoverGroup, true); }, gameVariables.currentState);
		gameVariables.currentState.fourthHoverGroup.onChildInputOut.add(function() { manager.manageHover(gameVariables.currentState.fourthHoverGroup, false); }, gameVariables.currentState);
		manager.changeCursorOnHover(gameVariables.currentState.fourthHoverGroup);

		gameVariables.currentState.fifthButtonGroup.onChildInputDown.add(function() { manager.associateLink(gameVariables.currentState.fifthButtonGroup); }, gameVariables.currentState);
		manager.changeCursorOnHover(gameVariables.currentState.fifthButtonGroup);
	},

	//pop the content one button by one button
	popContent: function() {
		//with 1sec delay between each
		setTimeout(function(manager) {
			gameVariables.currentState.game.add.tween(gameVariables.currentState.fourthButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			manager.fillExperienceBar(gameVariables.currentState.fourthButtonGroup);
		}, 1000, this);

		setTimeout(function(manager) {
			gameVariables.currentState.game.add.tween(gameVariables.currentState.secondButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			manager.fillExperienceBar(gameVariables.currentState.secondButtonGroup);
		}, 2000, this);

		setTimeout(function(manager) {
			gameVariables.currentState.game.add.tween(gameVariables.currentState.thirdButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			manager.fillExperienceBar(gameVariables.currentState.thirdButtonGroup);
		}, 3000, this);

		setTimeout(function(manager) {
			gameVariables.currentState.game.add.tween(gameVariables.currentState.firstButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
			manager.fillExperienceBar(gameVariables.currentState.firstButtonGroup);
		}, 4000, this);

		setTimeout(function() {
			gameVariables.currentState.game.add.tween(gameVariables.currentState.fifthButtonGroup).to( { alpha: 1 }, 2000, "Linear", true);
		}, 5000, this);

		//and the links become clickable after everything is popped
		setTimeout(function(manager) {
			manager.setupLinks(manager);
		}, 7000, this);

		//we also start to make the experience bar blink a little bit
		gameVariables.currentState.tweenExperienceBarBlink.start();
	},

	//start the small cinematic depicting the jewel arrival
	startCinematic: function() {
		//we start by stopping the player
		gameVariables.currentState.player.body.maxVelocity.x = 0;
		gameVariables.currentState.player.body.maxVelocity.y = 0;
		gameVariables.currentState.player.animations.paused = true;

		//we start the first tweens
		gameVariables.currentState.firstTweenBlue.start();
		gameVariables.currentState.firstTweenLightUp.start();

		var exclamation = gameVariables.currentState.game.add.sprite(gameVariables.currentState.player.body.x, gameVariables.currentState.player.body.y - 20, 'textureAtlas', 'exclamation');
		exclamation.anchor.setTo(0.5);
		exclamation.scale.setTo(0.9);

		//separate timeOut because delayed 2 more seconds
		setTimeout(function(state) {
			//now the player can move again
			state.player.body.maxVelocity.x = 10000;
			state.player.body.maxVelocity.y = 10000;
			//and the exclamation isn't needed anymore
			exclamation.destroy();
		}, 5000, gameVariables.currentState);

		//next we start the whole diamond thingy
		this.diamondAlive();

		//and we start popping out projects
		this.popContent();
	},







	//update the percentage in the experience bar section
	updatePercentage: function() {
		//we destroy the old one
		gameVariables.currentState.percentageText.destroy();
		
		//get the actual percentage
		var currentPercentage = Math.floor(gameVariables.currentState.experienceBar.width * 100 / gameVariables.currentState.experienceBar.originalWidth).toString()+'%';
		//and pop it again
		gameVariables.currentState.percentageText = gameMethods.displayText(gameVariables.currentState.widthStart + 15, gameVariables.currentState.heightStart + 319, currentPercentage, 'smallContent', 'left', false);
		gameVariables.currentState.percentageText.alpha = 0.5;
	},







	//redirect player to Hub state
	redirectToGameHub: function() {
		this.game.state.start('Hub');
	},

	//create the modal window for the shortcut
	generateModal: function() {
		gameVariables.currentState.modal = gameVariables.currentState.game.add.group();
		gameVariables.currentState.modal.inputEnableChildren = true;

		//first, a blackish overlay to prevent from clicking anywhere behind the modal
		gameVariables.currentState.modalOverlay = gameVariables.currentState.game.add.graphics(0, 0);
		gameVariables.currentState.modalOverlay.beginFill(0x000000, 0.2);
		gameVariables.currentState.modalOverlay.drawRect(0, 0, 800, 600);
		gameVariables.currentState.modalOverlay.endFill();
		gameVariables.currentState.modal.add(gameVariables.currentState.modalOverlay);

		//we double the background to artifically get alpha up
		gameMethods.generateButton(gameVariables.currentState.game.width * 0.5 - 200, gameVariables.currentState.game.height * 0.5 - 100, 400, 200, 0.5, gameVariables.currentState.modal);
		gameMethods.generateButton(gameVariables.currentState.game.width * 0.5 - 200, gameVariables.currentState.game.height * 0.5 - 100, 400, 200, 0.7, gameVariables.currentState.modal);

		//we generate all the text
		var title1 = gameMethods.displayText(gameVariables.currentState.game.width * 0.5, gameVariables.currentState.game.height * 0.5 - 60, "experienceModalTitle1", 'title', 'center'),
			title2 = gameMethods.displayText(gameVariables.currentState.game.width * 0.5, gameVariables.currentState.game.height * 0.5 - 35, "experienceModalTitle2", 'title', 'center'),
			title3 = gameMethods.displayText(gameVariables.currentState.game.width * 0.5, gameVariables.currentState.game.height * 0.5 - 10, "experienceModalTitle3", 'title', 'center'),
			no = gameMethods.displayText(gameVariables.currentState.game.width * 0.5 - 100, gameVariables.currentState.game.height * 0.5 + 60, "experienceModalNo", 'title', 'center'),
			yes = gameMethods.displayText(gameVariables.currentState.game.width * 0.5 + 100, gameVariables.currentState.game.height * 0.5 + 60, "experienceModalYes", 'title', 'center');

		//on click on "Yes"
		yes.events.onInputDown.add(this.redirectToGameHub, gameVariables.currentState);
		yes.inputEnabled = true;
		yes.input.useHandCursor = true;

		no.inputEnabled = true;
		no.input.useHandCursor = true;

		//we had them all to the same group
		gameVariables.currentState.modal.add(title1);
		gameVariables.currentState.modal.add(title2);
		gameVariables.currentState.modal.add(title3);
		gameVariables.currentState.modal.add(yes);
		gameVariables.currentState.modal.add(no);

		gameVariables.currentState.modal.alpha = 0;
		gameVariables.currentState.game.add.tween(gameVariables.currentState.modal).to( { alpha: 1 }, 600, "Linear", true);
	},

	//Setup a modal window to ask for the shortcut
	setupModalShortcut: function() {
		//we start by stopping the player
		gameVariables.currentState.player.body.maxVelocity.x = 0;
		gameVariables.currentState.player.body.maxVelocity.y = 0;
		gameVariables.currentState.player.animations.paused = true;

		//we smoothly pop the hidden modal
		this.generateModal();
	},

	//manage the shortcut-to-home visual activation 
	homeShortcut: function() {
		//we gradually up the light and tint the background to their "cinematic" value, where the shortcut activates
		//but as this method is called from update(), we gotta make sure the tweens don't mess with others that may be ongoing
		if ( gameVariables.currentState.light.alpha === 0.2 && !gameVariables.currentState.tweenLightUp.isRunning && !gameVariables.currentState.tweenLightDown.isRunning && !gameVariables.currentState.tweenBlue.isRunning && !gameVariables.currentState.tweenWhite.isRunning ) {
			gameVariables.currentState.tweenLightUp = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.5 }, 5000, "Linear");
			gameVariables.currentState.tweenLightUp.start();
			
			gameVariables.currentState.tweenBlue = ExperienceConfigManager.tweenTint(gameVariables.currentState.background, 0xffffff, 0x5FC6D4, 5000);
			gameVariables.currentState.tweenBlue.start();
		}

		//if light alpha and background tint are maxed, we pop the question
		if ( !gameVariables.currentState.modalStarted && gameVariables.currentState.light.alpha == 0.5 ) {
			this.setupModalShortcut();
			gameVariables.currentState.modalStarted = true;
		}
	},







	//manage the first time background and light go back to normal
	firstEffectsDown: function() {
		gameVariables.currentState.firstTweenWhite.start();
		gameVariables.currentState.firstTweenLightDown.start();

		gameVariables.currentState.started = true;
	},







	//manage every other time background and light go back to normal
	manageEffectsDown: function() {
		if ( !gameVariables.currentState.tweenLightDown.isRunning && !gameVariables.currentState.firstTweenLightDown.isRunning ) {
			if ( gameVariables.currentState.tweenLightUp.isRunning ) {
				gameVariables.currentState.tweenLightUp.stop();
			}

			gameVariables.currentState.tweenLightDown = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.2 }, 1000, "Linear");
			gameVariables.currentState.tweenLightDown.start();
		}

		if ( !gameVariables.currentState.tweenWhite.isRunning && !gameVariables.currentState.firstTweenWhite.isRunning ) {
			if ( gameVariables.currentState.tweenBlue.isRunning ) {
				gameVariables.currentState.tweenBlue.stop();
				//so it doesn't start the gradient at the max value if it wasn't there already
				gameVariables.currentState.currentTint = gameVariables.currentState.background.tint;
			}

			gameVariables.currentState.tweenWhite = ExperienceConfigManager.tweenTint(gameVariables.currentState.background, gameVariables.currentState.currentTint, 0xffffff, 1000);
			gameVariables.currentState.tweenWhite.start();
		}
	},







	//manage eveyrthing that happens when the user quits the shortcut modal
	manageModalQuit: function() {
		//now the player can move again
		gameVariables.currentState.player.body.maxVelocity.x = 10000;
		gameVariables.currentState.player.body.maxVelocity.y = 10000;

		gameVariables.currentState.game.add.tween(gameVariables.currentState.modal).to( { alpha: 0 }, 300, "Linear", true);
		//timeout on the destroy to let the animation to alpha 0 play first
		setTimeout(function() {
			gameVariables.currentState.modal.destroy();
		}, 400, this);

		//so it doesn't start the gradient at the max value if it wasn't there already
		gameVariables.currentState.currentTint = gameVariables.currentState.background.tint;
		gameVariables.currentState.tweenWhite = ExperienceConfigManager.tweenTint(gameVariables.currentState.background, gameVariables.currentState.currentTint, 0xffffff, 300);
		gameVariables.currentState.tweenWhite.start();

		gameVariables.currentState.tweenLightDown = gameVariables.currentState.game.add.tween(gameVariables.currentState.light).to( { alpha: 0.2 }, 300, "Linear");
		gameVariables.currentState.tweenLightDown.start();

		//we delay the change of the boolean to let the light alpha go down first
		setTimeout(function() {
			gameVariables.currentState.modalStarted = false;
		}, 1000, this);
	}
};

var ExperiencePlayerManager = {

	//create player
	createPlayer: function() {
		gameVariables.currentState.player = gameVariables.currentState.game.add.sprite(30, 60, 'textureAtlas', 'ninja1');
	}
};

var ExperienceVisualsManager = {

	//generate the light above the waterfall, behind the diamond
	generateDiamondLight: function() {
		var light = gameVariables.currentState.game.add.sprite(389, 422, 'textureAtlas', 'light');
		light.alpha = 0;

		return light;
	},







	//create things other than platforms (rocks/branchs/trees/flowers...)
	//BEHIND the map
	behindMap: function() {
		var tree = gameVariables.currentState.game.add.sprite(230, gameVariables.currentState.game.height*0.5 + 20, 'textureAtlas', 'pine2');
		tree.scale.setTo(0.7);
	},







	//create the guidance sign and its text
	generateSigns: function() {
		var contactSign = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 30, gameVariables.currentState.game.height - 85, 'textureAtlas', 'sign0');
		contactSign.scale.setTo(0.5);
		contactSign.anchor.setTo(0.5);
		contactSign.angle = 90;

		gameMethods.displayText(gameVariables.currentState.game.width - 50, gameVariables.currentState.game.height - 110, 'contact', 'guidance', 'right');
	},







	//Create the diamond and hide it
	generateDiamond: function() {
		gameVariables.currentState.diamond = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width *0.5 + 130, gameVariables.currentState.game.height - 50, 'textureAtlas', 'diamond');
		gameVariables.currentState.diamond.scale.setTo(0.7);
		gameVariables.currentState.diamond.anchor.setTo(0.5);
		gameVariables.currentState.diamond.alpha = 0;
		gameVariables.currentState.diamond.alive = false;
	},







	//generate the left tree
	generateLeftTree: function() {
		var tree = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width*0.5 - 50, gameVariables.currentState.game.height - 155, 'textureAtlas', 'branch1');
		tree.scale.setTo(0.6);

		var foliage1 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width*0.5, gameVariables.currentState.game.height - 190, 'textureAtlas', 'branch10');
		foliage1.angle = 10;

		var foliage2 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width*0.5 + 20, gameVariables.currentState.game.height - 180, 'textureAtlas', 'branch10');
		foliage2.angle = 90;

		var foliage3 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width*0.5 - 10, gameVariables.currentState.game.height - 150, 'textureAtlas', 'branch10');
		foliage3.angle = -5;

		var foliage4 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width*0.5 + 100, gameVariables.currentState.game.height - 100, 'textureAtlas', 'branch10');
		foliage4.angle = 150;

		var apple1 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width*0.5 + 50, gameVariables.currentState.game.height - 140, 'textureAtlas', 'apple');
		apple1.alpha = 0.9;

		var apple2 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width*0.5 + 30, gameVariables.currentState.game.height - 100, 'textureAtlas', 'apple');
		apple2.alpha = 0.9;

		var apple3 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width*0.5 - 10, gameVariables.currentState.game.height - 130, 'textureAtlas', 'apple');
		apple3.alpha = 0.9;
	},

	//generate the right tree
	generateRightTree: function() {
		var tree = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 100, gameVariables.currentState.game.height - 155, 'textureAtlas', 'branch1');
		tree.scale.x = -0.6;
		tree.scale.y = 0.6;

		var foliage1 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 210, gameVariables.currentState.game.height - 190, 'textureAtlas', 'branch10');

		var foliage2 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 210, gameVariables.currentState.game.height - 170, 'textureAtlas', 'branch10');

		var foliage3 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 210, gameVariables.currentState.game.height - 70, 'textureAtlas', 'branch10');
		foliage3.angle = -120;

		var foliage4 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 230, gameVariables.currentState.game.height - 150, 'textureAtlas', 'branch10');

		var apple1 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 150, gameVariables.currentState.game.height - 120, 'textureAtlas', 'apple');
		apple1.alpha = 0.9;

		var apple2 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 200, gameVariables.currentState.game.height - 110, 'textureAtlas', 'apple');
		apple2.alpha = 0.9;

		var apple3 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 160, gameVariables.currentState.game.height - 160, 'textureAtlas', 'apple');
		apple3.alpha = 0.9;

		var apple4 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 210, gameVariables.currentState.game.height - 170, 'textureAtlas', 'apple');
		apple4.alpha = 0.9;
	},

	//create a waterfall either on normal or reversed
	manageWaterfall: function(side) {
		var x, y;

		if (side === 'left') {
			x = gameVariables.currentState.game.width*0.5 - 46;
			y = gameVariables.currentState.game.height - 70;
		}
		else if (side === 'right') {
			x = gameVariables.currentState.game.width - 105;
			y = gameVariables.currentState.game.height - 70;
		}

		var waterfall = gameVariables.currentState.game.add.sprite(x, y, 'waterfallLight');

		if (side === 'left') {
			waterfall.scale.setTo(2);
		}
		if (side === 'right') {
			waterfall.scale.setTo(-2, 2);
		}

        waterfall.animations.add('flow', Phaser.Animation.generateFrameNames('waterfallLight', 0, 31), 20, true);
        waterfall.animations.play('flow');
	},

	//create things other than platforms (rocks/branchs/trees/flowers...)
	//IN FRONT OF the dark panel
	//BEHIND the player
	frontPanelsBehindPlayer: function() {
		//Side downward path
		gameVariables.currentState.game.add.sprite(0, 40, 'textureAtlas', 'plant6');

		var flower1 = gameVariables.currentState.game.add.sprite(90, 170, 'textureAtlas', 'flower6');
		flower1.scale.setTo(0.3);

		var plant1 = gameVariables.currentState.game.add.sprite(62, 185, 'textureAtlas', 'plant4');
		plant1.scale.setTo(0.6);

		var plant2 = gameVariables.currentState.game.add.sprite(147, gameVariables.currentState.game.height*0.5 + 20, 'textureAtlas', 'plant14');
		plant2.angle = -10;

		gameVariables.currentState.game.add.sprite(77, gameVariables.currentState.game.height - 169, 'textureAtlas', 'plant3');

		//ground
		this.generateLeftTree();
		this.generateRightTree();

		this.manageWaterfall('left');
		this.manageWaterfall('right');

		gameVariables.currentState.game.add.sprite(170, gameVariables.currentState.game.height - 103, 'textureAtlas', 'plant17');
		gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width*0.5 - 100, gameVariables.currentState.game.height - 75, 'textureAtlas', 'plant3');
	},







	//create things other than platforms (rocks/branchs/trees/flowers...)
	//IN FRONT OF the dark panel
	//IN FRONT OF the player
	frontPanelsFrontPlayer: function() {
		//Side downward path
		gameVariables.currentState.game.add.sprite(48, gameVariables.currentState.game.height*0.5 - 30, 'textureAtlas', 'plant15');
		var leaves1 = gameVariables.currentState.game.add.sprite(45, 130, 'textureAtlas', 'plant9');
		leaves1.scale.setTo(0.4);
		var leaves2 = gameVariables.currentState.game.add.sprite(43, gameVariables.currentState.game.height*0.5 + 20, 'textureAtlas', 'plant12');
		leaves2.scale.setTo(0.6);

		gameVariables.currentState.game.add.sprite(115, gameVariables.currentState.game.height - 140, 'textureAtlas', 'plant16');
		gameVariables.currentState.game.add.sprite(115, gameVariables.currentState.game.height - 110, 'textureAtlas', 'plant16');

		//left part of the separating wall
		var foliage1 = gameVariables.currentState.game.add.sprite(205, 60, 'textureAtlas', 'plant15');
		foliage1.scale.x = -1;
		var foliage2 = gameVariables.currentState.game.add.sprite(205, -10, 'textureAtlas', 'plant15');
		foliage2.scale.x = -1;
		var foliage3 = gameVariables.currentState.game.add.sprite(205, gameVariables.currentState.game.height*0.5 - 150, 'textureAtlas', 'plant15');
		foliage3.scale.x = -1;
		var foliage4 = gameVariables.currentState.game.add.sprite(205, gameVariables.currentState.game.height*0.5 - 40, 'textureAtlas', 'plant15');
		foliage4.scale.x = -1;
		var foliage5 = gameVariables.currentState.game.add.sprite(205, gameVariables.currentState.game.height*0.5 + 30, 'textureAtlas', 'plant15');
		foliage5.scale.x = -1;

		//right part of the separating wall
		gameVariables.currentState.game.add.sprite(242, gameVariables.currentState.game.height*0.5 - 120, 'textureAtlas', 'plant15');
		gameVariables.currentState.game.add.sprite(242, 110, 'textureAtlas', 'plant15');
		gameVariables.currentState.game.add.sprite(242, gameVariables.currentState.game.height*0.5 - 50, 'textureAtlas', 'plant15');

		//ground
		var plant1 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width *0.5 + 130, gameVariables.currentState.game.height - 40, 'textureAtlas', 'plant1');
		plant1.anchor.setTo(0.5);

		var plant2 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width *0.5 + 130, gameVariables.currentState.game.height - 50, 'textureAtlas', 'plant2');
		plant2.anchor.setTo(0.5);

		var plant3 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width *0.5 - 10, gameVariables.currentState.game.height - 45, 'textureAtlas', 'plant4');
		plant3.anchor.setTo(0.5);
		plant3.scale.setTo(0.8);

		var plant4 = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width *0.5 + 260, gameVariables.currentState.game.height - 45, 'textureAtlas', 'plant4');
		plant4.anchor.setTo(0.5);
		plant4.scale.setTo(0.8);

		gameVariables.currentState.game.add.sprite(130, gameVariables.currentState.game.height - 60, 'textureAtlas', 'plant5');
	},
};

var HubPlayerManager = {

	//create player at different places depending where the visitor was before
    createPlayer: function() {
        var widthPop = null, heightPop = null;

        //nothing special when coming from Experience, thus going to default
        switch(gameVariables.previousState) {
            case 'languages':
            	widthPop = 50;
            	heightPop = 100;
            	break;
            case 'contact':
           	    widthPop = gameVariables.currentState.game.width - 30;
           	    heightPop = 430;
           	    break;
            case 'academics':
           	    widthPop = 50;
           	    heightPop = gameVariables.currentState.game.height - 100;
           	    break;
            default:
           	    widthPop = 360;
           	    heightPop = 430;
        }
        gameVariables.currentState.player = gameVariables.currentState.game.add.sprite(widthPop, heightPop, 'textureAtlas', 'ninja1');
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 200)
            gameVariables.currentState.player.scale.x = -1;
    }
};

var HubVisualsManager = {

	//create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the map
    behindMap: function() {
    	gameVariables.currentState.add.sprite(250, 160, 'textureAtlas', 'pine1');
        gameVariables.currentState.add.sprite(150, 220, 'textureAtlas', 'pine2');
        gameVariables.currentState.branch6 = gameVariables.currentState.add.sprite(150, 190, 'textureAtlas', 'branch6');
        gameVariables.currentState.branch6.anchor.set(0.5);
        gameVariables.currentState.branch6.angle = 180;
        gameVariables.currentState.branch10 = gameVariables.currentState.add.sprite(110, 200, 'textureAtlas', 'branch10');
        gameVariables.currentState.branch10.anchor.set(0.5);
        gameVariables.currentState.branch10.angle = -80;
        gameVariables.currentState.rock4 = gameVariables.currentState.add.sprite(100, gameVariables.currentState.game.height - 110, 'textureAtlas', 'rock4');
        gameVariables.currentState.rock4.angle = -15;
    },





    

    //create things other than platforms (rocks/branchs/trees/flowers...)
    //BEHIND the signs
    //BEHIND the player
    behindSignsBehindPlayer: function() {
    	gameVariables.currentState.add.sprite(90, gameVariables.currentState.game.height - 90, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(260, gameVariables.currentState.game.height - 175, 'textureAtlas', 'plant4');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 40, gameVariables.currentState.game.height - 170, 'textureAtlas', 'plant5');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 110, gameVariables.currentState.game.height - 190, 'textureAtlas', 'plant17');
        gameVariables.currentState.branch8 = gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 255, gameVariables.currentState.game.height - 180, 'textureAtlas', 'branch8');
        gameVariables.currentState.add.sprite(230, gameVariables.currentState.game.height*0.5 - 140, 'textureAtlas', 'plant13');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 120, gameVariables.currentState.game.height*0.5 - 120, 'textureAtlas', 'plant14');
        gameVariables.currentState.signPlant2 = gameVariables.currentState.add.sprite(45, gameVariables.currentState.game.height - 95, 'textureAtlas', 'plant4');
        gameVariables.currentState.signPlant2.anchor.setTo(0.5, 0);
        gameVariables.currentState.signPlant2.scale.setTo(0.5);
    },







    //Create all guidance signs
    generateSigns: function() {
    	var skillsSign = gameVariables.currentState.game.add.sprite(5, 55, 'textureAtlas', 'sign5'),
            experienceSign = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 125, 23, 'textureAtlas', 'sign4'),
            contactSign = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 50, gameVariables.currentState.game.height - 195, 'textureAtlas', 'sign4'),
            formationSign = gameVariables.currentState.game.add.sprite(15, gameVariables.currentState.game.height - 130, 'textureAtlas', 'sign5');

        skillsSign.scale.setTo(0.5);
        experienceSign.scale.setTo(0.5);
        contactSign.scale.setTo(0.5);
        formationSign.scale.setTo(0.5);

        //Adding the text next to the signs
        gameMethods.displayText(80, 60, 'skills', 'guidance');
        gameMethods.displayText(gameVariables.currentState.game.width - 150, 25, 'experience', 'guidance', 'right');
        gameMethods.displayText(gameVariables.currentState.game.width - 70, gameVariables.currentState.game.height - 140, 'contact', 'guidance', 'right');
        gameMethods.displayText(20, gameVariables.currentState.game.height - 160, 'academics', 'guidance');
    },







    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the signs
    //BEHIND the player
    frontSignsBehindPlayer: function() {
    	gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 150, 46, 'textureAtlas', 'plant3');
        gameVariables.currentState.signPlant1 = gameVariables.currentState.add.sprite(45, 92, 'textureAtlas', 'plant4');
        gameVariables.currentState.signPlant1.anchor.setTo(0.5, 0);
        gameVariables.currentState.signPlant1.scale.setTo(0.5);
    },







    //create things other than platforms (rocks/branchs/trees/flowers...)
    //IN FRONT OF the signs
    //IN FRONT OF the player
    frontSignsFrontPlayer: function() {
        gameVariables.currentState.waterfall = gameVariables.currentState.game.add.sprite(gameVariables.currentState.game.width - 230, 60, 'waterfallLight');
        gameVariables.currentState.waterfall.scale.setTo(2);

        gameVariables.currentState.waterfall.animations.add('flow', Phaser.Animation.generateFrameNames('waterfallLight', 0, 31), 20, true);
        gameVariables.currentState.waterfall.animations.play('flow');


        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 - 10, gameVariables.currentState.game.height*0.5 - 85, 'textureAtlas', 'flower6').scale.setTo(0.3);
        gameVariables.currentState.add.sprite(250, gameVariables.currentState.game.height - 170, 'textureAtlas', 'plant6');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 280, gameVariables.currentState.game.height - 170, 'textureAtlas', 'plant6');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width - 100, 50, 'textureAtlas', 'plant4');
        gameVariables.currentState.add.sprite(210, gameVariables.currentState.game.height - 140, 'textureAtlas', 'plant8');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 155, gameVariables.currentState.game.height*0.5 - 120, 'textureAtlas', 'plant15');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5 + 80, gameVariables.currentState.game.height*0.5 - 120, 'textureAtlas', 'plant14');
        gameVariables.currentState.add.sprite(gameVariables.currentState.game.width*0.5, gameVariables.currentState.game.height - 175, 'textureAtlas', 'plant18');
    }
};

var SkillsConfigManager = {

	//Set some objects immovable so we can use them as platforms
    setImmovableObjects: function(){
    	gameVariables.currentState.rocks.forEach(function(rock) {
            rock.anchor.setTo(0.5);
            rock.body.immovable = true;
        });
        gameVariables.currentState.branch8.body.immovable = true;
    }
};

var SkillsContentManager = {

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
    }
};

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

var SkillsPlayerManager = {

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
    }
};

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

var AcademicsManager = {

	generateAcademics: function() {
		gameMethods.addBackground();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        AcademicsVisualsManager.behindMap();

        //Initial map setup
        gameMethods.mapSetup('academicsMap');

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the wooden panels
        //BEHIND the player
        AcademicsVisualsManager.behindPanelsBehindPlayer();

        //Adding the guidance sign and its text
        AcademicsVisualsManager.generateSigns();

        //Wooden panels background
        AcademicsVisualsManager.generatePanels();

        //Adding the title of the page at the right place
        AcademicsContentManager.displayTitle();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the wooden panels
        //BEHIND the player
        AcademicsVisualsManager.frontPanelsBehindPlayer();

        //create player
        AcademicsPlayerManager.createPlayer();

        //Display all texts on creation, then call checkHeight to delete those that shouldn't appear yet
        AcademicsContentManager.displayFormationTexts();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the wooden panels
        //IN FRONT OF the player
        AcademicsVisualsManager.frontPanelsFrontPlayer();

        //setting physics for the player and things other than platforms
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.player);

        //fine tune some player parameters now that the player has a physical body
    	gameMethods.playerSetup();

        gameVariables.previousState = 'academics';
	},







    updateAcademics: function() {
        //collisions
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.branch8);

        //Player movements management
        gameMethods.playerMov();

        //We check to add/remove the text or not
        for (var text in gameVariables.currentState.academicsTexts) {
            AcademicsPlayerManager.checkHeight(gameVariables.currentState.academicsTexts[text]);
        }

        //Changing map by walking to a specific spot on the current map
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 20 && gameVariables.currentState.player.y < 100) {
            gameVariables.currentState.game.state.start('Hub');
        }
    }
};

var ContactManager = {

	generateContact: function() {
		gameMethods.addBackground();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//BEHIND the map
		ContactVisualsManager.behindMap();

		//Initial map setup
		gameMethods.mapSetup('contactMap');

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//BEHIND the player
		ContactVisualsManager.behindPlayer();

		//Create the guidance sign
		ContactVisualsManager.generateSign();

		// Draw a dark background rectangle behind the main text
		ContactContentManager.generateContentBg();

		//create the title and the main text
		ContactContentManager.generateMainContent();

		//Create all needed buttons
		ContactContentManager.generateEmailButton();
		ContactContentManager.generateFormButton();
		ContactContentManager.generateGithubButton();
		ContactContentManager.generateLinkedinButton();

		//create player
		ContactPlayerManager.createPlayer();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//IN FRONT OF the player
		ContactVisualsManager.frontPlayer();

		//setting physics for the player and things other than platforms
		gameVariables.currentState.game.physics.arcade.enable([gameVariables.currentState.player]);

		//fine tune some player parameters now that the player has a physical body
		gameMethods.playerSetup();
		ContactPlayerManager.playerSetup();

		gameVariables.previousState = 'contact';
	},







	updateContact: function() {
		//collisions
		gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);

		//Player movements management
		if (gameVariables.currentState.player.x < 305) {
			gameVariables.currentState.game.add.tween(gameVariables.currentState.player).to({
				angle: 0
			}, 50, "Linear", true);

			gameVariables.currentState.player.body.gravity.y = 900;
			gameVariables.currentState.player.body.bounce.setTo(0, 0);

			gameMethods.playerMov();
		}
		//If player is in zero gravity zone
		if (gameVariables.currentState.player.x >= 305) {
			gameVariables.currentState.player.angle += 2;

			gameVariables.currentState.player.body.gravity.y = 0;
			gameVariables.currentState.player.body.bounce.setTo(0.8, 0.8);

			ContactUpdatePlayerManager.zeroGravityMov();
		}

		if (gameVariables.currentState.player.x < 20) {
			gameVariables.currentState.game.state.start('Hub');
		}
	}
};

var ExperienceManager = {

	generateExperience: function() {
		gameMethods.addBackground();

		//we setup state variables
		ExperienceConfigManager.setupVariables();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//BEHIND the map
		ExperienceVisualsManager.behindMap();

		//Initial map setup
		gameMethods.mapSetup('experienceMap');

		//Adding the guidance sign and its text
		ExperienceVisualsManager.generateSigns();

		//we define the class variables
		gameVariables.currentState.widthStart = gameVariables.currentState.game.width * 0.5 - 102;
		gameVariables.currentState.heightStart = 78;

		// Draw a black background rectangle behind the overlay
		ExperienceContentManager.generateContentBg();

		//then we generate the content on top of it
		ExperienceContentManager.generateContent();

		//and the exerience bar going below the content
		ExperienceContentManager.generateExperienceBarSection();

		//we generate the diamond
		ExperienceVisualsManager.generateDiamond();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//IN FRONT OF the dark panel
		//BEHIND the player
		ExperienceVisualsManager.frontPanelsBehindPlayer();

		//create player
		ExperiencePlayerManager.createPlayer();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//IN FRONT OF the dark panel
		//IN FRONT OF the player
		ExperienceVisualsManager.frontPanelsFrontPlayer();

		//we setup all needed tweens
		ExperienceConfigManager.setupTweens();

		//setting physics for the player and things other than platforms
		gameVariables.currentState.game.physics.arcade.enable([gameVariables.currentState.player, gameVariables.currentState.diamond]);
		gameVariables.currentState.diamond.body.immovable = true;

		//fine tune some player parameters now that the player has a physical body
		gameMethods.playerSetup();

		gameVariables.previousState = 'experience';
	},







	updateExperience: function() {
		//collisions
		gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);
		gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.diamond);

		//Player movements management
		//not active if the player is paused (cinematic)
		if ( gameVariables.currentState.player.body.maxVelocity.x !== 0 ) {
			gameMethods.playerMov();
		}

		//if the player is on the ground and the diamond doesn't 'exist' yet
		if ( gameVariables.currentState.player.y >= 556 && !gameVariables.currentState.diamond.alive ) {
			ExperienceUpdateContentManager.startCinematic();
		}

		//we don't forget to update the experience bar crop if the cinematic is done
		if ( gameVariables.currentState.diamond.alive ) {
			gameVariables.currentState.experienceBar.updateCrop();
			
			ExperienceUpdateContentManager.updatePercentage();
		}

		//if the player is on the diamond
		if ( gameVariables.currentState.player.x >= 503 && gameVariables.currentState.player.x <= 552 && gameVariables.currentState.player.y === 431 ) {
			ExperienceUpdateContentManager.homeShortcut();
		}
		//else we have to check for a bunch of stuff to make sure those tweens don't mess with others
		else if ( gameVariables.currentState.light.alpha > 0.2 && !gameVariables.currentState.firstTweenLightUp.isRunning && !gameVariables.currentState.firstTweenBlue.isRunning ) {
			//if it's still the first cinematic
			if ( !gameVariables.currentState.started ) {
				ExperienceUpdateContentManager.firstEffectsDown();
			}
			else {
				ExperienceUpdateContentManager.manageEffectsDown();
			}
		}

		//on click anywhere else, we close the modal if its open
		if (gameVariables.currentState.modalStarted && gameVariables.currentState.game.input.activePointer.isDown) {
			ExperienceUpdateContentManager.manageModalQuit();
		}

		//Changing map by walking to a specific spot on the current map
		if ( gameVariables.currentState.player.x > gameVariables.currentState.game.width - 75 && gameVariables.currentState.player.y > 600 ) {
			gameVariables.leavingExperienceX = gameVariables.currentState.player.x;
			gameVariables.leavingExperienceScaleX = gameVariables.currentState.player.scale.x;
			gameVariables.currentState.game.state.start('Contact');
		}
	}
};

var HubManager = {

    generateHub: function() {
    	gameMethods.addBackground();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        HubVisualsManager.behindMap();

        //Initial map setup
        gameMethods.mapSetup('homeMap');

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        HubVisualsManager.behindSignsBehindPlayer();

        //adding a title to the homepage
        gameMethods.displayText(gameVariables.currentState.game.width*0.5, 100, 'home', 'title', 'center');

        //Create all guidance signs
        HubVisualsManager.generateSigns();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        //IN FRONT OF the signs
        HubVisualsManager.frontSignsBehindPlayer();

        //create player at different places depending where the visitor was before
        HubPlayerManager.createPlayer();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the player
        HubVisualsManager.frontSignsFrontPlayer();

        //setting physics for the player and things other than platforms
        gameVariables.currentState.game.physics.arcade.enable([gameVariables.currentState.player, gameVariables.currentState.branch8]);
        gameVariables.currentState.branch8.body.immovable = true;

        //fine tune some player parameters now that the player has a physical body
    	gameMethods.playerSetup();
    },







    updateHub: function() {
        //collisions
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.branch8);

        //Player movements management
        gameMethods.playerMov();

        if (gameVariables.currentState.player.x < 20 && gameVariables.currentState.player.y < 150) {
            gameVariables.currentState.game.state.start('Languages');
        }
        if (gameVariables.currentState.player.x < 20 && gameVariables.currentState.player.y > gameVariables.currentState.game.height - 150) {
            gameVariables.currentState.game.state.start('Academics');
        }
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 20 && gameVariables.currentState.player.y < 150) {
            gameVariables.currentState.game.state.start('Experience');
        }
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 20 && gameVariables.currentState.player.y > gameVariables.currentState.game.height - 250) {
            gameVariables.currentState.game.state.start('Contact');
        }
    }
};

var FrameworksManager = {

	generateFrameworks: function() {
		gameMethods.addBackground();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        SkillsVisualsManager.behindMap();

        //Adding the table
        SkillsContentManager.generateTable(['BootStrap', 'Symfony', 'Phaser.js', 'Silex']);

        //Initial map setup
        gameMethods.mapSetup('skillsMap');

        //Create the top of the chests (behind the coins)
        SkillsVisualsManager.createTopChests([0, 0, 0]);

        //Create the coins
        SkillsVisualsManager.coinsGroup();

        SkillsVisualsManager.generateCoin('gold', 250);
        SkillsVisualsManager.generateCoin('silver', 352);
        SkillsVisualsManager.generateCoin('silver', 300);
        SkillsVisualsManager.generateCoin('bronze', 402);

        //Create the bottom of the chests (in front of the coins)
        SkillsVisualsManager.createBottomChests();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        //IN FRONT OF the chests
        SkillsVisualsManager.frontChestsBehindPlayer();

        //Adding the adequate title and signs
        SkillsVisualsManager.generateSigns('frameworks', 'others', 'languages');

        //create player at different places depending where the visitor was before
        SkillsPlayerManager.createPlayer();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the chests
        //IN FRONT OF the player
        SkillsVisualsManager.frontChestsFrontPlayer();

        //setting physics for the player and things other than platforms
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.player);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.clone);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.keyItem);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.rocks);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.branch8);

        //fine tune some player parameters now that everything has a physical body
        gameMethods.playerSetup();
        SkillsPlayerManager.cloneSetup();

        //Set some objects immovable so we can use them as platforms
        SkillsConfigManager.setImmovableObjects();

        gameVariables.previousState = 'frameworks';
	},







	updateFrameworks: function() {
		//collisions
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.clone, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.keyItem, gameVariables.currentState.blockedLayer);

        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.rocks);

        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.clone, gameVariables.currentState.branch8);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.keyItem, gameVariables.currentState.branch8);

        //Player movements management
        gameMethods.playerMov();
        SkillsUpdatePlayerManager.cloneMov();

        //Checking for the coins
	    SkillsUpdateContentManager.manageCoins(gameVariables.currentState.clone.x);

        //Stopping the coins at the right time
        SkillsUpdateContentManager.stopCoins();

        //Checking for the chests
	    SkillsUpdateContentManager.checkChests();

        //Going to another map
        if (gameVariables.currentState.player.x < 20 && gameVariables.currentState.player.y < 150) {
      	    gameVariables.currentState.game.state.start('Others');
    	}
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 20 && gameVariables.currentState.player.y < 150) {
      	    gameVariables.currentState.game.state.start('Languages');
    	}
	}
};

var LanguagesManager = {

	generateLanguages: function() {
		gameMethods.addBackground();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        SkillsVisualsManager.behindMap();

        //Adding the table
        SkillsContentManager.generateTable(['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']);

        //Initial map setup
        gameMethods.mapSetup('skillsMap');

        //Create the top of the chests (behind the coins)
        SkillsVisualsManager.createTopChests([1, 0, 0]);

        //Create the coins
        SkillsVisualsManager.coinsGroup();

        SkillsVisualsManager.generateCoin('gold', 352);
        SkillsVisualsManager.generateCoin('gold', 300);
        SkillsVisualsManager.generateCoin('gold', 250);
        SkillsVisualsManager.generateCoin('silver', 450);
        SkillsVisualsManager.generateCoin('silver', 402);

        //Create the bottom of the chests (in front of the coins)
        SkillsVisualsManager.createBottomChests();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        //IN FRONT OF the chests
        SkillsVisualsManager.frontChestsBehindPlayer();

        //Adding the adequate title and signs
        SkillsVisualsManager.generateSigns('languages', 'frameworks', 'home');

        //create player at different places depending where the visitor was before
        SkillsPlayerManager.createPlayer();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the chests
        //IN FRONT OF the player
        SkillsVisualsManager.frontChestsFrontPlayer();

        //setting physics for the player and things other than platforms
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.player);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.clone);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.keyItem);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.rocks);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.branch8);

        //fine tune some player parameters now that everything has a physical body
        gameMethods.playerSetup();
        SkillsPlayerManager.cloneSetup();

        //Set some objects immovable so we can use them as platforms
        SkillsConfigManager.setImmovableObjects();

        gameVariables.previousState = 'languages';
	},







	updateLanguages: function() {
		//collisions
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.clone, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.keyItem, gameVariables.currentState.blockedLayer);

        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.rocks);

        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.clone, gameVariables.currentState.branch8);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.keyItem, gameVariables.currentState.branch8);

        //Player movements management
        gameMethods.playerMov();
        SkillsUpdatePlayerManager.cloneMov();

        //Checking for the coins
	    SkillsUpdateContentManager.manageCoins(gameVariables.currentState.clone.x);

        //Stopping the coins at the right time
        SkillsUpdateContentManager.stopCoins();

        //Checking for the chests
	    SkillsUpdateContentManager.checkChests();

        //Going to another map
        if (gameVariables.currentState.player.x < 20 && gameVariables.currentState.player.y < 150) {
      	    gameVariables.currentState.game.state.start('Frameworks');
    	}
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 20 && gameVariables.currentState.player.y < 150) {
      	    gameVariables.currentState.game.state.start('Hub');
    	}
	}
};

var OthersManager = {

	generateOthers: function() {
		gameMethods.addBackground();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the map
        SkillsVisualsManager.behindMap();

        //Adding the table
        SkillsContentManager.generateTable(['Twig', 'Doctrine', 'Wordpress', 'jQuery', 'Linux']);

        //Initial map setup
        gameMethods.mapSetup('skillsMap');

        //Create the top of the chests (behind the coins)
        SkillsVisualsManager.createTopChests([0, 0, 0]);

        //Create the coins
        SkillsVisualsManager.coinsGroup();

        SkillsVisualsManager.generateCoin('gold', 250);
        SkillsVisualsManager.generateCoin('silver', 402);
        SkillsVisualsManager.generateCoin('silver', 352);
        SkillsVisualsManager.generateCoin('silver', 300);
        SkillsVisualsManager.generateCoin('bronze', 452);

        //Create the bottom of the chests (in front of the coins)
        SkillsVisualsManager.createBottomChests();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //BEHIND the player
        //IN FRONT OF the chests
        SkillsVisualsManager.frontChestsBehindPlayer();

        //Adding the adequate title and signs
        SkillsVisualsManager.generateSigns('others', 'home', 'frameworks');

        //create player at different places depending where the visitor was before
        SkillsPlayerManager.createPlayer();

        //create things other than platforms (rocks/branchs/trees/flowers...)
        //IN FRONT OF the chests
        //IN FRONT OF the player
        SkillsVisualsManager.frontChestsFrontPlayer();

        //setting physics for the player and things other than platforms
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.player);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.clone);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.keyItem);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.rocks);
        gameVariables.currentState.game.physics.arcade.enable(gameVariables.currentState.branch8);

        //fine tune some player parameters now that everything has a physical body
        gameMethods.playerSetup();
        SkillsPlayerManager.cloneSetup();

        //Set some objects immovable so we can use them as platforms
        SkillsConfigManager.setImmovableObjects();

        gameVariables.previousState = 'others';
	},







	updateOthers: function() {
		//collisions
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.clone, gameVariables.currentState.blockedLayer);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.keyItem, gameVariables.currentState.blockedLayer);

        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.player, gameVariables.currentState.rocks);

        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.clone, gameVariables.currentState.branch8);
        gameVariables.currentState.game.physics.arcade.collide(gameVariables.currentState.keyItem, gameVariables.currentState.branch8);

        //Player movements management
        gameMethods.playerMov();
        SkillsUpdatePlayerManager.cloneMov();

        //Checking for the coins
	    SkillsUpdateContentManager.manageCoins(gameVariables.currentState.clone.x);

        //Stopping the coins at the right time
        SkillsUpdateContentManager.stopCoins();

        //Checking for the chests
	    SkillsUpdateContentManager.checkChests();

        //Going to another map
        if (gameVariables.currentState.player.x < 20 && gameVariables.currentState.player.y < 150) {
      	    gameVariables.currentState.game.state.start('Hub');
    	}
        if (gameVariables.currentState.player.x > gameVariables.currentState.game.width - 20 && gameVariables.currentState.player.y < 150) {
      	    gameVariables.currentState.game.state.start('Frameworks');
    	}
	}
};

var HomeGame = HomeGame || {};

HomeGame.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
HomeGame.Boot.prototype = {

  preload: function() {
    //the texture atlas
	this.load.atlasJSONArray('textureAtlas', assetsBaseDir+'atlas/png/textureAtlas.png', assetsBaseDir+'atlas/json/textureAtlas.json');
  },

  create: function() {
    //loading screen will have a white background
    this.game.stage.backgroundColor = '#fff';

    //scaling options
    this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

    //screen size will be set automatically
    this.scale.updateLayout(true);

    //physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.state.start('Preload');
  }

};

var HomeGame = HomeGame || {};

//loading the game assets
HomeGame.Preload = function() {};

HomeGame.Preload.prototype = {
	preload: function() {
		//load Tiled maps
		this.load.tilemap('homeMap', assetsBaseDir+'tilemaps/home.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('skillsMap', assetsBaseDir+'tilemaps/skills.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('academicsMap', assetsBaseDir+'tilemaps/academics.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('contactMap', assetsBaseDir+'tilemaps/contact.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('experienceMap', assetsBaseDir+'tilemaps/experience.json', null, Phaser.Tilemap.TILED_JSON);

		//the terrain Spritesheet
		this.load.image('mainTiles', assetsBaseDir+'atlas/png/mainSpritesheet.png');

		//Waterfall atlas
		this.load.atlas('waterfallLight', assetsBaseDir+'atlas/png/waterfallLight.png', assetsBaseDir+'atlas/json/waterfallLight.json');
		this.load.atlas('waterfallHeavy', assetsBaseDir+'atlas/png/waterfallHeavy.png', assetsBaseDir+'atlas/json/waterfallHeavy.json');

		//JSON language files
		this.load.json('frJSON', 'lang_fr');
		this.load.json('enJSON', 'lang_en');

		//show loading screen
		this.add.sprite(0, 0, 'textureAtlas', 'background');
		//pop the light effect, hidden for now
		var light = this.add.sprite(0, 0, 'textureAtlas', 'light');
		light.width = 800;
		light.height = 600;
		light.alpha = 0;

		var loadingText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 150, '0%',
			{
				fill: '#ffffff',
				stroke: 'black',
				strokeThickness: 4
			}),
			progressDisplay = 0;

		loadingText.anchor.setTo(0.5);

		var timerEvt = this.game.time.events.loop(1, function() {
			if (progressDisplay < 100) {
				if (progressDisplay < this.game.load.progress) {
					loadingText.text = (++progressDisplay) + '%';

					//we also make the light illusion fade in
					//more and more as loading goes forward
					if (this.game.load.progress >= 30 && this.game.load.progress < 60)
						this.game.add.tween(light).to( { alpha: 0.3 }, 300, "Linear", true);
					if (this.game.load.progress >= 60 && this.game.load.progress < 90)
						this.game.add.tween(light).to( { alpha: 0.6 }, 300, "Linear", true);
					if (this.game.load.progress >= 90)
						this.game.add.tween(light).to( { alpha: 0.9 }, 300, "Linear", true);
				}
			} else {
				loadingText.text = '100% !';
				this.game.time.events.remove(timerEvt);
			}
		}, this);

		//we start the loading animation
		this.generateAnimation();
	},

	create: function() {
		var body = document.getElementsByTagName("body")[0];
		body.className += " black-bg";
		
		this.state.start('Hub');
	},

	//create the loading animation
	generateAnimation: function() {
		//first we create the platform
		var platform = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'textureAtlas', 'platform');
		platform.anchor.setTo(0.5);

		//then the character
		this.generateNinja();
	},

	//create the character
	generateNinja: function() {
		var ninja = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 35, 'textureAtlas');
		ninja.anchor.setTo(0.5);

		//we don't use the ninja2 sprite for the run animation because it makes the character go forward
		ninja.animations.add('run', ['ninja1', 'ninja3', 'ninja4', 'ninja5', 'ninja6'], 15, true);
		ninja.animations.play('run');
	}
};

var HomeGame = HomeGame || {};

HomeGame.Hub = function() {};

HomeGame.Hub.prototype = {

    create: function() {
    	gameVariables.currentState = this;

    	HubManager.generateHub();
    },

    update: function() {
        HubManager.updateHub();
    }
};

var HomeGame = HomeGame || {};

HomeGame.Academics = function() {};

HomeGame.Academics.prototype = {
    academicsTexts: {},

    create: function() {
        gameVariables.currentState = this;

    	AcademicsManager.generateAcademics();
    },

    update: function() {
        AcademicsManager.updateAcademics();
    }
};

var HomeGame = HomeGame || {};

HomeGame.Experience = function() {};

HomeGame.Experience.prototype = {
	widthStart: 0,

	heightStart: 0,

	create: function() {
		gameVariables.currentState = this;

    	ExperienceManager.generateExperience();
	},

	update: function() {
		ExperienceManager.updateExperience();
	}
};

var HomeGame = HomeGame || {};

HomeGame.Contact = function() {};

HomeGame.Contact.prototype = {
	
	create: function() {
		gameVariables.currentState = this;

    	ContactManager.generateContact();
	},

	update: function() {
		ContactManager.updateContact();
	}
};

var HomeGame = HomeGame || {};

HomeGame.Languages = function() {};

HomeGame.Languages.prototype = {
    create: function() {
        gameVariables.currentState = this;

    	LanguagesManager.generateLanguages();
    },

    update: function() {
        LanguagesManager.updateLanguages();
    }
};

var HomeGame = HomeGame || {};

HomeGame.Frameworks = function() {};

HomeGame.Frameworks.prototype = {
    create: function() {
        gameVariables.currentState = this;

    	FrameworksManager.generateFrameworks();
    },

    update: function() {
        FrameworksManager.updateFrameworks();
    }
};

var HomeGame = HomeGame || {};

HomeGame.Others = function() {};

HomeGame.Others.prototype = {
    create: function() {
        gameVariables.currentState = this;

    	OthersManager.generateOthers();
    },

    update: function() {
        OthersManager.updateOthers();
    }
};

$(function() {
    /*
    Display or hide the "turn mobile please" note
    */
    function turnMobile() {
        //on page load
        var turnMessage = $('#handleTurn');

        if ($(window).height() > $(window).width()) {
            turnMessage.show();
        }
        else {
            turnMessage.hide();
        }

        // on orientation change
        $(window).on("orientationchange", function() {
            if (window.orientation === 0) //0 means portrait, -90 and 90 mean landscape
            	turnMessage.show();
            else
            	turnMessage.hide();
        });
    }


    /*
    Click to start the game
    */
    function startGame() {
        $('#title').on('click', function(e) {
            //configuration variable before start
            var wfconfig = {
                active: function() {
                    $('#wrapper').hide();

                    $.getScript("start");
                },

        		google: {
            	     families: ['Cabin Sketch', 'Cagliostro']
        		}
            };

            //configuring the div that'll contain the game so it fits perfectly
            var canvasContent = $('#canvasContent');
            canvasContent.css('position', 'absolute');
            canvasContent.css('margin', '0');
            canvasContent.css('width', '100%');
            canvasContent.css('top', '31px');
            canvasContent.css('bottom', '0');

            //actual start
            WebFont.load(wfconfig);
        });
    }


    turnMobile();
    startGame();
});
