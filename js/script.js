$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    center:true,
    margin:30,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    },
    nav: true,
    dots: true
  });
});