$(document).ready(function() {

	var blur_count = 0;

	$('.list-group-item').click(function() {
		$('.list-group-item').removeClass('active');
		$(this).toggleClass('active');
		blur_count = 0;
	});

	$('.list-group-item').blur(function() {
		if (blur_count > 0) {
			$(this).removeClass('active');
		}
	blur_count +=1;
	});

});