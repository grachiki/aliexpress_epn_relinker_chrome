/*
 =======================================
 == AliExpress reLinker (ePN)         ==
 == Automatic replacement of links to ==
 == ePN DeepLink for AliExpress.      ==
 == Author: TheSoulTaker48            ==
 == E-Mail: thesoultaker48@gmail.com  ==
 == URL: http://tst48.wordpress.com   ==
 =======================================
*/


// Document Object Model (DOM) is ready
$(document).ready(function() {
	// Replace links function
	function replaceLinks() {
		// Get local storage object from background.js
		chrome.runtime.sendMessage({method: "getLocalStorage"}, function(storage) {
			// Get settings from local storage
			var link = storage.link;
			var sub = encodeURIComponent(storage.sub);
			var separator = ((link.indexOf('?')==-1)?'?':'&');
			// Select all <a href="http..."></a> tags
			$('a[href^=http]').each(function() {
				// Select aliexpress.com links
				var regexp = new RegExp('aliexpress([\.]{1})com', 'i');
				if(regexp.test(this.hostname)) {
					// Replace links
					var url = encodeURIComponent(this.href);
					$(this).attr('href', link+separator+'sub='+sub+'&to='+url);
				}
				regexp = undefined;
			});
		});
	}
	// Replacement for product-list (ajax)
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			replaceLinks();
		});    
	});
	observer.observe(document.querySelector('.product-list'), {
		attributes: true,
		childList: true,
		characterData: true
	});
	// Replacement of links on DOM ready
	replaceLinks();
});
