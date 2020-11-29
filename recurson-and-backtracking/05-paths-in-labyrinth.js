
function labyrinth(lab) {

    const path = [];
    const isExit = (row, col) => lab[row][col] === 'e';
    const isWall = (row, col) => lab[row][col] === '*';
    const isVisited = (row, col) => lab[row][col] === 'v';
    const isOut = (row, col) => row < 0 || row >= lab.length || col < 0 || col >= lab[0].length;
    const isInvalid = (row, col) => isOut(row, col) || isWall(row, col) || isVisited(row, col);
    const markArea = (row, col, sym) => lab[row][col] = sym;

    const findPath = (row, col, direction) => {
        if (isInvalid(row, col)) return;

        path.push(direction);

        if (isExit(row, col)) {
            console.log(path.join(''));
            path.pop();
            return;
        }
        markArea(row, col, 'v');
        findPath(row + 1, col, 'D');
        findPath(row - 1, col, 'U');
        findPath(row, col + 1, 'R');
        findPath(row, col - 1, 'L');
        markArea(row, col, '-');
        path.pop();
    }
    findPath(0, 0, '')
}

labyrinth([
    ['-', '-', '-'],
    ['-', '*', '-'],
    ['-', '-', 'e']
]);

labyrinth([
    ['-', '*', '*', ' -', 'e'],
    ['-', '-', '-', '-', '-'],
    ['*', '*', '*', '*', '*']
]);