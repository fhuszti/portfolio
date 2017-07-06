var HomeGame = HomeGame || {};

HomeGame.Contact = function() {};

HomeGame.Contact.prototype = {
	
	create: function() {
		ContactManager.generateContact(this);
	},

	update: function() {
		//collisions
		this.game.physics.arcade.collide(this.player, this.blockedLayer);

		//Player movements management
		if (this.player.x < 305) {
			this.game.add.tween(this.player).to({
				angle: 0
			}, 50, "Linear", true);

			this.player.body.gravity.y = 900;
			this.player.body.bounce.setTo(0, 0);

			generalFunctions.playerMov(this);
		}
		//If player is in zero gravity zone
		if (this.player.x >= 305) {
			this.player.angle += 2;

			this.player.body.gravity.y = 0;
			this.player.body.bounce.setTo(0.8, 0.8);

			ContactPlayerManager.zeroGravityMov(this);
		}

		if (this.player.x < 20) {
			this.game.state.start('Hub');
		}
	}
};
