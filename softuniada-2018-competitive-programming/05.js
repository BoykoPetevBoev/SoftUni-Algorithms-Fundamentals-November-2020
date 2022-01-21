function main(input) {
    const pairs = Number(input.shift());

    for (let i = 0; i < pairs; i++) {
        const circleInput = input.shift().split('e ');
        const [Ox, Oy, R] = circleInput[1].split(', ').map(Number);

        const triangleInput = input.shift().split('e ');
        const [Ax, Ay, Bx, By, Cx, Cy] = triangleInput[1].split(', ').map(Number);

        const isInsideValue = isInside(Ax, Ay, Bx, By, Cx, Cy, Ox, Oy)
            ? 'is inside'
            : 'is outside'

        const isCircumscribedValue = isCircleCircumscribed(Ax, Ay, Bx, By, Cx, Cy, Ox, Oy, R)
            ? 'is circumscribed'
            : 'is not circumscribed'

        console.log(`The circle ${isCircumscribedValue} and the center ${isInsideValue}.`);
    }

    function isCircleCircumscribed(x1, y1, x2, y2, x3, y3, x, y, R) {
        const AO = lineLength(x1, y1, x, y);
        const BO = lineLength(x2, y2, x, y);
        const CO = lineLength(x3, y3, x, y);

        // console.log(AO, R);

        return AO === R && BO === R && CO === R;
    }


    function isInside(x1, y1, x2, y2, x3, y3, x, y) {
        let A = area(x1, y1, x2, y2, x3, y3);

        let A1 = area(x, y, x2, y2, x3, y3);
        let A2 = area(x1, y1, x, y, x3, y3);
        let A3 = area(x1, y1, x2, y2, x, y);

        const B = A1 + A2 + A3;
        return (A.toFixed(3) == B.toFixed(3));
    }

    function lineLength(x1, y1, x2, y2) {
        const a = Math.abs(x1 - x2);
        const b = Math.abs(y1 - y2);
        let length = Math.pow(a, 2) + Math.pow(b, 2);
        length = Math.sqrt(length) * 100;
        length = Math.floor(length) / 100;
    
        return length;
    }

    function area(x1, y1, x2, y2, x3, y3) {
        return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
    }
}

main([
    '1',
    'circle -13.5, 19.5, 22.63',
    'triangle -36.13, 19.5, 6, 8, -13.5, 42.13'
]);

main([
    '1',
    'circle 3.5, 3, 2.69',
    'triangle 1, 2, 6, 2, 1, 4'
]);

main([
    '1',
    'circle -2, 1.5, 6.9',
    'triangle -6, 4.5, 3.2, 1, 2, 6'
]);

main([
    '1',
    'circle 3.5, 3, 4.58',
    'triangle 1, 4, 3.5, 0.31, 6, 4'
]);
