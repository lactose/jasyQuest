class Particle
  constructor: (@x, @y) ->

  move: (x, y) ->
    @x = x
    @y = y

  destroy: ->
    delete @
