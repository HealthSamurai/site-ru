NUM_WHEEL = 3
$ ()->

  bind = (from,to)->
    from.next = to
    to.prev = from

  iterateMap = (m, cb)->
    cb([k,s]) for k,s of m

  slides = {
    index:    {coord: [0,0]}
    projects: {coord: [1,0]}
    process:  {coord: [1,1]}
    team:  {coord: [0,1]}
  }

  bind(slides.index, slides.projects)
  bind(slides.projects, slides.process)
  bind(slides.process, slides.team)
  bind(slides.team, slides.index)


  fontSize = ()->
    vmin = Math.floor(Math.min($(window).height(), $(window).width()/1.8)/100)*2
    $('body').css(fontSize: "#{vmin}px")

  $(window).bind 'resize', fontSize

  fontSize()

  navigationNode = $("#nav")

  iterateMap slides, ([k,s])->
    s.id = k
    [x,y] = s.coord
    position = { top: "#{y*50}%", left: "#{x*50}%", position: 'absolute'}
    s.node = $("##{k}").css(position)
    s.navNode = $('<a>', class: "item", href: "#/#{k}")
      .css($.extend({width: "45%", height: "45%", }, position))
      .appendTo(navigationNode)

  current = slides.index



  navigateTo = (slide)->
    window.location.hash = "#/#{slide.id}"

  next  = ()-> navigateTo(current.next)
  prev  = ()-> navigateTo(current.prev)

  $(document).bind 'keydown', (e)->
    if e.keyCode == 40 or e.keyCode == 37
      prev()
    else if e.keyCode == 39 or e.keyCode == 38
      next()

  nowheel = false
  tm = null
  delay = 1300
  $(window).bind 'mousewheel', (e)->
    return if nowheel
    inc = if e.originalEvent.wheelDelta > 0 then -1 else 1
    nowheel = true
    clearTimeout(tm) if tm
    tm = setTimeout (-> nowheel = false), delay
    if inc > 0
      next()
    else
      prev()

  moveTo = (slide)->
    return if slide == current
    [x,y] = slide.coord
    viewport = $('#slides')
    viewport.addClass('animated')
    setTimeout (-> viewport.removeClass('animated')), 1000
    viewport.css
      transition: 'transform 1s ease-in-out'
      transform: "translate(-#{x*50}%,-#{y*50}%"
    current.navNode.removeClass('active')
    current = slide
    current.navNode.addClass('active')

  watchHash = ()->
    s = slides[location.hash.slice(1).split('/')[1] || 'index']
    moveTo(s)

  products = {
    medclient: {icon: 'C'}
    fhirbase: {icon: 'L'}
    formstamp: {icon: 'H'}
    foodtaster: {icon: 'N'}
  }

  currentProd = products.medclient

  bind(products.medclient, products.fhirbase)
  bind(products.fhirbase, products.formstamp)
  bind(products.formstamp, products.foodtaster)
  bind(products.foodtaster, products.medclient)

  prodTm = null
  setProduct = (p)->
    currentProd.node.addClass('hidden')
    currentProd.navNode.removeClass('active')
    p.node.removeClass('hidden')
    p.navNode.addClass('active')
    clearTimeout(prodTm) if prodTm
    prodTm = setTimeout (-> setProduct(p.next)), 10000
    currentProd = p

  prodNav = $('#prod-nav')
  iterateMap products, ([k,s])->
    s.node = $("##{k}")
    s.navNode = $('<span>', class: 'icon product')
      .text(s.icon)
      .click(-> setProduct(s))
      .appendTo(prodNav)

  $(window).on 'hashchange', watchHash
  watchHash()
