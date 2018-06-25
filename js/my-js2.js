$('.menu-btn').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('menu-btn_active');
	$('.menu-mobile').toggleClass('menu-mobile_active');
});
$('.my-slider').slick({
			arrows: false,
			dots: true,
			slidesToShow: 4,
			slidesToScroll: 1
});
