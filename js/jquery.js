
$(function(){

'use strict';

//section-loding function

var win = $(window),
sectionloding = $('.section-loding');
sectionloding.height($(window).height());
win.resize(function(){
sectionloding.height($(this).height());
})
sectionloding.delay(5000).fadeOut(500)

//section-loding function end

//niceScroll function
//when you need to show defult value for bar scroll
//of padge go to css file in body you will get over-flow y:hidden
//make it over-flow:visible and move nice scroll function

var body = $("body");
body.niceScroll({ 
cursorcolor:'#f9b129',
cursorborder:'#f9b129',
zindex:15,
mousescrollstep:50,
dblclickzoom:true

})

//niceScroll function end

//padge-buttom function

 var win = $(window);
 win.scroll(function(){
 var wind = $(this).scrollTop(),
 sectionone = $(".section-food").offset().top;
 if(wind >= sectionone){
$(".padge-button").fadeIn(200)
}else{
$(".padge-button").fadeOut(200)
}
})
var padgebutton =  $(".padge-button");
padgebutton.on("click",function(){
$("html,body").animate({scrollTop:"0px"},1000)

}); 

//padge-buttom function end

//nav smooth scroll function

var scroll =  $('.scroll');
scroll.click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
  && location.hostname == this.hostname) {
    var $target = $(this.hash);
    $target = $target.length && $target
    || $('[name=' + this.hash.slice(1) +']');
    if ($target.length) {
      var targetOffset = $target.offset().top;
      $('html,body')
      .animate({scrollTop: targetOffset}, 500);
     return false;
    }
  }
})

//nav smooth scroll function end

//first carousel FUNCTION
$('.carousel').carousel({
    interval: 2000
})
//first carousel FUNCTION end

//fit-text FUNCTION

var overlayh2 = $(".overlay-h2"),
    overlayh3 = $(".overlay-h3"),
    sectionmealsh2 = $(".sectionmeals-h2"),
    sectionfoodh2 = $(".sectionfood-h2"),
    sectioncarousel = $(".sectioncarousel-h2"),
    sectionoffereh3 = $(".sectionoffer-h3"),
    sectionofferh2 = $(".sectionoffer-h2"),
    sectionofferh4 = $(".sectionoffer-h4"),
    sectioncontact2 = $(".section-contact-h2");
    overlayh2.fitText(0.6);
    overlayh3.fitText(0.9);
sectionmealsh2.fitText(1.2, { minFontSize: '20px', maxFontSize: '35px' });
sectionfoodh2.fitText(1.2, { minFontSize: '20px', maxFontSize: '35px' });
sectioncarousel.fitText(1.2, { minFontSize: '20px', maxFontSize: '35px' });
sectionoffereh3.fitText(1.2, { minFontSize: '20px', maxFontSize: '30px' });
sectionofferh2.fitText(1.2, { minFontSize: '40px', maxFontSize: '60px' }); 
sectionofferh4.fitText(1.2, { minFontSize: '30px', maxFontSize: '50px' });
sectioncontact2.fitText(1.2, { minFontSize: '20px', maxFontSize: '35px' });

//fit-text FUNCTION

//nav FUNCTION

var navbox =  $(".nav-box"),
    navbar = $(".header");
navbox.on("click",function(){
navbox.toggleClass("open");
navbar.toggleClass("header-position");
})

//nav FUNCTION end

//nav owl-carousel

var owlcarousel = $('.owl-carousel'); 
owlcarousel.owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

//nav owl-carousel end
})