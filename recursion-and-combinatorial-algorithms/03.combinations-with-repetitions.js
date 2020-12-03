function combinationsWithRepetitions(n, k){
    
    const arr = Array(k);
    combinations(0, 0);

    function combinations(index, start){
        
        if(index >= k){
            console.log(arr.join(' '));
            return;
        }
        
        for(let i = start; i < n; i++) {
                arr[index] = i + 1;
                combinations(index + 1, i);
        }
    }
}

combinationsWithRepetitions(3, 2);