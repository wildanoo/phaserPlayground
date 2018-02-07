var ref, rootRef, hsText = [], hs = [10,9,8,7,6,5,4,3,2,1];

demo.state9 = function() {};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#cc9900";
        addChangeEventListener();

        ref = {
            apiKey: "AIzaSyBhgtWXDbuFmOoIab3RUH8lo3izxdyvUTA",
            authDomain: "phaserplayground.firebaseapp.com",
            databaseURL: "https://phaserplayground.firebaseio.com",
            projectId: "phaserplayground",
            storageBucket: "phaserplayground.appspot.com",
            messagingSenderId: "927124400808"
          };
        firebase.initializeApp(ref);

        rootRef = firebase.database().ref();

        for (var i = 1; i < 11; i++){
            game.add.text(500, 20 + (i * 90), i + '. ', {fontSize: '40px'}).anchor.setTo(1,0);
        }

        for (var i = 0; i < 10; i++){
            hsText[i] = game.add.text(500, 20 + ((i + 1) * 90), hs[i], {fontSize: '40px'});
        }

        var updateHStext = this.updateHStext;
        rootRef.on('value', function(snapshot){
            console.log(this);
            updateHStext(snapshot.val().hs);
        });
    },
    updateHStext: function(hs){
        for (var i = 0; i < 10; i++){
            hsText[i].text = hs[i];
        }
    }
};