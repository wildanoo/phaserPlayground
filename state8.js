demo.state8 = function() {};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#ff9900";
        console.log('state8');
        addChangeEventListener();
    },
    update: function(){}
};