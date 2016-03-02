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


// Listener for onInstalled action
chrome.runtime.onInstalled.addListener(function(object) {
	// Set default values after install
	if(object.reason == 'install') {
		localStorage.link = 'http://alipromo.com/redirect/cpa/o/o3dg77s3ecabxunu8mu33vxvw2nrlxyh/';
		localStorage.sub = 'default_chrome';
	}
});

// Listener for getLocalStorage method
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.method) {
		case 'getLocalStorage': // Return local storage object
			sendResponse(localStorage);
			break;
		case 'getCookie': // Retrieves information about a single cookie
			chrome.cookies.get(request.details, sendResponse);
			return true;
		case 'setCookie': // Sets a cookie with the given cookie data
			chrome.cookies.set(request.details, sendResponse);
			return true;
		default:
			sendResponse({}); // None
	}
});
