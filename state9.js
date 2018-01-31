demo.state9 = function() {};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#cc9900";
        console.log('state9');
        addChangeEventListener();
    },
    update: function(){}
};