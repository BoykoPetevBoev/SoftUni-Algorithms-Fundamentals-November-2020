function combinationsWithoutRepetitions(arr, k) {
    const result = Array(k);
    combinations(0, 0);

    function combinations(index, start) {
        if (index >= k) {
            console.log(result.join(' '));
            return;
        }
        for (let i = start; i < arr.length; i++) {
            result[index] = arr[i];
            combinations(index + 1, i + 1);
        }
    }
}

combinationsWithoutRepetitions(['A', 'B', 'C'], 2);
combinationsWithoutRepetitions(['A', 'B', 'C', 'D'], 2);
combinationsWithoutRepetitions(['A', 'B', 'C', 'D', 'E'], 3);