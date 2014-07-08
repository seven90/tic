// WINDOW / GLOBAL

$(document).ready(function() {  
  // READY CALLBACK SCOPE

  var game = new Game();
  
  $( "#new" ).click(function() {
    // CLICK CALLBACK SCOPE
    game = new Game();
    $('td').empty().on('click', function() {         
    var playerMarker = game.updateTurn();
    $(this)
          .text(playerMarker)
          .off('click');
    if (game.checkWin() === true) {
      alert("You Win, Press to Play again");
      }
  } )
  });

  $('td').click(function() {         
    var playerMarker = game.updateTurn();
    $(this)
          .text(playerMarker)
          .off('click');
    if (game.checkWin() === true) {
      alert("You Win, Press to Play again");
      }
  });

});

// this function is a constructor
function Game() {  
  this.turn = 0;    // this will only be run once

  this.updateTurn = function() {
    var turnMaker = "X";

    if (this.turn % 2 === 0) {
      turnMarker = "X";
      this.turn = this.turn + 1; 
    } 
    else {
      turnMarker = "O";
      this.turn = this.turn - 1;
    }    
    return this.turn;
  } 

  this.checkWin = function() {
    var row1 = (parseInt($('#1').html()) + parseInt($('#2').html()) + parseInt($('#3').html()));
    var row2 = (parseInt($('#4').html()) + parseInt($('#5').html()) + parseInt($('#6').html()));
    var row3 = (parseInt($('#7').html()) + parseInt($('#8').html()) + parseInt($('#9').html()));
    var col1 = (parseInt($('#1').html()) + parseInt($('#4').html()) + parseInt($('#7').html())); 
    var col2 = (parseInt($('#2').html()) + parseInt($('#5').html()) + parseInt($('#8').html()));
    var col3 = (parseInt($('#3').html()) + parseInt($('#6').html()) + parseInt($('#9').html()));
    var dia1 = (parseInt($('#1').html()) + parseInt($('#5').html()) + parseInt($('#9').html()));
    var dia2 = (parseInt($('#3').html()) + parseInt($('#5').html()) + parseInt($('#7').html()));
    console.log(row2)
     if ((row1 === 0) || (row1 === 3) || (row2 === 0) || (row2 === 3) || (row3 === 0) || (row3 === 3)
      || (col1 === 0) || (col1 === 3) || (col2 === 0) || (col2 === 3)|| (col3 === 0) || (col3 === 3)
      || (dia1 === 0) || (dia1 === 3) || (dia2 === 0) || (dia2 === 3)
      ) return true;
  }
}


