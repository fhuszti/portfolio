/*
Display or hide the "turn mobile please" note
*/
var turnMessage = document.getElementById('handledTurnMessage');

if (screen.height > screen.width) {
    turnMessage.style.display = 'block';
}

// Listen for orientation changes
window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    var orientationNumber = window.orientation;
  
    if (orientationNumber !== -90 && orientationNumber !== 90) {
    	turnMessage.style.display = 'block';
    }
    else {
    	turnMessage.style.display = 'none';
    }
}, false);



/*
Click to launch the game
*/
var wrapper = document.getElementById('wrapper'),
    gameTitle = document.getElementById('gameTitle'),
    canvasContent = document.getElementById('canvasContent');

gameTitle.addEventListener('click', function() {
    var wfconfig = { 
    		active: function() { 
		    var script = document.createElement('script');
    		    script.src = 'assets/js/main.js';
    
    		    document.body.appendChild(script);
    		    wrapper.style.display = 'none';
    		},
 
    		google: {
        	     families: ['Berkshire Swash', 'VT323', 'Cabin Sketch', 'Cagliostro']
    		}
	};
    
    canvasContent.style.position = 'absolute';
    canvasContent.style.margin = '0';
    canvasContent.style.width = '100%';
    canvasContent.style.top = '25px';
    canvasContent.style.bottom = '0';
    
 
    WebFont.load(wfconfig);
});



/*
Assign the actual language to a variable used in general.js
*/
var homeLinkLang = document.getElementById('homeLinkLang'),
    actualLang = null;

if (homeLinkLang.textContent === 'Accueil') {
    	actualLang = 'fr';
}
else {
    actualLang = 'en';
}