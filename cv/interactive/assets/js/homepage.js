$(function() {
    /*
    Display or hide the "turn mobile please" note
    */
    var turnMessage = $('#handleTurn');

    if ($(window).height() > $(window).width()) {
        turnMessage.show();
    }
    else {
        turnMessage.hide();
    }

    // Listen for orientation changes
    $(window).on("orientationchange", function() {
        //0 means portrait, -90 and 90 mean landscape
        if (window.orientation === 0)
        	turnMessage.show();
        else
        	turnMessage.hide();
    });
});
