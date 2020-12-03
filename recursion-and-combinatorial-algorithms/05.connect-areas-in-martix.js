function connectAreasInMatrix(rols, cols, matrix) {

    class Area {
        constructor(row, col, size) {
            this.row = row;
            this.col = col;
            this.size = size;
        }
    }
    const result = [];

    for (let r = 0; r < rols; r++) {
        for (let c = 0; c < cols; c++) {

            if (matrix[r][c] !== '-') continue;
            const size = countAreas(r, c);
            const area = new Area(r, c, size);
            result.push(area);
        }
    }
    printResult(result);

    function countAreas(row, col) {

        if (row < 0 || col < 0 || row >= rols || col >= cols)  return 0;

        if (matrix[row][col] === '-') {
            matrix[row][col] = 'v';
            return 1 +
                countAreas(row - 1, col) +
                countAreas(row + 1, col) +
                countAreas(row, col - 1) +
                countAreas(row, col + 1);
        }
        else return 0;
    }

    function printResult(result) {
        console.log(`Total areas count: ${result.length}`);
        result
            .sort((a, b) => a.col - b.col)
            .sort((a, b) => a.row - b.row)
            .sort((a, b) => b.size - a.size)
            .map((area, i) => {
                console.log(`Area #${i + 1} at (${area.row}, ${area.col}), size: ${area.size}`);
            });
    }
}

connectAreasInMatrix(
    4,
    9,
    [
        ['-', '-', '-', '*', '-', '-', '-', '*', '-'],
        ['-', '-', '-', '*', '-', '-', '-', '*', '-'],
        ['-', '-', '-', '*', '-', '-', '-', '*', '-'],
        ['-', '-', '-', '-', '*', '-', '*', '-', '-']
    ]
);
connectAreasInMatrix(
    5,
    10,
    [
        ['*', '-', '-', '*', '-', '-', '-', '*', '-', '-'],
        ['*', '-', '-', '*', '-', '-', '-', '*', '-', '-'],
        ['*', '-', '-', '*', '*', '*', '*', '*', '-', '-'],
        ['*', '-', '-', '*', '-', '-', '-', '*', '-', '-'],
        ['*', '-', '-', '*', '-', '-', '-', '*', '-', '-']
    ]
);