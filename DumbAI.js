var DumbAI = function (name) {

    var match = null;
    var position = null;
    var current_game = null;
    var player_key = null;

    this.setupMatch = function (hearts_match, pos) {
  match = hearts_match;
  position = pos;
    }

    this.getName = function () {
  return name;
    }

    this.setupNextGame = function (game_of_hearts, pkey) {
  current_game = game_of_hearts;
  player_key = pkey;

  current_game.registerEventHandler(Hearts.GAME_STARTED_EVENT, function (e) {



      if (e.getPassType() != Hearts.PASS_NONE) {
    var cards = current_game.getHand(player_key).getDealtCards(player_key);
    
    current_game.passCards(cards.splice(0,3), player_key);
      }
    // printEverythingLoop(cards, 'northCard');
    // printEverythingLoop(cards, 'eastCard');
    // printEverythingLoop(cards, 'westCard');
  });



  current_game.registerEventHandler(Hearts.TRICK_START_EVENT, function (e) {
      if (e.getStartPos() == position) {
    var playable_cards = current_game.getHand(player_key).getPlayableCards(player_key);
    current_game.playCard(playable_cards[0], player_key);
      }
  });

  current_game.registerEventHandler(Hearts.TRICK_CONTINUE_EVENT, function (e) {
      if (e.getNextPos() == position) {
    var playable_cards = current_game.getHand(player_key).getPlayableCards(player_key);
    current_game.playCard(playable_cards[0], player_key);
      }
  });
  

//   printEverythingLoop = function(cards, direction){

//     // if (direction == 'north'){
//     //   direction = 'northCard';
//     // }
//     // if (direction == 'east'){
//     //   direction = 'eastCard';
//     // }
//     // if (direction == 'north'){
//     //   direction = 'westCard';
//     // }


// //PRINT THE CARDS TO THEIR DIVS LOOP
//     for (i = 0; i < 13; i++) { 

    
//   // //Sets up a variable which holds all the cards    
//   //     var cards = current_game.getHand(player_key).getDealtCards(player_key);

//       var thisCard = cards[i]
//   //grabs the current div that I want to fill
//       var thisCardDiv = document.getElementsByClassName(direction)[i] // get first DOM element of class 'card'
//   //puts in the text
//       thisCardDiv.innerHTML = thisCard.toString() // puts a text representation of card in DOM element

//     }
//     }





}
}