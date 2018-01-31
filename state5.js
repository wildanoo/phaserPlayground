demo.state5 = function() {};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#3333cc";
        console.log('state5');
        addChangeEventListener();
    },
    update: function(){}
};