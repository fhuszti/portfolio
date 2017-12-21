$(function() {
    //Init the scrolling happening when clicking the first button on top of the page
	function initTabScrolling() {
		var tabLinks = $('#tabLinks a');

		// Add smooth scrolling on click
	  	tabLinks.on('click', function(e) {
	    	//once the tab is fully open
	    	$(this).on('shown.bs.tab', function() {
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
    if( $(window).width() < 768 ) {
    	initTabScrolling();
    }
});
