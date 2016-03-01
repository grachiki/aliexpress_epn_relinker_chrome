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
	if (request.method == 'getLocalStorage')
		sendResponse(localStorage); // Return local storage object
	else
		sendResponse({});
});
