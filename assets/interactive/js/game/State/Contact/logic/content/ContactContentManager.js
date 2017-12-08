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
