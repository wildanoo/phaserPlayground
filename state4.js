demo.state4 = function() {};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#ff33cc";
        console.log('state4');
        addChangeEventListener();
    },
    update: function(){}
};