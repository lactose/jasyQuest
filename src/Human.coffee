class Human
  constructor: (@body, @options) ->
    @speed  = if @options.speed then @options.speed else 50
    @actions = 
      default: true
    me = @
    $(document).on 'keydown', (e) ->
      console.log(e.keyCode)
      me.actions[e.keyCode] = true
      console.log me.actions
    $(document).on 'keyup', (e) ->
      #delete me.actions[e.keyCode] 

  update: (modifier) ->
    if '38' in @actions  #up
      console.log "help"
      @body.move( new Particle @body.loc.x, @body.loc.y - @speed * modifier)
    else if 40 in @actions #down
      @body.move( new Particle @body.loc.x, @body.loc.y + @speed * modifier)
    else if 37 in @actions #left
      @body.move( new Particle @body.loc.x - @speed * modifier, @body.loc.y)
    else if 39 in @actions #right
      @body.move( new Particle @body.loc.x + @speed * modifier, @body.loc.y)
    else
        #nothing
