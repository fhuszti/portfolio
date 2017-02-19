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
        $('#title').on('click', function() {
            //configuration variable before start
            var wfconfig = {
                active: function() {
                    $('#wrapper').hide();

                    $.getScript("assets/js/game/main.js");
                },

        		google: {
            	     families: ['Cabin Sketch', 'Cagliostro']
        		}
            };

            //configuring the div that'll contain the game so it fits perfectly
            var canvasContent = $('#canvasContent');
            canvasContent.css('position', 'absolute');
            canvasContent.css('margin', '0');
            canvasContent.css('width', '100%');
            canvasContent.css('top', '31px');
            canvasContent.css('bottom', '0');

            //actual start
            WebFont.load(wfconfig);
        });
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
