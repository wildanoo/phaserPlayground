var a1, a2, a3, a4, a5, i;

demo.state4 = function() {};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#c8f442";
        addChangeEventListener();

        a1 = game.add.sprite(50,100,'barbarian');
        a2 = game.add.sprite(350,100,'barbarian');
        a3 = game.add.sprite(650,100,'barbarian');
        a4 = game.add.sprite(950,100,'barbarian');
        a5 = game.add.sprite(1250,100,'barbarian');

        game.add.tween(a1).to({y: +700}, 2000, 'Power2', true);
        i = game.add.tween(a2).to({x:100, y:0}, 1000, 'Elastic.easeOut');
        game.add.tween(a3).from({y: 1000}, 1500, 'Circ.easeOut', true);
        game.add.tween(a4.anchor).to({x:1}, 1000, 'Linear',true, 1000,false, true).loop(true);
        game.add.tween(a5).to({alpha:0}, 1000, 'Bounce', true);
    },
    update: function(){}
};