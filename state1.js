demo.state1 = function() {};

var cursors, vel = 500, rock, grass;
demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field','assets/tilemaps/correct-map.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grassTiles','assets/tilemaps/grasstile.png');
        game.load.image('rockTiles','assets/tilemaps/rocktile.png');
        game.load.image('barbarian', 'assets/sprites/barbarian-big.png');
    },
    create:function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#DDDDDD';
        addChangeEventListener();

        var map = game.add.tilemap('field');
        map.addTilesetImage('grassTiles');
        map.addTilesetImage('rockTiles');

        grass = map.createLayer('grass');
        rock = map.createLayer('rocks');

        map.setCollisionBetween(3,11,true,'rocks');
        map.setCollision(2,true,'grass');
        
        barbarian = game.add.sprite(200,200,'barbarian');
        barbarian.scale.setTo(0.2, 0.2);
        game.physics.enable(barbarian);

        cursors = game.input.keyboard.createCursorKeys();
    },
    update:function(){
        game.physics.arcade.collide(barbarian, rock, function(){ console.log('hitting rocks')});
        game.physics.arcade.collide(barbarian, grass, function(){ console.log('hitting grass')});
        if(cursors.up.isDown){
            barbarian.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            barbarian.body.velocity.y = vel;
        }else{
            barbarian.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            barbarian.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown){
            barbarian.body.velocity.x = vel;
        }else{
            barbarian.body.velocity.x = 0;
        }
    }
};