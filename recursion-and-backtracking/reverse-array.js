function reverseArray(arr){
    
    reverse(0);
    console.log(arr.join(' '));

    function reverse(first) {
        if(first >= arr.length / 2) return;

        const second = arr.length - 1 - first;
        swap(arr, first, second);
        reverse(first + 1);
    }
    
    function swap(arr, first, second){
        const firstElement = arr[first];
        arr[first] = arr[second];
        arr[second] = firstElement;
    }
}

reverseArray([1, 2, 3, 4, 5]);
reverseArray([1, 2, 3, 4, 5, 6]);