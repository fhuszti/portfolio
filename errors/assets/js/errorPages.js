$(function() {
    //Redirect the user at the end of a countdown
    function countdown() {
        var countdown = $('#countdown'),
            actualCount = parseInt(countdown.text());

        if (actualCount >= 1) {
            countdown.text(actualCount-1);
        }
        else {
            clearInterval(intervalId);

            window.location.href = "http://www.fhuszti.com";
        }
    }

    function hideTravolta() {
        $('#travolta').hide();
    }

    var intervalId = setInterval(countdown, 1000);
    setInterval(hideTravolta, 4000);
});
