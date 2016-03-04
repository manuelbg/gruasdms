$( document ).ready(function() {
  $("#counter").html($("#counter > a:nth-child(2)").html());
  $("#counter > a:nth-child(2)").remove();
});