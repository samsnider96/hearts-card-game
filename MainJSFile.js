  //initiate 3 instances of the dumbAI
  //initiate 1 instance of the MyPlayer
  //Register these 4 players with a new HeartsMatch object
  //run the match by calling the HeartsMatch object's run() method


    $(document).ready(function () {
      var south = new MyPlayer("Sam");
      var east = new DumbAI("AI1");
      var north = new DumbAI("AI2");
      var west = new DumbAI("AI3");

      var match = new HeartsMatch(north, east, south, west);

      match.run();
      
    });