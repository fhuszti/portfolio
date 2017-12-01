$(function() {
    //we hide the Travolta gif after 4sec as it's its duration for one loop
    function hideTravolta() {
        $('#travolta').hide();
    }

    setInterval(hideTravolta, 3900);
});
