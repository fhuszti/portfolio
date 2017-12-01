$(function() {
	$('#title').on('start_game', function() {
		var HomeGame = HomeGame || {};

		HomeGame.game = new Phaser.Game(800, 600, Phaser.AUTO, 'canvasContent');

		HomeGame.game.state.add('Boot', HomeGame.Boot);

		HomeGame.game.state.add('Preload', HomeGame.Preload);

		HomeGame.game.state.add('Game', HomeGame.Game);

		HomeGame.game.state.add('Languages', HomeGame.Languages);

		HomeGame.game.state.add('Frameworks', HomeGame.Frameworks);

		HomeGame.game.state.add('Others', HomeGame.Others);

		HomeGame.game.state.add('Formation', HomeGame.Formation);

		HomeGame.game.state.add('Contact', HomeGame.Contact);

		HomeGame.game.state.add('Experience', HomeGame.Experience);

		HomeGame.game.state.start('Boot');
	});
});
