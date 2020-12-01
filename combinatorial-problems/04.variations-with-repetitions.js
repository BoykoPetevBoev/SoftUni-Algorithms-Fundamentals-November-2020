function variationsWithoutRepetitions(arr, k){

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

variationsWithoutRepetitions(['A', 'B', 'C'], 2);
variationsWithoutRepetitions(['A', 'B', 'C', 'D'], 2);