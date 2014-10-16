var fhirface =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var NUM_WHEEL;

	NUM_WHEEL = 3;

	$(function() {
	  var bind, current, currentProd, delay, fontSize, iterateMap, moveTo, navigateTo, navigationNode, next, nowheel, prev, prodNav, prodTm, products, setProduct, slides, tm, watchHash;
	  bind = function(from, to) {
	    from.next = to;
	    return to.prev = from;
	  };
	  iterateMap = function(m, cb) {
	    var k, s, _results;
	    _results = [];
	    for (k in m) {
	      s = m[k];
	      _results.push(cb([k, s]));
	    }
	    return _results;
	  };
	  slides = {
	    index: {
	      coord: [0, 0]
	    },
	    projects: {
	      coord: [1, 0]
	    },
	    process: {
	      coord: [1, 1]
	    },
	    team: {
	      coord: [0, 1]
	    }
	  };
	  bind(slides.index, slides.projects);
	  bind(slides.projects, slides.process);
	  bind(slides.process, slides.team);
	  bind(slides.team, slides.index);
	  fontSize = function() {
	    var vmin;
	    vmin = Math.floor(Math.min($(window).height(), $(window).width() / 1.8) / 100) * 2;
	    return $('body').css({
	      fontSize: "" + vmin + "px"
	    });
	  };
	  $(window).bind('resize', fontSize);
	  fontSize();
	  navigationNode = $("#nav");
	  iterateMap(slides, function(_arg) {
	    var k, position, s, x, y, _ref;
	    k = _arg[0], s = _arg[1];
	    s.id = k;
	    _ref = s.coord, x = _ref[0], y = _ref[1];
	    position = {
	      top: "" + (y * 50) + "%",
	      left: "" + (x * 50) + "%",
	      position: 'absolute'
	    };
	    s.node = $("#" + k).css(position);
	    return s.navNode = $('<a>', {
	      "class": "item",
	      href: "#/" + k
	    }).css($.extend({
	      width: "45%",
	      height: "45%"
	    }, position)).appendTo(navigationNode);
	  });
	  current = slides.index;
	  navigateTo = function(slide) {
	    return window.location.hash = "#/" + slide.id;
	  };
	  next = function() {
	    return navigateTo(current.next);
	  };
	  prev = function() {
	    return navigateTo(current.prev);
	  };
	  $(document).bind('keydown', function(e) {
	    if (e.keyCode === 40 || e.keyCode === 37) {
	      return prev();
	    } else if (e.keyCode === 39 || e.keyCode === 38) {
	      return next();
	    }
	  });
	  nowheel = false;
	  tm = null;
	  delay = 1300;
	  $(window).bind('mousewheel', function(e) {
	    var inc;
	    if (nowheel) {
	      return;
	    }
	    inc = e.originalEvent.wheelDelta > 0 ? -1 : 1;
	    nowheel = true;
	    if (tm) {
	      clearTimeout(tm);
	    }
	    tm = setTimeout((function() {
	      return nowheel = false;
	    }), delay);
	    if (inc > 0) {
	      return next();
	    } else {
	      return prev();
	    }
	  });
	  moveTo = function(slide) {
	    var viewport, x, y, _ref;
	    if (slide === current) {
	      return;
	    }
	    _ref = slide.coord, x = _ref[0], y = _ref[1];
	    viewport = $('#slides');
	    viewport.addClass('animated');
	    setTimeout((function() {
	      return viewport.removeClass('animated');
	    }), 1000);
	    viewport.css({
	      transition: 'transform 1s ease-in-out',
	      transform: "translate(-" + (x * 50) + "%,-" + (y * 50) + "%"
	    });
	    current.navNode.removeClass('active');
	    current = slide;
	    return current.navNode.addClass('active');
	  };
	  watchHash = function() {
	    var s;
	    s = slides[location.hash.slice(1).split('/')[1] || 'index'];
	    return moveTo(s);
	  };
	  products = {
	    medclient: {
	      icon: 'C'
	    },
	    fhirbase: {
	      icon: 'L'
	    },
	    formstamp: {
	      icon: 'H'
	    },
	    foodtaster: {
	      icon: 'N'
	    }
	  };
	  currentProd = products.medclient;
	  bind(products.medclient, products.fhirbase);
	  bind(products.fhirbase, products.formstamp);
	  bind(products.formstamp, products.foodtaster);
	  bind(products.foodtaster, products.medclient);
	  prodTm = null;
	  setProduct = function(p) {
	    currentProd.node.addClass('hidden');
	    currentProd.navNode.removeClass('active');
	    p.node.removeClass('hidden');
	    p.navNode.addClass('active');
	    if (prodTm) {
	      clearTimeout(prodTm);
	    }
	    prodTm = setTimeout((function() {
	      return setProduct(p.next);
	    }), 10000);
	    return currentProd = p;
	  };
	  prodNav = $('#prod-nav');
	  iterateMap(products, function(_arg) {
	    var k, s;
	    k = _arg[0], s = _arg[1];
	    s.node = $("#" + k);
	    return s.navNode = $('<span>', {
	      "class": 'icon product'
	    }).text(s.icon).click(function() {
	      return setProduct(s);
	    }).appendTo(prodNav);
	  });
	  $(window).on('hashchange', watchHash);
	  return watchHash();
	});


/***/ }
/******/ ])