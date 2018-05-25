$(document).ready(function() {

	$('.footer__btn').click( function(event){
		event.preventDefault();
		$('.overlay').fadeIn(400, 
		 	function() { 
        $('.modal') 
          .removeClass('modal--close')
					.animate( {opacity: 1, top: '25%'}, 200);
		});
	});

	// закрытие модального окна
	$('.modal__btn, .overlay').click( function() {
		$('.modal')
			.animate( {opacity: 0, top: '45%'}, 200, 
				function() { 
					$('.modal').addClass('modal--close')
					$('.overlay').fadeOut(400); 
				}
			);
	});

});