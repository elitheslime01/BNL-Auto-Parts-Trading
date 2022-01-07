// for the sticky navigation bar
// DO NOT EDIT!
window.onscroll = function() {myFunction()}; 

var topnavigation = document.getElementById("topnavigation");
// var nav = document.getElementById("nav")
var sticky = topnavigation.offsetTop;
// var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
      topnavigation.classList.add("sticky")
      // nav.classList.add("sticky")
  } else {
      topnavigation.classList.remove("sticky");
      // nav.classList.remove("sticky")
  }
}


