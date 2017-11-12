var MyPlayer = function(name){

  var match = null;
  var position = null;
  var current_game = null;
  var player_key = null;


  var visualCardObject = $("<div class = 'southCard'></div>");



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

//Creates variable which is the cards first passed to you
    var cards = current_game.getHand(player_key).getDealtCards(player_key);

    // alert('1');
    alert(current_game.getStatus());

    printEverythingLoop(cards);


//if you have to pass at the beginning of the game
    if (e.getPassType() != Hearts.PASS_NONE) {    


//add the clicked cards to the array
      var chosenCards = [];


      // while( current_game.getStatus() == 1  ){

        $( document.getElementById('southCard1') ).click(function() {
          chosenCards.push(cards[0]);
          // console.log('hello');
        if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard2') ).click(function() {
          chosenCards.push(cards[1]);
        if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard3') ).click(function() {
          chosenCards.push(cards[2]);
        if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard4') ).click(function() {
          chosenCards.push(cards[3]);
        if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard5') ).click(function() {
          chosenCards.push(cards[4]);
        if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard6') ).click(function() {
          chosenCards.push(cards[5]);
         if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard7') ).click(function() {
          chosenCards.push(cards[6]);
        if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard8') ).click(function() {
          chosenCards.push(cards[7]);
        if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard9') ).click(function() {
          chosenCards.push(cards[8]);
        if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard10') ).click(function() {
          chosenCards.push(cards[9]);
        if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard11') ).click(function() {
          chosenCards.push(cards[10]);
        if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        }
        });      
        $( document.getElementById('southCard12') ).click(function() {
          chosenCards.push(cards[11]);
        if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        } 
        });
        $( document.getElementById('southCard13') ).click(function() {
          chosenCards.push(cards[12]);
        if(chosenCards.length == 3){
          console.log('IT WORKS');
          current_game.passCards(chosenCards, player_key);
        }
        });
      
      // console.log(chosenCards);



      // $( document.getElementsByClassName('southCard') ).click(function() {
      //   // console.log('success');
      //   // console.log(cards[0]);
      // });        

//pass the cards
      // current_game.passCards(chosenCards, player_key);
    }


  });

  current_game.registerEventHandler(Hearts.TRICK_START_EVENT, function (e ) {
    alert("made it to the start of the trick.");

//create a var which is the current hand of unplayed cards
    var unplayedCards = current_game.getHand(player_key).getUnplayedCards(player_key);
    printEverythingLoop(unplayedCards);

//create a var which is the array of playable cards
    var unplayedCards = current_game.getHand(player_key).getPlayableCards(player_key);
//INDICATE THAT THESE CARDS ARE THE PLAYABLE ONES


//play the card
    // current_game.playCard(chosenCard, player_key);

//Logic to tell if myplayer is starting the trick, print that it's the user's turn.
    if(current_game.getStartPos() == player_key){
      // console.log('yes');
      alert('its your turn!');
    }
    else{
      console.log('no');

    }

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

  printEverythingLoop = function(cards){


//PRINT THE CARDS TO THEIR DIVS LOOP
    for (i = 0; i < 13; i++) { 

    
  // //Sets up a variable which holds all the cards    
  //     var cards = current_game.getHand(player_key).getDealtCards(player_key);

      var thisCard = cards[i]
  //grabs the current div that I want to fill
      var thisCardDiv = document.getElementsByClassName('southCard')[i] // get first DOM element of class 'card'
  //puts in the text
      thisCardDiv.innerHTML = thisCard.toString() // puts a text representation of card in DOM element

    }
  }

















}
}