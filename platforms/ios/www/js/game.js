(function(root){
  var TTT = root.TTT = (root.TTT || {});
  
  var Game = TTT.Game = function() {
    this.name = "testing game";
    this.player1 = new Player("X");
    this.player2 = new Player("O");
  }
  
  Game.prototype.play = function() {
    
  }
})(this);