class Shape

  constructor: (@context, @options) ->
    @loc = if @options.loc then @options.loc else new Particle(0, 0)
    @color = if @options.color then @options.color else 'white'
    @w = if @options.width then @options.width else 1
    @h = if @options.height then @options.height else 1

  move: (point) ->
    @loc = point
    @context.fillStyle = @color
   
  destroy: ->
    delete @


