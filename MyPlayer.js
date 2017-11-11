var MyPlayer = function(name){

  var match = null;
  var position = null;
  var current_game = null;
  var player_key = null;


  var visualCardObject = $("<div class = 'card'></div>");



  this.setupMatch = function (hearts_match, pos) {
    match = hearts_match;
    position = pos;
  }

  this.getName = function () {
    return "Sam";
  }

  this.setupNextGame = function (game_of_hearts, pkey) {
    current_game = game_of_hearts;
    player_key = pkey;

  current_game.registerEventHandler(Hearts.GAME_STARTED_EVENT, function (e) {

//Sets up a variable which holds all the cards    
    var cards = current_game.getHand(player_key).getDealtCards(player_key);

    var thisCard = cards[0]
//grabs the current div that I want to fill
    var thisCardDiv = document.getElementsByClassName('card')[0] // get first DOM element of class 'card'
//puts in the text
    thisCardDiv.innerHTML = thisCard.getRank() + ' ' + thisCard.getSuit() // puts a text representation of card in DOM element


//UNSUCCESFUL TEST / useful copypassta**********************************************
    // $(document).on("click", function(){
      // visualCardObject.append("Appended text");
      // });


    // alert("made it to the start of the game.");
    //console.log()
//UNSUCCESFUL TEST**********************************************

      

    if (e.getPassType() != Hearts.PASS_NONE) {
      var cards = current_game.getHand(player_key).getDealtCards(player_key);
    

          // var chosenCards = [ADD TEXT HERE];
        // current_game.passCards(chosenCards, MUST BE ARRAY OF 3 CARD OBJECTS, player_key);
    }
  });

  current_game.registerEventHandler(Hearts.TRICK_START_EVENT, function (e ) {
    alert("made it to the start of the trick.");

// Use the getStartPos() method of the game event object in order to find out which player is expected to lead this trick. 
// You can compare this value to your player's position in order to detect when your player is expected to play a card to lead the trick (see Passing and Playing Cards below for more). 
// Your player's position was originally reported back to you by the HeartsMatch object when it called your player object's setupMatch() method.
});

//  ADD some stuff here to make sure all 4 people play, and that the myplayer expects a certain one

  current_game.registerEventHandler(Hearts.TRICK_COMPLETE_EVENT, function (e ) {
    alert("trick complete");

// The getTrick() method of the trick complete game event object can be used 
// to retrieve a Trick object that encapsulates all of the relevant information about the 
// trick that was completed

});

// After each trick is complete, the sequence begins again with a TRICK_START_EVENT until 
// all 13 tricks have been completed. After the 13th trick is completed, the game will generate 
// a GAME_OVER_EVENT.

//^^^^^^^I think it does this on its own.




















}
}