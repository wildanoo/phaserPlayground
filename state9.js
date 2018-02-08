var fbObj, ref, hsText = [], hs = [];

demo.state9 = function() {};
demo.state9.prototype = {
    preload: function(){
    	game.load.image('button1', 'assets/sprites/button-1.png');
    	game.load.image('button2', 'assets/sprites/button-2.png');
    },
    create: function(){
        game.stage.backgroundColor = "#cc9900";
        addChangeEventListener();

        ref = firebase.database().ref();

        for (var i = 1; i < 11; i++){
            game.add.text(500, 20 + (i * 90), i + '. ', {fontSize: '40px'}).anchor.setTo(1,0);
        }

        for (var i = 0; i < 10; i++){
            hsText[i] = game.add.text(500, 20 + ((i + 1) * 90), hs[i], {fontSize: '40px'});
        }

        var updateHStext = this.updateHStext;
        ref.on('value', function(snapshot){
            console.log(this);
            fbObj = snapshot.val();
            updateHStext(fbObj.hs);
        });

        game.add.button(800,400,'button1',function(){
        	var score = Math.round(Math.random() * 100);
        	fbObj.hs.push(score);
        	fbObj.hs = fbObj.hs.sort(function(a,b){
        		return b - a;
        	}).slice(0,10);
        	ref.set(fbObj);
        	console.log(score);
        });
        game.add.button(800,500,'button2',function(){
        	ref.set({hs: [0,0,0,0,0,0,0,0,0,0]});
        });
    },
    updateHStext: function(hs){
        for (var i = 0; i < 10; i++){
            hsText[i].text = hs[i];
        }
    }
};