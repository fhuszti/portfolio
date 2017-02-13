var generalFunctions = {
    /*
    Variables
    */
    previousState: null,
    //For touch controls
    LEFT: 0,
    RIGHT: 1,
    UP: 0,
    DOWN: 1,





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
                font: "25px 'Berkshire Swash'",
                fill: "rgb(240, 240, 240)",
                align: "center",
                stroke: "black",
                strokeThickness: 4
            },
            guidance = {
                font: "20px 'Berkshire Swash'",
                fill: "rgb(240, 240, 240)",
                align: "center",
                stroke: "black",
                strokeThickness: 2
            },
            skills = {
                font: "30px 'VT323'",
                fill: "rgb(240, 240, 240)",
                align: "center",
                stroke: "black",
                strokeThickness: 2
            },
            formation = {
                font: "16px 'Cabin Sketch'",
                fill: "white",
                stroke: "black",
                strokeThickness: 2
            },
            contactContent = {
                font: "20px 'Cagliostro'",
                fill: "rgb(240, 240, 240)",
                align: "center",
                stroke: "black",
                strokeThickness: 2
            },
            contactButtons = {
                font: "19px 'Cagliostro'",
                fill: "rgb(240, 240, 240)",
                align: "center",
                stroke: "black",
                strokeThickness: 2
            },
            copyConfirm = {
                font: "15px 'VT323'",
                fill: "rgb(240, 240, 240)",
                align: "center",
                stroke: "black",
                strokeThickness: 4
            },
            experienceSkills = {
                font: "20px 'Cagliostro'",
                fill: "rgb(240, 240, 240)",
                align: "center",
                stroke: "black",
                strokeThickness: 2
            },
            experienceTitle = {
                font: "20px 'Cabin Sketch'",
                fill: "rgb(240, 240, 240)",
                align: "center",
                stroke: "black",
                strokeThickness: 3
            },
            experienceContent = {
                font: "16px 'Cabin Sketch'",
                fill: "rgb(240, 240, 240)",
                align: "center",
                stroke: "black",
                strokeThickness: 2.5
            };

        //We get a different text file depending on the current user language
        if (window.actualLang === 'fr') {
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
            case 'skills':
                styleToRender = skills;
                break;
            case 'formation':
                styleToRender = formation;
                break;
            case 'contactContent':
                styleToRender = contactContent;
                break;
            case 'contactButtons':
                styleToRender = contactButtons;
                break;
            case 'copyConfirm':
            	styleToRender = copyConfirm;
            	break;
            case 'experienceSkills':
            	styleToRender = experienceSkills;
            	break;
            case 'experienceTitle':
            	styleToRender = experienceTitle;
            	break;
            case 'experienceContent':
            	styleToRender = experienceContent;
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

		//Next we draw the green delimiters
		var buttonDelimiter = HomeGame.game.add.graphics(0, 0);
		buttonDelimiter.lineStyle(3, 0x005400, 0.8);

		buttonDelimiter.moveTo(x + 81, y - 1);
		buttonDelimiter.lineTo(x + width + 1, y - 1);
		buttonDelimiter.lineTo(x + width + 1, y + 9);

		buttonDelimiter.moveTo(x + width - 81, y + height + 1);
		buttonDelimiter.lineTo(x - 1, y + height + 1);
		buttonDelimiter.lineTo(x - 1, y + height - 9);

		//then we add them to the group
		currentGroup.add(buttonBg);
		currentGroup.add(buttonDelimiter);

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
            font: "20px 'VT323'",
            fill: "rgb(240, 240, 240)",
            stroke: "black",
            strokeThickness: 1
        });

        if (layout === 'vertical') {
            line.angle = -90;
            line.scale.setTo(0.5, 1);
        }

        line.setShadow(3, 3, 'rgba(10, 10, 10, 0.5)', 1);

        HomeGame.game.add.existing(line);
    },

    /*
    Display all text in the table
    */
    displayTableTitles: function(titles = []) {
        var titleHeight = 228;

        this.displayText(330, 200, 'skillsNewbie', 'skills', 'center');
        this.displayText(490, 200, 'skillsIntermediate', 'skills', 'center');
        this.displayText(640, 200, 'skillsAdvanced', 'skills', 'center');

        if (titles.length > 0) {
            titles.forEach(function(title) {
                generalFunctions.displayText(230, titleHeight, title, 'skills', 'right');
                titleHeight += 50;
            });
        }
    },








    /*
    Player movements management
    */
    playerMov: function(state) {
        //Reset speed to steady every frame exept on no gravity zone
        if (state.key != 'Contact' || state.player.x < 305)
            state.player.body.velocity.x = 0;
        if (state.key == 'Languages' || state.key == 'Frameworks' || state.key == 'Others')
            state.clone.body.velocity.x = 0;

        //Player movements management
        if (state.cursors.right.isDown || state.game.input.pointer1.isDown && Math.floor(state.game.input.x / (state.game.width *0.5)) === this.RIGHT) {
            //  Move to the right
            state.player.body.velocity.x = 125;
            if (state.player.scale.x < 0)
                state.player.scale.x *= -1;
            state.player.animations.play('run');
        } else if (state.cursors.left.isDown || state.game.input.pointer1.isDown && Math.floor(state.game.input.x / (state.game.width *0.5)) === this.LEFT) {
            //  Move to the left
            state.player.body.velocity.x = -125;
            if (state.player.scale.x > 0)
                state.player.scale.x *= -1;
            state.player.animations.play('run');
        } else {
            //  Stand still
            state.player.animations.stop();
            state.player.frameName = 'ninja1';
        }

        //Jump management
        if (state.cursors.up.isDown || state.game.input.pointer1.isDown && Math.floor(state.game.input.y / (state.game.height *0.5)) === this.UP) {
            this.playerJump(state);
        }
    },


    playerJump: function(state) {
        if (state.player.body.blocked.down || state.player.body.touching.down) {
            state.player.body.velocity.y -= 500;
            state.player.frameName = 'ninja4';
        }

        if (state.key == 'Languages' || state.key == 'Frameworks' || state.key == 'Others') {
            if (state.clone.body.blocked.down || state.clone.body.touching.down) {
                state.clone.body.velocity.y -= 500;
                state.clone.frameName = 'ninjaWhite4';
            }
            if (state.keyItem.body.blocked.down || state.keyItem.body.touching.down) {
                state.keyItem.body.velocity.y -= 500;
            }
        }
    },






    /*
    Initial map setup
    */
    mapSetup: function(state, map) {
        state.map = state.game.add.tilemap(map);

        //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
        state.map.addTilesetImage('mainSpritesheet', 'mainTiles');

        //create layers
        state.backgroundLayer = state.map.createLayer('backgroundLayer');
        state.blockedLayer = state.map.createLayer('blockedLayer');

        //collision on blockedLayer
        state.map.setCollisionBetween(1, 100000, true, 'blockedLayer');

        //resizes the game world to match the layer dimensions
        state.backgroundLayer.resizeWorld();
        state.blockedLayer.resizeWorld();
    },

    addBackground: function(state) {
        state.background = state.add.sprite(0, 0, 'textureAtlas', 'background');
    },





    /*
    fine tune some player parameters now that the player has a physical body
    */
    playerSetup: function(state) {
        state.player.body.collideWorldBounds = true;

        //to prevent the player from "floating" above the ground, reducing its physical body size to ease collisions
        state.player.body.setSize(30, 25);

        //player gravity
        state.player.body.gravity.y = 900;

        //Animations
        state.player.anchor.setTo(0.5, 1);
        state.player.animations.add('run', Phaser.Animation.generateFrameNames('ninja', 1, 6), 15, true);

        //move player with cursor keys
        state.cursors = state.game.input.keyboard.createCursorKeys();
    }
};
