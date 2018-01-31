demo.state3 = function() {};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#00cc99";
        console.log('state3');
        addChangeEventListener();
    },
    update: function(){}
};