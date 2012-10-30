
$(document).ready ->
  options =
    width: document.width - 40
    height: document.height - 40
  c = new Canvas('test', options)

  c.attach()
  
  roptions = 
    loc: new Particle(30, 30)
    color: 'red'


  r = new Rectangle(c.ctx, roptions)
  roptions.loc = new Particle(300, 150)
  roptions.color = 'blue'
  s = new Rectangle(c.ctx, roptions)
  map =  [
    r
    s
  ]
  h = new Human r, {}
  past = Date.now()
  main = ->
    now = Date.now()
    delta = now - past

    h.update delta/1000 
    c.render(map)

    past = now

  setInterval main, 1

