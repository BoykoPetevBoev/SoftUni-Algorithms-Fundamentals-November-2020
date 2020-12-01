function permutationWithRepetitions(arr) {

    let elements = arr.slice(0);
    const permutations = [];
    permute(0);

    console.log(permutations.sort().join('\n'));

    function permute(index) {
        if (index >= elements.length) {
            permutations.push(elements.join(' '));
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            const perm = elements.join(' ')

            if(!permutations.includes(perm)) {
                swap(index, i);
                permute(index + 1);
                swap(index, i);
            }
        }
    }
    function swap(first, second) {
        const firstElement = elements[first];
        elements[first] = elements[second];
        elements[second] = firstElement;
    }
}

permutationWithRepetitions(['A', 'B', 'B']);
permutationWithRepetitions(['A', 'B', 'B', 'B']);
permutationWithRepetitions(['A', 'A', 'B', 'B', 'B']);

