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

task 'compile', 'compile the source files into javascript', ->
  exec "coffee -co #{config.compiled} #{config.source}"

task 'build', 'compile the source files into javascript', ->
  invoke 'compile'
  for target, files of output
    mapped = files.map (file) ->
      file = "#{config.source}/#{file}.coffee"

    file = "#{config.deploy}/#{target}.js"

    exec "coffee -j #{file} -cb #{(mapped.join ' ')}"
