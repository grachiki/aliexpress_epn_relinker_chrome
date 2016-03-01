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
		$('#saved').slideDown('slow');
	});
});
