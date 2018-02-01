var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, barbarian, speed = 6;
demo.state0 = function () { };
demo.state0.prototype = {
    preload: function () {
        game.load.spritesheet('barbarian','assets/spritesheets/barbarian-walk.png', 155, 220);
        game.load.image('forest','assets/backgrounds/forest.png');
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = "#80ff80";
        console.log('state0');
        addChangeEventListener();
        game.world.setBounds(0,0,1920,1080);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        var treeBG = game.add.sprite(0,0,'forest');
        barbarian = game.add.sprite(centerX, centerY, 'barbarian');
        barbarian.anchor.setTo(0.5, 0.5);
        barbarian.scale.setTo(0.7,0.7);

        game.physics.enable(barbarian);
        barbarian.body.collideWorldBounds = true;

        barbarian.animations.add('walk',[0,1,2,3,4,5,6,7,8,9,10,11,12]);

        game.camera.follow(barbarian);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1080);
    },
    update: function () {
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            barbarian.scale.setTo(0.7,0.7);
            barbarian.x += speed;
            barbarian.animations.play('walk', 14, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            barbarian.scale.setTo(-0.7,0.7);
            barbarian.x -= speed;
            barbarian.animations.play('walk', 14, true);
        }else{
            barbarian.animations.stop('walk');
            barbarian.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            barbarian.y -= speed;
            if(barbarian.y < 805){
                barbarian.y = 805;
            }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            barbarian.y += speed;
            if(barbarian.y > 925){
                barbarian.y = 925;
            }
        }
    }
};

function changeState(i, stateNum) {
    game.state.start('state' + stateNum);
}

function addKeyCallBack(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeEventListener() {
    addKeyCallBack(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallBack(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallBack(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallBack(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallBack(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallBack(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallBack(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallBack(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallBack(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallBack(Phaser.Keyboard.NINE, changeState, 9);
}