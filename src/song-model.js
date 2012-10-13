define(["backbone"], function (BB) {
  var Song = BB.Model.extend({
    defaults: {
      title: "something",
      artist: "someone",
      genere: "somegenere",
      length: "300",
      lyrics: "lala"

      
    },

    initialize: function (args) {
      this.set({song: args.song});
    }

  });
  
  return Song;
});