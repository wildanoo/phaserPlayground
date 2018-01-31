demo.state7 = function() {};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#00cc00";
        console.log('state7');
        addChangeEventListener();
    },
    update: function(){}
};