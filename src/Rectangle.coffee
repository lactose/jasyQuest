class Rectangle extends Shape
  constructor: (@context, @options) -> 
    super @context, @options

  move: (point) ->
    super point

  draw: ->
    @context.fillRect @loc.x, @loc.y, point.x + @w, point.y + @h

  destroy: ->
    @color = 'black'
    draw
    super
