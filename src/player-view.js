define([
  'jquery',
  'backbone',
  "text!./player-template.html",
  './service',
  './song-view',
  './song-model'
], function ($, BB, playerTemplate, service, SongView, SongModel) {

  var PlayerView = BB.View.extend({

    events: {
      'click .player': 'playerPressed'
    },

    initialize: function (args) {

    },

    render: function () {
      this.$el.append(playerTemplate);
      this.$el.trigger('create');
    },

    playerPressed: function () {
      el = this.$el.find(".music-list");
      el.empty();
      service.getMusicList(_.bind(function (data) {
        data.each(function (song) {
          console.log(song.attributes);
          var div = $('<div></div>');
          el.append(div);
          var sv = new SongView({
            el: div,
            model: new SongModel({
              song: song.attributes
            })
          });
          sv.render();
        });
      }, this));
    }

  });

  return PlayerView;
});