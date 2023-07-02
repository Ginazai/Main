$(document).ready(function() {
	$(".list-group-item").click(function() {
		$(this).toggleClass('active');
		$(this).blur(function() {
			$('.list-group-item').removeClass('active');
		});
	});
});