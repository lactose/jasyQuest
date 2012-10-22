fs = require 'fs'
{exec, spawn} = require 'child_process'

config = 
  source: 'src'
  compiled: 'js'
  deploy: 'build'

output = 
  'game': [
    'base'
    'Canvas'
  ]

task 'build', 'compile the source files into javascript', ->
  for target, files of output
    mapped = files.map (file) ->
      file = "#{config.source}/#{file}.coffee"
    console.log mapped

    file = "#{config.deploy}/#{target}.js"

    exec "coffee -j #{file} -cb #{(mapped.join ' ')}"
    console.log "coffee -j #{file} -cb #{(mapped.join ' ')}"
