demo.state2 = function() {};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "##0099ff";
        console.log('state2');
        addChangeEventListener();
    },
    update: function(){}
};