$(function() {

    var glide = $('.slider').glide().data('api_glide');

    $(window).on('keyup', function (key) {
      if (key.keyCode === 13) {
        glide.jump(3, console.log('Wooo!'));
      };
    });

    $('.slider__arrows-item').on('click', function() {
      console.log(glide.current());
    });

// 	var item1 = $('#about'),
// 	   	item2 = $('#process'),
// 		item3 = $('#team'),
// 	   	item4 = $('#projects');

// 	var slide1 = $('#about-slide'),
// 	   	slide2 = $('#process-slide'),
// 		slide3 = $('#team-slide'),
// 	   	slide4 = $('#projects-slide');
	
// 	item1.click(function(){
// 		slide1.ScrollTo();
// 	})

// 	item2.click(function(){
// 		slide2.ScrollTo();
// 	})

// 	item4.click(function(){
// 		slide3.ScrollTo();
// 	})

// 	item3.click(function(){
// 		slide4.ScrollTo();
// 	})
});