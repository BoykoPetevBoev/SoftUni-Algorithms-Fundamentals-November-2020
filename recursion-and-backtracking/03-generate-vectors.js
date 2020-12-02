function main(n) {

    const arr = new Array(n);
    generateVector(arr, 0);
}

function generateVector(arr, index) {
    if (index >= arr.length) {
        console.log(arr.join(''));
        return;
    }
    for (let i = 0; i <= 1; i++) {
        arr[index] = i;
        generateVector(arr, index + 1);
    }
}

main(5);


