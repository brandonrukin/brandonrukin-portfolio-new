$(document).ready(function() {

	// Live typing on reading page.
	$(function() {
		$("#typed").typed({
			strings: ["design.", "cognitive psychology.", "neuroscience.", "stoic philosophy.", "business.", "adventure!", "leadership.","innovation."],
			typeSpeed: 100,
	    backDelay: 2200,
	    loop: true,
	    callback: function(){}
		});
	});

	//display book info
	$('.book').on('click', function() {
		$('.book__cover, .book__arrow, .book__dropdown, .book__spacer', this).toggleClass('display');
	});

});

 