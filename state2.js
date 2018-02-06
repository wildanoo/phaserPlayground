var barrel, velocity = 1000, nextFire = 0, fireRate = 200, enemy,bullet,
enemyGroup;

demo.state2 = function () { };
demo.state2.prototype = {
    preload: function () {
        game.load.image('base', 'assets/sprites/base.png');
        game.load.image('barrel', 'assets/sprites/barrel.png');
        game.load.image('bullet', 'assets/sprites/bullet.png');
        game.load.image('barbarian','assets/sprites/barbarian-big.png');
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

        enemy = game.add.sprite(100,200,'barbarian');
        game.physics.enable(enemy);

        enemyGroup = game.add.group();
        enemyGroup.enableBody = true;
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;

        for (var i = 0; i < 3; i++){
            enemyGroup.create(1300,350 * i + 100, 'barbarian');
        }
        enemyGroup.setAll('anchor.y',0.5);
        enemyGroup.setAll('anchor.x',0.5);
        // enemyGroup.setAll('scale.y',0.7);
        enemyGroup.setAll('scale.x',0.7);
    },
    update: function () {
        barrel.rotation = game.physics.arcade.angleToPointer(barrel);
        if (game.input.activePointer.isDown) {
            this.fire();
        }

        game.physics.arcade.overlap(bullets,enemy,this.hitEnemy);
        game.physics.arcade.overlap(bullets,enemyGroup, this.hitGroup);
    },
    fire: function () {
        if(game.time.now > nextFire){
            nextFire = game.time.now + fireRate;
            console.log('firing');
            bullet = bullets.getFirstDead();
            bullet.reset(barrel.x, barrel.y);

            game.physics.arcade.moveToPointer(bullet, velocity);
            bullet.rotation = game.physics.arcade.angleToPointer(bullet);
        }
    },
    hitEnemy: function(){
        console.log('hit the enemy');
        enemy.kill();
        bullet.kill();
    },
    hitGroup: function(b,e){
        b.kill();
        e.kill();
    }
};