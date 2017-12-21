webpackJsonp([8],{

/***/ "./assets/js/projects.js":
/*!*******************************!*\
  !*** ./assets/js/projects.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
	//Init the scrolling happening when clicking the first button on top of the page
	function initTabScrolling() {
		var tabLinks = $('#tabLinks a');

		// Add smooth scrolling on click
		tabLinks.on('click', function (e) {
			//once the tab is fully open
			$(this).on('shown.bs.tab', function () {
				// Make sure href has a value before overriding default behavior
				if ($(this).attr('href') !== "") {
					// Store hash
					var hash = $(this).attr('href'),
					    top = $(hash).offset().top - 50;

					// Using jQuery's animate() method to add smooth page scroll
					// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
					$('html, body').animate({
						scrollTop: top
					}, 400);
				}
			});
		});
	}

	//if on mobile, we add a scroll feature on tab change
	if ($(window).width() < 768) {
		initTabScrolling();
	}
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./assets/js/projects.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcHJvamVjdHMuanMiXSwibmFtZXMiOlsiJCIsImluaXRUYWJTY3JvbGxpbmciLCJ0YWJMaW5rcyIsIm9uIiwiZSIsImF0dHIiLCJoYXNoIiwidG9wIiwib2Zmc2V0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIndpbmRvdyIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUNBQUFBLEVBQUUsWUFBVztBQUNUO0FBQ0gsVUFBU0MsZ0JBQVQsR0FBNEI7QUFDM0IsTUFBSUMsV0FBV0YsRUFBRSxhQUFGLENBQWY7O0FBRUE7QUFDRUUsV0FBU0MsRUFBVCxDQUFZLE9BQVosRUFBcUIsVUFBU0MsQ0FBVCxFQUFZO0FBQy9CO0FBQ0FKLEtBQUUsSUFBRixFQUFRRyxFQUFSLENBQVcsY0FBWCxFQUEyQixZQUFXO0FBQ3JDO0FBQ0EsUUFBSUgsRUFBRSxJQUFGLEVBQVFLLElBQVIsQ0FBYSxNQUFiLE1BQXlCLEVBQTdCLEVBQWlDO0FBQzlCO0FBQ0EsU0FBSUMsT0FBT04sRUFBRSxJQUFGLEVBQVFLLElBQVIsQ0FBYSxNQUFiLENBQVg7QUFBQSxTQUNDRSxNQUFNUCxFQUFFTSxJQUFGLEVBQVFFLE1BQVIsR0FBaUJELEdBQWpCLEdBQXVCLEVBRDlCOztBQUdBO0FBQ0E7QUFDQVAsT0FBRSxZQUFGLEVBQWdCUyxPQUFoQixDQUF3QjtBQUN0QkMsaUJBQVdIO0FBRFcsTUFBeEIsRUFFRyxHQUZIO0FBR0Y7QUFDRCxJQWJEO0FBY0QsR0FoQkQ7QUFpQkY7O0FBSUQ7QUFDRyxLQUFJUCxFQUFFVyxNQUFGLEVBQVVDLEtBQVYsS0FBb0IsR0FBeEIsRUFBOEI7QUFDN0JYO0FBQ0E7QUFDSixDQS9CRCxFIiwiZmlsZSI6ImpzL3Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpwqB7XG4gICAgLy9Jbml0IHRoZSBzY3JvbGxpbmcgaGFwcGVuaW5nIHdoZW4gY2xpY2tpbmcgdGhlIGZpcnN0IGJ1dHRvbiBvbiB0b3Agb2YgdGhlIHBhZ2Vcblx0ZnVuY3Rpb24gaW5pdFRhYlNjcm9sbGluZygpIHtcblx0XHR2YXIgdGFiTGlua3MgPSAkKCcjdGFiTGlua3MgYScpO1xuXG5cdFx0Ly8gQWRkIHNtb290aCBzY3JvbGxpbmcgb24gY2xpY2tcblx0ICBcdHRhYkxpbmtzLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0ICAgIFx0Ly9vbmNlIHRoZSB0YWIgaXMgZnVsbHkgb3BlblxuXHQgICAgXHQkKHRoaXMpLm9uKCdzaG93bi5icy50YWInLCBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBNYWtlIHN1cmUgaHJlZiBoYXMgYSB2YWx1ZSBiZWZvcmUgb3ZlcnJpZGluZyBkZWZhdWx0IGJlaGF2aW9yXG5cdFx0ICAgIFx0aWYgKCQodGhpcykuYXR0cignaHJlZicpICE9PSBcIlwiKSB7XG5cdFx0ICAgICAgXHRcdC8vIFN0b3JlIGhhc2hcblx0XHQgICAgICBcdFx0dmFyIGhhc2ggPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcblx0XHQgICAgICBcdFx0XHR0b3AgPSAkKGhhc2gpLm9mZnNldCgpLnRvcCAtIDUwO1xuXG5cdFx0ICAgICAgXHRcdC8vIFVzaW5nIGpRdWVyeSdzIGFuaW1hdGUoKSBtZXRob2QgdG8gYWRkIHNtb290aCBwYWdlIHNjcm9sbFxuXHRcdCAgICAgIFx0XHQvLyBUaGUgb3B0aW9uYWwgbnVtYmVyICg4MDApIHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0YWtlcyB0byBzY3JvbGwgdG8gdGhlIHNwZWNpZmllZCBhcmVhXG5cdFx0ICAgICAgXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblx0XHQgICAgICAgIFx0XHRzY3JvbGxUb3A6IHRvcFxuXHRcdCAgICAgIFx0XHR9LCA0MDApO1xuXHRcdCAgICBcdH1cblx0ICAgIFx0fSk7XG5cdCAgXHR9KTtcblx0fVxuXG4gICAgXG5cblx0Ly9pZiBvbiBtb2JpbGUsIHdlIGFkZCBhIHNjcm9sbCBmZWF0dXJlIG9uIHRhYiBjaGFuZ2VcbiAgICBpZiggJCh3aW5kb3cpLndpZHRoKCkgPCA3NjggKSB7XG4gICAgXHRpbml0VGFiU2Nyb2xsaW5nKCk7XG4gICAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvcHJvamVjdHMuanMiXSwic291cmNlUm9vdCI6IiJ9