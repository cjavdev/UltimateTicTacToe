(function(root){
  var TTT = root.TTT = (root.TTT || {});
  
  var Game = TTT.Game = function() {
    this.board   = new TTT.Board();
    this.player1 = new TTT.Player("X", board);
    this.player2 = new TTT.Player("O", board);
    
    this.current_player = player1;
  }
  
  Game.prototype.bindListeners = function (callback) {
    forEach(['tl','t','rl','ml','m','mr','bl','b','br'], function(tile) {
      document.getElementById(tile).addEventListener('touchstart', function () {
        alert(tile);
        callback(tile);
      }, false);
    });
  }
  
  Game.prototype.play = function() {
    if(this.board.isWon()) {
      alert("Winner!");
    } else if(this.board.isOver()) {
      alert("Draw!");
    } else {
      this.alternate_player();
      this.bindListeners(this.current_player.takeTurn);
    }
  }
  
  Game.prototype.alternate_player = function() {
    if(this.current_player == this.player2) {
      this.current_player = this.player1;
    } else {
      this.current_player = this.player2;
    }
  }
})(this);