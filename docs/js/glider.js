$.fn.glider = function() {
	return this.each(function() {
		var $this = $(this),
			glider = $this.find('ul.glider'),
			html = glider.html(),
			w = parseInt(glider.width()),
			arr_left = $this.find('.larr'),
			arr_right = $this.find('.rarr');
			glider.html(html+html+html);
			glider.css('margin-left', -w);
		
		arr_left.click(function(e) {
			e.preventDefault();
			gliderProd(1);
		});
		arr_right.click(function(e) {
			gliderProd(-1);
		});
		
		
		function gliderProd(n) {
			if (glider.is(':animated')) return false;	
			if (parseInt(glider.css('margin-left')) == 0 || parseInt(glider.css('margin-left')) <= parseInt(glider.width()/3*2*(-1))) {
				glider.css('margin-left', -w);	
			}
			glider.animate({
				'margin-left' : parseInt(glider.css('margin-left')) + 134*n	
			}, 300);
		}
		
		
	});	
}
$(document).ready(function() {
   	$('.wrap-glider').glider();
});