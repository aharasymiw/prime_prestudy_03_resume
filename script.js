$('document').ready(function() {
	$('body > *').hide();
	$('body > button').show();

	$('button').on('click', function() {
		$('body > *').toggle();
	});
});