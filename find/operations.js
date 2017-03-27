'use strict'

$(document).ready(function() {
  //just capture the text
  let text = $("h2").text()
  console.log(text)

  //modify the text
  $("h2").text("The world is mine")


  //descendant  operator
  $("#ident li").text("New world")


  // Only select the direct children no the indirect
  $("#ident2 > li").text("Changed value")


  // Use or selector to select components

  $("#este, #otro").text("I am a winner")

  //traversing
  $("#ident").find("li")
});
