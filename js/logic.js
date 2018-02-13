document.addEventListener("DOMContentLoaded", function(event) {
  console.log('Im working!');

  var slideIndex = 1;
  var parent = document.getElementById("slider");
  var nodesSameClass = parent.getElementsByClassName("slide");
  console.log(nodesSameClass.length);

});
