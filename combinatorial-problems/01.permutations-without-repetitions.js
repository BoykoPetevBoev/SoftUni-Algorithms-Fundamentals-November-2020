function permutationWithoutRepetitions(arr) {

    const result = [];
    permutation(0);

    function permutation(index) {
        if (index >= arr.length) {
            console.log(result.join(' '));
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (!result.includes(arr[i])) {
                result.push(arr[i]);
                permutation(index + 1);
                result.pop();
            }
        }
    }
}

permutationWithoutRepetitions(['A', 'B']);
permutationWithoutRepetitions(['A', 'B', 'C']);
permutationWithoutRepetitions(['A', 'B', 'C', 'D']);