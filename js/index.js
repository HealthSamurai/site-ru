(function() {
  var $upBtn = $('.js-up-btn');


  $upBtn.click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });

  $('.projects').click(function(){
      $("html, body").animate({ scrollTop: 790 }, 600);
      return false;
  });

  $('.offer').click(function(){
      $("html, body").animate({ scrollTop: 1540 }, 600);
      return false;
  });

  $('.process').click(function(){
      $("html, body").animate({ scrollTop: 1940 }, 600);
      return false;
  });

  $('.team').click(function(){
      $("html, body").animate({ scrollTop: 2550 }, 600);
      return false;
  });

  $('.prototype').click(function(){
      $("html, body").animate({ scrollTop: 3520 }, 600);
      return false;
  });

  $('.blog').click(function(){
      $("html, body").animate({ scrollTop: 4500 }, 600);
      return false;
  });
})();