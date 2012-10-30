class Canvas
  constructor: (@id, @options) ->
    @w = if @options.width then @options.width else 400
    @h = if @options.height then @options.height else 400
    @color = if @options.color then @options.color else 'black'
    @canvas = document.createElement "canvas"
    @canvas.width = @w
    @canvas.height = @h
    @canvas.id = @id

  attach: (@ancestor) ->
    if @ancestor 
      $('body').find("##{@ancestor}").append($(@canvas))
    else
      $('body').append($(@canvas))
    @ctx = @canvas.getContext("2d")
  draw: ->
    @ctx.fillStyle = @color
    @ctx.fillRect 0, 0, @w, @h
  render: (map) ->
    @.draw()
    l = map.length
    obj.draw() for obj in map 

  dimensions: ->
    [@w, @h]

  destroy: ->
    $("##{@id}").remove();
    delete @

