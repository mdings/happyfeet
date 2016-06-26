$(document).ready(function(){

	/*
	** Background images
	** ________________________________
	*/
	var bgImgs = $('.block__image img');
	bgImgs.each(function(i, img){
		var img = $(img)
		var src = img.attr('src');
		img.parent().css('background-image', 'url('+src+')');
	})

	/*
	** Carousel initialization
	** ________________________________
	*/
	var mySwiper = new Swiper ('.swiper-container', {
		autoHeight: true,
		slidesPerView: 'auto',
		hashnav: true,
		onSlideChangeStart: function(swiper) {
			var index = swiper.activeIndex;
			$('.treatments__list li').removeClass('active').eq(index).addClass('active')
		}
    })

	// carousel links
    $('.treatments__list a').on('click', function(){
    	var index = $(this).parent().index();
    	mySwiper.slideTo(index);
    	return false;
    })


    /*
	** Call Foundations
	** ________________________________
	*/
	$(this).foundation();
})

