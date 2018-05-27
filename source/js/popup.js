$(document).ready(function() {

	$('.footer__btn').click( function(event){
		event.preventDefault();
		$('.overlay').fadeIn(400, 
		 	function() { 
        $('.modal') 
          .removeClass('modal--close')
					.animate(200);
		});
	});

	// закрытие модального окна
	$('.modal__btn, .overlay').click( function() {
		$('.modal')
			.animate(200, 
				function() { 
					$('.modal').addClass('modal--close')
					$('.overlay').fadeOut(400); 
				}
			);
	});

});