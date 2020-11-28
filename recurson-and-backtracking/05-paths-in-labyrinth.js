
function labyrinth(lab) {

    const path = [];

    isFree = (row, col) => lab[row][col] === '-';
    isExit = (row, col) => lab[row][col] === 'e';
    isWall = (row, col) => lab[row][col] === '*';
    isVisited = (row, col) => lab[row][col] === 'v';

    isOut = (row, col) => {
        return row < 0 ||
            row >= lab.length ||
            col < 0 ||
            col >= lab[0].length
    }

    findPath = (row, col, direction) => {

        if (isOut(row, col) || isWall(row, col) || isVisited(row, col)) {
            return;
        }

        path.push(direction);

        if (isExit(row, col)) {
            console.log(path.join(''));
            path.pop();
            return
        }


        lab[row][col] = 'v';

        findPath(row + 1, col, 'D');
        findPath(row - 1, col, 'U');
        findPath(row, col + 1, 'R');
        findPath(row, col - 1, 'L');

        lab[row][col] = '-';
        path.pop();
    }
    findPath(0, 0, '')
}

labyrinth([
    ['-', '-', '-'],
    ['-', '*', '-'],
    ['-', '-', 'e']
])

labyrinth([
    ['-', '*', '*',' -', 'e'],
    ['-', '-', '-', '-', '-'],
    ['*','*', '*', '*', '*']
])