$(document).ready(function(){
  //change all li to the text orlando

  $(".box").on("click", function(){
      $(this).toggleClass("another")
      if($(this).hasClass("another")){
          $(this).animate({"top": "-10px"},600);
      }else{
          $(this).animate({"top": "0px"}, 600);
      }
  });

});
