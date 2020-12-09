jQuery(document).ready(function($){

/*sub menu sticky*/
    var stickyOffset = $('.sticky').offset().top;
	
	$(window).on('resize', function(){
		//hide for smaller screen sizes
		if ($(window).width() < 1120) $('.sub-menu-item').css('display','none');
		else $('.sub-menu-item').css('display','block');
			
	});

    $(window).scroll(function(){
		
      var substicky = $('#sub-sticky'),
          scroll = $(window).scrollTop();

		  //show for larger screen sizes
      if (scroll >= stickyOffset + 70 && $(window).width() >= 1120){
		  substicky.addClass('subMenufixed');
		  $('#primary_wrap').css("margin-top","30px");
      }else{
		  substicky.removeClass('subMenufixed');
		  $('#primary_wrap').css("margin-top","0px");
	  }
	  
    });

/*scroll to*/

/*step 1*/
	$('#step1').on('click', function(){
	
     var item = $('.sub-menu-item');
	 var pos = item.position();
	 var offsetPos = pos.top;
	 var topPos = Math.floor(offsetPos);
		
		if(topPos  <= 61){
				$('html, body').animate({
                      scrollTop: $("#identify").offset().top -270
                 }, 1000);
		
		}else{
				$('html, body').animate({
                      scrollTop: $("#identify").offset().top -500
                 }, 1000);
		}
			
	});
	
/*step 2*/
       $('#step2').on('click', function(){
	   
     var item = $('.sub-menu-item');
	 var pos = item.position();
	 var offsetPos = pos.top;
	 var topPos = Math.floor(offsetPos);
	  
	   if(topPos  <= 61){
	   		 $('html, body').animate({
                      scrollTop: $("#purchase").offset().top -280
                 }, 1000);
	   }else{
	   
	   		 $('html, body').animate({
                      scrollTop: $("#purchase").offset().top -500
                 }, 1000);
	   }

	});
    
/*step 3*/	
       $('#step3').on('click', function(){
	   
     var item = $('.sub-menu-item');
	 var pos = item.position();
	 var offsetPos = pos.top;
	 var topPos = Math.floor(offsetPos);
	   
	   if(topPos  <= 61){
	   		 $('html, body').animate({
                      scrollTop: $("#maximize").offset().top -280
                 }, 1000);
	   }else{
	   		 $('html, body').animate({
                      scrollTop: $("#maximize").offset().top -500
                 }, 1000);
	   }
	   

	});
       
	   
/*step 4*/
	   $('#step4').on('click', function(){
	   
     var item = $('.sub-menu-item');
	 var pos = item.position();
	 var offsetPos = pos.top;
	 var topPos = Math.floor(offsetPos);
	   
	   if(topPos  <= 61){
	   		 $('html, body').animate({
                      scrollTop: $("#returns").offset().top -280
                 }, 1000);
	   }else{
	   		 $('html, body').animate({
                      scrollTop: $("#returns").offset().top -500
                 }, 1000);
	   }
	   

	});

});