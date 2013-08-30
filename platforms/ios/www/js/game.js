(function(root){
  var TTT = root.TTT = (root.TTT || {});

  var Game = TTT.Game = function() {
    this.board   = new TTT.Board();
    this.player1 = new TTT.Player("x", this.board);
    this.player2 = new TTT.Player("o", this.board);
    
    this.current_player = this.player1;
  }
  
  // DOM ids of the .tile elements
  Game.tiles = ['tl','t','tr','ml','m','mr','bl','b','br'];
  
  Game.prototype.play = function() {
    var game = this;
    console.log(game);
    if(this.board.isWon()) {
      alert("Winner!");
      setTimeout(function() {
          game.resetBoard();
          
          game.play();
      }, 2000);
    } else if(this.board.isOver()) {
      alert("Draw!");
    } else {
      this.alternate_player();
      this.bindListeners(this.current_player);
    }
  }
  
  Game.prototype.resetBoard = function() {
      Game.tiles.forEach(function (tile) {
          document.getElementById(tile).classList.remove("o");
          document.getElementById(tile).classList.remove("x");
      });
      this.board.reset();
  }
  
  Game.prototype.alternate_player = function() {
    if(this.current_player == this.player2) {
      this.current_player = this.player1;
    } else {
      this.current_player = this.player2;
    }
  }
  
  //bind and remove listeners manually to keep pure js
  Game.prototype.bindListeners = function (player) {
    var game = this;
    Game.tiles.forEach(function(tile) {
      var takeTurn = function () {
        player.takeTurn(tile, game);        
        game.removeListeners();
        game.play();
      };
      document.getElementById(tile).addEventListener('touchstart', takeTurn, false);
      //uncomment to test in browser
      document.getElementById(tile).addEventListener('click', takeTurn, false);
    });
  }
  
  Game.prototype.removeListeners = function() {
    Game.tiles.forEach(function(tile) {
      var old_element = document.getElementById(tile);
      var new_element = old_element.cloneNode(true);
      old_element.parentNode.replaceChild(new_element, old_element);
    });
  }
})(this);