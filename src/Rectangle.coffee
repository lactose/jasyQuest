class Rectangle extends Shape
  constructor: (@context, @options) -> 
    super @context, @options

  move: (point) ->
    super point

  draw: ->
    @.move @loc
    @context.fillRect @loc.x, @loc.y, @loc.x + @w, @loc.y + @h

  destroy: ->
    @color = 'black'
    draw
    super
