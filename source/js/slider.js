$(document).ready(function() {
  
  $('.slider__list li:last-child').prependTo('.slider__list');
  var step = $('.slider__list li').outerWidth()
  $('.slider__next').click(function() {
    $('.slider__list').animate({
      'left': -step
    }, 'slow', function() {
       $('.slider__list li:first-child').appendTo('.slider__list');
       $('.slider__list').css('left',0);
    });
  });
  
   $('.slider__prev').click(function() {
    $('.slider__list').animate({
      'left': step
    }, 'slow', function() {
       $('.slider__list li:last-child').prependTo('.slider__list');
       $('.slider__list').css('left',0);
    });
  });
});

$('.slider__list li').draggable({
  revert:true
});

$(document).ready(function() {
  
  $('.preview__list li:last-child').prependTo('.preview__list');
  var step = $('.preview__list li').outerWidth()
  $('.preview__next').click(function() {
    $('.preview__list').animate({
      'left': -step
    }, 'slow', function() {
       $('.preview__list li:first-child').appendTo('.preview__list');
       $('.preview__list').css('left',0);
    });
  });
  
   $('.preview__prev').click(function() {
    $('.preview__list').animate({
      'left': step
    }, 'slow', function() {
       $('.preview__list li:last-child').prependTo('.preview__list');
       $('.preview__list').css('left',0);
    });
  });
});

$('.slider__list li').draggable({
  revert:true
});