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
        
    }


    /*
    Get the current used language
    */
    function currentLang() {
        if ($('#homeLinkLang a').text() === 'Accueil')
            return 'fr';
        else
            return 'en';
    }


    turnMobile();
    //variable used inside the game to know the current language used
    window.actualLang = currentLang();
    startGame();
});
