$(document).ready(function(){
 $("#clownFish").draggable();
 $( "#clownFish").mouseover(function(){
 	$(this).addClass("flip");
 }).mouseleave(function(){ 
 	$(this).removeClass("flip");
 });//end of mouseover

});//end of jquery