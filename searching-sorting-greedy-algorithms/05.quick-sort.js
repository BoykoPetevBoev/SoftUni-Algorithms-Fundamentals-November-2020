function quickSort(arr) {

    sort(0, arr.length - 1);

    function sort(start, end) {

        if (start >= end) return;

        const pivot = start;
        let left = start + 1;
        let right = end;

        while (left <= right) {
            if (arr[pivot] < arr[left] && arr[pivot] > arr[right]) {
                swap(left, right);
            }
            if (arr[pivot] >= arr[left]) left += 1;
            if (arr[pivot] <= arr[right]) right -= 1;
        }
        swap(pivot, right);

        sort(start, right - 1);
        sort(right + 1, end);
    }

    console.log(arr.join(' '));

    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

quickSort([5, 4, 3, 2, 1]);

quickSort([
    13, 93, 37, 74, 61, 65, 5, 55, 17, 96, 52, 70, 17, 7, 89, 65, 16,
    38, 42, 15, 86, 21, 93, 10, 31, 28, 36, 14, 65, 7, 68, 86, 97, 34,
    27, 32, 86, 44, 51, 75, 29, 64, 0, 36, 33, 54, 20, 40, 60, 56,
    51, 51, 25, 77, 75, 46, 47, 57, 18, 12, 27, 28, 29, 21, 22, 37, 74,
    78, 34, 15, 71, 75, 20, 19, 76, 48, 98, 36, 76, 49, 83, 21, 44, 12,
    85, 68, 24, 9, 80, 41, 66, 1, 54, 31, 55, 33, 88, 35, 32, 43
]);