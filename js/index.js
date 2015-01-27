(function() {
  var $blog = $('.js-blog');
  var $prototype = $('.js-prototype');
  var $team = $('.js-team');
  var $process = $('.js-process');
  var $offer = $('.js-offer');
  var $projects = $('.js-projects');
  var $about = $('.js-about');
  var $upBtn = $('.js-up-btn');
  var $screens = $('.js-screens');
  var $foodtaster = $('.js-foodtaster');
  var $fotmstamp = $('.js-fotmstamp');
  var $fhirbase = $('.js-fhirbase');
  var $choiceBtn = $('.js-choice-btn');


  /*slider*/

  $choiceBtn.on('click', {index: 2}, showScreen);
  $fhirbase.on('click', {index: 1}, showScreen);
  $fotmstamp.on('click', {index: 3}, showScreen);
  $foodtaster.on('click', {index: 4}, showScreen);

   function showScreen(e){
     var targetX = -1054 * e.data.index;
     $screens.css('left', targetX);
   }

  /*navigation*/

  $(function(){
    $('#nav-menu').click(function(){
       $('#navopen').toggle();
     });
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


  /*button*/
  $upBtn.click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });

  $about.click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });

  $about.click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });

  $projects.click(function(){
      $("html, body").animate({ scrollTop: 900 }, 600);
      return false;
  });

  $offer.click(function(){
      $("html, body").animate({ scrollTop: 1695 }, 600);
      return false;
  });

  $process.click(function(){
      $("html, body").animate({ scrollTop: 2110 }, 600);
      return false;
  });

  $team.click(function(){
      $("html, body").animate({ scrollTop: 2740 }, 600);
      return false;
  });

  $prototype.click(function(){
      $("html, body").animate({ scrollTop: 3700 }, 600);
      return false;
  });

  $blog.click(function(){
      $("html, body").animate({ scrollTop: 4300 }, 600);
      return false;
  });
})();