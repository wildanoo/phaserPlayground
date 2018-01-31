var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, barbarian, speed = 4;
demo.state0 = function () { };
demo.state0.prototype = {
    preload: function () {
        game.load.image('barbarian','assets/sprites/barbarian-big.png');
    },
    create: function () {
        game.stage.backgroundColor = "#80ff80";
        console.log('state0');
        addChangeEventListener();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        barbarian = game.add.sprite(centerX, centerY, 'barbarian');
        barbarian.anchor.setTo(0.5, 0.5);
    },
    update: function () {
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            barbarian.x += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            barbarian.x -= speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            barbarian.y -= speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            barbarian.y += speed;
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