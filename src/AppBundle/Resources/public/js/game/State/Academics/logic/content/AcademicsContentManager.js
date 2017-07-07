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
