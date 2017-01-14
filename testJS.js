$(function()
{
$("#resbut").bind( "click", function(){
   var firstAnswer = 0;
   var secondAnswer = 0;
   var thirdAnswer = 0;
   var fourthAnswer = 0;
   var fiveAnswer = 0;
   var sumAnswer = 0;
   var percent = 0;
   for (var i = 0; i < $(".r1").length; i++){
      if ($(".r1:eq(0)").is(':checked')){firstAnswer = 10;}
      else{firstAnswer = 0;}
      }
   for (var i = 0; i < $(".r2").length; i++){
      if ($(".r2:eq(2)").is(':checked')){secondAnswer = 10;}
      else{secondAnswer = 0;}
      }
   for (var i = 0; i < $(".r3").length; i++){
      if ($(".r3:eq(3)").is(':checked')){thirdAnswer = 10;}
      else{thirdAnswer = 0;}
      }
   for (var i = 0; i < $(".r4").length; i++){
      if ($(".r4:eq("+i+")").is(':checked')){
         if(i==1 && i==2){fourthAnswer += 10;}
         if(i==1 || i==2){fourthAnswer += 5;}
         if(i==3){fourthAnswer -= 5;}
         if(i==0){fourthAnswer -= 5;}
         }
      }
   for (var i = 0; i < $(".r5").length; i++){
      if ($(".r5:eq("+i+")").is(':checked')){
         if(i==0 && i==1){fiveAnswer += 10;}
         if(i==0 || i==1){fiveAnswer += 5;}
         if(i==2){fiveAnswer -= 5;}
         if(i==3){fiveAnswer -= 5;}
         }
      }
      sumAnswer = firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fiveAnswer;
      percent = (sumAnswer*100)/50;
      alert("Максимальное количество баллов: 50"+"\n"+"Вы прошли тест с оценкой: " + sumAnswer + " баллов"+"\n"+"Процент правильных ответов: "+percent+"%");   
}); 
function func() {
  $("div").animate({ right:493, opacity: 0 }, 50000, function(){
     $(this).hide();
  }); 
}
setTimeout(func, 1000);
function func1() {
   $(".ttl").html("Быстрее...");
}
setTimeout(func1, 10000);
function func2() {
   $("body").prepend('<img src="http://cs8.pikabu.ru/post_img/2016/05/21/12/146386166815699137.jpg" />')
}
setTimeout(func2, 35000);
});


   
   

   
   
