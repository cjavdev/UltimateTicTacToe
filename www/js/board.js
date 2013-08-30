(function(root){
  var TTT = root.TTT = (root.TTT || {});
  
  var Board = TTT.Board = function() {
      this.board = [[null, null, null], [null, null, null], [null, null, null]];
  }
  
  Board.prototype.validMove = function(x, y) {
      return x >= 0 && y >= 0 && x < 3 && y < 3 && this.board[x][y] == null;
  }
  
  Board.prototype.move = function(x, y, symbol) {
      if(this.validMove(x, y) == true) { 
          this.board[x][y] = symbol;
      }
  }
  
  Board.prototype.isWon = function () {
      var b = this.board;
      row1 = b[0][0] == b[0][1] && b[0][1] == b[0][2] && b[0][0] != null;
      row2 = b[1][0] == b[1][1] && b[1][1] == b[1][2] && b[1][0] != null;
      row3 = b[2][0] == b[2][1] && b[2][1] == b[2][2] && b[2][0] != null;
      col1 = b[0][0] == b[1][0] && b[1][0] == b[2][0] && b[0][0] != null;
      col2 = b[0][1] == b[1][1] && b[1][1] == b[2][1] && b[0][1] != null;
      col3 = b[0][2] == b[1][2] && b[1][2] == b[2][2] && b[0][2] != null;
      h1   = b[0][0] == b[1][1] && b[1][1] == b[2][2] && b[0][0] != null;
      h2   = b[0][2] == b[1][1] && b[1][1] == b[2][0] && b[0][2] != null;
      return row1 || row2 || row3 || col1 || col2 || col3 || h1 || h2;
  }
})(this);