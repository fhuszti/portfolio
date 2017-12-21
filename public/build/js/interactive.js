webpackJsonp([9],{

/***/ "./assets/js/interactive.js":
/*!**********************************!*\
  !*** ./assets/js/interactive.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
    /*
    Display or hide the "turn mobile please" note
    */
    function turnMobile() {
        //on page load
        var turnMessage = $('#handleTurn');

        if ($(window).height() > $(window).width()) {
            turnMessage.show();
        } else {
            turnMessage.hide();
        }

        // on orientation change
        $(window).on("orientationchange", function () {
            if (window.orientation === 0) //0 means portrait, -90 and 90 mean landscape
                turnMessage.show();else turnMessage.hide();
        });
    }

    /*
    Click to start the game
    */
    function startGame() {
        $('#title').on('click', function (e) {
            //configuration variable before start
            var wfconfig = {
                active: function active() {
                    $('#wrapper').hide();

                    $.getScript("start");
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

    turnMobile();
    startGame();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./assets/js/interactive.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW50ZXJhY3RpdmUuanMiXSwibmFtZXMiOlsiJCIsInR1cm5Nb2JpbGUiLCJ0dXJuTWVzc2FnZSIsIndpbmRvdyIsImhlaWdodCIsIndpZHRoIiwic2hvdyIsImhpZGUiLCJvbiIsIm9yaWVudGF0aW9uIiwic3RhcnRHYW1lIiwiZSIsIndmY29uZmlnIiwiYWN0aXZlIiwiZ2V0U2NyaXB0IiwiZ29vZ2xlIiwiZmFtaWxpZXMiLCJjYW52YXNDb250ZW50IiwiY3NzIiwiV2ViRm9udCIsImxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5Q0FBQUEsRUFBRSxZQUFXO0FBQ1Q7OztBQUdBLGFBQVNDLFVBQVQsR0FBc0I7QUFDbEI7QUFDQSxZQUFJQyxjQUFjRixFQUFFLGFBQUYsQ0FBbEI7O0FBRUEsWUFBSUEsRUFBRUcsTUFBRixFQUFVQyxNQUFWLEtBQXFCSixFQUFFRyxNQUFGLEVBQVVFLEtBQVYsRUFBekIsRUFBNEM7QUFDeENILHdCQUFZSSxJQUFaO0FBQ0gsU0FGRCxNQUdLO0FBQ0RKLHdCQUFZSyxJQUFaO0FBQ0g7O0FBRUQ7QUFDQVAsVUFBRUcsTUFBRixFQUFVSyxFQUFWLENBQWEsbUJBQWIsRUFBa0MsWUFBVztBQUN6QyxnQkFBSUwsT0FBT00sV0FBUCxLQUF1QixDQUEzQixFQUE4QjtBQUM3QlAsNEJBQVlJLElBQVosR0FERCxLQUdDSixZQUFZSyxJQUFaO0FBQ0osU0FMRDtBQU1IOztBQUdEOzs7QUFHQSxhQUFTRyxTQUFULEdBQXFCO0FBQ2pCVixVQUFFLFFBQUYsRUFBWVEsRUFBWixDQUFlLE9BQWYsRUFBd0IsVUFBU0csQ0FBVCxFQUFZO0FBQ2hDO0FBQ0EsZ0JBQUlDLFdBQVc7QUFDWEMsd0JBQVEsa0JBQVc7QUFDZmIsc0JBQUUsVUFBRixFQUFjTyxJQUFkOztBQUVBUCxzQkFBRWMsU0FBRixDQUFZLE9BQVo7QUFDSCxpQkFMVTs7QUFPakJDLHdCQUFRO0FBQ0FDLDhCQUFVLENBQUMsY0FBRCxFQUFpQixZQUFqQjtBQURWO0FBUFMsYUFBZjs7QUFZQTtBQUNBLGdCQUFJQyxnQkFBZ0JqQixFQUFFLGdCQUFGLENBQXBCO0FBQ0FpQiwwQkFBY0MsR0FBZCxDQUFrQixVQUFsQixFQUE4QixVQUE5QjtBQUNBRCwwQkFBY0MsR0FBZCxDQUFrQixRQUFsQixFQUE0QixHQUE1QjtBQUNBRCwwQkFBY0MsR0FBZCxDQUFrQixPQUFsQixFQUEyQixNQUEzQjtBQUNBRCwwQkFBY0MsR0FBZCxDQUFrQixLQUFsQixFQUF5QixNQUF6QjtBQUNBRCwwQkFBY0MsR0FBZCxDQUFrQixRQUFsQixFQUE0QixHQUE1Qjs7QUFFQTtBQUNBQyxvQkFBUUMsSUFBUixDQUFhUixRQUFiO0FBQ0gsU0F4QkQ7QUF5Qkg7O0FBR0RYO0FBQ0FTO0FBQ0gsQ0EzREQsRSIsImZpbGUiOiJqcy9pbnRlcmFjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKSB7XG4gICAgLypcbiAgICBEaXNwbGF5IG9yIGhpZGUgdGhlIFwidHVybiBtb2JpbGUgcGxlYXNlXCIgbm90ZVxuICAgICovXG4gICAgZnVuY3Rpb24gdHVybk1vYmlsZSgpIHtcbiAgICAgICAgLy9vbiBwYWdlIGxvYWRcbiAgICAgICAgdmFyIHR1cm5NZXNzYWdlID0gJCgnI2hhbmRsZVR1cm4nKTtcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLmhlaWdodCgpID4gJCh3aW5kb3cpLndpZHRoKCkpIHtcbiAgICAgICAgICAgIHR1cm5NZXNzYWdlLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHR1cm5NZXNzYWdlLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9uIG9yaWVudGF0aW9uIGNoYW5nZVxuICAgICAgICAkKHdpbmRvdykub24oXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cub3JpZW50YXRpb24gPT09IDApIC8vMCBtZWFucyBwb3J0cmFpdCwgLTkwIGFuZCA5MCBtZWFuIGxhbmRzY2FwZVxuICAgICAgICAgICAgXHR0dXJuTWVzc2FnZS5zaG93KCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBcdHR1cm5NZXNzYWdlLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKlxuICAgIENsaWNrIHRvIHN0YXJ0IHRoZSBnYW1lXG4gICAgKi9cbiAgICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgICAgICQoJyN0aXRsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIC8vY29uZmlndXJhdGlvbiB2YXJpYWJsZSBiZWZvcmUgc3RhcnRcbiAgICAgICAgICAgIHZhciB3ZmNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZ1bmN0aW9uKCnCoHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3dyYXBwZXInKS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5nZXRTY3JpcHQoXCJzdGFydFwiKTtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgIFx0XHRnb29nbGU6IHtcbiAgICAgICAgICAgIFx0ICAgICBmYW1pbGllczogWydDYWJpbiBTa2V0Y2gnLCAnQ2FnbGlvc3RybyddXG4gICAgICAgIFx0XHR9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvL2NvbmZpZ3VyaW5nIHRoZSBkaXYgdGhhdCdsbCBjb250YWluIHRoZSBnYW1lIHNvIGl0IGZpdHMgcGVyZmVjdGx5XG4gICAgICAgICAgICB2YXIgY2FudmFzQ29udGVudCA9ICQoJyNjYW52YXNDb250ZW50Jyk7XG4gICAgICAgICAgICBjYW52YXNDb250ZW50LmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgICAgIGNhbnZhc0NvbnRlbnQuY3NzKCdtYXJnaW4nLCAnMCcpO1xuICAgICAgICAgICAgY2FudmFzQ29udGVudC5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcbiAgICAgICAgICAgIGNhbnZhc0NvbnRlbnQuY3NzKCd0b3AnLCAnMzFweCcpO1xuICAgICAgICAgICAgY2FudmFzQ29udGVudC5jc3MoJ2JvdHRvbScsICcwJyk7XG5cbiAgICAgICAgICAgIC8vYWN0dWFsIHN0YXJ0XG4gICAgICAgICAgICBXZWJGb250LmxvYWQod2Zjb25maWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHR1cm5Nb2JpbGUoKTtcbiAgICBzdGFydEdhbWUoKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ludGVyYWN0aXZlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==