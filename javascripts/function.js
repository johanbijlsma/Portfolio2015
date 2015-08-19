// function.js



$(function() {

	$( "#work div.link.apps" ).click(function() {
		  $( "ul.detail.apps" ).slideToggle( "slow" );
		});

	$( "#work div.link.miedema" ).click(function() {
		  $( "ul.detail.miedema" ).slideToggle( "slow" );
		});

		$( "#work div.link.IA" ).click(function() {
		  $( "ul.detail.IA" ).slideToggle( "slow" );
		});


		$( "#work div.link.CA" ).click(function() {
		  $( "ul.detail.CA" ).slideToggle( "slow" );
		});
	});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	    });
	});
});

$(document).ready(function(){
	$("ul.detail.hidden").css("display","none");


});

