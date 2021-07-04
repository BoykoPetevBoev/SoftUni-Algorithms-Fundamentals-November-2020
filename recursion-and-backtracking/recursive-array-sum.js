function getSum(arr, index) {
    if (index >= arr.length) {
        return 0;
    }

    return arr[index] + getSum(arr, index + 1);
}

console.log(getSum([1, 2, 3 ,4], 0));
console.log(getSum([1, 0, -1], 0));