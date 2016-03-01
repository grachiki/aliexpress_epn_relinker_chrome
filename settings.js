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
	// Get information from manifest
	var manifest = chrome.runtime.getManifest();
	document.title = chrome.i18n.getMessage('settings_title')+manifest.short_name; // i18n
	$('#name').html(manifest.short_name);
	$('#version').html(chrome.i18n.getMessage('version_title')+manifest.version); // i18n
	$('#author').attr('href', manifest.homepage_url);
	$('#author').html(manifest.author);
	
	// i18n locales
	$('#saved').html(chrome.i18n.getMessage('saved_message'));
	$('label[for=link_input]').html(chrome.i18n.getMessage('deeplink_label'));
	$('label[for=sub_input]').html(chrome.i18n.getMessage('sub_label'));
	$('input[type=submit]').val(chrome.i18n.getMessage('submit_value'));
	$('#author_title').html(chrome.i18n.getMessage('author_title'));
	
	// Restore options from local storage
	var restore_options = function() {
		var name = $(this).attr('name');
		$(this).val(localStorage[name]);
	};
	$('input[type!=submit]').each(restore_options);
	$('select').each(restore_options);

	// Save options to local storage
	var save_options = function() {
		var name = $(this).attr('name');
		localStorage[name] = $(this).val();
	};
	$('#save').click(function() {
		$('input[type!=submit]').each(save_options);
		$('select').each(save_options);
		$('#saved').hide();
		$('#saved').slideDown('slow');
	});
});
