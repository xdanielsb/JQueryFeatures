$(document).ready(function(){
  //Listen an event
  $("#accept").on("click", function(){
        alert("hello")
  });

  $(".same").on("click", function(){
      //Convert this to a jquery object
      $(this).remove();
  });

  $(".add").on("click", function(){
      //Convert this to a jquery object
      $(this).append($("<button> hello </button>"))
  });

  //Only target buttos that are inside a vacation class
  $(".vacation").on("click","button", function(){
      alert("hello");
  });

  // events  onmouseenter click doubleclick hove release....
  // keypress keydown keyup

});
