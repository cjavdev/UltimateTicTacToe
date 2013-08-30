describe('ttt', function () {
    describe('board', function () {
        it('should check for validMoves', function () {
            var board = new TTT.Board();
            expect(board.validMove(3, 2)).toEqual(false);
            expect(board.validMove(2, 2)).toEqual(true);
            board.move(2, 2, "x");
            expect(board.validMove(2, 2)).toEqual(false);
        });
        
        it('should check for vert win condition', function () {
            var board = new TTT.Board();
            board.move(0, 0, "x");
            board.move(1, 0, "x");
            board.move(2, 0, "x");
            expect(board.isWon()).toEqual(true);
        });
        
        it('should check for horiz win condition', function () {
            var board = new TTT.Board();
            board.move(1, 0, "x");
            board.move(1, 1, "x");
            board.move(1, 2, "x");
            expect(board.isWon()).toEqual(true);
        });
        
        it('should check for not won condition', function () {
            var board = new TTT.Board();
            board.move(0, 0, "x");
            board.move(1, 0, "x");
            
            expect(board.isWon()).toEqual(false);
        });
        
        it('should make a tile move', function () {
            var board = new TTT.Board();
            board.tileMove('tl', "x");
            expect(board.board[0][0]).toEqual("x");
        });
        
        it("should check for over condition", function () {
           var board = new TTT.Board();
           board.move(0, 0, "a"); 
           board.move(0, 1, "b"); 
           board.move(0, 2, "c"); 
           board.move(1, 0, "d"); 
           board.move(1, 1, "e"); 
           board.move(1, 2, "f"); 
           board.move(2, 0, "g"); 
           board.move(2, 1, "o"); 
           expect(board.isOver()).toEqual(false);
           board.move(2, 2, "o"); 
           expect(board.isOver()).toEqual(true);
        });
    });
});