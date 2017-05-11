$(document).ready(function(){

 $("#clownFish").draggable({
 	drag:function(event){

 		var cF=$('#clownFish');
 		var redB=$('.redBox');
 		var objMiddle=  redB.offset().left +redB.width()/2;
 		var clownMiddle=  cF.offset().left + cF.width()/2; 
 		

 		console.log("objMiddle:" + objMiddle + " clownMiddle:" +clownMiddle);

 		if(clownMiddle>= objMiddle ){
 			cF.removeClass("flip");
 			

 		}else{

 			cF.addClass("flip"); 
 		
 		}//end of if

 	}//end of drag event
	
	});//end of draggable

});//end of jquery