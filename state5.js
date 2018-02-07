var accel = 400, platformGroup;

demo.state5 = function() {};
demo.state5.prototype = {
	preload: function(){
		game.load.image('platform','assets/sprites/platform.png');
	},
	create: function(){
		game.stage.backgroundColor = "#f4c842";
		addChangeEventListener();
		barbarian = game.add.sprite(centerX, 0, 'barbarian');
		platform = game.add.sprite(0,800,'platform');
		platformGroup = game.add.group();
		platformGroup.create(650,400,'platform');
		platformGroup.create(1300,400,'platform');

		game.physics.enable([barbarian, platform, platformGroup]);

		barbarian.body.gravity.y = 500;
		barbarian.body.bounce.y = 0.2;
		barbarian.body.drag.x = 400;
		barbarian.body.collideWorldBounds = true;

		platform.body.immovable = true;

		platformGroup.setAll('body.immovable',true);
	},
	update: function(){
		game.physics.arcade.collide(barbarian, [platform, platformGroup]);
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			barbarian.body.acceleration.x = -accel;
		}else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			barbarian.body.acceleration.x = accel;
		} else {
			barbarian.body.acceleration.x = 0;
		}
		if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
			barbarian.body.velocity.y = -300;
		}
	}
};