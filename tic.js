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
          .text(playerMarker.turnMark)
          .attr('number', playerMarker.num)
          .off('click')
          .off('hover');
    if (game.checkWin() === true) {
      alert("You Win, Press to Play again");
      }
    else if (playerMarker.count === 9) {
      alert ("It's a Tie, Press to Play again")
    }
  });

});

// this function is a constructor
function Game() {  
  this.turn = 0;    // this will only be run once
  var count = 0;
  this.updateTurn = function() {
    var turnMaker = "X";

    if (this.turn % 2 === 0) {
      turnMarker = "X";
      this.turn = this.turn + 1;
      count = count + 1; 
    } 
    else {
      turnMarker = "O";
      this.turn = this.turn - 1;
      count = count + 1;
    }    

    var turnInfo = ({turnMark: turnMarker, num: this.turn, count: count})
    return turnInfo;
  } 

  this.checkWin = function() {
    var row1 = (parseInt($('#1').attr('number')) + parseInt($('#2').attr('number')) + parseInt($('#3').attr('number')));
    var row2 = (parseInt($('#4').attr('number')) + parseInt($('#5').attr('number')) + parseInt($('#6').attr('number')));
    var row3 = (parseInt($('#7').attr('number')) + parseInt($('#8').attr('number')) + parseInt($('#9').attr('number')));
    var col1 = (parseInt($('#1').attr('number')) + parseInt($('#4').attr('number')) + parseInt($('#7').attr('number'))); 
    var col2 = (parseInt($('#2').attr('number')) + parseInt($('#5').attr('number')) + parseInt($('#8').attr('number')));
    var col3 = (parseInt($('#3').attr('number')) + parseInt($('#6').attr('number')) + parseInt($('#9').attr('number')));
    var dia1 = (parseInt($('#1').attr('number')) + parseInt($('#5').attr('number')) + parseInt($('#9').attr('number')));
    var dia2 = (parseInt($('#3').attr('number')) + parseInt($('#5').attr('number')) + parseInt($('#7').attr('number')));
    console.log(row1)
     if ((row1 === 0) || (row1 === 3) || (row2 === 0) || (row2 === 3) || (row3 === 0) || (row3 === 3)
      || (col1 === 0) || (col1 === 3) || (col2 === 0) || (col2 === 3)|| (col3 === 0) || (col3 === 3)
      || (dia1 === 0) || (dia1 === 3) || (dia2 === 0) || (dia2 === 3)
      ) return true;
  }
}


