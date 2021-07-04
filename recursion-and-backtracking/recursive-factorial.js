function recursiveFactirial(n){

    if(n <= 0) {
        return 1;
    }

    return n * recursiveFactirial(n - 1);
}

console.log(recursiveFactirial(5));
console.log(recursiveFactirial(10));