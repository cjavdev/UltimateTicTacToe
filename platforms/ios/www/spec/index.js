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
    });
});