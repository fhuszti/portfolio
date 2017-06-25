var HomeGame = HomeGame || {};

HomeGame.Contact = function() {};

HomeGame.Contact.prototype = {

	create: function() {
		generalFunctions.addBackground(this);

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//BEHIND the map
		this.behindMap();

		//Initial map setup
		generalFunctions.mapSetup(this, 'contactMap');

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//BEHIND the player
		this.behindPlayer();

		//Create the guidance sign
		this.generateSign();

		// Draw a dark background rectangle behind the main text
		this.generateContentBg();

		//create the title and the main text
		this.generateMainContent();

		//Create all needed buttons
		this.generateEmailButton();
		this.generateFormButton();
		this.generateGithubButton();
		this.generateLinkedinButton();

		//create player
		this.createPlayer();

		//create things other than platforms (rocks/branchs/trees/flowers...)
		//IN FRONT OF the player
		this.frontPlayer();

		//setting physics for the player and things other than platforms
		this.game.physics.arcade.enable([this.player]);

		//fine tune some player parameters now that the player has a physical body
		generalFunctions.playerSetup(this);

		generalFunctions.previousState = 'contact';
	},

	update: function() {
		//collisions
		this.game.physics.arcade.collide(this.player, this.blockedLayer);
		this.game.physics.arcade.collide(this.player, this.branch8);

		//Player movements management
		if (this.player.x < 305) {
			this.game.add.tween(this.player).to({
				angle: 0
			}, 50, "Linear", true);

			this.player.body.gravity.y = 900;
			this.player.body.bounce.setTo(0, 0);

			generalFunctions.playerMov(this);
		}
		//If player is in zero gravity zone
		if (this.player.x >= 305) {
			this.player.angle += 2;

			this.player.body.gravity.y = 0;
			this.player.body.bounce.setTo(0.8, 0.8);

			this.zeroGravityMov();
		}

		if (this.player.x < 20) {
			this.game.state.start('Game');
		}
	},

	//plop sprites behind the map
	behindMap: function() {
		this.game.add.sprite(40, -3, 'textureAtlas', 'rock4');
		this.game.add.sprite(80, -10, 'textureAtlas', 'rock2');
		this.game.add.sprite(50, -10, 'textureAtlas', 'rock1');
	},

	//plop sprites behind the player
	behindPlayer: function(){
		this.signPlant = this.add.sprite(45, this.game.height *0.5 + 15, 'textureAtlas', 'plant4');
		this.signPlant.anchor.setTo(0.5, 0);
		this.signPlant.scale.setTo(0.5);
		this.add.sprite(200, this.game.height *0.5 - 65, 'textureAtlas', 'zeroGravitySign').scale.setTo(0.35);
		this.game.add.sprite(130, this.game.height *0.5 - 5, 'textureAtlas', 'plant10').scale.setTo(0.7);
		this.game.add.sprite(208, this.game.height*0.5 + 20, 'textureAtlas', 'plant8');
		this.game.add.sprite(208, this.game.height*0.5 + 60, 'textureAtlas', 'plant8');
		this.game.add.sprite(208, this.game.height*0.5 + 130, 'textureAtlas', 'plant8');
	},

	//create the sign and its associated guidance text
	generateSign: function() {
		//generating the sign itself
		var homeSign = this.game.add.sprite(15, this.game.height *0.5 - 20, 'textureAtlas', 'sign5');
		homeSign.scale.setTo(0.5);

		//Adding the text next to the sign
		generalFunctions.displayText(80, this.game.height *0.5 - 30, 'home', 'guidance');
	},

	//create the dark transparent background behind the main content
	generateContentBg: function() {
		var graphics = this.game.add.graphics(0, 0);

		graphics.beginFill('#5E5E5E', 0.3);
		graphics.drawRect(this.game.width *0.5 - 60, 90, 440, 480);
		graphics.endFill();
	},

	//Plop the main text content of the page
	generateMainContent: function() {
		generalFunctions.displayText(this.game.width *0.5 + 150, 50, 'contact', 'title', 'center');

		generalFunctions.displayText(this.game.width *0.5 + 160, 160, 'contactLooking', 'mediumContent1', 'center');
		generalFunctions.displayText(this.game.width *0.5 + 160, 300, 'contactOffer', 'mediumContent1', 'center');
	},

    //Create the button containing the email address
	generateEmailButton: function() {
		//we create a group
		var emailButton = this.game.add.group();
		emailButton.inputEnableChildren = true;

		//we generate the button design
		generalFunctions.generateButton(355, 415, 185, 35, 0.3, emailButton);

		//then we add the text
		var textValue = generalFunctions.displayText(447, 435, 'email', 'mediumContent2', 'center');
		emailButton.add(textValue);

		//we create a fake sprite on top of the whole button and attach the click event to it
		var fakeSprite = generalFunctions.generateFakeSprite(355, 415, 185, 35, emailButton);
		fakeSprite.events.onInputDown.add(this.copyTextToClipboard, this);
	},

	//Create the button containing the link to the form
	generateFormButton: function() {
		//we create a group
		var formButton = this.game.add.group();
		formButton.inputEnableChildren = true;

		//we generate the button design
		generalFunctions.generateButton(575, 415, 185, 35, 0.3, formButton);

		//then we add the text
		var textValue = generalFunctions.displayText(670, 435, 'contactFormButtonValue', 'mediumContent2', 'center');
		formButton.add(textValue);

		//we create a fake sprite on top of the whole button and attach the click event to it
		var fakeSprite = generalFunctions.generateFakeSprite(575, 415, 185, 35, formButton);
		fakeSprite.events.onInputDown.add(this.linkToForm, this);
	},

	//Create the button containing the link to my GitHub
	generateGithubButton: function() {
		//we create a group
		var githubButton = this.game.add.group();
		githubButton.inputEnableChildren = true;

		//we generate the button design
		generalFunctions.generateButton(355, 510, 185, 35, 0.3, githubButton);

		//then we add the text
		var textValue = generalFunctions.displayText(447, 530, 'contactGitHubButtonValue', 'mediumContent2', 'center');
		githubButton.add(textValue);

		//we create a fake sprite on top of the whole button and attach the click event to it
		var fakeSprite = generalFunctions.generateFakeSprite(355, 510, 185, 35, githubButton);
		fakeSprite.events.onInputDown.add(this.linkToGithub, this);
	},

	//Create the button containing the link to my LinkedIn
	generateLinkedinButton: function() {
		//we create a group
		var linkedinButton = this.game.add.group();
		linkedinButton.inputEnableChildren = true;

		//we generate the button design
		generalFunctions.generateButton(575, 510, 185, 35, 0.3, linkedinButton);

		//then we add the text
		var textValue = generalFunctions.displayText(670, 530, 'contactLinkedinButtonValue', 'mediumContent2', 'center');
		linkedinButton.add(textValue);

		//we create a fake sprite on top of the whole button and attach the click event to it
		var fakeSprite = generalFunctions.generateFakeSprite(575, 510, 185, 35, linkedinButton);
		fakeSprite.events.onInputDown.add(this.linkToLinkedin, this);
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


		textArea.value = 'contact@fhuszti.com';

		document.body.appendChild(textArea);

		textArea.select();

		try {
			if (document.execCommand('copy')) {
				this.copyText = generalFunctions.displayText(this.game.width *0.5 + 50, 480, 'contactCopySuccess', 'smallContent', 'center');
				this.game.time.events.add(2000, this.fadeText, this);
			} else {
				this.copyText = generalFunctions.displayText(this.game.width *0.5 + 50, 480, 'contactCopyFail', 'smallContent', 'center', false);
				this.game.time.events.add(2000, this.fadeText, this);
			}
		} catch (err) {
			this.copyText = generalFunctions.displayText(this.game.width *0.5 + 50, 480, 'contactCopyFail', 'smallContent', 'center', false);
			this.game.time.events.add(2000, this.fadeText, this);
		}

		document.body.removeChild(textArea);
	},

	//works with copyTextToClipboard
	//fades the confirmation text after one second
	fadeText: function() {
		this.game.add.tween(this.copyText).to({
			alpha: 0
		}, 1000, Phaser.Easing.Linear.None, true);
	},

	//link to the contact form on the main website
	linkToForm: function() {
		window.location.href = "../../index.php#contactForm"; 
	},

	//link to my LinkedIn profile
	linkToGithub: function() {
		//either in french or english depending on the current stored lang for this session
		window.location.href = 'https://github.com/fhuszti'; 
	},

	//link to my LinkedIn profile
	linkToLinkedin: function() {
		//either in french or english depending on the current stored lang for this session
		window.location.href = 'https://www.linkedin.com/in/francoishuszti'; 
	},

	//create player
    createPlayer: function() {
    	this.player = this.game.add.sprite(90, this.game.width *0.5 - 100, 'textureAtlas', 'ninja1');
    },

	//plop sprites in front of the player
	frontPlayer: function() {
		this.game.add.sprite(60, 40, 'textureAtlas', 'plant1');
		this.game.add.sprite(100, 43, 'textureAtlas', 'plant1');

		this.manageWaterfall();

		this.game.add.sprite(5, 30, 'textureAtlas', 'plant14');
		this.game.add.sprite(150, 30, 'textureAtlas', 'plant13');
		this.game.add.sprite(170, 25, 'textureAtlas', 'plant5');
		this.game.add.sprite(60, 35, 'textureAtlas', 'plant2').scale.setTo(0.6);
		this.game.add.sprite(100, 30, 'textureAtlas', 'plant7').scale.setTo(0.6);
		this.game.add.sprite(210, -3, 'textureAtlas', 'plant8');
		this.game.add.sprite(210, 55, 'textureAtlas', 'plant8');
	},

	//create and manage the waterfall
	manageWaterfall: function() {
		this.waterfall = this.game.add.sprite(-160, 10, 'waterfallHeavy');
		this.waterfall.scale.setTo(2);

		this.waterfall.animations.add('flow', Phaser.Animation.generateFrameNames('waterfallHeavy', 0, 31), 20, true);
		this.waterfall.animations.play('flow');
	},

	//Manage all movements inside the no gravity zone
	zeroGravityMov: function() {
		if (this.cursors.right.isDown || this.game.input.pointer1.isDown && Math.floor(this.game.input.x / (this.game.width *0.5)) === generalFunctions.RIGHT) {
			//  Move to the right
			this.player.body.velocity.x = 125;
			this.player.animations.play('run');
		} else if (this.cursors.left.isDown || this.game.input.pointer1.isDown && Math.floor(this.game.input.x / (this.game.width *0.5)) === generalFunctions.LEFT) {
			//  Move to the left
			this.player.body.velocity.x = -125;
			this.player.animations.play('run');
		} else {
			//  Stand still
			this.player.animations.stop();
			this.player.frameName = 'ninja1';
		}

		//Up&Down management
		if (this.cursors.up.isDown || this.game.input.pointer1.isDown && Math.floor(this.game.input.y / (this.game.height *0.5)) === generalFunctions.UP) {
			//  Move to the top
			this.player.body.velocity.y = -125;
			this.player.animations.play('run');
		} else if (this.cursors.down.isDown || this.game.input.pointer1.isDown && Math.floor(this.game.input.x / (this.game.width *0.5)) === generalFunctions.DOWN) {
			//  Move to the bottom
			this.player.body.velocity.y = 125;
			this.player.animations.play('run');
		}
	}
};
