(function(root){
  var TTT = root.TTT = (root.TTT || {});
  
  var Player = TTT.Player = function(symbol, board) {
    this.symbol = symbol;
    this.board = board;
  }
  
  Player.prototype.takeTurn = function (tile, game) {
    document.getElementById(tile).classList.add(this.symbol);
    this.board.tileMove(tile, this.symbol);
  }
})(this);