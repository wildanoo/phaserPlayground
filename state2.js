var barrel, velocity = 1000, nextFire = 0, fireRate = 200;

demo.state2 = function () { };
demo.state2.prototype = {
    preload: function () {
        game.load.image('base', 'assets/sprites/base.png');
        game.load.image('barrel', 'assets/sprites/barrel.png');
        game.load.image('bullet', 'assets/sprites/bullet.png');
    },
    create: function () {
        game.stage.backgroundColor = "#0099ff";
        addChangeEventListener();

        var base = game.add.sprite(centerX, centerY, 'base');
        base.anchor.setTo(0.5);
        base.scale.setTo(5);

        bullets = game.add.group();
        bullets.rotate = 90;
        bullets.enableBody = true;
        bullets.physicBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, 'bullet');
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('anchor.y',0.43);
        bullets.setAll('anchor.x',1);
        bullets.setAll('scale.x',-5);
        bullets.setAll('scale.y',-5);

        barrel = game.add.sprite(centerX, centerY, 'barrel');
        barrel.anchor.setTo(0.1, 0.43);
        barrel.scale.setTo(5);

    },
    update: function () {
        barrel.rotation = game.physics.arcade.angleToPointer(barrel);
        if (game.input.activePointer.isDown) {
            this.fire();
        }
    },
    fire: function () {
        if(game.time.now > nextFire){
            nextFire = game.time.now + fireRate;
            console.log('firing');
            var bullet = bullets.getFirstDead();
            bullet.reset(barrel.x, barrel.y);

            game.physics.arcade.moveToPointer(bullet, velocity);
            bullet.rotation = game.physics.arcade.angleToPointer(bullet);
        }
    }
};