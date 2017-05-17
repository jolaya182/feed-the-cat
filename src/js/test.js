$(document).ready(function(){


 $("#clownFish").draggable({

 	drag:function(event){
	functionDraggable();

 	}//end of drag event
 	
	
 

	});//end of draggable
 $(".cat-body").droppable({
 	drop:function(event, ui){
    var cF=$('#clownFish');
    //cat should move the mouth
    catOpenMouth();

    cF.fadeOut(500);
 		setTimeout(function(){var cF=$('#clownFish');bringFood(cF) }, 1000)

 	}//end of drop event
 });

	function bringFood(cF){
 		cF.show();
 		cF.css({top: 0, left: 0});
 	}//end of bringFood

	var functionDraggable=function(element){
		var cF=$('#clownFish');
 		var catF=$('.cat-body');
 		var objMiddle=  catF.offset().left +catF.width()/2;
 		var clownMiddle=  cF.offset().left + cF.width()/2; 
 		

 		console.log("objMiddle:" + objMiddle + " clownMiddle:" +clownMiddle);

 		if(clownMiddle>= objMiddle ){
 			cF.removeClass("flip");
 			

 		}else{

 			cF.addClass("flip"); 
 		
 		}//end of if

	}//end of function

	function catOpenMouth(){

		
	}//end of catOpenMouth

});//end of jquery
