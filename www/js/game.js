(function(root){
  var TTT = root.TTT = (root.TTT || {});
  
  var Game = TTT.Game = function() {
    this.name = "testing game";
    this.player1 = new TTT.Player("X");
    this.player2 = new TTT.Player("O");
  }
  
  Game.prototype.play = function() {
    
  }
  
  Game.prototype.isOver = function() {
    
  }
  
  Game.prototype.isWon = function() {
    
  }
})(this);