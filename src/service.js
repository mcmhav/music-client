define([
  'jqm',
  'backbone',
  './song-model'
], function ($, BB, SongModel) {

  var something = function () {};

  var musicList = [{title: "something"}, {title: "something2"}, {title: "something3"}];

  something.getMusicList = function (callback) {
		var CollectionSongs = BB.Collection.extend({
			model: SongModel
		});
		callback(new CollectionSongs(musicList));
  };

  return something;
});