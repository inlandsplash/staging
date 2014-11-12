 $(document).ready(function() {
	 $(".ghost_text").ghostText();
	 $(".error").each(function() {
		 $(this).next().next().children("input, textarea").css('border-color','#dc3c1e');
		 $(this).next().next().children("input, textarea").css('border-width','1px');
		 if(($(this).next().next().children("input, textarea").val()!='')&&($(this).next().next().children("input, textarea").attr('id') == 'contacteeEmail')) {
			 $('.emailFormatError').css('color','#FF0000');
			 $('.emailFormatError').css('visibility','visible');
		 }else if(($(this).next().next().children("input, textarea").val()!='')&&($(this).next().next().children("input, textarea").attr('id') == 'answer')) {
			 $('.tagcaptcha').css('color','#FF0000');
		 }else {
			 $('.tagrequired').css('color','#FF0000');
			 $('.tagrequired').css('visibility','visible');
		 }
		});
	 var errorcode = 0;
	 $(".systemerror").each(function() {
		 $(this).css('display','inline');
		 errorcode = 500;
		});
	 if(errorcode!=500) {
	 $(".actionMessage").each(function (e) {
		 
		 $.modal('<iframe src="/~site/siteapps/form/formsubmitsuccess.jsp" left=0 top=0 width="280" height="158" scrolling="no" frameborder=0 >', 
		        	{
		            closeHTML:'<a href="#" class="simplemodal-corner-close"></a>',
		            onClose: function() {
	            	  $(".field_name").val("");
		           	  $(".field_email").val("");
		           	  $(".field_phone").val("");
		           	  $(".textarea_message").val("");
		           	  $(".captchafield").val("");
		              var myDate = new Date();
	             	  var prettyDate =(myDate.getMonth()+1) + '/' + myDate.getDate() + '/' + myDate.getFullYear();
	             	  $("#apptDate").val(prettyDate);
	             	  $(".hour").val("1");
	             	  $(".minute").val("1"); 
	             	 $.modal.close();
		            },
		            containerCss:{
		    		backgroundColor:"transparent"	    		
		            },
		        	
		    	overlayClose:true
		 });
		
  	 
	  return false;
	});
	 }
			
 });

function closeOverlay(){
	$(document).unbind('click');

}



