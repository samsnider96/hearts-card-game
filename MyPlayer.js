//Bugs found;
    //bad one - need to recheck this - sometimes prints to middle box even when card isn't accepted, in later rounds
    //bad one - scoreboard is NOT working
    //bad one - clicking on the dashes puts a card to the middle box
    //Possibly one - if you click 2 options quickly on your turn, they both populate the textbox



//To Do:


//read instructions carefully to see if you have all text alerts in there.  Also make sure "alert() works for that."

//make it more clear how to click / select the cards

//check for bugs based on the rules of the game, etc

//check that the cards are rendering correctly and carrying over through tricks correctly

// --test the scoreboard

//Optional:
  //Clean up and consolidate
      //lots of helper functions
      //consolidate those 2 almost identicle huge blocks
  //hover CSS
  //playable CSS
  //add favicon


var MyPlayer = function(name){

  var match = null;
  var position = null;
  var current_game = null;
  var player_key = null;


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

//display cards
    printEverythingLoop(cards, cards.length);
    deleteExtrasLoop(cards, cards.length);



//if you have to pass at the beginning of the game
    if (e.getPassType() != Hearts.PASS_NONE) {    


      alert('choose 3 cards to pass.  Click on the card to chose it.');
//add the clicked cards to the array
      var chosenCards = [];


        $( document.getElementById('southCard1') ).click(function() {
          chosenCards.push(cards[0]);
        if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard2') ).click(function() {
          chosenCards.push(cards[1]);
        if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard3') ).click(function() {
          chosenCards.push(cards[2]);
        if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard4') ).click(function() {
          chosenCards.push(cards[3]);
        if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard5') ).click(function() {
          chosenCards.push(cards[4]);
        if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard6') ).click(function() {
          chosenCards.push(cards[5]);
         if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard7') ).click(function() {
          chosenCards.push(cards[6]);
        if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard8') ).click(function() {
          chosenCards.push(cards[7]);
        if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard9') ).click(function() {
          chosenCards.push(cards[8]);
        if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard10') ).click(function() {
          chosenCards.push(cards[9]);
        if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        }
        });
        $( document.getElementById('southCard11') ).click(function() {
          chosenCards.push(cards[10]);
        if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        }
        });      
        $( document.getElementById('southCard12') ).click(function() {
          chosenCards.push(cards[11]);
        if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        } 
        });
        $( document.getElementById('southCard13') ).click(function() {
          chosenCards.push(cards[12]);
        if(chosenCards.length == 3){
          current_game.passCards(chosenCards, player_key);
        }
        });
      

    }

  });












  current_game.registerEventHandler(Hearts.TRICK_START_EVENT, function (e ) {
    alert("made it to the start of the trick.");

//create a var which is the current hand of unplayed cards
    var unplayedCards = current_game.getHand(player_key).getUnplayedCards(player_key);

//create a var which is the array of playable cards
    var playableCards = current_game.getHand(player_key).getPlayableCards(player_key);

//display cards
    printEverythingLoop(unplayedCards, unplayedCards.length);
    deleteExtrasLoop(unplayedCards, unplayedCards.length);



//Logic to tell if myplayer is starting the trick
    if(e.getStartPos() == position){
      alert('your starting the game, its your turn!');

//Loop which labels cards as playable or not
    //TO DO:  Use CSS instead??
      for (i = 0; i < unplayedCards.length; i++) { 
        if( playableCards.includes(unplayedCards[i]) ){
          var thisCardDiv = document.getElementsByClassName('southCard')[i];
          thisCardDiv.innerHTML += '<br>(playable)'
        }
        else if( playableCards.includes(unplayedCards[i]) == false ){
          var thisCardDiv = document.getElementsByClassName('southCard')[i];
          thisCardDiv.innerHTML += '<br>(NOT<br>playable)'
        }
      }  



//Event listeners for all 13 cards.  Listen for click, then play the card.
        $( document.getElementById('southCard1') ).click(function() {
          var chosenCard = unplayedCards[0];     //asign the clicked card to a temp variable
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);   //play the card
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; // get first DOM element of class 'middleCard'...grabs the current div that I want to fill
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();       //puts in the text
          }
        });
        $( document.getElementById('southCard2') ).click(function() {
          var chosenCard = unplayedCards[1];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString(); 
          }
        });
        $( document.getElementById('southCard3') ).click(function() {
          var chosenCard = unplayedCards[2];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString(); 
          }
        });
        $( document.getElementById('southCard4') ).click(function() {
          var chosenCard = unplayedCards[3];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString(); 
          }
        });
        $( document.getElementById('southCard5') ).click(function() {
          var chosenCard = unplayedCards[4];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString(); 
          }
        });
        $( document.getElementById('southCard6') ).click(function() {
          var chosenCard = unplayedCards[5];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString(); 
          }
        });
        $( document.getElementById('southCard7') ).click(function() {
          var chosenCard = unplayedCards[6];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString(); 
          }
        });
        $( document.getElementById('southCard8') ).click(function() {
          var chosenCard = unplayedCards[7];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString(); 
          }
        });
        $( document.getElementById('southCard9') ).click(function() {
          var chosenCard = unplayedCards[8];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString(); 
          }
        });
        $( document.getElementById('southCard10') ).click(function() {
           var chosenCard = unplayedCards[9];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString(); 
          }
        });
        $( document.getElementById('southCard11') ).click(function() {
          var chosenCard = unplayedCards[10];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString(); 
          }
        });      
        $( document.getElementById('southCard12') ).click(function() {
          var chosenCard = unplayedCards[11];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString(); 
          }
        });
        $( document.getElementById('southCard13') ).click(function() {
          var chosenCard = unplayedCards[12];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString(); 
          }
        });



    }


//this block displays the card that the DUMBAI plays.
    else{

      // alert('someone else is starting the game.');
          

      current_game.registerEventHandler(Hearts.CARD_PLAYED_EVENT, function (f ) {


        if(f.getPosition() == Hearts.WEST){

          // current_game.registerEventHandler(Hearts.CARD_PLAYED_EVENT, function (e ) {

            var thisCardDiv = document.getElementsByClassName('middleCard')[0]; 
            thisCardDiv.innerHTML = 'WEST PLAYED:' + '<br>' + f.getCard().toString(); 
          // });
        }
        else if(f.getPosition() == Hearts.NORTH){
          // current_game.registerEventHandler(Hearts.CARD_PLAYED_EVENT, function (e ) {

            var thisCardDiv = document.getElementsByClassName('middleCard')[1]; 
            thisCardDiv.innerHTML = 'NORTH PLAYED:' + '<br>' + f.getCard().toString(); 
          // });
        }
        else if(f.getPosition() == Hearts.EAST){
          // current_game.registerEventHandler(Hearts.CARD_PLAYED_EVENT, function (e ) {
            var thisCardDiv = document.getElementsByClassName('middleCard')[3]; 
            thisCardDiv.innerHTML = 'EAST PLAYED:' + '<br>' + f.getCard().toString(); 
          // });
        }
    });
    }
});

















  current_game.registerEventHandler(Hearts.TRICK_CONTINUE_EVENT, function (e) {

//if it's south's turn
      if (e.getNextPos() == position) {

        alert('It is now your turn.');


//create a var which is the current hand of unplayed cards
        var unplayedCards = current_game.getHand(player_key).getUnplayedCards(player_key);

//create a var which is the array of playable cards
        var playableCards = current_game.getHand(player_key).getPlayableCards(player_key);


//display cards
        printEverythingLoop(unplayedCards, unplayedCards.lenth);
        deleteExtrasLoop(unplayedCards, unplayedCards.length);


//Loop which labels cards as playable or not
    //TO DO:  Use CSS instead??

        for (i = 0; i < unplayedCards.length; i++) { 
          if( playableCards.includes(unplayedCards[i]) ){
            var thisCardDiv = document.getElementsByClassName('southCard')[i];
            thisCardDiv.innerHTML += '<br>(playable)'
          }
          else if( playableCards.includes(unplayedCards[i]) == false ){
            var thisCardDiv = document.getElementsByClassName('southCard')[i];
            thisCardDiv.innerHTML += '<br>(NOT<br>playable)'
          }
        }  


//Event listeners for all 13 cards.  Listen for click, then play the card.
        $( document.getElementById('southCard1') ).click(function() {
          var chosenCard = unplayedCards[0];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2];
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();
          }
        });
        $( document.getElementById('southCard2') ).click(function() {
          var chosenCard = unplayedCards[1];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();
          } 
        });
        $( document.getElementById('southCard3') ).click(function() {
          var chosenCard = unplayedCards[2];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();
          }
        });
        $( document.getElementById('southCard4') ).click(function() {
          var chosenCard = unplayedCards[3];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();
          }
        });
        $( document.getElementById('southCard5') ).click(function() {
          var chosenCard = unplayedCards[4];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();
          }
        });
        $( document.getElementById('southCard6') ).click(function() {
          var chosenCard = unplayedCards[5];
          if(playableCards.includes(chosenCard)){
           current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();
          }
        });
        $( document.getElementById('southCard7') ).click(function() {
          var chosenCard = unplayedCards[6];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();
          }
        });
        $( document.getElementById('southCard8') ).click(function() {
          var chosenCard = unplayedCards[7];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();
          }
        });
        $( document.getElementById('southCard9') ).click(function() {
          var chosenCard = unplayedCards[8];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();
          }
        });
        $( document.getElementById('southCard10') ).click(function() {
          var chosenCard = unplayedCards[9];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();
          }
        });
        $( document.getElementById('southCard11') ).click(function() {
          var chosenCard = unplayedCards[10];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();
          }
        });      
        $( document.getElementById('southCard12') ).click(function() {
          var chosenCard = unplayedCards[11];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();
          }
        });
        $( document.getElementById('southCard13') ).click(function() {
          var chosenCard = unplayedCards[12];
          if(playableCards.includes(chosenCard)){
            current_game.playCard(chosenCard, player_key);
            var thisCardDiv = document.getElementsByClassName('middleCard')[2]; 
            thisCardDiv.innerHTML = 'SOUTH PLAYED:' + '<br>' + chosenCard.toString();       
          }
        });


      }



    else{
//this block displays the card that the DUMBAI plays.

//The problem is because you say "f.getCard" on every one, I think

//uSE getPosition() from the card played event!!!!

      current_game.registerEventHandler(Hearts.CARD_PLAYED_EVENT, function (f ) {

        if(f.getPosition() == Hearts.WEST){
          console.log("ONE");
          // current_game.registerEventHandler(Hearts.CARD_PLAYED_EVENT, function (e ) {

            var thisCardDiv = document.getElementsByClassName('middleCard')[0]; 
            thisCardDiv.innerHTML = 'WEST PLAYED:' + '<br>' + f.getCard().toString(); 
          // });
        }
        else if(f.getPosition() == Hearts.NORTH){
          console.log("TWO");

          // current_game.registerEventHandler(Hearts.CARD_PLAYED_EVENT, function (e ) {

            var thisCardDiv = document.getElementsByClassName('middleCard')[1]; 
            thisCardDiv.innerHTML = 'NORTH PLAYED:' + '<br>' + f.getCard().toString();           
          // });

        }
        else if(f.getPosition() == Hearts.EAST){
                    console.log("THREE");

          // current_game.registerEventHandler(Hearts.CARD_PLAYED_EVENT, function (e ) {

            var thisCardDiv = document.getElementsByClassName('middleCard')[3]; 
            thisCardDiv.innerHTML = 'EAST PLAYED:' + '<br>' + f.getCard().toString(); 
        
          // });
        }
      });
    }
 });




//  ADD some stuff here to make sure all 4 people play(????)

















  current_game.registerEventHandler(Hearts.TRICK_COMPLETE_EVENT, function (e ) {

//clear the middle boxes
    var westCardDiv = document.getElementsByClassName('middleCard')[0]; 
    westCardDiv.innerHTML = "WEST PLAYED:"; 
    var northCardDiv = document.getElementsByClassName('middleCard')[1]; 
    northCardDiv.innerHTML = "NORTH PLAYED:"; 
    var eastCardDiv = document.getElementsByClassName('middleCard')[3]; 
    eastCardDiv.innerHTML = "EAST PLAYED:"; 
    var southCardDiv = document.getElementsByClassName('middleCard')[2]; 
    southCardDiv.innerHTML = "SOUTH PLAYED:"; 


    var trick = e.getTrick() // get Trick object from event
    var winner = trick.getWinner() // get Winner from Trick object
    alert(winner + ' won the trick!') // log who won the trick in console

// The getTrick() method of the trick complete game event object can be used 
// to retrieve a Trick object that encapsulates all of the relevant information about the 
// trick that was completed

  });

// After each trick is complete, the sequence begins again with a TRICK_START_EVENT until 
// all 13 tricks have been completed. After the 13th trick is completed, the game will generate 
// a GAME_OVER_EVENT.


  current_game.registerEventHandler(Hearts.GAME_OVER_EVENT, function (e ) {

    // scoreboardArray = e.getScoreboard(); 

//sets the scoreboard values
    var scoreBoardDiv = document.getElementsByClassName('northScore'); 
    scoreBoardDiv.innerHTML = 'North: ' + current_game.getScore(Hearts.NORTH) + ' points.';
    var scoreBoardDiv = document.getElementsByClassName('westScore'); 
    scoreBoardDiv.innerHTML = 'West:: ' + current_game.getScore(Hearts.WEST) + ' points.';
    var scoreBoardDiv = document.getElementsByClassName('southScore'); 
    scoreBoardDiv.innerHTML = 'South: ' + current_game.getScore(player_key) + ' points.';
    var scoreBoardDiv = document.getElementsByClassName('eastScore'); 
    scoreBoardDiv.innerHTML = 'East: ' + current_game.getScore(Hearts.EAST) + ' points.'; 

  });














// *************************************** HELPER METHODS ***************************************


  printEverythingLoop = function(cards, howMany){


//PRINT THE CARDS TO THEIR DIVS LOOP
    for (i = 0; i < howMany; i++) { 

    
  // //Sets up a variable which holds all the cards    
  //     var cards = current_game.getHand(player_key).getDealtCards(player_key);

      var thisCard = cards[i]
  //grabs the current div that I want to fill
      var thisCardDiv = document.getElementsByClassName('southCard')[i] // get first DOM element of class 'southCard'
  //puts in the text
      thisCardDiv.innerHTML = thisCard.toString() 

    }
  }





  deleteExtrasLoop = function(cards, howMany){
    difference = 13 - howMany
    for (i = 0; i < difference; i++) { 
      var thisCard = cards[howMany + 1]
      var thisCardDiv = document.getElementsByClassName('southCard')[i+howMany] // get first DOM element of class 'southCard'
      thisCardDiv.innerHTML = "<span class='tempGrey'>////////////////////<br>////////////////////<br>//////(already<br>played)//////////<br>////////////////////<br></span>" 
    }
  }











}
}