$(document).ready(function() {  
  var game = new Game();
  
  $('td').click(function() {         
    var playerMarker = game.updateTurn();
    $(this)
          .text(playerMarker)
          .off('click');
  });

});

// this function is a constructor
function Game() {  
  this.turn = 0;    // this will only be run once

  this.updateTurn = function() {
    var turnMaker = "X";

    if (this.turn % 2 === 0) {
      turnMarker = "X"; 
    } 
    else {
      turnMarker = "O";
    }    

    this.turn = this.turn + 1;

    return turnMarker;
  } 
}


