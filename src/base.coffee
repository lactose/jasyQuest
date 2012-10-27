$(document).ready ->
  options =
    width: document.width - 40
    height: document.height - 40
  c = new Canvas('test', options)

  c.attach()
  c.ctx.fillStyle = 'black'
  c.ctx.fillRect 0, 0, c.w, c.h
  
  roptions = 
    loc: new Particle(30, 30)
    color: 'red'


  r = new Rectangle(c.ctx, roptions)
  r.draw
  r.move new Particle(200, 200)
  r.draw
   
  console.log r.loc.x
  console.log r.loc.y
  console.log r.color
