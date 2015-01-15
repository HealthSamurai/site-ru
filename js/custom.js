$(function() {

	// $(window).bind('scroll', function(e) {
	// 	parallax();
	// });

	$('a.team-menu').click(function() {
		$('html, body').animate({ scrollTop:$('#team').offset().top }, 1000,
			function(){
				parallax();
			});
		return false;
	});

	// $('a.wrap').click(function() {
	// 	$('html, body').animate({ scrollTop:0 }, 1000
	// });

// nav 
	// var n = '#nav', no = 'nav-open';
	// $('#nav-menu').click(function(){
	// 	if ($(n).hasClass(no)) {
	// 		//$(n).removeClass(no);
	// 		$(n).animate({height:0},300);
	// 		setTimeout(function(){
	// 		$(n).removeClass(no).removeAttr('style');
	// 	},320);
	// 	}
	// 	else {
	// 	var newH = $(n).css('height', 'auto').height();
	// 	$(n).height(0).animate({height:newH}, 300);
	// 	setTimeout(function(){
	// 		$(n).addClass(no).removeAttr('style');
	// 	},320);
	// 	}
	// });

// glide
    // var glide = $('.slider').glide().data('api_glide');

    // $(window).on('keyup', function (key) {
    //   if (key.keyCode === 13) {
    //     glide.jump(3, console.log('Wooo!'));
    //   };
    // });

    // $('.slider__arrows-item').on('click', function() {
    //   console.log(glide.current());
    // });

	// var item1 = $('#about'),
	//    	item2 = $('#process'),
	// 	item3 = $('#team'),
	//    	item4 = $('#projects');

	// var slide1 = $('#about-slide'),
	//    	slide2 = $('#process-slide'),
	// 	slide3 = $('#team-slide'),
	//    	slide4 = $('#projects-slide');
	
	// item1.click(function(){
	// 	slide1.ScrollTo();
	// })

	// item2.click(function(){
	// 	slide2.ScrollTo();
	// })

	// item4.click(function(){
	// 	slide3.ScrollTo();
	// })

	// item3.click(function(){
	// 	slide4.ScrollTo();
	// })
});

function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#stars').css('top', (0 - (scrollPosition * .2 )) + 'px');
	$('#images').css('top', (0 - (scrollPosition * .5 )) + 'px');
}