function nestedLoopsSimulator(n){
    
    const arr = Array(n);
    recursion(0);

    function recursion(number) {
        if(number >= n) {
            console.log(arr.join(' '));
            return;
        }
        for(let i = 0; i < n; i++) {
            arr[number] = i + 1;
            recursion(number + 1);
        }
    }
}

nestedLoopsSimulator(2);
nestedLoopsSimulator(3);    