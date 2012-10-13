define([
  'jquery',
	'./src/player-view'
  ], function ($,PlayerView) {

  $(function() {
    var player = new PlayerView({
      el: '#player'
    });
    player.render();
  });
});