$(function()
{
var saveop;
var saveNumber;
var textBox = $("#display");
$(".numbers").bind( "click", function(){
      var nmbr = $(this).attr("id");
   textBox.val(function(index, curValue){
      return curValue + nmbr;
   });
});
$("#btnclear").bind( "click", function(){
   saveop = 0;
   saveNumber = 0;
   $("#calculator").trigger( 'reset' );
   textBox.css("color","black");  
});
$("#btndot").bind( "click", function(){
   if (textBox.val().indexOf(".") == -1) {
      textBox.val(function(index, curValue){
      return curValue + ".";
      });
   }  
});
$(".operations").bind( "click", function(){
      var opr = $(this).attr("id");
   textBox.val(function(index, curValue){
      saveNumber = curValue;
      saveop = opr;  
      return curValue = " ";
   });
});
$("#btnplussub").bind( "click", function(){
   textBox.val(function(index, curValue){
      return curValue *= -1;
      });
});
$("#btnequal").bind( "click", function(){
   switch(saveop){
      case "+":
         textBox.val(function(index, curValue){
            return curValue = +saveNumber + +curValue;
         });
         break;
      case "-":
         textBox.val(function(index, curValue){
            return curValue = saveNumber - curValue;
         });
         break;
      case "*":
         textBox.val(function(index, curValue){
            return curValue = +saveNumber * +curValue;
         });
         break;
      case "/":
         if (textBox.val()== 0){
            textBox.val(function(index, curValue){
               textBox.css("color","red");
               return curValue = "Делить на ноль нельзя!"; 
            });
         }
         else{
            textBox.val(function(index, curValue){
               return curValue = +saveNumber / +curValue;
            });
         }
         break; 
   }
});           
});
   
















