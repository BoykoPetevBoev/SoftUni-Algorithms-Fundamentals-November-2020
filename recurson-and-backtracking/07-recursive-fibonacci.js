function getFibonacci(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return getFibonacci(n - 1) + getFibonacci(n - 2);
}

console.log(getFibonacci(21));
