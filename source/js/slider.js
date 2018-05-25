$(document).ready(function() {
  var mainImgSrc = $('.slider__main-photo img');

  $('.slider__list li:last-child').prependTo('.slider__list');
  var step = $('.slider__list li').outerWidth()
  $('.slider__next').click(function() {
    $('.slider__list').animate({
      'left': -step
    }, 'slow', function() {
       $('.slider__list li:first-child').appendTo('.slider__list');
       $('.slider__list').css('left', 0);
       $('.slider__list').css('left', 0);
       mainImgSrc.attr('src', $('.slider__list li img').attr('src')); 
    });
  });
  
   $('.slider__prev').click(function() {
    $('.slider__list').animate({
      'left': step
    }, 'slow', function() {
       $('.slider__list li:last-child').prependTo('.slider__list');
       $('.slider__list').css('left',0);
       mainImgSrc.attr('src', $('.slider__list li img').attr('src')); 
    });
  });
});

$('.slider__list li').draggable({
  revert:true
});
