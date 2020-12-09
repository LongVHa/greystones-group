$(document).ready(function(){

    var stickyOffset = $('.sticky').offset().top;
	var view = $(window);
	
    view.scroll(function(){
		
      var sticky = $('.sticky');
      var scroll = $(window).scrollTop();

      //desktop size only	
      if (scroll >= stickyOffset ){	  
    	 sticky.addClass('fixed');
		 
		 if( $(window).width() <= 1040){
			 
			  $("#wrap").css("padding-top","106px");
			  
		 }else{
			 
			 $("#wrap").css("padding-top","137px");
		 }
		
	  }else{ 
		sticky.removeClass('fixed');
		 $("#wrap").css("padding-top","0px");
	  }
	  
	});
	
	//adjust small nav height from top
	
	
	if( $(window).width() <= 860){
		
		$(window).load(function(){
		
			var stickyMenuHeight = $('#sticky').height();
			$('.main-navigation').css({'top' : stickyMenuHeight  + 'px'});
			
		});
		
	}
	
});