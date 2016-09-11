
(function($) { 

$.fn.slider = function(options) {
	
	var defaults = {
		over: 'green'
	};
	
	var settings = $.extend(defaults, options);
	
	$('.carousel-element p').css({
		'color': settings.over
	});
	
    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 134;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;
 
    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 134;
            elementsList.animate({ left : currentLeftValue + "px"}, 400);
        }        
    });
 
    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 134;
            elementsList.animate({ left : currentLeftValue + "px"}, 400);
        }        
    });
	
	return this;
};

})(jQuery);