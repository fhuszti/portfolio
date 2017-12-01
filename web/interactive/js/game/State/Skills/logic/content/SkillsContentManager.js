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
