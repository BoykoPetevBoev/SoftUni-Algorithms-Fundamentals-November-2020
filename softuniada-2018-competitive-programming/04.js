function main([first, ...rest]) {
    const size = Number(first)
    const cube = [];
    for (let i = 0; i < size; i++) {
        let layer = rest
            .shift()
            .split(' | ')
            .map(row => row.trim().split(' ').map(Number));

        cube.push(layer);
    }
    const [x, y, z] = rest.shift().split(' ').map(Number);


    let changedElements = 0;
    let wrongValue = cube[y][x][z];
    const newCube = JSON.parse(JSON.stringify(cube))

    cube.map((matrix, indexY) => {
        matrix.map((array, indexX) => {
            array.map((num, indexZ) => {
                if (num === wrongValue) {
                    const validValue = getValidNumber(indexX, indexY, indexZ);
                    changedElements++;
                    newCube[indexY][indexX][indexZ] = validValue;
                }
            })
        })
    })

    console.log(`Wrong values found and replaced: ${changedElements}`);
    for (let i = 0; i < size; i++) {
        console.log(newCube.map(matrix => matrix[i].join(' ') + ' ').join('\n'));
    }

    function getValidNumber(x, y, z) {
        const areaValues = [
            getNumber(x, y, z - 1),
            getNumber(x, y, z + 1),
            getNumber(x + 1, y, z),
            getNumber(x - 1, y, z),
            getNumber(x, y - 1, z),
            getNumber(x, y + 1, z)
        ]
        return areaValues.filter(num => num !== undefined).reduce((num, result) => result += num, 0);
    }

    function getNumber(x, y, z) {
        if (
            x >= 0 && x < size &&
            y >= 0 && y < size &&
            z >= 0 && z < size
        ) {
            const field = cube[y][x][z];
            return field && field !== wrongValue ? field : undefined
        }
    }
}

// main([
//     '3',
//     '1 2 4 | 6 7 8 | 1 1 4',
//     '4 6 7 | 4 9 3 | 4 4 4',
//     '8 9 4 | 4 2 4 | 7 9 4',
//     '0 1 0',
//     ''
// ]);

main([
    '4',
    '4 0 0 0 | 12 12 10 1 | 14 10 6 12 | 11 12 14 12 ',
    '11 1 9 11 | 9 10 2 7 | 6 8 5 7 | 10 7 6 12 ',
    '5 0 12 12 | 12 0 3 0 | 12 1 12 7 | 12 8 4 12 ',
    '7 4 1 12 | 12 11 9 12 | 12 8 8 12 | 12 2 12 12 ',
    '0 2 3',
])
