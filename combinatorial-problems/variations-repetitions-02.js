function variationsWithRepetitions(arr, k){

    const result = Array(k);
    variations(0);

    function variations(index){
        if(index >= k){
            console.log(result.join(' '));
            return;
        }
        for(let i = 0; i < arr.length; i++) {
                result[index] = arr[i];
                variations(index + 1);
        }
    }
}

variationsWithRepetitions(['A', 'B', 'C'], 2);
variationsWithRepetitions(['A', 'B', 'C', 'D'], 2);