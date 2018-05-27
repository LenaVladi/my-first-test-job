$(document).ready(function() {

  // слайдер фотографий
  var mainImgSrc = $('.slider__main-photo picture');
  var desc = $('.slider__description .slider__count');
  var title = $('.slider__description .slider__title i');
  var sliderList = $('.slider__item').length;
  var num, text;
  
  $('.slider__list li:last-child').prependTo('.slider__list');
  var step = $('.slider__list li').outerWidth()
  $('.slider__next').click(function() {
    $('.slider__list').animate({
      'left': -step
    }, 'slow', function() {
       $('.slider__list li:first-child').appendTo('.slider__list');
       $('.slider__list').css('left', 0);

       num = $('.slider__list li picture img').data('num');
       text = $('.slider__list li picture img').data('desc');
       console.log(num + '/' + sliderList);
       mainImgSrc.html($('.slider__list li picture').html()); 
       desc.text(num + '/' + sliderList);
       title.text(text);
    });
  });
  
   $('.slider__prev').click(function() {
    $('.slider__list').animate({
      'left': step
    }, 'slow', function() {
       $('.slider__list li:last-child').prependTo('.slider__list');
       $('.slider__list').css('left',0);

       num = $('.slider__list li picture img').data('num');
       text = $('.slider__list li picture img').data('desc');
       mainImgSrc.html($('.slider__list li picture').html()); 
       desc.text(num + '/' + sliderList);
       title.text(text);
    });
  });

  //слайдер новостей
  var viewport = $('.preview__viewport').outerWidth();
  var preview = $('.preview__item').outerWidth();

  $('.preview__next').click(function() {
    $('.preview__viewport').animate({
      'left': -step
    }, 'slow', function() {
       $('.preview__viewport a:first-child').appendTo('.preview__viewport');
       $('.preview__viewport').css('left', 0);
    });
  });

  $('.preview__prev').click(function() {
    $('.preview__viewport').animate({
      'left': -step
    }, 'slow', function() {
       $('.preview__viewport a:first-child').appendTo('.preview__viewport');
       $('.preview__viewport').css('left', 0);
    });
  });
});

// $('.slider__list li').draggable({
//   revert:true
// });
