var HomeGame = HomeGame || {};

HomeGame.Academics = function() {};

HomeGame.Academics.prototype = {
    academicsTexts: {},

    create: function() {
        AcademicsManager.generateAcademics(this);
    },

    update: function() {
        AcademicsManager.updateAcademics(this);
    }
};
