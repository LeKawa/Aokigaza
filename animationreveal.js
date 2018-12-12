var duration = .5;

setTimeout(function() {

  var tl = new TimelineMax()

    .to(".Fixed_Text", duration, {
      clipPath: "inset(0px 0px 0% 1px)",
      ease: Power1.easeOut,
      yoyo: true
    }, "reveal");

}, 750);


var svg = document.querySelector('.Photoone_1');
var svg1 = document.querySelector('.Photoone_2');
var image = document.querySelector('.Fixed_Svg');
var image1 = document.querySelector('.Fixed_Svg1');
var image2 = document.querySelector('.Fixed_Svg2');

setTimeout(function() {
  image.style.opacity = 1;
  image.style.transition = "opacity .1s";

}, 750);

setTimeout(function() {
  image1.style.opacity = 1;
  image1.style.transition = "opacity .1s";

}, 500);
setTimeout(function() {
  image2.style.opacity = 1;
  image2.style.transition = "opacity .1s";

}, 250);


setTimeout(function() {
  svg.style.opacity = 1;
  svg.style.transition = "opacity .5s";

}, 1000);

setTimeout(function() {
  svg1.style.opacity = 1;
  svg1.style.transition = "opacity .5s";

}, 1200);
