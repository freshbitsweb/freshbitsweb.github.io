/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.navbar-default' ),
		didScroll = false,
		changeHeaderOn = 300,
        logo = document.getElementById("header-logo");

	function init() {
        if ($(window).width() < 768) {
            classie.add( header, 'navbar-shrink' );
            logo.innerHTML = "Freshbits Web Solutions";
        } else {
            window.addEventListener( 'scroll', function( event ) {
    			if( !didScroll ) {
    				didScroll = true;
    				setTimeout( scrollPage, 250 );
    			}
    		}, false );
        }
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'navbar-shrink' );
      logo.innerHTML = "Freshbits Web Solutions";
		}
		else {
			classie.remove( header, 'navbar-shrink' );
      logo.innerHTML = '<img src="img/logo.png" alt="Logo">';
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
