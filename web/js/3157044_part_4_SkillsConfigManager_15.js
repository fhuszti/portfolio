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
