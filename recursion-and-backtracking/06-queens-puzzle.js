function queensPuzzle(n) {

    const attackedRows = [];
    const attackedCols = [];
    const attackedLeftDiaguonal = [];
    const attackedRightDiagonal = [];
    const chessboard = createBoard(n);
    const isAttacked = (row, col) => {
        return attackedRows.includes(row) || attackedCols.includes(col) || attackedLeftDiaguonal.includes(col - row) || attackedRightDiagonal.includes(col + row);
    }
    let solutions = 0;

    fillQueens(0);
    function fillQueens (row) {
        if (row >= chessboard.length) {
            solutions++
            printResult();
            return;
        }
        for (let col = 0; col < chessboard[0].length; col++) {

            if (!isAttacked(row, col)) {
                putQueens(row, col);
                fillQueens(row + 1);
                clearQueens(row, col);
            }
        }
    }
    function putQueens(row, col) {
        chessboard[row][col] = '*';
        attackedRows.push(row);
        attackedCols.push(col);
        attackedLeftDiaguonal.push(col - row);
        attackedRightDiagonal.push(col + row);
    }
    function clearQueens(row, col) {
        chessboard[row][col] = '-';
        attackedRows.pop();
        attackedCols.pop();
        attackedLeftDiaguonal.pop();
        attackedRightDiagonal.pop();
    }
    function printResult() {
        console.log(solutions);
        console.log(chessboard.map(row => row.join(' ')).join('\n'), '\n');
    }
    function createBoard(n) {
        var matrix = [];
        for (var i = 0; i < n; i++) {
            matrix[i] = [];
            for (var j = 0; j < n; j++) {
                matrix[i][j] = '-';
            }
        }
        return matrix;
    }
}

queensPuzzle(5)