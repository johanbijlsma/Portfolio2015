$(function() {

	$( "#work div.link.IA" ).click(function() {
		  $( "ul.detail.IA" ).slideToggle( "slow" );
		});

		$( "#work div.link.CA" ).click(function() {
		  $( "ul.detail.CA" ).slideToggle( "slow" );
		});


	$("li.work a").click(function(){
		$("#work").slideDown(1000);
	})



	});

