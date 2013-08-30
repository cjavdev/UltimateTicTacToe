(function(root){
  var TTT = root.TTT = (root.TTT || {});
  
  var Player = TTT.Player = function(symbol, board) {
    this.symbol = symbol;
    this.board = board;
  }
  
  Player.prototype.takeTurn = function (tile) {
    this.board.tileMove(tile, this.symbol);
  }
})(this);