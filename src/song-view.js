define([
  "jqm", // look nice: jqm, tests work: jquery
  "backbone",
  "text!./song-template.html"
], function ($, BB, SongTemplate) {
	var SongView = BB.View.extend({

		events: {
			'change .keep': 'keepSelected'
		},

		initialize: function (args) {
			this.model = args.model;
		},

		render: function () {
			var h = _.template(SongTemplate, this.model.toJSON());
			this.$el.append(h);
			this.$el.trigger('create');
		},

		keepSelected: function (ev) {
			console.log(this.model.attributes.song);
			// this.model.setStatus(ev.target.className);
		}

	});
	return SongView;
});