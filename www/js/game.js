(function(root){
  var TTT = root.TTT = (root.TTT || {});

  var Game = TTT.Game = function() {
    this.board   = new TTT.Board();
    this.player1 = new TTT.Player("x", this.board);
    this.player2 = new TTT.Player("o", this.board);
    
    this.current_player = this.player1;
  }
  
  Game.tiles = ['tl','t','tr','ml','m','mr','bl','b','br'];
  
  Game.prototype.bindListeners = function (player) {
    var game = this;
    Game.tiles.forEach(function(tile) {
      var tt = function () {
        player.takeTurn(tile, game);        
        game.removeListeners();
        game.play();
      };
      document.getElementById(tile).addEventListener('touchstart', tt, false);
      //document.getElementById(tile).addEventListener('click', tt, false);
    });
  }
  
  Game.prototype.removeListeners = function() {
    Game.tiles.forEach(function(tile) {
      var old_element = document.getElementById(tile);
      var new_element = old_element.cloneNode(true);
      old_element.parentNode.replaceChild(new_element, old_element);
    });
  }
  
  Game.prototype.play = function() {
    console.log("playing");
    if(this.board.isWon()) {
      alert("Winner!");
    } else if(this.board.isOver()) {
      alert("Draw!");
    } else {
      this.alternate_player();
      this.bindListeners(this.current_player);
    }
  }
  
  Game.prototype.alternate_player = function() {
    console.log(this.current_player);
    if(this.current_player == this.player2) {
      this.current_player = this.player1;
    } else {
      this.current_player = this.player2;
    }
  }
})(this);