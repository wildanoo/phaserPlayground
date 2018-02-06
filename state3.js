demo.state3 = function() {};
demo.state3.prototype = {
    preload: function(){
        game.load.image('button1','assets/sprites/button-1.png');
        game.load.image('button2','assets/sprites/button-2.png');
        game.load.image('button3','assets/sprites/button-3.png');
        game.load.audio('pops','assets/sounds/buttonPops.mp3');
    },
    create: function(){
        game.stage.backgroundColor = "#00cc99";
        addChangeEventListener();

        sound = game.add.audio('pops');
        sound.addMarker('low', 1.5 , 1);
        sound.addMarker('high', 4.5 , 1);

        var b1 = game.add.button(100,100, 'button1', function(){
            changeState(null,1);
        });
        var b2 = game.add.button(200,200, 'button2', function(){
            changeState(null,2);
        });
        var b3 = game.add.button(300,300, 'button3', function(){
            // changeState(null,3);
        });

        b1.onInputDown.add(this.tint, b1);
        b2.onInputDown.add(this.tint, b2);
        b3.onInputDown.add(this.tint, b3);

        b1.onInputUp.add(this.untint, b1);
        b2.onInputUp.add(this.untint, b2);
        b3.onInputUp.add(this.untint, b3);

    },
    tint: function(){
        this.tint = 0xbbbbbb;
        sound.stop();
        sound.play('low');
    },
    untint: function(){
        this.tint = 0xffffff;
        sound.stop();
        sound.play('high');
    }
};