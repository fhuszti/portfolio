var AcademicsContentManager = {

	//display title text for the map
	displayTitle: function(state) {
		 generalFunctions.displayText(state.game.width/3 + 35, 110, 'academics', 'title', 'center');
	},







	//Display all texts on creation, then call checkHeight to delete those that shouldn't appear yet
    displayFormationTexts: function(state) {
    	//We stock all texts in a table for later manipulation on them
        state.academicsTexts['OCDate'] = generalFunctions.displayText(345, state.game.height*0.5 + 92, 'academicsOCDate', 'mediumContent2');
        state.academicsTexts['OCPlace1'] = generalFunctions.displayText(state.game.width*0.5 + 180, state.game.height*0.5 + 150, 'academicsOCPlace1', 'mediumContent2', 'right');
        state.academicsTexts['OCPlace2'] = generalFunctions.displayText(state.game.width*0.5 + 180, state.game.height*0.5 + 170, 'academicsOCPlace2', 'mediumContent2', 'right');
        state.academicsTexts['OCDesc1'] = generalFunctions.displayText(345, state.game.height*0.5 + 215, 'academicsOCDesc1', 'mediumContent2');
        state.academicsTexts['OCDesc2'] = generalFunctions.displayText(345, state.game.height*0.5 + 235, 'academicsOCDesc2', 'mediumContent2');

        state.academicsTexts['PrepaDate'] = generalFunctions.displayText(345, state.game.height*0.5 - 128, 'academicsPrepaDate', 'mediumContent2');
        state.academicsTexts['PrepaPlace1'] = generalFunctions.displayText(state.game.width*0.5 + 180, state.game.height*0.5 - 70, 'academicsPrepaPlace1', 'mediumContent2', 'right');
        state.academicsTexts['PrepaPlace2'] = generalFunctions.displayText(state.game.width*0.5 + 180, state.game.height*0.5 - 50, 'academicsPrepaPlace2', 'mediumContent2', 'right');
        state.academicsTexts['PrepaDesc1'] = generalFunctions.displayText(345, state.game.height*0.5 - 5, 'academicsPrepaDesc1', 'mediumContent2');
        state.academicsTexts['PrepaDesc2'] = generalFunctions.displayText(345, state.game.height*0.5 + 15, 'academicsPrepaDesc2', 'mediumContent2');

        state.academicsTexts['FacDate'] = generalFunctions.displayText(25, state.game.height*0.5 + 92, 'academicsFacDate', 'mediumContent2');
        state.academicsTexts['FacPlace1'] = generalFunctions.displayText(state.game.width*0.5 - 140, state.game.height*0.5 + 150, 'academicsFacPlace1', 'mediumContent2', 'right');
        state.academicsTexts['FacPlace2'] = generalFunctions.displayText(state.game.width*0.5 - 140, state.game.height*0.5 + 170, 'academicsFacPlace2', 'mediumContent2', 'right');
        state.academicsTexts['FacDesc'] = generalFunctions.displayText(25, state.game.height*0.5 + 215, 'academicsFacDesc', 'mediumContent2');

        state.academicsTexts['BacDate'] = generalFunctions.displayText(25, state.game.height*0.5 - 128, 'academicsBacDate', 'mediumContent2');
        state.academicsTexts['BacPlace1'] = generalFunctions.displayText(state.game.width*0.5 - 140, state.game.height*0.5 - 70, 'academicsBacPlace1', 'mediumContent2', 'right');
        state.academicsTexts['BacPlace2'] = generalFunctions.displayText(state.game.width*0.5 - 140, state.game.height*0.5 - 50, 'academicsBacPlace2', 'mediumContent2', 'right');
        state.academicsTexts['BacDesc1'] = generalFunctions.displayText(25, state.game.height*0.5 - 5, 'academicsBacDesc1', 'mediumContent2');
        state.academicsTexts['BacDesc2'] = generalFunctions.displayText(25, state.game.height*0.5 + 15, 'academicsBacDesc2', 'mediumContent2');

        //Now we call checkHeight to make the higher texts disappear
        for (var text in state.academicsTexts) {
        	state.academicsTexts[text].alive = false;
        	state.academicsTexts[text].alpha = 0.1;
        	AcademicsPlayerManager.checkHeight(state, state.academicsTexts[text]);
        }
    }
};
