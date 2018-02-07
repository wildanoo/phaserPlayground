var text;

WebFontConfig = {
	google: {families: ['Candal','Montserrat']}
};

demo.state8 = function() {};
demo.state8.prototype = {
    preload: function(){
    	game.load.script('webfont','//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    },
    create: function(){
        game.stage.backgroundColor = "#ff9900";
        addChangeEventListener();

        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

        this.spellOutText(100,100,1000,text, 30, 40,'#fff','Candal');
        this.spellOutText(100,500,1000,text, 30, 40,'#000','Montserrat');
    },
    spellOutText: function(x,y,width,text,fontSize,speed,fill,font){
    	var sentence = game.add.text(x,y,'', {fontSize: fontSize + 'px', fill: fill, font:font});
    	var currentLine = game.add.text(10,10,'',{fontSize: fontSize + 'px', font:font});
    	currentLine.alpha = 0;
    	var loop = game.time.events.loop(speed,addChar);

    	var index = 0;

    	function addChar(){
    		sentence.text += text[index];
    		currentLine.text += text[index];

    		if(currentLine.width > width && text[index] == ' '){
    			sentence.text += '\n';
    			currentLine.text = '';
    		}
    		if(index >= text.length - 1){
    			game.time.events.remove(loop);
    			console.log('stop');
    		}

    		index++;
    	}
    },
};