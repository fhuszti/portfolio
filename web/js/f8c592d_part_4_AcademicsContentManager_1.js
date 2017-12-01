var AcademicsContentManager = {

	//display title text for the map
	displayTitle: function(state) {
		 gameMethods.displayText(state.game.width/3 + 35, 110, 'academics', 'title', 'center');
	},







	//Display all texts on creation, then call checkHeight to delete those that shouldn't appear yet
    displayFormationTexts: function(state) {
    	//We stock all texts in a table for later manipulation on them
        state.academicsTexts['OCDate'] = gameMethods.displayText(345, state.game.height*0.5 + 92, 'academicsOCDate', 'mediumContent2');
        state.academicsTexts['OCPlace1'] = gameMethods.displayText(state.game.width*0.5 + 180, state.game.height*0.5 + 150, 'academicsOCPlace1', 'mediumContent2', 'right');
        state.academicsTexts['OCPlace2'] = gameMethods.displayText(state.game.width*0.5 + 180, state.game.height*0.5 + 170, 'academicsOCPlace2', 'mediumContent2', 'right');
        state.academicsTexts['OCDesc1'] = gameMethods.displayText(345, state.game.height*0.5 + 215, 'academicsOCDesc1', 'mediumContent2');
        state.academicsTexts['OCDesc2'] = gameMethods.displayText(345, state.game.height*0.5 + 235, 'academicsOCDesc2', 'mediumContent2');

        state.academicsTexts['PrepaDate'] = gameMethods.displayText(345, state.game.height*0.5 - 128, 'academicsPrepaDate', 'mediumContent2');
        state.academicsTexts['PrepaPlace1'] = gameMethods.displayText(state.game.width*0.5 + 180, state.game.height*0.5 - 70, 'academicsPrepaPlace1', 'mediumContent2', 'right');
        state.academicsTexts['PrepaPlace2'] = gameMethods.displayText(state.game.width*0.5 + 180, state.game.height*0.5 - 50, 'academicsPrepaPlace2', 'mediumContent2', 'right');
        state.academicsTexts['PrepaDesc1'] = gameMethods.displayText(345, state.game.height*0.5 - 5, 'academicsPrepaDesc1', 'mediumContent2');
        state.academicsTexts['PrepaDesc2'] = gameMethods.displayText(345, state.game.height*0.5 + 15, 'academicsPrepaDesc2', 'mediumContent2');

        state.academicsTexts['FacDate'] = gameMethods.displayText(25, state.game.height*0.5 + 92, 'academicsFacDate', 'mediumContent2');
        state.academicsTexts['FacPlace1'] = gameMethods.displayText(state.game.width*0.5 - 140, state.game.height*0.5 + 150, 'academicsFacPlace1', 'mediumContent2', 'right');
        state.academicsTexts['FacPlace2'] = gameMethods.displayText(state.game.width*0.5 - 140, state.game.height*0.5 + 170, 'academicsFacPlace2', 'mediumContent2', 'right');
        state.academicsTexts['FacDesc'] = gameMethods.displayText(25, state.game.height*0.5 + 215, 'academicsFacDesc', 'mediumContent2');

        state.academicsTexts['BacDate'] = gameMethods.displayText(25, state.game.height*0.5 - 128, 'academicsBacDate', 'mediumContent2');
        state.academicsTexts['BacPlace1'] = gameMethods.displayText(state.game.width*0.5 - 140, state.game.height*0.5 - 70, 'academicsBacPlace1', 'mediumContent2', 'right');
        state.academicsTexts['BacPlace2'] = gameMethods.displayText(state.game.width*0.5 - 140, state.game.height*0.5 - 50, 'academicsBacPlace2', 'mediumContent2', 'right');
        state.academicsTexts['BacDesc1'] = gameMethods.displayText(25, state.game.height*0.5 - 5, 'academicsBacDesc1', 'mediumContent2');
        state.academicsTexts['BacDesc2'] = gameMethods.displayText(25, state.game.height*0.5 + 15, 'academicsBacDesc2', 'mediumContent2');

        //Now we call checkHeight to make the higher texts disappear
        for (var text in state.academicsTexts) {
        	state.academicsTexts[text].alive = false;
        	state.academicsTexts[text].alpha = 0.1;
        	AcademicsPlayerManager.checkHeight(state, state.academicsTexts[text]);
        }
    }
};
