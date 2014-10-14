$(document).ready(function(){

	$('#menu li').hover(function(){
		$(this).css('cursor','pointer').css('color','#26FFFF');
	}, function(){ 
		$(this).css('cursor','none').css('color','#fff');
	});
});