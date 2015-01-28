(function() {
  var $blogSlide = $('.js-blog-slide');
  var $prototypeSlide = $('.js-prototype-slide');
  var $teamSlide = $('.js-team-slide');
  var $processSlide = $('.js-process-slide');
  var $offerSlide = $('.js-offer-slide');
  var $projectsSlide = $('.js-projects-slide');
  var $blog = $('.js-blog');
  var $prototype = $('.js-prototype');
  var $team = $('.js-team');
  var $process = $('.js-process');
  var $offer = $('.js-offer');
  var $projects = $('.js-projects');
  var $about = $('.js-about');
  var $upBtn = $('.js-up-btn');
  var $aboutSlide = $('.js-about-slide');
  var $screens = $('.js-screens');
  var $foodtaster = $('.js-foodtaster');
  var $fotmstamp = $('.js-fotmstamp');
  var $fhirbase = $('.js-fhirbase');
  var $choiceBtn = $('.js-choice-btn');


   /*slider movement*/

  $choiceBtn.on('click', {index: 0}, showScreen);
  $fhirbase.on('click', {index: 1}, showScreen);
  $fotmstamp.on('click', {index: 2}, showScreen);
  $foodtaster.on('click', {index: 3}, showScreen);

   function showScreen(e){
     var targetX = -1054 * e.data.index;
     $screens.css('left', targetX);
   }


  /*navigation*/


  $('#nav-menu').click(function(){
     $('#navopen').toggle();
  });


  /*
  var n = '#nav'

  $('#nav-menu').click(function() {
   	if ($(n).hasClass('nav-open')) {
   			$(n).removeClass('nav-open');
   	}
   	else {
   			$(n).addClass('nav-open');
   	}
  });*/


  /* navigation scroll */
  var navBarHeight = $('.navbar').height();

  var navigation = [
    [$about, $aboutSlide],
    [$offer, $offerSlide],
    [$process, $processSlide],
    [$projects, $projectsSlide],
    [$team, $teamSlide],
    [$prototype, $prototypeSlide],
    [$blog, $blogSlide],
    [$upBtn, $aboutSlide]
  ];

  $(navigation).each(function(index, e) {
    var menuItem = e[0];
    var scrollTarget = e[1];
    
    menuItem.click(function(){
      $("body").animate({ scrollTop: scrollTarget.offset().top - navBarHeight }, 600);
      return false;
    });
  });
})();