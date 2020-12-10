function binarySearch(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.round((left + right) / 2);

        if (arr[mid] === num)
            return mid;

        else if (arr[mid] < num)
            left = mid + 1;

        else right = mid - 1;
    }
    return -1
}
console.log(
    binarySearch([1, 2, 3, 4, 5], 1)
);
console.log(
    binarySearch([-1, 0, 1, 2, 4], 1)
);
console.log(
    binarySearch([-1, 0, 1, 2, 4, 5, 6, 7, 8, 9], 10)
);