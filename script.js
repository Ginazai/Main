$(document).ready(function() {
	function selected(item) {
		$(item).click(function() {
		$(item).removeClass('active');
		$(this).toggleClass('active');
		$(this).blur(function() {
			// $(this).removeClass('active');
			setTimeout(function() {console.log('blur');$(item).removeClass('active');}, 10000);
		});
	});
	}	
	selected('.list-group-item');
});