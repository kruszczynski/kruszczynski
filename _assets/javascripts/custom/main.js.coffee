# @Kru = do (Backbone, Marionette) ->

#   App = new Marionette.Application

#   App.addRegions
#     headerRegion: "#header"
#     contentRegion: "#content"
#     footerRegion: "#footer"

#   App.on 'initialize:after', ->
#     if Backbone.history
#       Backbone.history.start
#         pushState: Modernizr.history
#         silent: true

#   App

# $(document).ready ->
#   Kru.start()