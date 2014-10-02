NUM_WHEEL = 3
$ ()->

  bind = (from,to)->
    from.next = to
    to.prev = from

  slides = {
    index:    {coord: [0,0]}
    projects: {coord: [1,0]}
    process:  {coord: [1,1]}
    contact:  {coord: [0,1]}
  }

  bind(slides.index, slides.projects)
  bind(slides.projects, slides.process)
  bind(slides.process, slides.contact)
  bind(slides.contact, slides.index)


  fontSize = ()->
    console.log(Math.min($(window).height(), $(window).width()))
    vmin = Math.floor(Math.min($(window).height(), $(window).width()/1.8)/100)*2
    console.log(vmin)
    $('body').css(fontSize: "#{vmin}px")

  $( window ).bind 'resize', fontSize

  fontSize()

  for k,s of slides
    node =  $("##{k}")
    s.node = node
    navNode = $("##{k}Nav")
    throw "Could not fild ##{k}Nav" unless navNode
    s.navNode = navNode
    [x,y] = s.coord
    node.css(top: "#{x*50}%", left: "#{y*50}%", position: 'absolute')

  current = slides.index

  moveTo = (slide)->
    [x,y] = slide.coord
    $('#slides').css
      transition: 'transform 1s ease-in-out'
      transform: "translate(-#{x*50}%,-#{y*50}%"
    current.navNode.removeClass('active')
    slide.navNode.addClass('active')
    current = slide

  next  = ()-> moveTo(current.next)
  prev  = ()-> moveTo(current.prev)

  $(document).bind 'keydown', (e)->
    slides = $('#slides')
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
    if inc > 0
      nowheel = true
      clearTimeout(tm) if tm
      tm = setTimeout (-> nowheel = false), delay
      next()
    else
      nowheel = true
      clearTimeout(tm) if tm
      tm = setTimeout (-> nowheel = false), delay
      prev()
